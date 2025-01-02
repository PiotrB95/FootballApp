import { useGetPlayersQuery } from '../queries/player/useGetPlayersQuery'
import { SinglePlayer } from './SinglePlayer'

export const PlayersList = () => {
  const { data, isFetching } = useGetPlayersQuery()

  if (isFetching) return <p>Loading...</p>

  if (!data) return <p>No data.</p>

  return (
    <div>
      <p>Create player</p>
      <hr />
      {data.map((player) => (
        <SinglePlayer key={player.id} player={player} />
      ))}
    </div>
  )
}
