import { Button, ButtonProps } from '@nextui-org/button'
import { ReactNode } from 'react'
interface iButtonProps extends ButtonProps {
  children: ReactNode
}

export function UIButton({ children, className, ...otherProps }: iButtonProps) {
  return (
    <Button {...otherProps} className={className}>
      <>{children}</>
    </Button>
  )
}
