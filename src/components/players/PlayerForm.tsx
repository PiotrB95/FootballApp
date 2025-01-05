import { ChangeEvent, FormEvent } from 'react'
import { PlayerDto } from '../../types'
import { ActionButton } from '../styled/ActionButton'
import { Input } from '../Input.tsx'

type PlayerFormProps = {
  values: PlayerDto
  isPending: boolean
  handleSubmit: (e: FormEvent) => void
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const PlayerForm = ({
  values,
  isPending,
  handleSubmit,
  handleChange,
}: PlayerFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        id='name'
        type='text'
        label='Name'
        value={values.name}
        onChange={handleChange}
      />
      <Input
        id='surname'
        type='text'
        label='Surname'
        value={values.surname}
        onChange={handleChange}
      />
      <ActionButton type='submit' disabled={isPending} label={'Save'} />
    </form>
  )
}
