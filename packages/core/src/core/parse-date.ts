import dayjs from 'dayjs'

import { DATE_FORMAT, MINIMUM_DATE } from '../constants/date'

export function parseDate(
  date: Date | string,
  filters: { min?: Date; max?: Date; start?: boolean; end?: boolean } = {}
) {
  const { min, max } = filters
  const minDate = min || MINIMUM_DATE
  let dateObj

  if (typeof date === 'string') {
    dateObj = date ? dayjs(date).format(DATE_FORMAT) : null
  }
  if (dayjs(date).isValid()) {
    dateObj = date
  }

  if (!dateObj) return undefined

  if (
    (!minDate || (minDate && dayjs(dateObj).isAfter(minDate))) &&
    (!max || (max && dayjs(dateObj).isBefore(max)))
  ) {
    return dateObj
  }
  return undefined
}
