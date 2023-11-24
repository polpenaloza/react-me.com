import '~/styles/main.css'
import 'animate.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { Metadata, ResolvingMetadata } from 'next'
import { ReactNode } from 'react'

import { AppProviders } from 'apps/polpenaloza/src/context/app-providers'

const HOSTING_URL =
  process.env.NEXT_PUBLIC_HOSTING_URL || 'https://polpenaloza.com/'

type Props = {
  description: string
  title: string
  url: string
}
export async function generateMetadata(
  { description = 'Code magician', title = 'polpenaloza' }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const url = `${HOSTING_URL}`
  const imageUrl = `${url}logo.svg`

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent)?.openGraph?.images || []

  return {
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    referrer: 'origin-when-cross-origin',
    generator: 'Next.js',
    description,
    creator: 'polpenaloza',
    abstract: description,
    appleWebApp: true,
    applicationName: 'polpenaloza',
    assets: [HOSTING_URL],
    alternates: {
      canonical: url,
    },
    metadataBase: new URL(HOSTING_URL),
    keywords:
      'nextjs, coding, software, react, typescript, javascript, nodejs, web, development, developer, programming, code, coder, webdev, webdevelopment, webdeveloper, frontend',
    manifest: '/manifest.json',
    icons: {
      icon: '/favicon.ico',
      shortcut: '/logo.svg',
      apple: '/favicon.ico',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/favicon.ico',
      },
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    authors: [
      {
        url,
        name: 'polpenaloza',
      },
      {
        url: 'https://github.com/polpenaloza',
        name: '@polpenaloza',
      },
    ],
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      creator: '@polpenaloza',
      site: 'polpenaloza',
    },
    other: {
      publishedTime: new Date().toISOString(),
    },
    openGraph: {
      images: [{ url: imageUrl, width: 100, height: 50 }, ...previousImages],
      type: 'website',
      description,
      locale: 'en_US',
      siteName: title,
      title: {
        template: `%s | ${title}`,
        default: title,
      },
      url,
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
    verification: {
      google: 'google',
    },
    appLinks: {
      web: {
        url,
        // eslint-disable-next-line camelcase
        should_fallback: true,
      },
    },
    bookmarks: [url],
    category: 'technology',
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
