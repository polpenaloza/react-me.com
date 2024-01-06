import NexLink from 'next/link'
import { type AnchorHTMLAttributes } from 'react'

export interface iLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

export function Link({ href, className, children, ...otherProps }: iLink) {
  /** @render */
  return (
    <NexLink {...otherProps} href={href} className={className}>
      {children}
    </NexLink>
  )
}
