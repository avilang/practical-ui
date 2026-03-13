<template>
  <box-component :name="`${name}`">
    <p-form
      :model="model"
      :readonly="readonlyForm"
      :rules="rules"
      :show-label="true"
      label-placement="top"
      @submit="handleSubmit"
    >
      <p-button block :waiting="loading" attr-type="submit">登录</p-button>
    </p-form>
  </box-component>

  <box-component :name="`${name} - slot`">
    <p-form ref="form2" :model="model2" :rules="rules2" feedback-size-class="s" :show-label="false">
      <template #account>
        <p-input-group>
          <p-input-group-label size="large">账号</p-input-group-label>
          <p-input
            placeholder="请输入账号"
            size="large"
            v-model="account"
            :maxlength="11"
            :prefixIcon="{ component: UserOutlined, color: 'rgb(51, 54, 57)' }"
            @input="handleInputAccount2('account')"
          />
        </p-input-group>
      </template>
      <template #password>
        <p-input-group>
          <p-input-group-label size="large">密码</p-input-group-label>
          <p-input
            show-password
            placeholder="请输入密码"
            size="large"
            type="password"
            v-model="model2[1].value"
            :maxlength="30"
            :trim="false"
            :prefixIcon="{ component: LockOutlined, color: 'rgb(51, 54, 57)' }"
            @input="handleInputAccount2('password')"
          />
        </p-input-group>
      </template>
      <p-button block type="warning" size="large" @click="handleSubmit2">注册</p-button>
    </p-form>
  </box-component>

  <box-component :name="`${name} - 行内 vs Block`">
    <p-form
      ref="form3"
      :inline="true"
      :model="model3"
      :rules="rules3"
      :show-require-mark="true"
      :inline-size="[3]"
      :inline-class="[, 'bbbb']"
      feedback-size-class="s"
      virtual-submit
    />

    <div style="border-top: 12px solid #f90; margin-bottom: 12px"></div>

    <p-form
      ref="form4"
      :inline="false"
      :model="model3"
      :rules="rules3"
      :show-require-mark="true"
      :inline-size="[3]"
      :inline-class="[, 'bbbb']"
      feedback-size-class="s"
      virtual-submit
    />

    <p-button block size="large" @click="handleReset3">重置</p-button>
    <p-button block size="large" class="mt-10" @click="handleValidate">校验单个表单字段</p-button>
  </box-component>
</template>

<script setup>
import { ref, useTemplateRef } from 'vue'
import { useDelayLoading } from '@avilang/practical-ui/index.js'
import { UserOutlined, LockOutlined } from '@vicons/antd'
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PFormWithBox'
})

const name = 'PForm'
const model = [
  {
    type: 'input',
    field: 'account',
    defaultValue: '13690766465',
    props: {
      placeholder: '请输入账号',
      maxlength: 11,
      prefixIcon: { component: UserOutlined, color: 'rgb(51, 54, 57)' }
    },
    label: '账号'
  },
  {
    type: 'input',
    field: 'password',
    defaultValue: '123456',
    props: {
      type: 'password',
      placeholder: '请输入密码',
      trim: false,
      maxlength: 30,
      showPassword: true,
      prefixIcon: { component: LockOutlined, color: 'rgb(51, 54, 57)' }
    },
    label: '密码'
  }
]
const rules = {
  account: {
    required: true,
    message: '账号不能为空',
    trigger: ['blur', 'input']
  },
  password: {
    required: true,
    message: '密码不能为空',
    trigger: ['blur', 'input']
  }
}

const readonlyForm = ref(false)
const { loading, setLoadingStatus } = useDelayLoading()
function handleSubmit({ formData, valid }) {
  if (!valid) return

  setLoadingStatus(true)
  readonlyForm.value = true
  setTimeout(() => {
    setLoadingStatus(false).then(() => {
      console.log('🚀 ~ handleSubmit ~ formData:', formData)
    })
  }, 350)
}

const account = ref('')
const model2 = ref([
  {
    field: 'account',
    value: account,
    slot: true
  },
  {
    field: 'password',
    value: '',
    slot: true
  }
])
const rules2 = {
  account: {
    validator: () => {
      if (!account.value) return new Error('账号不能为空')
      return true
    }
  },
  password: {
    validator: () => {
      if (!model2.value[1].value) return new Error('密码不能为空')
      if (model2.value[1].value.length < 6) return new Error('密码长度不能小于6位')
      return true
    }
  }
}

const form2Ref = useTemplateRef('form2')
function handleSubmit2() {
  form2Ref.value.validate().then((result) => {
    const { formData, valid } = result
    if (!valid) return
    console.log('🚀 ~ handleSubmit2 ~ data:', formData)
  })
}

function handleInputAccount2(field) {
  form2Ref.value.restoreValidation(field)
}

const model3 = ref([
  {
    type: 'input',
    field: 'account',
    defaultValue: '',
    props: {
      placeholder: '请输入账号(手机号)',
      maxlength: 11
    },
    label: '账号'
  },
  {
    type: 'input',
    field: 'nickName',
    defaultValue: '',
    props: {
      placeholder: '请输入昵称',
      maxlength: 20
    },
    label: '昵称',
    showRequireMark: false
  },
  {
    type: 'input',
    field: 'password',
    defaultValue: '',
    props: {
      type: 'password',
      placeholder: '请输入密码',
      maxlength: 30
    },
    label: '密码'
  },
  {
    type: 'select',
    field: 'accountId',
    props: {
      clearable: true,
      remote: true,
      filterable: true,
      throttleSearch: true,
      loading: false,
      options: []
    },
    event: {
      search: () => {
        const selectItem = model3.value[3]
        selectItem.props.loading = true
        setTimeout(() => {
          selectItem.props.options = [
            { value: 1, label: '账号1' },
            { value: 2, label: '账号2' },
            { value: 3, label: '账号3' }
          ]
          selectItem.props.loading = false
        }, 1500)
      },
      update: () => {
        console.log('select update')
      }
    },
    label: '所属账号',
    showRequireMark: false
  },
  { placeholder: true },
  {
    type: 'switch',
    field: 'state',
    defaultValue: true,
    label: '状态',
    props: {
      style: 'margin-left: 2px;'
    }
  },
  {
    type: 'input-identifier',
    field: 'identifier',
    defaultValue: 'ab_cd_12',
    props: {
      disabled: false,
      clearable: true
    },
    label: '标识符',
    showRequireMark: false
  }
])

const rules3 = {
  account: {
    required: true,
    message: '账号不能为空',
    trigger: ['blur', 'input']
  },
  password: {
    required: true,
    message: '密码不能为空'
  },
  identifier: {
    required: true,
    // message: '标识符不能为空',
    trigger: ['blur'],
    validator(rule, value, c, d, e) {
      if (e && e.cc === 'cc') return new Error('重复的标识符')
      return true
    }
  },
  accountId: {
    message: '必填哦',
    trigger: ['change'],
    validator(rule, value) {
      return value == null || value === '' ? false : true
    }
  }
}

const form3Ref = useTemplateRef('form3')
const form4Ref = useTemplateRef('form4')
function handleReset3() {
  form3Ref.value.restoreValidation()
  form4Ref.value.restoreValidation()
}

function handleValidate() {
  form4Ref.value.validateItem('identifier', { options: { cc: 'cc' } }).catch(() => null)
}
</script>
