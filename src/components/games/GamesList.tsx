import { useState } from 'react'
import { useGetGamesQuery } from '../../queries/game/useGetGamesQuery'
import { SingleGame } from './SingleGame'

export const GamesList = () => {
  const { data, isFetching } = useGetGamesQuery()
  const [showForm, setShowForm] = useState<boolean>(false)

  if (isFetching) return <p>Loading...</p>

  if (!data) return <p>No data.</p>

  return (
    <div>
      <hr />
      <button onClick={() => setShowForm((prev) => !prev)}>Create game</button>
      {showForm ? <p>Formularz</p> : null}
      <hr />
      {data.map((game) => (
        <SingleGame key={game.id} game={game} />
      ))}
    </div>
  )
}
