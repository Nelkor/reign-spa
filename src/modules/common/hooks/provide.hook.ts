import { provide, inject } from 'vue'

let i = 0

const createKey = () => (i++).toString(32)

export const useProvider = <T>() => {
  const key = createKey()

  return [
    (value: T) => {
      provide(key, value)
    },
    (): T => inject(key) as T,
  ]
}
