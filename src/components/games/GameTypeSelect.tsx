import { GameType } from '../../types/enums.tsx'
import { ChangeEvent } from 'react'

export type GameTypeSelectProps = {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  values: string
}

export const GameTypeSelect = ({ values, onChange }: GameTypeSelectProps) => {
  return (
    <div>
      <div>
        <label htmlFor='type'>Game Type</label>
      </div>
      <select id='type' name='type' onChange={onChange} value={values} required>
        <option value='' disabled>
          Wybierz...
        </option>
        {Object.entries(GameType).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}
