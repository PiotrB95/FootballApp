import { ChangeEvent } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  background-color: #e3e3e3;
  font-size: 16px;
  color: #333;
  outline: none;
  transition:
    background-color 0.3s,
    box-shadow 0.3s;

  &:focus {
    background-color: #a0c0a1;
    box-shadow: 0 0 5px rgba(221, 221, 221, 0.5);
  }

  &::placeholder {
    color: #a0c0a1;
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

export type InputProps = {
  id: string
  type: 'number' | 'text' | 'date' | 'time' | 'datetime-local'
  label?: string
  value?: string | number | null
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ id, label, type, value, onChange }: InputProps) => {
  return (
    <Wrapper>
      {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : null}
      <StyledInput
        name={id}
        id={id}
        type={type}
        value={value || ''}
        onChange={onChange}
        required
      />
    </Wrapper>
  )
}
