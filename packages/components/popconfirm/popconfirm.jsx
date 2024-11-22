import { useSlots, h, ref, defineComponent } from 'vue'
import { NPopconfirm } from 'naive-ui'
import PopconfirmAction from './popconfirm-action.vue'
import './popconfirm.css'

export default defineComponent(
  (props, { emit }) => {
    const slots = useSlots()
    const elemRef = ref()
    const onClose = () => {
      elemRef.value.setShow(false)
    }

    return () => {
      return h(
        NPopconfirm,
        {
          ref: elemRef,
          class: {
            'p-popconfirm': true,
            'p-popconfirm-none-action': props.positiveText == null && props.positiveText == null
          },
          showIcon: false
        },
        {
          default: slots.default,
          trigger: slots.trigger,
          action: () =>
            h(PopconfirmAction, {
              positiveText: props.positiveText,
              negativeText: props.negativeText,
              type: props.type,
              onClose,
              onPositiveClick: function () {
                emit('positive-click')
              },
              onNegativeClick: function () {
                emit('negative-click')
              }
            })
        }
      )
    }
  },
  {
    name: 'PPopconfirm',
    inheritAttrs: false,
    props: {
      positiveText: { type: String, default: '确认' },
      negativeText: { type: String, default: '取消' },
      type: { type: String, default: 'primary' }
    }
  }
)
