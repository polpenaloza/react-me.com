import { mdiPanda } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export const BrandIcon = (props: Omit<iBaseIconProps, 'path'>) => {
  return <BaseIcon {...props} path={mdiPanda} />
}
