import { TeamForm } from './TeamForm.tsx'
import { useAddTeam } from './hooks/useAddTeam.ts'

export const AddTeam = () => {
  const { values, isPending, handleSubmit, handleChange } = useAddTeam()

  return (
    <TeamForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isPending={isPending}
      values={values}
    />
  )
}
