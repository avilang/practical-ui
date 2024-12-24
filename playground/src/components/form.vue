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
    <p-form
      ref="form2"
      :model="model2"
      :rules="rules2"
      feedback-size-class="s"
      :show-label="false"
      @submit="handleSubmit2"
    >
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
      <p-button block type="warning" size="large" attr-type="submit">注册</p-button>
    </p-form>
  </box-component>

  <box-component :name="`${name} - 行内`">
    <p-form
      inline
      :model="model3"
      :rules="rules3"
      :show-require-mark="false"
      :inline-size="[2]"
      feedback-size-class="s"
    />
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
    value: '13690766465',
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
    value: '123456',
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

function handleSubmit2({ formData, valid }) {
  if (!valid) return
  console.log('🚀 ~ handleSubmit2 ~ data:', formData)
}

const form2Ref = useTemplateRef('form2')
function handleInputAccount2(field) {
  form2Ref.value.restoreValidation(field)
}

const model3 = [
  {
    type: 'input',
    field: 'account',
    value: '',
    props: {
      placeholder: '请输入账号(手机号)',
      maxlength: 11
    },
    label: '账号'
  },
  {
    type: 'input',
    field: 'nickName',
    value: '',
    props: {
      placeholder: '请输入昵称',
      maxlength: 20
    },
    label: '昵称'
  },
  {
    type: 'input',
    field: 'password',
    value: '',
    props: {
      type: 'password',
      placeholder: '请输入密码',
      maxlength: 30
    },
    label: '密码'
  },
  {
    type: '',
    field: 'state',
    value: '',
    label: '状态'
  }
]

const rules3 = {
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
</script>
