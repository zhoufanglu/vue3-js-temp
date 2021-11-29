<template>
  <div class="child-com">
    child
    <button @click="childClick">click</button>
  </div>
</template>

<script>
export default {
  props: ['fatherValue'],
  setup(props, { emit }){
    console.log(10, props.fatherValue)

    const childClick = ()=>{
      //向外部抛出
      emit('childClick', '我是子组件的值')
    }

    const childFn =()=>{
      console.log('子组件事件')
    }

    return {
      childClick,
      childFn
    }
  }
}
</script>

<style scoped lang="scss">
.child-com {
  border: solid 1px green;
  width: 200px;
  height: 200px;
  @include vertical-center;
}
</style>
