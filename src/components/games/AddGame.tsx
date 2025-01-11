import { useAddGame } from './hooks/useAddGame.ts'
import { GameForm } from './GameForm.tsx'

export const AddGame = () => {
  const { values, isPending, handleSubmit, handleChange } = useAddGame()

  return (
    <GameForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isPending={isPending}
      values={values}
    />
  )
}
