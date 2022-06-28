import { defineComponent } from "vue";

const buttonProps = {
  block: {
    type: Boolean,
    default: false
  }
} as const

export default defineComponent({
  props: buttonProps,
  setup() {
    return () => {
      return (
        <button>
          <span>按钮</span>
        </button>
      );
    };
  },
})
