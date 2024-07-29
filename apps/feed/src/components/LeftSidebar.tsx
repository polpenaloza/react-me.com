'use client'

import { Avatar } from '@workspace/ui/src/Avatar'
import { type Session } from 'next-auth'
// import { BrandIcon } from '@workspace/ui/src/Icon/BrandIcon'
import { IconHome } from '@workspace/ui/src/Icon/Home'

import { SignIn, SignOut } from './AuthButtons'
import { Image } from './Image'
import { Link } from './Link'
import { Logo } from './Logo'
import { ThemeSwitch } from '@workspace/ui/src/Button/ThemeSwitch'

export function LeftSidebar({ session }: { session: Session | null }) {
  const username = session?.user?.name?.toLocaleLowerCase().replace(/ /g, '_')
  const NAVIGATION_ITEMS = [
    {
      title: 'Home',
      icon: <IconHome />,
    },
    {
      title: 'Profile',
      // icon: <BrandIcon />,
    },
  ]

  return (
    <aside className='sticky top-0 flex h-full w-[25%] flex-col justify-between pb-2'>
      <div>
        <Logo />

        <div className='flex w-full flex-col items-stretch space-y-4'>
          <ThemeSwitch />
          {NAVIGATION_ITEMS.map((item, index) => {
            if (item.title.toLocaleLowerCase() === 'profile' && !session)
              return <div key={`item-undefined-${index}`} />
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
            <Avatar name={session?.user.name ?? undefined}>
              {session?.user.image ? (
                <Image
                  src={session?.user.image}
                  alt={`avatar ${session?.user.name}`}
                  className='visible h-full w-full object-cover object-center group-hover:hidden'
                />
              ) : null}
            </Avatar>
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
