<template>
  <n-button
    :class="[
      attrs.class ? attrs.class : '',
      size === 'xs' ? 'p-button-xs' : '',
      type === 'default' && defaultType ? `p-button-default-${defaultType}` : '',
      waiting ? 'p-button-waiting' : ''
    ]"
    :attr-type="attrType"
    :focusable="false"
    :bordered="true"
    :keyboard="false"
    :block="block"
    :size="size === 'xs' ? 'small' : size"
    :type="type"
    :loading="loading"
    :ghost="ghost"
    :secondary="secondary"
    :text="text"
    :disabled="disabled"
    icon-placement="left"
    @click="handleClick"
  >
    <template v-if="$slots.icon" #icon>
      <slots.icon />
    </template>
    <slots.default v-if="!loading || (loading && !loadingWithoutText)" />
  </n-button>
</template>

<script setup>
import { useAttrs, useSlots } from 'vue'
import { NButton } from 'naive-ui'
import { debounce } from '../utility/throttle-debounce'

defineOptions({
  name: 'PButton',
  inheritAttrs: false
})

const { waiting } = defineProps({
  type: { type: String, default: 'primary' },
  size: { type: String, default: 'medium' },
  attrType: { type: String, default: 'button' },
  block: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  ghost: { type: Boolean, default: false },
  secondary: { type: Boolean, default: false },
  text: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  waiting: { type: Boolean, default: false },
  loadingWithoutText: { type: Boolean, default: true },
  defaultType: { type: String, default: '' }
})

const attrs = useAttrs()
const slots = useSlots()

const emit = defineEmits(['click'])
const handleClick = debounce(function () {
  if (waiting) return
  emit('click')
}, 300)
</script>

<style>
.n-button.n-button--small-type.p-button-xs {
  height: 24px;
}

.n-button.p-button-waiting {
  opacity: 0.7;
}

.n-button.p-button-waiting:hover {
  cursor: initial;
  background-color: var(--n-color);
  color: var(--n-text-color);
}

.n-button.n-button--default-type.p-button-default-success {
  --n-ripple-color: #18a058;
  --n-text-color: rgb(51, 54, 57);
  --n-text-color-hover: #36ad6a;
  --n-text-color-pressed: #0c7a43;
  --n-text-color-focus: #36ad6a;
  --n-text-color-disabled: rgb(51, 54, 57);
  --n-border: 1px solid rgb(224, 224, 230);
  --n-border-hover: 1px solid #36ad6a;
  --n-border-pressed: 1px solid #0c7a43;
  --n-border-focus: 1px solid #36ad6a;
  --n-border-disabled: 1px solid rgb(224, 224, 230);
}

.n-button.n-button--default-type.p-button-default-warning {
  --n-ripple-color: #f0a020;
  --n-text-color: rgb(51, 54, 57);
  --n-text-color-hover: #fcb040;
  --n-text-color-pressed: #c97c10;
  --n-text-color-focus: #fcb040;
  --n-text-color-disabled: #f0a020;
  --n-border: 1px solid rgb(224, 224, 230);
  --n-border-hover: 1px solid #fcb040;
  --n-border-pressed: 1px solid #c97c10;
  --n-border-focus: 1px solid #fcb040;
  --n-border-disabled: 1px solid #f0a020;
}

.n-button.n-button--default-type.p-button-default-error {
  --n-ripple-color: #d03050;
  --n-text-color: rgb(51, 54, 57);
  --n-text-color-hover: #de576d;
  --n-text-color-pressed: #ab1f3f;
  --n-text-color-focus: #de576d;
  --n-text-color-disabled: #d03050;
  --n-border: 1px solid rgb(224, 224, 230);
  --n-border-hover: 1px solid #de576d;
  --n-border-pressed: 1px solid #ab1f3f;
  --n-border-focus: 1px solid #de576d;
  --n-border-disabled: 1px solid #d03050;
}
</style>
