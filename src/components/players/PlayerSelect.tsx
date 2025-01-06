import { ChangeEvent } from 'react'
import { PlayerEntity } from '../../types'

export type PlayerSelectProps = {
  label?: string
  id: string
  value: string
  players: PlayerEntity[] | undefined
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  disabledTeamId?: string
}

export const PlayerSelect = ({
  label,
  id,
  value,
  players,
  onChange,
}: PlayerSelectProps) => {
  const playersName = players?.map((player) => ({
    id: player.id,
    name: player.name,
    team: player.teamId,
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
        {playersName
          ? playersName
              .filter((player) => player.team === null)
              .map((player) => (
                <option key={player.id} value={player.id}>
                  {player.name}
                </option>
              ))
          : null}
      </select>
    </div>
  )
}
