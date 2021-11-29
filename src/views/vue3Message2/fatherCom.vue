<template>
  <div class="father-com">
    father
    <childCom :fatherValue="fatherValue"
              ref="childRef"
              @childClick="childClick"
    ></childCom>
    <div ref="testDom">test-dom</div>
    <button @click="fatherClick">fatherBtn</button>
  </div>
</template>

<script setup>
import childCom from './childCom'
import {ref, watch, onMounted} from 'vue'

const fatherValue = ref('我是父组件的值')

const childRef = ref(null)

const fatherClick = ()=> {
  console.log(20, childRef)
  childRef.value.childFn()
}

const childClick = (val)=>{
  console.log(27, '父组件内响应事件', val)
}

</script>

<style scoped lang="scss">
.father-com {
  border: solid 1px red;
  width: 400px;
  height: 400px;
  @include vertical-center;
}
</style>
