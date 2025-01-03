import { useState } from 'react'
import { useGetSingleTeamQuery } from '../../queries/team/useGetSingleTeamQuery'
import { PlayerEntity } from '../../types'
import { EditPlayer } from './EditPlayer'
import { useDeletePlayerMutation } from '../../queries/player/useDeletePlayerMutation.ts'

type SinglePlayerProps = {
  player: PlayerEntity
}

export const SinglePlayer = ({ player }: SinglePlayerProps) => {
  const { data: teamData, isFetching } = useGetSingleTeamQuery(player.teamId)
  const { mutate } = useDeletePlayerMutation()
  const [showForm, setShowForm] = useState<boolean>(false)

  const teamName = isFetching ? 'Loading...' : teamData?.name || 'Brak drużyny'

  const handleDelete = (id: string) => {
    mutate(id)
  }

  return (
    <div>
      <p>Name: {player.name}</p>
      <p>Surname: {player.surname}</p>
      <p>Team: {teamName}</p>
      <button onClick={() => setShowForm((prev) => !prev)}>Edit</button>
      <button onClick={() => handleDelete(player.id)}>Delete</button>
      {showForm ? <EditPlayer player={player} /> : null}
      <hr />
    </div>
  )
}
