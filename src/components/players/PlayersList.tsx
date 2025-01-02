import { useState } from 'react'
import { useGetPlayersQuery } from '../../queries/player/useGetPlayersQuery'
import { SinglePlayer } from './SinglePlayer'

export const PlayersList = () => {
  const { data, isFetching } = useGetPlayersQuery()
  const [showForm, setShowForm] = useState<boolean>(false)

  if (isFetching) return <p>Loading...</p>

  if (!data) return <p>No data.</p>

  return (
    <div>
      <hr />
      <button onClick={() => setShowForm((prev) => !prev)}>
        Create player
      </button>
      {showForm ? <p>Formularz</p> : null}
      <hr />
      {data.map((player) => (
        <SinglePlayer key={player.id} player={player} />
      ))}
    </div>
  )
}
