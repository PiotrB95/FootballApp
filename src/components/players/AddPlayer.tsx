import { PlayerForm } from './PlayerForm'
import { useAddPlayer } from './hooks/useAddPlayer.ts'

export const AddPlayer = () => {
  const { values, isPending, handleSubmit, handleChange } = useAddPlayer()

  return (
    <PlayerForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isPending={isPending}
      values={values}
    />
  )
}
