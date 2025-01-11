import { ChangeEvent } from 'react'
import { TeamEntity } from '../../types/team'
import styled from 'styled-components'

const StyledSelect = styled.select`
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  background-color: #e3e3e3;
  font-size: 16px;
  color: #333;
  outline: none;
  cursor: pointer;
  transition:
    background-color 0.3s,
    box-shadow 0.3s;

  &:focus {
    background-color: #a0c0a1;
    box-shadow: 0 0 5px rgba(221, 221, 221, 0.5);
    color: #fff;
  }
`

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 8px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 25%;
`

export type TeamSelectProps = {
  label?: string
  id: string
  value: string
  teams: TeamEntity[] | undefined
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  disabledTeamId?: string
}

export const TeamSelect = ({
  label,
  id,
  value,
  teams,
  onChange,
  disabledTeamId,
}: TeamSelectProps) => {
  const teamsName = teams?.map((team) => ({
    id: team.id,
    name: team.name,
  }))

  return (
    <Wrapper>
      {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : null}
      <StyledSelect
        id={id}
        name={id}
        onChange={onChange}
        value={value}
        required
      >
        <option value='' disabled>
          Wybierz...
        </option>
        {teamsName
          ? teamsName
              .filter((team) => team.id !== disabledTeamId)
              .map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))
          : null}
      </StyledSelect>
    </Wrapper>
  )
}
