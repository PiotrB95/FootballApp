import { useState } from 'react'
import { useGetTeamsQuery } from '../../queries/team/useGetTeamsQuery'
import { SingleTeam } from './SingleTeam'
import { AddTeam } from './AddTeam.tsx'
import { CreateButton } from '../styled/CreateButton'

export const TeamsList = () => {
  const { data, isFetching } = useGetTeamsQuery()
  const [showForm, setShowForm] = useState<boolean>(false)

  if (isFetching) return <p>Loading...</p>

  if (!data) return <p>No data.</p>

  return (
    <div>
      <hr />
      <CreateButton
        label={'Create team'}
        onClick={() => setShowForm((prev) => !prev)}
      />
      {showForm ? <AddTeam /> : null}
      <hr />
      {data.map((team) => (
        <SingleTeam key={team.id} team={team} />
      ))}
    </div>
  )
}
