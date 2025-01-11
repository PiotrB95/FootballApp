import { useCreatePlayerMutation } from '../../../queries/player/useCreatePlayerMutation.ts'
import { ChangeEvent, FormEvent, useState } from 'react'

export const useAddPlayer = () => {
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

  return {
    values,
    isPending,
    handleChange,
    handleSubmit,
  }
}
