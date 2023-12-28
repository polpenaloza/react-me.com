import { mdiTranslate } from '@mdi/js'

import { BaseIcon, iBaseIconProps } from './_BaseIcon'

export const TranslateIcon = (props: Omit<iBaseIconProps, 'path'>) => {
  return <BaseIcon {...props} path={mdiTranslate} />
}
