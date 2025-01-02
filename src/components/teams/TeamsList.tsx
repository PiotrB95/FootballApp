import { useGetTeamsQuery } from '../../queries/team/useGetTeamsQuery'
import { SingleTeam } from './SingleTeam'

export const TeamsList = () => {
  const { data, isFetching } = useGetTeamsQuery()

  if (isFetching) return <p>Loading...</p>

  if (!data) return <p>No data.</p>

  return (
    <div>
      <p>Create team</p>
      <hr />
      {data.map((team) => (
        <SingleTeam key={team.id} team={team} />
      ))}
    </div>
  )
}
