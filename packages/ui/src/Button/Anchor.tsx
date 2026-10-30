import { AnchorHTMLAttributes } from 'react'

export interface AnchorButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

export function AnchorButton({ children, ...otherProps }: AnchorButtonProps) {
  return (
    <a {...otherProps} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}
