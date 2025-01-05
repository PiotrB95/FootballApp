import { PlayerForm } from './PlayerForm'
import { PlayerEntity } from '../../types'
import { useEditPlayer } from './hooks/useEditPlayer.ts'

type EditPlayerProps = {
  player: PlayerEntity
}

export const EditPlayer = ({ player }: EditPlayerProps) => {
  const { values, isPending, handleSubmit, handleChange } =
    useEditPlayer(player)

  return (
    <PlayerForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isPending={isPending}
      values={values}
    />
  )
}
