import { useGetTeamsQuery } from '../../queries/team/useGetTeamsQuery.ts'
import { TeamSelect } from '../teams/TeamSelect.tsx'
import { GameTypeSelect } from './GameTypeSelect.tsx'
import { Input } from '../Input.tsx'
import { ChangeEvent, FormEvent } from 'react'
import { GameDto } from '../../types'
import { ActionButton } from '../styled/ActionButton.tsx'

type GameFormProps = {
  handleSubmit: (e: FormEvent) => void
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void
  isPending: boolean
  values: GameDto
}

export const GameForm = ({
  handleSubmit,
  handleChange,
  isPending,
  values,
}: GameFormProps) => {
  const { data, isFetching } = useGetTeamsQuery()
  if (isFetching) return <p>Loading...</p>

  return (
    <form onSubmit={handleSubmit}>
      <TeamSelect
        id='teamA'
        label='Team A'
        value={values.teamA}
        teams={data}
        onChange={handleChange}
        disabledTeamId={values.teamB}
      />
      <Input
        id='scoreTeamA'
        label='Score Team A'
        type='number'
        value={values.scoreTeamA}
        onChange={handleChange}
      />
      <TeamSelect
        id='teamB'
        label='Team B'
        value={values.teamB}
        teams={data}
        onChange={handleChange}
        disabledTeamId={values.teamA}
      />
      <Input
        id='scoreTeamB'
        label='Score Team B'
        type='number'
        value={values.scoreTeamB}
        onChange={handleChange}
      />
      <GameTypeSelect values={values.type} onChange={handleChange} />
      <Input
        id='date'
        label='Date'
        type='datetime-local'
        value={values.date}
        onChange={handleChange}
      />
      <Input
        id='time'
        label='Time'
        type='number'
        value={values.time}
        onChange={handleChange}
      />
      <Input
        id='location'
        label='Location'
        type='text'
        value={values.location}
        onChange={handleChange}
      />
      <ActionButton label='Save' type='submit' disabled={isPending} />
    </form>
  )
}
