import { useState } from 'react'
import { useGetPlayersForTeamQuery } from '../../queries/player/useGetPlayersForTeamQuery'
import { TeamEntity } from '../../types/team'
import { EditTeam } from './EditTeam.tsx'
import { useDeleteTeamMutation } from '../../queries/team/useDeleteTeamMutation.ts'

type SingleTeamProps = {
  team: TeamEntity
}

export const SingleTeam = ({ team }: SingleTeamProps) => {
  const { data, isFetching } = useGetPlayersForTeamQuery(team.id)
  const { mutate } = useDeleteTeamMutation()
  const [showForm, setShowForm] = useState<boolean>(false)

  if (isFetching) return <p>Loading...</p>

  if (!data) return <p>No data</p>

  const handleDelete = (id: string) => {
    mutate(id)
  }

  return (
    <div>
      <p>Name: {team.name}</p>
      <p>Since: {team.since}</p>
      <p>Location: {team.location}</p>
      <p>Players list:</p>
      <ul>
        {data
          .filter((player) => player.teamId !== null)
          .map((player) => (
            <li key={player.id}>
              {player.name} {player.surname}
            </li>
          ))}
      </ul>
      <button onClick={() => setShowForm((prev) => !prev)}>Edit</button>
      <button onClick={() => handleDelete(team.id)}>Delete</button>
      {showForm ? <EditTeam team={team} /> : null}
      <hr />
    </div>
  )
}
