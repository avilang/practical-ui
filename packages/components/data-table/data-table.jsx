import { h, defineComponent } from 'vue'
import { NDataTable, NEmpty } from 'naive-ui'

export default defineComponent(
  (props) => {
    const defaultProps = {
      bordered: false,
      bottomBordered: false,
      singleColumn: false,
      singleLine: true,
      striped: false,
      pagination: false,
      size: 'small'
    }
    return () => {
      return h(
        NDataTable,
        { ...defaultProps, ...props },
        { empty: () => h(NEmpty, { size: 'medium', description: '暂无数据' }) }
      )
    }
  },
  {
    name: 'PDataTable',
    inheritAttrs: true
  }
)
