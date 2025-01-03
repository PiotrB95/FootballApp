import { ChangeEvent, FormEvent, useState } from 'react'
import { useCreatePlayerMutation } from '../../queries/player/useCreatePlayerMutation'
import { PlayerForm } from './PlayerForm'

export const AddPlayer = () => {
  const { mutate, isPending } = useCreatePlayerMutation()
  const [values, setValues] = useState({
    name: '',
    surname: '',
    teamId: null,
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
      teamId: null,
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
