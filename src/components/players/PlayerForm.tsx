import { ChangeEvent, FormEvent } from 'react'
import { PlayerDto } from '../../types'
import { ActionButton } from '../styled/ActionButton'

type PlayerFormProps = {
  handleSubmit: (e: FormEvent) => void
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  isPending: boolean
  values: Omit<PlayerDto, 'teamId'>
}

export const PlayerForm = ({
  handleSubmit,
  handleChange,
  isPending,
  values,
}: PlayerFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
        </div>
        <input
          type='text'
          name='name'
          id='name'
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <label htmlFor='surname'>Surname</label>
        </div>
        <input
          name='surname'
          id='surname'
          value={values.surname}
          onChange={handleChange}
        />
      </div>
      <ActionButton type='submit' disabled={isPending} label={'Save'} />
    </form>
  )
}
