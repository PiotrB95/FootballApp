import { useState } from 'react'
import { useGetGamesQuery } from '../../queries/game/useGetGamesQuery'
import { SingleGame } from './SingleGame'
import { AddGame } from './AddGame.tsx'

export const GamesList = () => {
  const { data, isFetching } = useGetGamesQuery()
  const [showForm, setShowForm] = useState<boolean>(false)

  if (isFetching) return <p>Loading...</p>

  if (!data) return <p>No data.</p>
  console.log(data)
  return (
    <div>
      <hr />
      <button onClick={() => setShowForm((prev) => !prev)}>Create game</button>
      {showForm ? <AddGame /> : null}
      <hr />
      {data.map((game) => (
        <SingleGame key={game.id} game={game} />
      ))}
    </div>
  )
}
