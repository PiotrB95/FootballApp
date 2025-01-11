import { useGetGamesQuery } from '../../queries/game/useGetGamesQuery'
import { SingleGame } from '../games/SingleGame'

export const LastGame = () => {
  const { data, isFetching } = useGetGamesQuery()

  if (isFetching) return <p>Loading...</p>

  if (!data || data.length === 0)
    return (
      <div>
        <h2>Last game</h2>
        <p>No data.</p>
      </div>
    )

  const latestGame = data.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )[0]

  return (
    <div>
      <h2>Last game</h2>
      <SingleGame game={latestGame} />
    </div>
  )
}
