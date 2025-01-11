import { useState } from 'react'
import { useGetPlayersForTeamQuery } from '../../queries/player/useGetPlayersForTeamQuery'
import { TeamEntity } from '../../types/team'
import { ActionButton } from '../styled/ActionButton'
import { EditTeam } from './EditTeam.tsx'
import { useDeletePlayerFromTeam } from '../players/hooks/useDeletePlayerFromTeam.ts'
import { ConfirmDialog } from '../ConfirmDialog.tsx'
import { AddPlayerToTeamForm } from './AddPlayerToTeamForm.tsx'
import { useDeleteTeam } from './hooks/useDeleteTeam.ts'

type SingleTeamProps = {
  team: TeamEntity
}

export const SingleTeam = ({ team }: SingleTeamProps) => {
  const { data, isFetching } = useGetPlayersForTeamQuery(team.id)
  const {
    handleDelete: handleDeleteTeam,
    confirmDelete: confirmDeleteTeam,
    cancelDelete: cancelDeleteTeam,
    itemToDelete: itemToDeleteTeam,
    isConfirmOpen: isConfirmOpenTeam,
    msg: msgTeam,
  } = useDeleteTeam()

  const {
    handleDeletePlayerFromTeam,
    itemToDelete,
    confirmDelete,
    cancelDelete,
    isConfirmOpen,
  } = useDeletePlayerFromTeam()

  const [showForm, setShowForm] = useState<boolean>(false)

  if (isFetching) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <div>
      <p>Name: {team.name}</p>
      <p>Since: {team.since}</p>
      <p>Location: {team.location}</p>
      <p>Players list:</p>
      <AddPlayerToTeamForm teamId={team.id} />
      <ul>
        {data
          .filter((player) => player.teamId !== null)
          .map((player) => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
              key={player.id}
            >
              <li style={{ marginRight: 10 }}>
                {player.name} {player.surname}
              </li>
              <ActionButton
                label={'Remove player'}
                onClick={() => handleDeletePlayerFromTeam(player.id)}
              />
              {itemToDelete === player.id && (
                <ConfirmDialog
                  isOpen={isConfirmOpen}
                  onConfirm={confirmDelete}
                  onCancel={cancelDelete}
                  message='Are you sure you want to delete this item?'
                />
              )}
            </div>
          ))}
      </ul>
      <ActionButton
        label={'Edit'}
        onClick={() => setShowForm((prev) => !prev)}
      />
      <ActionButton
        label={'Delete'}
        onClick={() => handleDeleteTeam(team.id)}
      />
      {msgTeam !== '' ? <p>{msgTeam}</p> : null}
      {itemToDeleteTeam === team.id && (
        <ConfirmDialog
          isOpen={isConfirmOpenTeam}
          onConfirm={confirmDeleteTeam}
          onCancel={cancelDeleteTeam}
          message='Are you sure you want to delete this item?'
        />
      )}
      {showForm ? <EditTeam team={team} /> : null}
      <hr />
    </div>
  )
}
