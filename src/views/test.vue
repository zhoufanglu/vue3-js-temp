<template>
 <div>
<!--   <el-menu
       default-active="2"
       class="el-menu-vertical-demo"
       @open="handleOpen"
       @close="handleClose"
   >
     <el-sub-menu index="1">
       &lt;!&ndash;title&ndash;&gt;
       <template #title>
         <el-icon><location /></el-icon>
         <span>Navigator One</span>
       </template>
       &lt;!&ndash;sub-title&ndash;&gt;
       <el-menu-item-group title="Group One">
         <el-menu-item index="1-1">item one</el-menu-item>
         <el-menu-item index="1-2">item one</el-menu-item>
       </el-menu-item-group>

       <el-menu-item-group title="Group Two">
         <el-menu-item index="1-3">item three</el-menu-item>
       </el-menu-item-group>

     </el-sub-menu>
     <el-menu-item index="2">
&lt;!&ndash;       <el-icon><icon-menu /></el-icon>&ndash;&gt;
       <span>Navigator Two</span>
     </el-menu-item>
   </el-menu>
   test-->
   <el-button>1233</el-button>
    <button @click="setVuexData">修改vuex数据</button>
<!--   {{ routerList }}-->
 </div>
</template>
<script>
//import {useStore} from 'vuex'
export default {
  setup() {
    /*const store = useStore()
    //const routerList = store.state.userInfo.routerList
    function setVuexData(){
      store.commit('setUserInfo',{routerList: [4,5,6]})
    }*/
    function setVuexData() {

    }
    /**********************menu事件***********************/
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }

    return {
      setVuexData,
      handleOpen,
      handleClose
      //routerList
    }
  }
}
</script>

<style scoped>

</style>
