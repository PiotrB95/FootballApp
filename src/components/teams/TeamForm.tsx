import { ChangeEvent, FormEvent } from 'react'
import { TeamDto } from '../../types/team'

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
          <label htmlFor='since'>Since</label>
        </div>
        <input
          name='since'
          id='since'
          value={values.since || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <label htmlFor='location'>Location</label>
        </div>
        <input
          name='location'
          id='location'
          value={values.location}
          onChange={handleChange}
        />
      </div>
      <button type='submit' disabled={isPending}>
        Save
      </button>
    </form>
  )
}
