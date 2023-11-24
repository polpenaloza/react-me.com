import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import { DATE_FORMAT } from '../constants/date'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)

export function formatDate(date: string | Date | number, format?: string) {
  if (Number(date) <= 0) return null
  if (String(date).indexOf('-') === -1) {
    const dateObj = new Date(Number(date))
    const actualDate =
      dateObj.getFullYear() === 1970 ? new Date(Number(date) * 1000) : dateObj

    if (!actualDate) return undefined
    if (actualDate && !isNaN(actualDate.getTime())) {
      // Fix timestamp timezone to UTC
      const userTz = dayjs.tz.guess()
      const utcDate = dayjs.utc(actualDate).tz(userTz)

      return utcDate.format(format || DATE_FORMAT)
    }
  }
  const dateObj = date ? new Date(date) : null

  if (!dateObj) return undefined
  const actualDate =
    dateObj.getFullYear() === 1970 ? new Date(Number(date) * 1000) : dateObj

  if (actualDate && !isNaN(actualDate.getTime())) {
    return dayjs(actualDate).format(format || DATE_FORMAT)
  }
  return null
}
