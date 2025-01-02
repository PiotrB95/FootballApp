import { useGetSingleTeamQuery } from '../../queries/team/useGetSingleTeamQuery'

export const ShowTopTeams = (query: string) => {
  const { data: teams, isFetching: teamsFetching } =
    useGetSingleTeamQuery(query)

  if (!teamsFetching) return <p>Loading...</p>

  if (!teams) return <p>No data.</p>

  return (
    <div>
      <p>test</p>
    </div>
  )
}
