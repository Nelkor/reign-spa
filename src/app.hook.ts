import { ref } from 'vue'

export const useApp = () => {
  const counter = ref(0)

  const increment = () => counter.value++

  return { counter, increment }
}
