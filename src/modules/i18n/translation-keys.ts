export const translationKeys = [
  // General
  'OK',
  'CANCEL',

  // Main page
  'MAIN_CARD_NAME',
  'MAIN_CARD_DESCRIPTION',
] as const

export type TranslationKey = typeof translationKeys[number]
