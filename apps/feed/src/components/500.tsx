import { Button } from '@workspace/ui/src/Button'
import { type Metadata } from 'next'

import { Image } from './Image'
import { Link } from './Link'

export const metadata: Metadata = {
  title: 'Something went wrong',
}

export function NonReachable() {
  return (
    <>
      <div className='flex flex-1 flex-col items-center justify-between'>
        <div className='flex w-full flex-col items-center'>
          <div className='text-primary font-dela mt-20 animate-bounce text-8xl font-extrabold'>
            500
          </div>
          <h1 className='text-dark font-dela my-4 text-center text-2xl font-extrabold leading-tight'>
            Well, something went wrong
          </h1>

          <p className='mb-8 mt-4'>
            We are working hard fixing the issue. In the meantime, you can
            Contact us.
          </p>

          <Link href='/'>
            <Button variant='primary' className='w-60'>
              Contact us
            </Button>
          </Link>
        </div>
        <div className='relative h-72 w-72'>
          <Image
            alt='background'
            src='/images/500.webp'
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
