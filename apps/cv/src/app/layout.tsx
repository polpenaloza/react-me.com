import '../global.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
