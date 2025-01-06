import { useState } from 'react'
import { useGetPlayersForTeamQuery } from '../../queries/player/useGetPlayersForTeamQuery'
import { TeamEntity } from '../../types/team'
import { ActionButton } from '../styled/ActionButton'
import { EditTeam } from './EditTeam.tsx'
import { useDeleteTeamMutation } from '../../queries/team/useDeleteTeamMutation.ts'
import { useDeletePlayerFromTeam } from '../players/hooks/useDeletePlayerFromTeam.ts'
import { ConfirmDialog } from '../ConfirmDialog.tsx'
import { AddPlayerToTeamForm } from './AddPlayerToTeamForm.tsx'

type SingleTeamProps = {
  team: TeamEntity
}

export const SingleTeam = ({ team }: SingleTeamProps) => {
  const { data, isFetching } = useGetPlayersForTeamQuery(team.id)
  const { mutate } = useDeleteTeamMutation()
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

  const handleDeleteTeam = (id: string) => {
    mutate(id)
  }

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
            <div key={player.id}>
              <li>
                {player.name} {player.surname}
              </li>
              <button onClick={() => handleDeletePlayerFromTeam(player.id)}>
                X
              </button>
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
      {showForm ? <EditTeam team={team} /> : null}
      <hr />
    </div>
  )
}
