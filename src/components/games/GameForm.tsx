import { ChangeEvent, FormEvent } from 'react'
import { GameDto } from '../../types'
import { GameType } from '../../types/enums.tsx'
import { useGetTeamsQuery } from '../../queries/team/useGetTeamsQuery.ts'

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

  const teamsName = data?.map((team) => ({
    id: team.id,
    name: team.name,
  }))

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor='teamA'>Team A</label>
        </div>
        <select
          id='teamA'
          name='teamA'
          onChange={handleChange}
          value={values.teamA}
        >
          <option value='' disabled>
            Wybierz...
          </option>
          {teamsName
            ? teamsName.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))
            : null}
        </select>
      </div>
      <div>
        <div>
          <label htmlFor='teamB'>Team B</label>
        </div>
        <select
          id='teamB'
          name='teamB'
          onChange={handleChange}
          value={values.teamB}
        >
          <option value='' disabled>
            Wybierz...
          </option>
          {teamsName
            ? teamsName.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))
            : null}
        </select>
      </div>
      <div>
        <div>
          <label htmlFor='type'>Game Type</label>
        </div>
        <select
          id='type'
          name='type'
          onChange={handleChange}
          value={values.type}
        >
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
      <div>
        <div>
          <label htmlFor='date'>Date</label>
        </div>
        <input
          type='datetime-local'
          name='date'
          id='date'
          value={values.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <label htmlFor='time'>Game time</label>
        </div>
        <input
          name='time'
          id='time'
          type='number'
          min='0'
          max='120'
          value={values.time}
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
