<template>
  <div class="p-login">
    <div class="scss-test">123</div>
    <span>角色选择：</span>
    <el-select v-model="username" placeholder="Select">
      <el-option label="管理员" value="管理员"></el-option>
      <el-option label="普通用户" value="普通用户"></el-option>
    </el-select>
    <el-button @click="login">登陆</el-button>
  </div>
</template>
<script>
import {ref} from 'vue'
export default {
  setup() {
    const username = ref('管理员')
    function login(){
      console.log(username.value)
    }

    return {
      username,
      login
    }
  }
}
</script>

<style scoped lang="scss">
.p-login{
  $red: red;
  color: $red;
  .scss-test{
    width: 200px;
    height: 200px;
    border: solid 1px red;
    @include vertical-center;
  }
}
</style>
