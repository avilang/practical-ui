import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => {
      return (
        <button>
          <span>按钮</span>
        </button>
      );
    };
  },
});
