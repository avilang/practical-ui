import { h, defineComponent, useTemplateRef } from 'vue'
import { NDataTable, NEmpty } from 'naive-ui'

export default defineComponent(
  (props, { expose }) => {
    const defaultProps = {
      bordered: false,
      bottomBordered: false,
      singleColumn: false,
      singleLine: true,
      striped: false,
      pagination: false,
      size: 'small'
    }

    const tableRef = useTemplateRef('table')
    expose({
      scrollTo: (options = {}) => {
        if (tableRef && tableRef.value && tableRef.value.scrollTo) {
          tableRef.value.scrollTo(options)
        }
      }
    })

    return () => {
      return h(
        NDataTable,
        { ...defaultProps, ...props, ref: 'table' },
        { empty: () => h(NEmpty, { size: 'medium', description: '暂无数据' }) }
      )
    }
  },
  {
    name: 'PDataTable',
    inheritAttrs: true
  }
)
