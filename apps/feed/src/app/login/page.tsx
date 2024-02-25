'use client'

import clsx from 'clsx'

import { SignIn } from '@/components/AuthButtons'

export default function Login() {
  return (
    <>
      <div
        className={clsx([
          'text-primary font-dela mt-20 text-4xl font-extrabold',
        ])}
      >
        {'Looking to sign in?'}
      </div>
      <div className='p-10'>
        <SignIn />
      </div>
    </>
  )
}
