<template>
  <n-form
    ref="form"
    :class="[inline ? 'p-form-inline' : '']"
    :show-label="showLabel"
    :label-placement="labelPlacement"
    label-width="auto"
    require-mark-placement="left"
    :show-require-mark="showRequireMark"
    :label-align="labelPlacement === 'left' ? 'right' : 'left'"
    :model="formValue"
    :rules="rules"
    :inline="inline"
    @submit.prevent="handleSubmit"
  >
    <template v-if="!inline || (inline && inlineSize.length <= 0)">
      <template v-for="(item, k) in model" :key="item.field || k">
        <n-form-item
          v-if="!item.placeholder"
          ref="formItem"
          :style="item.itemStyle == null ? itemStyle : item.itemStyle"
          :label="item.label"
          :path="item.field"
          :feedback-class="feedbackSizeClassName"
          :first="true"
          :show-require-mark="item.showRequireMark == null ? showRequireMark : !!item.showRequireMark"
        >
          <slot v-if="item.slot === true" :name="item.field" />
          <template v-else>
            <component
              v-if="item.type === 'input'"
              :ref="`form-item-${item.field}`"
              :is="Input"
              v-model="formValue[item.field]"
              v-bind.prop="{ disabled, readonly, ...item.props }"
              @input="handleInput(item.field)"
            />
            <component
              v-else-if="item.type === 'input-identifier'"
              :ref="`form-item-${item.field}`"
              :is="InputIdentifier"
              v-model="formValue[item.field]"
              v-bind.prop="{ disabled, ...item.props }"
              @input="handleInput(item.field)"
            />
            <component
              v-else-if="item.type === 'switch'"
              :ref="`form-item-${item.field}`"
              :is="Switch"
              v-model="formValue[item.field]"
              v-bind.prop="{ disabled, readonly, ...item.props }"
            />
            <component
              v-else-if="item.type === 'select'"
              :ref="`form-item-${item.field}`"
              :is="Select"
              v-model="formValue[item.field]"
              v-bind.prop="{ disabled, ...item.props }"
              @search="handleSelectSearch(item, $event)"
              @update="handleSelectUpdate(item, $event)"
            />
          </template>
        </n-form-item>
      </template>
    </template>
    <template v-if="inline && inlineSize.length > 0 && inlineModel">
      <div
        v-for="(itemModel, index) in inlineModel"
        :key="index"
        :class="['p-form-inline-item', inlineClass[index] ? inlineClass[index] : '']"
      >
        <template v-for="(item, j) in itemModel" :key="item.field || index + '-' + j">
          <n-form-item
            v-if="!item.isInlinePlaceholder && !item.placeholder"
            ref="formItem"
            :style="item.itemStyle == null ? itemStyle : item.itemStyle"
            :label="item.label"
            :path="item.field"
            :feedback-class="feedbackSizeClassName"
            :first="true"
            :show-require-mark="item.showRequireMark == null ? showRequireMark : !!item.showRequireMark"
          >
            <slot v-if="item.slot === true" :name="item.field" />
            <template v-else>
              <component
                v-if="item.type === 'input'"
                :ref="`form-item-${item.field}`"
                :is="Input"
                v-model="formValue[item.field]"
                v-bind.prop="{ disabled, readonly, ...item.props }"
                @input="handleInput(item.field)"
              />
              <component
                v-else-if="item.type === 'input-identifier'"
                :ref="`form-item-${item.field}`"
                :is="InputIdentifier"
                v-model="formValue[item.field]"
                v-bind.prop="{ disabled, ...item.props }"
                @input="handleInput(item.field)"
              />
              <component
                v-else-if="item.type === 'switch'"
                :ref="`form-item-${item.field}`"
                :is="Switch"
                v-model="formValue[item.field]"
                v-bind.prop="{ disabled, readonly, ...item.props }"
              />
              <component
                v-else-if="item.type === 'select'"
                :ref="`form-item-${item.field}`"
                :is="Select"
                v-model="formValue[item.field]"
                v-bind.prop="{ disabled, ...item.props }"
                @search="handleSelectSearch(item, $event)"
                @update="handleSelectUpdate(item, $event)"
              />
            </template>
          </n-form-item>
          <div v-else style="flex: 1" class="p-form-inline-item-placeholder"></div>
        </template>
      </div>
    </template>
    <button v-if="virtualSubmit" autocomplete="off" type="submit" style="display: none">virtual button</button>
    <slot></slot>
  </n-form>
</template>

<script setup>
import { ref, toValue, useTemplateRef, computed, onScopeDispose } from 'vue'
import { NForm, NFormItem } from 'naive-ui'
import { PInput as Input } from '../input/index.js'
import { PInputIdentifier as InputIdentifier } from '../input-identifier/index.js'
import { PSwitch as Switch } from '../switch/index.js'
import { PSelect as Select } from '../select/index.js'
import { debounce } from '../utility/throttle-debounce'

defineOptions({
  name: 'PForm',
  inheritAttrs: false
})

const { model, rules, feedbackSizeClass, inline, inlineSize, inlineClass } = defineProps({
  model: { type: Array, default: () => [] },
  rules: { type: Object, default: () => {} },
  inline: { type: Boolean, default: false },
  showLabel: { type: Boolean, default: true },
  labelPlacement: { type: String, default: 'left' }, // 标签显示的位置
  showRequireMark: { type: Boolean, default: false }, // 是否展示必填的星号
  readonly: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  feedbackSizeClass: { type: String },
  itemStyle: { type: String, default: 'flex:1' }, // form-item style
  inlineSize: { type: Array, default: () => [] }, // 配合 inline 使用，每行显示 form-item 的数量，可传一个数组，如 [2, 3, 2]，表示第一行显示 2 个，第二行显示 3 个，第三行及以下显示 2 个
  inlineClass: { type: Array, default: () => [] }, // 配合 inline 使用，每行的 className
  virtualSubmit: { type: Boolean, default: false }
})

