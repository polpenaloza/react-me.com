import { UIButton } from '@workspace/ui/src/Button'
import { type Metadata } from 'next'

import { Image } from '@/components/Image'
import { Link } from '@/components/Link'

export const metadata: Metadata = {
  title: 'Log in',
}

export default function SignOutTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='flex min-w-full flex-1 flex-col items-center justify-between'>
        <div className='flex w-full flex-col items-center'>
          {children}
          <Link href='/'>
            <UIButton className='w-60'>
              Go to Homepage
            </UIButton>
          </Link>
        </div>
        <div className='relative h-72 w-72'>
          <Image
            alt='background'
            src='/images/signout.webp'
            width={1920}
            height={1080}
            className='h-full w-full object-cover'
            fit
          />
        </div>
      </div>
    </>
  )
}
