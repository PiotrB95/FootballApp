import styled from 'styled-components'

type MenuDivProps = {
  height: number
}

const StyledDiv = styled.div<{ $height: number }>`
  width: 100px;
  height: ${(props) => props.$height}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.graphDiv};
`

export const GraphDiv = ({ height }: MenuDivProps) => {
  return <StyledDiv $height={height} />
}
