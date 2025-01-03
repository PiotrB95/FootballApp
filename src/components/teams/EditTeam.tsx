import { ChangeEvent, FormEvent, useState } from 'react'
import { TeamDto, TeamEntity } from '../../types/team'
import { useUpdateTeamMutation } from '../../queries/team/useUpdateTeamMutation.ts'
import { TeamForm } from './TeamForm.tsx'

type EditTeamProps = {
  team: TeamEntity
}

export const EditTeam = ({ team }: EditTeamProps) => {
  const { mutate, isPending } = useUpdateTeamMutation(team.id)
  const [values, setValues] = useState<TeamDto>({
    name: team.name,
    since: team.since,
    location: team.location,
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
      name: values.name,
      since: values.since,
      location: values.location,
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
