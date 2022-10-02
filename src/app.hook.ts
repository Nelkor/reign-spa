import { ref } from 'vue'

import { loadCurrentLanguage } from '@/i18n'

export const useApp = () => {
  const isAppReady = ref(false)

  loadCurrentLanguage().then(() => {
    isAppReady.value = true
  })

  return { isAppReady }
}
