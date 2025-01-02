import { useGetGamesQuery } from '../../queries/game/useGetGamesQuery'
import { SingleGame } from './SingleGame'

export const GamesList = () => {
  const { data, isFetching } = useGetGamesQuery()

  if (isFetching) return <p>Loading...</p>

  if (!data) return <p>No data.</p>

  return (
    <div>
      <p>Create game</p>
      <hr />
      {data.map((game) => (
        <SingleGame key={game.id} game={game} />
      ))}
    </div>
  )
}
