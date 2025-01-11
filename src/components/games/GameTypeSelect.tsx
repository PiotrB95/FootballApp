import { GameType } from '../../types/enums.tsx'
import { ChangeEvent } from 'react'
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

export type GameTypeSelectProps = {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  values: string
}

export const GameTypeSelect = ({ values, onChange }: GameTypeSelectProps) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor='type'>Game Type</StyledLabel>
      <StyledSelect
        id='type'
        name='type'
        onChange={onChange}
        value={values}
        required
      >
        <option value='' disabled>
          Wybierz...
        </option>
        {Object.entries(GameType).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </StyledSelect>
    </Wrapper>
  )
}
