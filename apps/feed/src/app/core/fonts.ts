import { Inter, Roboto } from 'next/font/google'

const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
})

export const fonts = `${interFont.variable} ${robotoFont.variable}`
