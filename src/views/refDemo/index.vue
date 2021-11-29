<template>
  <div class="">
    <h2>模拟人生</h2>
    <div>快乐：{{ happy }}，财富：{{ money }}</div>
  </div>
</template>

<script setup>
import growUp from './growUp'
const {money, happy} = growUp()
</script>

<style scoped lang="scss">
.test {

}
</style>
