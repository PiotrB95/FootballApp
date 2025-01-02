import { GameEntity } from '../../types'

const parseDate = (dateString: string) => new Date(dateString)

const getStartOfWeek = (date: Date) => {
  const dayOfWeek = date.getDay()
  const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)
  return new Date(date.setDate(diff))
}

export const filterByDay = (games: GameEntity[], targetDate: Date) => {
  return games.filter((game) => {
    const gameDate = parseDate(game.date)
    return (
      gameDate.getFullYear() === targetDate.getFullYear() &&
      gameDate.getMonth() === targetDate.getMonth() &&
      gameDate.getDate() === targetDate.getDate()
    )
  })
}

export const filterByWeek = (games: GameEntity[], targetDate: Date) => {
  const startOfWeek = getStartOfWeek(new Date(targetDate))
  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(startOfWeek.getDate() + 6)

  return games.filter((game) => {
    const gameDate = parseDate(game.date)
    return gameDate >= startOfWeek && gameDate <= endOfWeek
  })
}

export const filterByMonth = (games: GameEntity[], targetDate: Date) => {
  return games.filter((game) => {
    const gameDate = parseDate(game.date)
    return (
      gameDate.getFullYear() === targetDate.getFullYear() &&
      gameDate.getMonth() === targetDate.getMonth()
    )
  })
}
