<template>
  <n-drawer
    :class="{ 'p-drawer': true, 'p-drawer-lock': lock }"
    :show="show"
    :width="width"
    :height="height"
    :auto-focus="false"
    block-scroll
    native-scrollbar
    show-mask
    :resizable="false"
    :close-on-esc="false"
    :placement="placement"
    :mask-closable="maskClosable"
    :on-update:show="handleUpdateShow"
    :on-after-enter="handleAfterEnter"
    :on-after-leave="handleAfterLeave"
  >
    <n-drawer-content
      :body-content-class="bodyContentClass"
      :body-content-style="bodyContentStyle"
      :footer-style="footerStyle"
      :closable="closable"
      native-scrollbar
    >
      <slot></slot>
      <template #header v-if="!!title || (!title && closable)">{{ title || '&nbsp;' }}</template>
      <template v-if="$slots.footer" #footer>
        <slots.footer />
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup>
import { useSlots } from 'vue'
import { NDrawer, NDrawerContent } from 'naive-ui'

defineOptions({
  name: 'PDrawer',
  inheritAttrs: false
})

const { lock } = defineProps({
  width: { type: [String, Number], default: 700 },
  height: { type: [String, Number] },
  title: { type: String, default: '' },
  closable: { type: Boolean, default: true },
  maskClosable: { type: Boolean, default: false },
  placement: { type: String, default: 'right' },
  bodyContentClass: { type: String },
  bodyContentStyle: { type: [String, Object] },
  footerStyle: { type: [String, Object] },
  lock: { type: Boolean, default: false }
})
const show = defineModel('show', { type: Boolean, default: false })
const slots = useSlots()
const emit = defineEmits(['afterEnter', 'afterLeave'])

function handleUpdateShow(v) {
  if (lock) return
  show.value = v
}

function handleAfterEnter() {
  emit('afterEnter')
}

function handleAfterLeave() {
  emit('afterLeave')
}
</script>

<style>
.n-drawer.slide-in-from-top-transition-leave-active.p-drawer {
  transition: transform 0.2s cubic-bezier(0.4, 0, 1, 1);
}

.n-drawer.slide-in-from-top-transition-enter-active.p-drawer {
  transition: transform 0.2s cubic-bezier(0, 0, 0.2, 1);
}

.n-drawer.slide-in-from-left-transition-leave-active.p-drawer {
  transition: transform 0.2s cubic-bezier(0.4, 0, 1, 1);
}

.n-drawer.slide-in-from-left-transition-enter-active.p-drawer {
  transition: transform 0.2s cubic-bezier(0, 0, 0.2, 1);
}

.n-drawer.slide-in-from-right-transition-leave-active.p-drawer {
  transition: transform 0.2s cubic-bezier(0.4, 0, 1, 1);
}

.n-drawer.slide-in-from-right-transition-enter-active.p-drawer {
  transition: transform 0.2s cubic-bezier(0, 0, 0.2, 1);
}

.n-drawer.slide-in-from-bottom-transition-leave-active.p-drawer {
  transition: transform 0.2s cubic-bezier(0.4, 0, 1, 1);
}

.n-drawer.slide-in-from-bottom-transition-enter-active.p-drawer {
  transition: transform 0.2s cubic-bezier(0, 0, 0.2, 1);
}

.p-drawer .n-drawer-content-wrapper .n-drawer-body-content-wrapper {
  padding: 16px;
}

.p-drawer .n-drawer-content-wrapper .n-drawer-header {
  position: relative;
  padding: 12px 14px 10px 14px;
  line-height: 1.6;
  font-size: 14px;
  border-bottom: 1px solid rgb(224, 224, 230);
  align-items: flex-start;
}

.p-drawer .n-drawer-content-wrapper .n-drawer-header .n-drawer-header__close {
  margin-top: -1px;
  margin-left: 0;
  width: 22px;
  height: 22px;
  font-size: 16px;
  transition: transform 0.3s ease-in-out;
}

.p-drawer .n-drawer-content-wrapper .n-drawer-header .n-drawer-header__close:hover {
  color: rgb(31, 34, 37);
  transform: rotate(180deg);
}

.p-drawer .n-drawer-content-wrapper .n-drawer-header .n-drawer-header__close:hover::before,
.p-drawer .n-drawer-content-wrapper .n-drawer-header .n-drawer-header__close:active::before,
.p-drawer
  .n-drawer-content-wrapper
  .n-drawer-header
  .n-drawer-header__close:not(.n-base-close--disabled):focus::before {
  background-color: transparent;
}

.p-drawer.p-drawer-lock .n-drawer-content-wrapper .n-drawer-header::after {
  content: ' ';
  position: absolute;
  top: 10px;
  right: 12px;
  width: 26px;
  height: 26px;
  z-index: 3;
  cursor: not-allowed;
}

.n-drawer.p-drawer .n-drawer-content .n-drawer-footer {
  border-top: none;
  padding: 0;
}
</style>
