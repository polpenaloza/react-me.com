import { mdiWeb } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export function IconTranslate(props: Omit<iBaseIconProps, 'path'>) {
  return <BaseIcon {...props} aria-label='icon translate' path={mdiWeb} />
}
