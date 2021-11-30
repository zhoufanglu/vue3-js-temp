/**********************获取商品列表并且监听***********************/
import {ref, watch} from 'vue'
export default function useGoodsList(user) {
  const goodsList = ref([])
  //获取商品
  const getGoodsList = ()=>{
    console.log(6, user.value)
    if(user.value === '小明'){
      goodsList.value = [{name:'A'},{name:'B'},{name:'C'}]
    }else{
      goodsList.value = [{name:'D'},{name:'E'},{name:'F'}]
    }
  }
  getGoodsList()

  watch(user, getGoodsList)

  return {
    goodsList,
  }
}
