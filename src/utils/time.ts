export function handleInititalTime(hours: number) {
  const date = new Date()
  date.setHours(hours, 0)

  return date
}

export function formatTime(hours: number, minutes: number) {
  const formattedHours = String(hours).padStart(2, '0')
  const formattedMinutes = String(minutes).padStart(2, '0')
  return `${formattedHours}:${formattedMinutes}`
}

export function millisecondsToHours(milliseconds: number) {
  const totalMinutes = milliseconds / (1000 * 60)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = Math.round(totalMinutes % 60)

  return formatTime(hours, minutes)
}

export function getTimeTotal(...args: Date[]) {
  const times: Date[] = args.map((a) => new Date(a))
  const firstInterval = times[1].valueOf() - times[0].valueOf()
  const secondInterval = times[3].valueOf() - times[2].valueOf()

  return millisecondsToHours(firstInterval + secondInterval)
}
