import { useUpdatePlayerMutation } from '../../../queries/player/useUpdatePlayerMutation.ts'
import { ChangeEvent, FormEvent, useState } from 'react'
import { PlayerEntity } from '../../../types'

export const useEditPlayer = (player: PlayerEntity) => {
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

  return {
    values,
    isPending,
    handleChange,
    handleSubmit,
  }
}
