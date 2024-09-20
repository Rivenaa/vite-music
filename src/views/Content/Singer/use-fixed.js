import { ref } from 'vue'

export default function useFixed() {
  const groupRef = ref(null)
  const listHeights = ref([])
  let height = 0

  function calculate() {
    // 获取子元素
    const list = groupRef.value.children
    //  初始化数组长度
    listHeights.value.length = 0
    listHeights.value.push(height)

    // 遍历list每一项累加到listHeights
    for (let i = 0; i < list.length; i++) {
      height += list[i].clientHeight
    }
  }

  return {
    groupRef
  }
}
