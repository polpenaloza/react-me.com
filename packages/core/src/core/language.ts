/* eslint-disable @typescript-eslint/ban-ts-comment */
export function getNavigatorLanguage() {
  if (typeof navigator === 'undefined') return 'en'

  return (
    // @ts-ignore
    navigator.userLanguage ||
    (navigator.languages &&
      navigator.languages.length &&
      navigator.languages[0]) ||
    navigator.language ||
    // @ts-ignore
    navigator.browserLanguage ||
    // @ts-ignore
    navigator.systemLanguage ||
    'en'
  )
}
