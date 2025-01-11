import { useUpdatePlayerTeamMutation } from '../../../queries/player/useUpdatePlayerTeamMutation.ts'
import { ChangeEvent, FormEvent, useState } from 'react'

export const useAddPlayerToTeam = () => {
  const { mutate, isPending } = useUpdatePlayerTeamMutation()

  const [values, setValues] = useState({
    teamId: '',
    playerId: '',
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

  const handleAddPlayerToTeam = (e: FormEvent) => {
    e.preventDefault()

    mutate({ playerId: values.playerId, payload: { teamId: values.teamId } })
    setValues({
      teamId: '',
      playerId: '',
    })
  }

  return {
    values,
    isPending,
    handleAddPlayerToTeam,
    handleChange,
  }
}
