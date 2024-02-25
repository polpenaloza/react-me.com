import { IconLogin } from '@workspace/ui/src/Icon/Login'
import { IconLogout } from '@workspace/ui/src/Icon/Logout'

import { Link } from '@/components/Link'

export function SignIn() {
  return (
    <Link
      className='flex w-full items-center justify-start space-x-4 rounded-3xl px-6 py-2 text-2xl transition duration-200 hover:bg-white/10'
      href={'/api/auth/signin'}
    >
      <div>
        <IconLogin />
      </div>
      <div className='hidden sm:block'>Login</div>
    </Link>
  )
}

export function SignOut() {
  return (
    <Link
      className='flex w-full items-center justify-start space-x-4 rounded-3xl px-6 py-2 text-2xl transition duration-200 hover:bg-white/10'
      href={'/api/auth/signout'}
    >
      <div>
        <IconLogout />
      </div>
      <div className='hidden sm:block'>Logout</div>
    </Link>
  )
}
