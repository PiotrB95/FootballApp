import { TeamEntity } from '../../types/team'
import { TeamForm } from './TeamForm.tsx'
import { useEditForm } from './hooks/useEditForm.ts'

type EditTeamProps = {
  team: TeamEntity
}

export const EditTeam = ({ team }: EditTeamProps) => {
  const { values, isPending, handleSubmit, handleChange } = useEditForm(team)

  return (
    <TeamForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isPending={isPending}
      values={values}
    />
  )
}
