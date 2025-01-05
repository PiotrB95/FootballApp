import { useState } from 'react'
import { useGetSingleTeamQuery } from '../../queries/team/useGetSingleTeamQuery'
import { PlayerEntity } from '../../types'
import { EditPlayer } from './EditPlayer'
import { ActionButton } from '../styled/ActionButton'
import { useDeletePlayer } from './hooks/useDeletePlayer.ts'
import { ConfirmDialog } from '../ConfirmDialog.tsx'

type SinglePlayerProps = {
  player: PlayerEntity
}

export const SinglePlayer = ({ player }: SinglePlayerProps) => {
  const { data: teamData, isFetching } = useGetSingleTeamQuery(player.teamId)
  const { msg, isConfirmOpen, confirmDelete, cancelDelete, handleDelete } =
    useDeletePlayer()
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
      <ActionButton label={'Delete'} onClick={() => handleDelete(player)} />
      {msg !== '' ? <p>{msg}</p> : null}
      <ConfirmDialog
        isOpen={isConfirmOpen}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        message='Are you sure you want to delete this item?'
        successMessage={msg}
      />
      {showForm ? <EditPlayer player={player} /> : null}
      <hr />
    </div>
  )
}
