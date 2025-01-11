import { TeamEntity } from '../../types/team'
import { TeamForm } from './TeamForm.tsx'
import { useEditTeam } from './hooks/useEditTeam.ts'

type EditTeamProps = {
  team: TeamEntity
}

export const EditTeam = ({ team }: EditTeamProps) => {
  const { values, isPending, handleSubmit, handleChange } = useEditTeam(team)

  return (
    <TeamForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isPending={isPending}
      values={values}
    />
  )
}
