import styled from 'styled-components'

type ButtonProps = {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
}

const StyledButton = styled.button`
  border: 2px solid ${(props) => props.theme.colors.buttonBorder};
  padding: 5px;
  margin: 5px 0 5px 0;
  min-height: 25px;
  min-width: 25px;
  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonText};
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHoverBackgroud};
    color: ${(props) => props.theme.colors.buttonHoverColor};
  }
`

export const ActionButton = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} type={type} disabled={disabled}>
      {label}
    </StyledButton>
  )
}
