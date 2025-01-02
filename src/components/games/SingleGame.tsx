import { useGetSingleTeamQuery } from '../../queries/team/useGetSingleTeamQuery'
import { GameEntity } from '../../types'

type SingleGameProps = {
  game: GameEntity
}

export const SingleGame = ({ game }: SingleGameProps) => {
  const { data: teamA, isFetching: aFetching } = useGetSingleTeamQuery(
    game.teamA,
  )
  const { data: teamB, isFetching: bFetching } = useGetSingleTeamQuery(
    game.teamB,
  )

  const teamNameA = aFetching ? 'Loading...' : teamA?.name || 'Brak drużyny'
  const teamNameB = bFetching ? 'Loading...' : teamB?.name || 'Brak drużyny'

  const dateObject = new Date(game.date)
  const date = dateObject.toLocaleDateString()
  const time = dateObject.toLocaleTimeString()

  return (
    <div>
      <h3>
        {teamNameA} {game.scoreTeamA}:{game.scoreTeamB} {teamNameB}
      </h3>
      <p>Game type: {game.type}</p>
      <p>Date: {date}</p>
      <p>Start time: {time}</p>
      <p>Game time: {game.time}</p>
      <p>Location: {game.location}</p>
      <hr />
    </div>
  )
}
