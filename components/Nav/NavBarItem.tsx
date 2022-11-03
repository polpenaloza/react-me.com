import React, { useState } from 'react'

import { mdiChevronUp, mdiChevronDown } from '@mdi/js'
import Link from 'next/link'

import { initialMainState, initialStyleState } from '../../core/initialState'
import { MenuNavBarItem } from '../../interfaces'
// import { useAppDispatch, useAppSelector } from '../src/stores/hooks'
// import { setDarkMode } from '../src/stores/styleSlice'
import UserAvatarCurrentUser from '../Avatar/UserAvatarCurrentUser'
import BaseDivider from '../Base/BaseDivider'
import BaseIcon from '../Icon/BaseIcon'
import NavBarMenuList from './NavBarMenuList'

type Props = {
  item: MenuNavBarItem
}

export default function NavBarItem({ item }: Props) {
  // const dispatch = useAppDispatch()

  // const navBarItemLabelActiveColorStyle = useAppSelector(
  //   (state) => state.style.navBarItemLabelActiveColorStyle
  // )
  // const navBarItemLabelStyle = useAppSelector(
  //   (state) => state.style.navBarItemLabelStyle
  // )
  // const navBarItemLabelHoverStyle = useAppSelector(
  //   (state) => state.style.navBarItemLabelHoverStyle
  // )
  const navBarItemLabelActiveColorStyle =
    initialStyleState.navBarItemLabelActiveColorStyle

  const navBarItemLabelStyle = initialStyleState.navBarItemLabelStyle

  const navBarItemLabelHoverStyle = initialStyleState.navBarItemLabelHoverStyle

  // const userName = useAppSelector((state) => state.main.userName)
  const userName = initialMainState.userName

  const [isDropdownActive, setIsDropdownActive] = useState(false)

  const componentClass = [
    'block lg:flex items-center relative cursor-pointer',
    isDropdownActive
      ? `${navBarItemLabelActiveColorStyle} dark:text-slate-400`
      : `${navBarItemLabelStyle} dark:text-white dark:hover:text-slate-400 ${navBarItemLabelHoverStyle}`,
    item.menu ? 'lg:py-2 lg:px-3' : 'py-2 px-3',
    item.isDesktopNoLabel ? 'lg:w-16 lg:justify-center' : '',
  ].join(' ')

  const itemLabel = item.isCurrentUser ? userName : item.label

  const handleMenuClick = () => {
    if (item.menu) {
      setIsDropdownActive(!isDropdownActive)
    }

    if (item.isToggleLightDark) {
      // dispatch(setDarkMode(null))
      // console.log('jaja')
    }
  }

  const NavBarItemComponentContents = (
    <>
      <div
        className={`flex items-center ${
          item.menu
            ? 'bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0'
            : ''
        }`}
        onClick={handleMenuClick}
      >
        {item.isCurrentUser && (
          <UserAvatarCurrentUser className='w-6 h-6 mr-3 inline-flex' />
        )}
        {item.icon && (
          <BaseIcon path={item.icon} className='transition-colors' />
        )}
        <span
          className={`px-2 transition-colors ${
            item.isDesktopNoLabel && item.icon ? 'lg:hidden' : ''
          }`}
        >
          {itemLabel}
        </span>
        {item.menu && (
          <BaseIcon
            path={isDropdownActive ? mdiChevronUp : mdiChevronDown}
            className='hidden lg:inline-flex transition-colors'
          />
        )}
      </div>
      {item.menu && (
        <div
          className={`${
            !isDropdownActive ? 'lg:hidden' : ''
          } text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700`}
        >
          <NavBarMenuList menu={item.menu} />
        </div>
      )}
    </>
  )

  if (item.isDivider) {
    return <BaseDivider navBar />
  }

  if (item.href) {
    return (
      <Link href={item.href} target={item.target} className={componentClass}>
        {NavBarItemComponentContents}
      </Link>
    )
  }

  return <div className={componentClass}>{NavBarItemComponentContents}</div>
}
