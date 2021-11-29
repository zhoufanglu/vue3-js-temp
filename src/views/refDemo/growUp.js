import {reactive,onMounted, onUnmounted, toRefs} from 'vue'
export default function growUp() {
  /*const happy = ref(100), money = ref(0)
  let timer = ref(null)*/
  let person = reactive({
    happy: 100,
    money: 0,
    timer: null
  })
  onMounted(()=>{
    person.timer = setInterval(()=>{
      console.log('setInterval')
      person.happy--
      person.money++
    }, 1000)
  })
  onUnmounted(()=>{
    console.log('销毁后事件')
    clearTimeout(person.timer)
  })
  return toRefs(person)
}
