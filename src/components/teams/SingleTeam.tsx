import { useGetPlayersForTeamQuery } from '../../queries/player/useGetPlayersForTeamQuery'
import { TeamEntity } from '../../types/team'

type SingleTeamProps = {
  team: TeamEntity
}

export const SingleTeam = ({ team }: SingleTeamProps) => {
  const { data, isFetching } = useGetPlayersForTeamQuery(team.id)

  if (isFetching) return <p>Loading...</p>

  if (!data) return <p>No data</p>

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
      <p>Edit team</p>
      <hr />
    </div>
  )
}
