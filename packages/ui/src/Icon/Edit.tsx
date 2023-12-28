import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconEdit(props: Omit<iBaseIconProps, 'path'>) {
  return (
    <BaseIcon
      {...props}
      aria-label='icon edit'
      width='17'
      height='15'
      viewBox={'0 0 17 15'}
      path='M4.21751 9.59446L6.48151 11.6589L12.6015 6.07831L10.3375 4.01385L4.21751 9.59446ZM2.14551 13.541L5.67351 12.3811L3.42551 10.3458L2.14551 13.541ZM13.3455 1.86914C12.9055 1.86914 12.5055 2.02963 12.2175 2.29954L10.8975 3.5032L13.1615 5.56767L14.4815 4.364C14.7695 4.09409 14.9455 3.72935 14.9455 3.32813C14.9455 2.52568 14.2255 1.86914 13.3455 1.86914Z'
    />
  )
}
