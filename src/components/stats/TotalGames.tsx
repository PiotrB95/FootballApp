import { useEffect, useMemo, useState } from 'react'
import { useGetGamesQuery } from '../../queries/game/useGetGamesQuery'
import { DateOption } from '../../types/enums'
import { filterByDay, filterByMonth, filterByWeek } from './filterDateFunctions'
import { GameEntity } from '../../types'

export const TotalGames = () => {
  const { data: games, isFetching } = useGetGamesQuery()
  const [dateOption, setDateOption] = useState<DateOption>(DateOption.DAY)
  const [totalGames, setTotalGames] = useState<GameEntity[]>([])

  const targetDate = useMemo(() => new Date(), [])

  useEffect(() => {
    if (!games) return

    switch (dateOption) {
      case DateOption.DAY:
        setTotalGames(filterByDay(games, targetDate))
        break
      case DateOption.WEEK:
        setTotalGames(filterByWeek(games, targetDate))
        break
      case DateOption.MONTH:
        setTotalGames(filterByMonth(games, targetDate))
        break
      default:
        break
    }
  }, [dateOption, games, targetDate])

  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setDateOption(e.target.value as DateOption)
  }

  if (isFetching) return <p>Loading...</p>

  if (!games) return <p>No data.</p>

  return (
    <div>
      <h2>Total games: {totalGames.length}</h2>
      <div>
        Select:
        <label>
          <input
            onChange={radioHandler}
            type='radio'
            value={DateOption.DAY}
            checked={dateOption === DateOption.DAY}
          />{' '}
          DAY
        </label>
        <label>
          <input
            onChange={radioHandler}
            type='radio'
            value={DateOption.WEEK}
            checked={dateOption === DateOption.WEEK}
          />{' '}
          WEEK
        </label>
        <label>
          <input
            onChange={radioHandler}
            type='radio'
            value={DateOption.MONTH}
            checked={dateOption === DateOption.MONTH}
          />{' '}
          MONTH
        </label>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            height: `${20 * totalGames.length}px`,
            background: 'red',
            width: '100px',
            marginTop: '25px',
          }}
        />
        <div
          style={{
            display: 'flex',
            width: '100px',
            height: '20px',
            justifyContent: 'center',
          }}
        >
          {totalGames.length}
        </div>
      </div>
      <hr />
    </div>
  )
}
