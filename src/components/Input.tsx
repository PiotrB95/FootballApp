import { ChangeEvent } from 'react'

export type InputProps = {
  id: string
  type: 'number' | 'text' | 'date' | 'time' | 'datetime-local'
  label?: string
  value?: string | number | null
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ id, label, type, value, onChange }: InputProps) => {
  return (
    <div>
      {label ? (
        <div>
          <label htmlFor={id}>{label}</label>
        </div>
      ) : null}
      <input
        name={id}
        id={id}
        type={type}
        value={value || ''}
        onChange={onChange}
        required
      />
    </div>
  )
}
