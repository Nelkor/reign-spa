import { languages } from './languages'

const html = document.querySelector('html') as HTMLHtmlElement
const title = document.querySelector('title') as HTMLTitleElement

export const cutLang = (str: string) => str.split('-')[0].toLowerCase()

export const setTitle = (str: string) => {
  title.innerText = str
}

export const setLanguage = (langKey: string) => {
  html.setAttribute('lang', langKey)
  html.setAttribute('dir', languages[langKey].rtl ? 'rtl' : 'ltr')
}
