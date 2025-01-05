import { useCreateTeamMutation } from '../../../queries/team/useCreateTeamMutation.ts'
import { TeamDto } from '../../../types/team'
import { ChangeEvent, FormEvent, useState } from 'react'

export const useAddTeam = () => {
  const { mutate, isPending } = useCreateTeamMutation()
  const [values, setValues] = useState<TeamDto>({
    name: '',
    since: null,
    location: '',
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
      since: values.since,
      location: values.location,
    })

    setValues({
      name: '',
      since: null,
      location: '',
    })
  }
  return {
    values,
    isPending,
    handleChange,
    handleSubmit,
  }
}
