<template>
 <div>
  {{setC}}
   <el-button @click="btnClick">test</el-button>
 </div>
</template>
<script setup>
import {reactive, computed} from 'vue'
let obj = reactive({a:1, b:2})
const setC = computed(()=>{
  return obj.a+obj.b
})
const btnClick = () => {
  obj.a++
}
</script>

<style scoped>

</style>
