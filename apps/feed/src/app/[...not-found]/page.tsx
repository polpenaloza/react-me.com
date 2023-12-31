import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Not Found',
}

export default function NotFoundCatchAll() {
  return notFound()
}
