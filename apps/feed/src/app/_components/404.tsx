import { Button } from '@workspace/ui/src/Button'
import { type Metadata } from 'next'

import { Image } from './Image'
import { Link } from './Link'

export const metadata: Metadata = {
  title: 'Not found',
}

export function FourOhFour() {
  return (
    <>
      <div className='flex flex-1 flex-col items-center justify-between'>
        <div className='flex w-full flex-col items-center'>
          <div className='text-primary font-dela mt-20 animate-bounce text-8xl font-extrabold'>
            404
          </div>
          <h1 className='text-dark font-dela my-4 text-center text-2xl font-extrabold leading-tight'>
            Page Not Found
          </h1>

          <p className='mb-8 mt-4'>
            The page you{"'"}re looking for does not seem to exist.
          </p>

          <Link href='/'>
            <Button variant='primary'>Go to Homepage</Button>
          </Link>
        </div>
        <div className='relative h-72 w-72'>
          <Image
            alt='background'
            src='/images/404.webp'
            width={1920}
            height={1080}
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </>
  )
}
