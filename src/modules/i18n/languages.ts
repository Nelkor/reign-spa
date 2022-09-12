import { DeepReadonly } from 'vue'

import { Language } from './types'

export const languages: DeepReadonly<Record<string, Language>> = {
  en: {
    name: 'English',
    rtl: false,
  },
  ru: {
    name: 'Русский',
    rtl: false,
  },
  iw: {
    name: 'עִברִית',
    rtl: true,
  },
}
