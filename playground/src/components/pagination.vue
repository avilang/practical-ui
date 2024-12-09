<template>
  <box-component :name="`${name}`">
    <p-pagination :total="123" @changePage="handleChangePage" @changePageSize="handleChangePageSize" />
  </box-component>

  <box-component :name="`${name} - simple`">
    <p-pagination
      :total="56"
      :page-size="20"
      simple
      @changePage="handleChangePage"
      @changePageSize="handleChangePageSize"
    />
  </box-component>
</template>

<script setup>
import BoxComponent from './box-component.vue'

defineOptions({
  name: 'PPaginationWithBox'
})

const name = 'PPagination'

function handleChangePage(page) {
  console.log('🚀 ~ handleChangePage ~ page:', page)
}

function handleChangePageSize(size) {
  console.log('🚀 ~ handleChangePageSize ~ size:', size)
}
</script>
