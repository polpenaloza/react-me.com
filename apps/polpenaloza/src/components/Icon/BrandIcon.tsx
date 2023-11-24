import { mdiPanda } from '@mdi/js'

import BaseIcon, { BaseProps } from './BaseIcon'

export const BrandIcon = (props: Omit<BaseProps, 'path'>) => {
  return <BaseIcon {...props} path={mdiPanda} />
}
