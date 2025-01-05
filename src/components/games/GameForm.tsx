import { useGetTeamsQuery } from '../../queries/team/useGetTeamsQuery.ts'
import { TeamSelect } from '../teams/TeamSelect.tsx'
import { GameTypeSelect } from './GameTypeSelect.tsx'
import { Input } from '../Input.tsx'
import { useAddGame } from './hooks/useAddGame.ts'

export const GameForm = () => {
  const { data, isFetching } = useGetTeamsQuery()
  const { values, isPending, handleSubmit, handleChange } = useAddGame()

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
      <button type='submit' disabled={isPending}>
        Save
      </button>
    </form>
  )
}
