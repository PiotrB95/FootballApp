import { ChangeEvent } from 'react'
import { TeamEntity } from '../../types/team'

export type TeamSelectProps = {
  label?: string
  id: string
  value: string
  teams: TeamEntity[] | undefined
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  disabledTeamId?: string
}

export const TeamSelect = ({
  label,
  id,
  value,
  teams,
  onChange,
  disabledTeamId,
}: TeamSelectProps) => {
  const teamsName = teams?.map((team) => ({
    id: team.id,
    name: team.name,
  }))

  return (
    <div>
      {label ? (
        <div>
          <label htmlFor={id}>{label}</label>
        </div>
      ) : null}
      <select id={id} name={id} onChange={onChange} value={value} required>
        <option value='' disabled>
          Wybierz...
        </option>
        {teamsName
          ? teamsName
              .filter((team) => team.id !== disabledTeamId)
              .map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))
          : null}
      </select>
    </div>
  )
}
