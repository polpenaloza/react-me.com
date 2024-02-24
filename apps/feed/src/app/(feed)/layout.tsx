import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Feed',
}

export default async function AuthenticatedRoot({
  children,
  newPost,
}: {
  children: React.ReactNode
  newPost: React.ReactNode
}) {
  return (
    <>
      {children}
      {newPost}
    </>
  )
}
