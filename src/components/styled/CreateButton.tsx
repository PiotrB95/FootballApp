import styled from 'styled-components'

type ButtonProps = {
  label: string
  onClick: () => void
}

const StyledButton = styled.button`
  border: 2px solid ${(props) => props.theme.colors.buttonBorder};
  padding: 10px;
  margin: 10px 0 10px 0;
  min-height: 20px;
  min-width: 60px;
  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.buttonText};
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonHoverBackgroud};
    color: ${(props) => props.theme.colors.buttonHoverColor};
  }
`

export const CreateButton = ({ label, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>
}
