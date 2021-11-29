<template>
  <div class="child-com">
    child
    <button @click="childClick">click</button>
  </div>
</template>

<script setup>
import {defineProps, defineExpose, defineEmits} from 'vue'

const props = defineProps(['fatherValue'])
console.log(11, props.fatherValue)

const emit = defineEmits(['childClick'])
const childClick = ()=>{
  console.log('子组件点击')
  emit('childClick', true)
}

const childFn = ()=>{
  console.log('我是子组件的方法')
}
defineExpose({
  childFn
})

</script>

<style scoped lang="scss">
.child-com {
  border: solid 1px green;
  width: 200px;
  height: 200px;
  @include vertical-center;
}
</style>
