<template>
  <div class="">
    <el-table
        :data="tableData1"
        style="width: 100%"
        row-key="id"
        border
        lazy
        :load="load"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="date" label="Date" width="180"/>
      <el-table-column prop="name" label="Name" width="180"/>
    </el-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const tableData1 = ref([])
onMounted(()=>{
  setTimeout(()=>{
    tableData1.value = [
      {
        id: 1,
        date: '2016-05-02',
        name: 'wangxiaohu',
      },
      {
        id: 2,
        date: '2016-05-04',
        name: 'wangxiaohu',
      },
      {
        id: 3,
        date: '2016-05-01',
        name: 'wangxiaohu',
      },
      {
        id: 4,
        date: '2016-05-03',
        name: 'wangxiaohu',
      },
    ]
    tableData1.value.forEach(i=>{
      i.hasChildren = true
    })
  }, 500)
})

const load = (row, treeNode, resolve) => {
  setTimeout(() => {
    resolve([
      {
        id: 31,
        date: '2016-05-01',
        name: '31',
        age: '11'
      },
      {
        id: 32,
        date: '2016-05-01',
        name: '32',
        age: '22'
      },
    ])
  }, 500)
}

</script>

<style scoped lang="scss">
.test {

}
</style>
