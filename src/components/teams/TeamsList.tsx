import { useState } from 'react'
import { useGetTeamsQuery } from '../../queries/team/useGetTeamsQuery'
import { SingleTeam } from './SingleTeam'
import { AddTeam } from './AddTeam.tsx'

export const TeamsList = () => {
  const { data, isFetching } = useGetTeamsQuery()
  const [showForm, setShowForm] = useState<boolean>(false)

  if (isFetching) return <p>Loading...</p>

  if (!data) return <p>No data.</p>

  return (
    <div>
      <hr />
      <button onClick={() => setShowForm((prev) => !prev)}>Create team</button>
      {showForm ? <AddTeam /> : null}
      <hr />
      {data.map((team) => (
        <SingleTeam key={team.id} team={team} />
      ))}
    </div>
  )
}
