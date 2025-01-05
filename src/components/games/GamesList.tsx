import { useState } from 'react'
import { useGetGamesQuery } from '../../queries/game/useGetGamesQuery'
import { SingleGame } from './SingleGame'
import { CreateButton } from '../styled/CreateButton'
import { GameForm } from './GameForm.tsx'

export const GamesList = () => {
  const { data, isFetching } = useGetGamesQuery()
  const [showForm, setShowForm] = useState<boolean>(false)

  if (isFetching) return <p>Loading...</p>

  if (!data) return <p>No data.</p>

  return (
    <div>
      <hr />
      <CreateButton
        label={'Create game'}
        onClick={() => setShowForm((prev) => !prev)}
      />
      {showForm ? <GameForm /> : null}
      <hr />
      {data.map((game) => (
        <SingleGame key={game.id} game={game} />
      ))}
    </div>
  )
}
