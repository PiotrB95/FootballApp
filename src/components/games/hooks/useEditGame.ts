import { ChangeEvent, FormEvent, useState } from 'react'
import { GameDto, GameEntity } from '../../../types'
import { useUpdateGameMutation } from '../../../queries/game/useEditGameMutation.ts'

export const useEditGame = (game: GameEntity) => {
  const { mutate, isPending } = useUpdateGameMutation(game.id)

  const [values, setValues] = useState<GameDto>({
    teamA: game.teamA,
    teamB: game.teamB,
    type: game.type,
    date: game.date,
    time: game.time,
    location: game.location,
    scoreTeamA: game.scoreTeamA,
    scoreTeamB: game.scoreTeamB,
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
