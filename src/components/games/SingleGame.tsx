import { useGetSingleTeamQuery } from '../../queries/team/useGetSingleTeamQuery'
import { GameEntity } from '../../types'
import { ActionButton } from '../styled/ActionButton.tsx'
import { EditGame } from './EditGame.tsx'
import { useState } from 'react'
import { ConfirmDialog } from '../ConfirmDialog.tsx'
import { useDeleteGame } from './hooks/useDeleteGame.ts'

type SingleGameProps = {
  game: GameEntity
  actionBtn?: boolean
}

export const SingleGame = ({ game, actionBtn }: SingleGameProps) => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const { msg, isConfirmOpen, confirmDelete, cancelDelete, handleDelete } =
    useDeleteGame()

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
      {actionBtn ? (
        <>
          <ActionButton
            label={'Edit'}
            onClick={() => setShowForm((prev) => !prev)}
          />
          {showForm ? <EditGame game={game} /> : null}
          <ActionButton
            label={'Delete'}
            onClick={() => handleDelete(game.id)}
          />
          {msg !== '' ? <p>{msg}</p> : null}
          <ConfirmDialog
            isOpen={isConfirmOpen}
            onConfirm={confirmDelete}
            onCancel={cancelDelete}
            message='Are you sure you want to delete this item?'
            successMessage={msg}
          />
        </>
      ) : null}
    </div>
  )
}
