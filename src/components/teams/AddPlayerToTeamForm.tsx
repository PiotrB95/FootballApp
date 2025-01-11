import { useAddPlayerToTeam } from '../players/hooks/useAddPlayerToTeam.ts'
import { PlayerSelect } from '../players/PlayerSelect.tsx'
import { useGetPlayersQuery } from '../../queries/player/useGetPlayersQuery.ts'
import { ActionButton } from '../styled/ActionButton.tsx'

type AddPlayerToTeamProps = {
  teamId: string
}
export const AddPlayerToTeamForm = ({ teamId }: AddPlayerToTeamProps) => {
  const { data, isFetching } = useGetPlayersQuery()
  const { values, handleAddPlayerToTeam, handleChange } = useAddPlayerToTeam()

  values.teamId = teamId
  if (isFetching) return <p>Loading...</p>

  return (
    <form onSubmit={handleAddPlayerToTeam}>
      <PlayerSelect
        id='playerId'
        value={values.playerId}
        label='Wybierze gracza'
        players={data}
        onChange={handleChange}
      />
      <ActionButton label='Add player' type='submit' />
    </form>
  )
}
