import { ChangeEvent, FormEvent, useState } from 'react'
import { GameDto } from '../../../types'
import { useCreateGameMutation } from '../../../queries/game/useCreateGameMutation.ts'

export const useAddGame = () => {
  const { mutate, isPending } = useCreateGameMutation()

  const [values, setValues] = useState<GameDto>({
    teamA: '',
    teamB: '',
    type: '',
    date: '',
    time: 0,
    location: '',
    scoreTeamA: 0,
    scoreTeamB: 0,
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
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
      teamA: values.teamA,
      teamB: values.teamB,
      type: values.type,
      date: values.date,
      time: values.time,
      location: values.location,
      scoreTeamA: values.scoreTeamA,
      scoreTeamB: values.scoreTeamB,
    })

    setValues({
      teamA: '',
      teamB: '',
      type: '',
      date: '',
      time: 0,
      location: '',
      scoreTeamA: 0,
      scoreTeamB: 0,
    })
  }

  return {
    values,
    isPending,
    handleChange,
    handleSubmit,
  }
}
