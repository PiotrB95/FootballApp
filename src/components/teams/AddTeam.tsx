import { ChangeEvent, FormEvent, useState } from 'react'
import { TeamForm } from './TeamForm.tsx'
import { useCreateTeamMutation } from '../../queries/team/useCreateTeamMutation.ts'
import { TeamDto } from '../../types/team'

export const AddTeam = () => {
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

  return (
    <TeamForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isPending={isPending}
      values={values}
    />
  )
}
