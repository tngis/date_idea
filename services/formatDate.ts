const padZero = (num: number): string => (num < 10 ? '0' + num : num.toString())

export const formatDate = (date: string, format: string = 'YYYY-MM-DD, HH:mm:ss'): string => {
  if (!date) return '-'

  const d = new Date(date)
  if (isNaN(d.getTime())) return '-'

  const year = d.getUTCFullYear()
  const month = padZero(d.getUTCMonth() + 1)
  const day = padZero(d.getUTCDate())
  const hours = padZero(d.getUTCHours())
  const minutes = padZero(d.getUTCMinutes())
  const seconds = padZero(d.getUTCSeconds())

  const replacements: { [key: string]: string | number } = {
    YYYY: year,
    MM: month,
    DD: day,
    HH: hours,
    mm: minutes,
    ss: seconds,
  }

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => replacements[match].toString())
}
