import { ref, computed } from 'vue'

export default function useSearchByGoodsName(goodsList) {
  const goodsName = ref('')
  const searchByGoodsName = computed(() => {
    return goodsList.filter(
      goods => goods.name.includes(goodsName.value)
    )
  })
  return {
    searchByGoodsName,
    goodsName
  }
}
