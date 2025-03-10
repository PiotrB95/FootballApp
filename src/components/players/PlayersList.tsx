import { useState } from 'react'
import { useGetPlayersQuery } from '../../queries/player/useGetPlayersQuery'
import { SinglePlayer } from './SinglePlayer'
import { AddPlayer } from './AddPlayer'
import { CreateButton } from '../styled/CreateButton'

export const PlayersList = () => {
  const { data, isFetching } = useGetPlayersQuery()
  const [showForm, setShowForm] = useState<boolean>(false)

  if (isFetching) return <p>Loading...</p>

  if (!data) return <p>No data.</p>

  return (
    <div>
      <hr />
      <CreateButton
        label={'Create player'}
        onClick={() => setShowForm((prev) => !prev)}
      />
      {showForm ? <AddPlayer /> : null}
      <hr />
      {data.map((player) => (
        <SinglePlayer key={player.id} player={player} />
      ))}
    </div>
  )
}
