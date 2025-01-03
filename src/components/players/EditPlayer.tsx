import { ChangeEvent, FormEvent, useState } from 'react'
import { PlayerForm } from './PlayerForm'
import { useUpdatePlayerMutation } from '../../queries/player/useUpdatePlayerMutation'
import { PlayerEntity } from '../../types'

type EditPlayerProps = {
  player: PlayerEntity
}

export const EditPlayer = ({ player }: EditPlayerProps) => {
  const { mutate, isPending } = useUpdatePlayerMutation(player.id)
  const [values, setValues] = useState({
    name: player.name,
    surname: player.surname,
    teamId: player.teamId,
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target

    setValues((prevValues) => ({
      ...prevValues,
      [name]: type === 'number' ? Number(value) : value,
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    mutate({
      name: values.name,
      surname: values.surname,
      teamId: player.teamId,
    })

    setValues({
      name: '',
      surname: '',
      teamId: null,
    })
  }

  return (
    <PlayerForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isPending={isPending}
      values={values}
    />
  )
}
