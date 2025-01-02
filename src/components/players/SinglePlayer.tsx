import { useState } from 'react'
import { useGetSingleTeamQuery } from '../../queries/team/useGetSingleTeamQuery'
import { PlayerEntity } from '../../types'

type SinglePlayerProps = {
  player: PlayerEntity
}

export const SinglePlayer = ({ player }: SinglePlayerProps) => {
  const { data: teamData, isFetching } = useGetSingleTeamQuery(player.teamId)
  const [showForm, setShowForm] = useState<boolean>(false)

  const teamName = isFetching ? 'Loading...' : teamData?.name || 'Brak drużyny'

  return (
    <div>
      <p>Name: {player.name}</p>
      <p>Surname: {player.surname}</p>
      <p>Team: {teamName}</p>
      <button onClick={() => setShowForm((prev) => !prev)}>Edit</button>
      <button>Delete</button>
      {showForm ? <p>Formularz</p> : null}
      <hr />
    </div>
  )
}
