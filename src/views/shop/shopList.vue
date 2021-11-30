<template>
  <div class="shop-list">
    shop-list
    <div>
      <label>商品名称查询：</label>
      <el-input
          v-model="goodsName"
      ></el-input>
    </div>
    goodsName:{{searchByGoodsName}}
    <ul>
      <li v-for="i in goodList" :key="i.name">{{i.name}}</li>
    </ul>
  </div>
</template>

<script setup>
import {ref, defineProps,watch,computed, toRefs} from 'vue'
let goodList = ref([])
//模拟获取商品列表
const getGoodsList = ()=>{
  if(user.value === '小明'){
    goodList.value = [{name:'A'},{name:'B'},{name:'C'}]
  }else{
    goodList.value = [{name:'D'},{name:'E'},{name:'F'}]
  }
}

//获取用户信息
const props = defineProps(['user'])
//console.log(18, props)
const {user} = toRefs(props)
/*const user = ref(props.user)
console.log(19, user)*/
//获取列表
getGoodsList()
//监听user变化
watch(user, getGoodsList)

// 商品过滤逻辑
const goodsName = ref('')
const searchByGoodsName = computed(() => {
  return goodList.value.filter(
      goods => goods.name.includes(goodsName.value)
  )
})


</script>

<style scoped lang="scss">
.shop-list {

}
</style>
