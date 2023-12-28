import { iBaseIconProps } from './_BaseIcon'
import { IconSortDown } from './SortDown'
import { IconSortUp } from './SortUp'

export function IconSort(props: Omit<iBaseIconProps, 'path'>) {
  return (
    <div className='flex flex-col items-center'>
      <IconSortUp {...props} />
      <IconSortDown {...props} />
    </div>
  )
}
