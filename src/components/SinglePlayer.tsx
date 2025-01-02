// import { useGetSingleTeamQuery } from "../queries/team/useGetSingleTeamQuery";
import { PlayerEntity } from '../types'

type SinglePlayerProps = {
  player: PlayerEntity
}

export const SinglePlayer = ({ player }: SinglePlayerProps) => {
  // const { data: teamData, isFetching } = useGetSingleTeamQuery(player.teamId);

  // const teamName = isFetching ? 'Loading...' : teamData?.name || 'Brak drużyny';

  // console.log(teamData);

  return (
    <div>
      <p>Name: {player.name}</p>
      <p>Surname: {player.surname}</p>
      {/* <p>Team: {teamName}</p> */}
      <p>Edit</p>
      <p>Delete</p>
      <hr />
    </div>
  )
}
