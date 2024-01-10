'use client'

import classNames from 'classnames/dedupe'

import { SignIn } from '@/components/AuthButtons'

export default function Login() {
  return (
    <>
      <div
        className={classNames([
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
