import dayjs from 'dayjs'

import { DATE_FORMAT, MINIMUM_DATE } from '../constants/date'

export function formatDateFilter(
  date: string | Date,
  filters: { min?: Date; max?: Date } = {},
  format?: string
) {
  const dateObj = date ? new Date(date) : null

  if (!dateObj) return undefined
  const { min, max } = filters
  const minDate = min || MINIMUM_DATE

  const tempDate = dayjs(dateObj)

  return dateObj &&
    !isNaN(dateObj.getTime()) &&
    (!minDate || (minDate && tempDate.isAfter(minDate))) &&
    (!max || (max && tempDate.isBefore(max)))
    ? tempDate.format(format || DATE_FORMAT)
    : null
}
