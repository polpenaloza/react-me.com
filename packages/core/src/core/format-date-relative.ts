import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

export function formatDateRelative(
  date: string | Date | number,
  suffix = true
) {
  dayjs.extend(relativeTime)
  if (Number(date) <= 0) return null
  const dateObj = date ? new Date(date) : null

  return dateObj && !isNaN(dateObj.getTime())
    ? dayjs().to(dayjs(dateObj), suffix)
    : null
}
