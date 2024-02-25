'use client'

import clsx from 'clsx'

import { SignOut } from '@/components/AuthButtons'

export default function Logout() {
  return (
    <>
      <div
        className={clsx([
          'text-primary font-dela mt-20 text-4xl font-extrabold',
        ])}
      >
        {'See you later!'}
      </div>
      <div className='p-10'>
        <SignOut />
      </div>
    </>
  )
}
