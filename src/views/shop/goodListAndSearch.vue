<template>
  <div class="user-select">
    <div>
      <label>商品名称查询：</label>
      <el-input
          v-model="goodsName"
      ></el-input>
      {{searchByGoodsName}}
    </div>
    <el-select v-model="user" placeholder="Select">
      <el-option
          label="小明"
          value="小明"
      >
      </el-option>
      <el-option
          label="小红"
          value="小红"
      >
      </el-option>
    </el-select>
  </div>
  <div class="good-list">
    <ul>
      <li v-for="i in goodsList" :key="i.name">{{i.name}}</li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import useGoodsList from './component/useGoodsList'
import useSearchByGoodsName from './component/useSearchByGoodsName'
const user = ref('小明')
const {goodsList} = useGoodsList(user)
const {goodsName,searchByGoodsName} = useSearchByGoodsName(goodsList.value)
</script>

<style scoped lang="scss">
.test {

}
</style>
