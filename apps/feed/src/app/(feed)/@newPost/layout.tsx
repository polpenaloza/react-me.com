import { getServerAuthSession } from '@workspace/server/src/auth'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'New Post',
}

export default async function NewPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerAuthSession()
  const userData = session?.user

  if (!userData) redirect('/')

  return (
    <section className='relative flex w-full grow'>
      <div className='relative flex grow flex-col items-center gap-2 overflow-auto p-2'>
        {children}
      </div>
    </section>
  )
}
