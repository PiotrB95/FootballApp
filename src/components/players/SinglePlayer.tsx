import { useState } from 'react'
import { useGetSingleTeamQuery } from '../../queries/team/useGetSingleTeamQuery'
import { PlayerEntity } from '../../types'
import { EditPlayer } from './EditPlayer'
import { ActionButton } from '../styled/ActionButton'

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
      <ActionButton
        label={'Edit'}
        onClick={() => setShowForm((prev) => !prev)}
      />
      <ActionButton
        label={'Delete'}
        onClick={() => {
          console.log('delete')
        }}
      />
      {showForm ? <EditPlayer player={player} /> : null}
      <hr />
    </div>
  )
}
