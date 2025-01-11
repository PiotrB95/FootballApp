import { ChangeEvent, FormEvent } from 'react'
import { TeamDto } from '../../types/team'
import { Input } from '../Input.tsx'
import { ActionButton } from '../styled/ActionButton.tsx'

type TeamFormProps = {
  handleSubmit: (e: FormEvent) => void
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  isPending: boolean
  values: TeamDto
}

export const TeamForm = ({
  handleSubmit,
  handleChange,
  isPending,
  values,
}: TeamFormProps) => {
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
        id='since'
        type='number'
        label='Since'
        value={values.since}
        onChange={handleChange}
      />
      <Input
        id='location'
        type='text'
        label='Location'
        value={values.location}
        onChange={handleChange}
      />
      <ActionButton label='Save' type='submit' disabled={isPending} />
    </form>
  )
}
