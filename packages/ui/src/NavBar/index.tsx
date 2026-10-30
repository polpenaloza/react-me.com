import { useState } from 'react'

import { ThemeSwitch } from '../Button/ThemeSwitch'
import { IconDiscord } from '../Icon/Discord'
import { IconDotsHexagon } from '../Icon/DotsHexagon'
import { IconGithub } from '../Icon/Github'
import { IconSearch } from '../Icon/Search'
import { IconTwitter } from '../Icon/Twitter'

interface SiteConfig {
  navItems: { href: string; label: string }[]
  links: {
    twitter: string
    discord: string
    github: string
    sponsor: string
  }
}

interface NavBarProps {
  siteConfig: SiteConfig
  logo: React.ReactNode
}

export const Navbar = ({ siteConfig, logo }: NavBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-3'>
      <a aria-label='Home' className='flex items-center gap-2' href='/'>
        {logo}
        <span className='font-bold'>ACME</span>
      </a>
      <ul className='hidden items-center gap-4 lg:flex'>
        {siteConfig.navItems.map((item) => (
          <li key={item.href}>
            <a className='hover:underline' href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className='hidden items-center gap-3 sm:flex'>
        <a aria-label='Twitter' href={siteConfig.links.twitter}>
          <IconTwitter className='text-slate-500' />
        </a>
        <a aria-label='Discord' href={siteConfig.links.discord}>
          <IconDiscord className='text-slate-500' />
        </a>
        <a aria-label='GitHub' href={siteConfig.links.github}>
          <IconGithub className='text-slate-500' />
        </a>
        <ThemeSwitch />
        <label className='hidden items-center gap-2 rounded-md bg-slate-100 px-3 py-2 lg:flex dark:bg-slate-800'>
          <IconSearch className='text-slate-400' />
          <input
            aria-label='Search'
            className='w-32 bg-transparent text-sm outline-none'
            placeholder='Search...'
            type='search'
          />
          <kbd className='text-xs text-slate-500'>K</kbd>
        </label>
        <a
          className='hidden items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-sm md:flex dark:bg-slate-800'
          href={siteConfig.links.sponsor}
        >
          <IconDotsHexagon className='text-red-500' />
          Sponsor
        </a>
      </div>
      <button
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className='rounded-md p-2 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 sm:hidden dark:hover:bg-slate-800'
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        type='button'
      >
        <span aria-hidden='true'>{menuOpen ? '×' : '☰'}</span>
      </button>
      {menuOpen && (
        <ul className='flex w-full flex-col gap-3 sm:hidden'>
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <a
                className='block rounded-md px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800'
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      )}
    </nav>
  )
}
