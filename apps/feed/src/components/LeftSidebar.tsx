import { getServerAuthSession } from '@workspace/server/src/auth'
import Link from 'next/link'
import { BiHomeCircle, BiUser } from 'react-icons/bi'

import { SignIn, SignOut } from './AuthButtons'
import { Avatar } from './Avatar'
import { Logo } from './Logo'

export async function LeftSidebar() {
  const session = await getServerAuthSession()
  const username = session?.user?.name?.toLocaleLowerCase().replace(/ /g, '_')

  const NAVIGATION_ITEMS = [
    {
      title: 'Home',
      icon: <BiHomeCircle />,
    },
    {
      title: 'Profile',
      icon: <BiUser />,
    },
  ]

  return (
    <aside className='sticky top-0 flex h-full w-[25%] flex-col justify-between pb-2'>
      <div>
        <Logo />

        <div className='flex w-full flex-col items-stretch space-y-4'>
          {NAVIGATION_ITEMS.map((item) => {
            if (item.title.toLocaleLowerCase() === 'profile' && !session)
              return <></>
            return (
              <Link
                className='flex w-full items-center justify-start space-x-4 rounded-3xl px-6 py-2 text-2xl transition duration-200 hover:bg-white/10'
                href={
                  item.title.toLocaleLowerCase() === 'home'
                    ? '/'
                    : item.title.toLocaleLowerCase() === 'profile'
                      ? `/user/${session?.user.id}` ?? '#'
                      : `/${item.title.toLowerCase()}`
                }
                key={item.title}
              >
                <div>{item.icon}</div>
                <div className='hidden sm:block'>
                  {item.title !== 'Twitter' && <div>{item.title}</div>}
                </div>
              </Link>
            )
          })}
          {session?.user ? <SignOut /> : <SignIn />}
        </div>
      </div>
      {session ? (
        <button className='hidden w-full items-center justify-between space-x-2 rounded-full bg-transparent p-4 text-center transition duration-200 hover:bg-white/10 sm:flex'>
          <div className='flex items-center space-x-2'>
            <Avatar imgSrc={session?.user.image} name={session?.user.name} />
            <div className='text-left text-sm'>
              <div className='font-semibold'>{session?.user?.name}</div>
              <div className=''>@{username}</div>
            </div>
          </div>
        </button>
      ) : null}
    </aside>
  )
}