const inlineModel = computed(() => {
  if (!inline || (inline && inlineSize.length <= 0) || model.length <= 0) return null

  const resultA = []
  const resultB = []

  if (inlineSize.length === 1) {
    model.forEach((item, i) => {
      if (i % inlineSize[0] === 0) {
        resultB.push([])
      }
      resultB[resultB.length - 1].push(item)
    })
    if (resultB[resultB.length - 1].length < inlineSize[0]) {
      let diff = inlineSize[0] - resultB[resultB.length - 1].length
      let j = 0
      while (j < diff) {
        resultB[resultB.length - 1].push({ isInlinePlaceholder: true })
        j++
      }
    }
  } else {
    let currentIndex = 0
    let totalResultA = 0
    for (let k = 0; k < inlineSize.length - 1; k++) {
      const splitSize = inlineSize[k]
      totalResultA += splitSize

      if (currentIndex < model.length) {
        const chunk = model.slice(currentIndex, currentIndex + splitSize)

        if (chunk.length > 0) {
          if (chunk.length < splitSize) {
            let diff = splitSize - chunk.length
            let j = 0
            while (j < diff) {
              chunk.push({ isInlinePlaceholder: true })
              j++
            }
          }
          resultA.push(chunk)
        }

        currentIndex += splitSize
      }
    }

    const lastSize = inlineSize[inlineSize.length - 1]
    model
      .filter((m, index) => index >= totalResultA)
      .forEach((item, i) => {
        if (i % lastSize === 0) {
          resultB.push([])
        }
        resultB[resultB.length - 1].push(item)
      })

    if (resultB.length > 0 && resultB[resultB.length - 1].length < lastSize) {
      let diff = lastSize - resultB[resultB.length - 1].length
      let j = 0
      while (j < diff) {
        resultB[resultB.length - 1].push({ isInlinePlaceholder: true })
        j++
      }
    }
  }

  return [...resultA, ...resultB]
})

const formValue = (function () {
  const data = {}
  model.forEach((item) => {
    if (item.slot || !item.field || !!item.placeholder) return
    data[item.field] = item.defaultValue
  })
  return ref(data)
})()

const feedbackSizeClassName = (function () {
  if (!feedbackSizeClass) return ''

  const defaultSizeClass = ['s']
  return defaultSizeClass.includes(feedbackSizeClass) ? `p-form-item-feedback-${feedbackSizeClass}` : feedbackSizeClass
})()

function getFormValue() {
  const data = {}
  model.forEach((item) => {
    if (!item.field || !!item.placeholder) return
    if (item.slot) data[item.field] = toValue(item.value)
  })
  return { ...formValue.value, ...data }
}

const emit = defineEmits(['submit'])
const formRef = useTemplateRef('form')
const validate = (outOfFocus = true) => {
  if (outOfFocus) {
    document.activeElement && document.activeElement.blur()
  }
  return formRef.value
    .validate()
    .then(() => {
      return { formData: getFormValue(), valid: true }
    })
    .catch((errors) => {
      return { formData: getFormValue(), valid: false, errors }
    })
}
const handleSubmit = debounce(function () {
  validate(true).then((result) => {
    emit('submit', result)
  })
})

const formItemRef = useTemplateRef('formItem')
function restoreValidation(path = '') {
  if (!path) {
    formRef.value.restoreValidation()
    return
  }

  const targetFormItem = formItemRef.value.find((item) => item.path === path)
  targetFormItem && targetFormItem.restoreValidation()
}

// 输入框若存在验证规则，且不包含input触发，则还原到未校验的状态
function handleInput(path) {
  if (!path) return
  if (!rules) return
  if (!rules[path]) return
  if (rules[path].trigger && rules[path].trigger.includes('input')) return

  restoreValidation(path)
}

function handleSelectSearch(m, v) {
  const path = m.field
  if (path && rules && rules[path] && m.props?.filterable) {
    restoreValidation(path)
  }
  if (m.event?.search) {
    m.event.search(v)
  }
}

function handleSelectUpdate(m, v) {
  const path = m.field
  if (
    path &&
    rules &&
    rules[path] &&
    (!rules[path].trigger || (!!rules[path].trigger && rules[path].trigger.includes('change') === false))
  ) {
    restoreValidation(path)
  }
  if (m.event?.update) {
    m.event.update(v)
  }
}

let child = {}
model.forEach((item) => {
  if (!item.slot && item.ref === true) {
    child[item.field] = useTemplateRef(`form-item-${item.field}`)
  }
})

function getChild(field = '') {
  if (!field) return null
  return child[field] ? child[field].value[0] : null
}

onScopeDispose(() => {
  child = null
})

defineExpose({ validate, restoreValidation, getFormValue, getChild })
</script>

<style>
.n-form.n-form--inline.p-form-inline {
  flex-wrap: wrap;
}
.n-form.n-form--inline.p-form-inline .p-form-inline-item {
  display: flex;
  width: 100%;
}
.p-form-inline .n-form-item.n-form-item--left-labelled,
.p-form-inline .p-form-inline-item-placeholder {
  margin-right: 16px;
}
.p-form-inline .p-form-inline-item-placeholder:last-child {
  margin-right: 0;
}
.p-form-inline .n-form-item.n-form-item--left-labelled .n-form-item-label {
  padding: 0 10px 0 0;
}
.n-form-item-feedback-wrapper.p-form-item-feedback-s {
  min-height: 12px;
}
.n-form-item .n-form-item-feedback-wrapper.p-form-item-feedback-s:not(:empty) {
  padding-bottom: 4px;
}
</style>
