<template>
  <div class="father-com">
    father
    <childCom :fatherValue="fatherValue"
      @childClick="childClick"
              ref="childRef"
    ></childCom>
    <button @click="fatherClick">fatherBtn</button>
  </div>
</template>

<script>
import childCom from './childCom'
// eslint-disable-next-line no-unused-vars
import {ref, onMounted, watch} from 'vue'
export default {
  components: {childCom},
  setup(){
    const fatherValue = '我是父组件的值'

    // eslint-disable-next-line no-unused-vars
    const childClick = (childValue)=>{
      console.log(18, childValue)
    }

    //获取子组件的实例
    /*onMounted(()=>{
      const childRef = ref()
      console.log(26, childRef)
    })*/
    const childRef = ref(null)
    console.log(26, childRef.value)

    watch(childRef, (newVal)=> {
      console.log(35, newVal)
    })

    const fatherClick = ()=>{
      console.log(29, childRef.value)
      childRef.value.childFn()
    }

    return {
      fatherValue,
      childClick,
      fatherClick,
      childRef
    }
  }
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
