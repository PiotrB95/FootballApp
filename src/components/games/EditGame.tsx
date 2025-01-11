import { GameForm } from './GameForm.tsx'
import { useEditGame } from './hooks/useEditGame.ts'
import { GameEntity } from '../../types'

interface EditGameProps {
  game: GameEntity
}

export const EditGame = ({ game }: EditGameProps) => {
  const { values, isPending, handleSubmit, handleChange } = useEditGame(game)

  return (
    <GameForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isPending={isPending}
      values={values}
    />
  )
}
