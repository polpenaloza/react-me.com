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
    <section className='relative flex w-full grow'>
      <div className='relative flex grow flex-col items-center gap-2 overflow-auto p-2'>
        {children}
        {newPost}
      </div>
    </section>
  )
}
