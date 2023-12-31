'use client'

import { Button } from '@workspace/ui/src/Button'
import classNames from 'classnames/dedupe'

import { Link } from '../_components/Link'

export default function SignOut() {
  return (
    <>
      <div
        className={classNames([
          'text-primary font-dela mt-20 text-8xl font-extrabold',
        ])}
      >
        {'Sign out?'}
      </div>
      <Link className='p-10' href={'/api/auth/signout'}>
        <Button className='w-60' variant='outline-primary' fullLength>
          Logout
        </Button>
      </Link>
    </>
  )
}
