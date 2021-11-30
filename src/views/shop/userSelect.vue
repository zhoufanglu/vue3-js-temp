<template>
  <div class="user-select">
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

    <shoppList :user="user"></shoppList>

  </div>
</template>

<script setup>
import shoppList from './shopList'
import {ref} from 'vue'
const user = ref('小明')
</script>

<style scoped lang="scss">
.test {

}
</style>
