import { ReactNode } from 'react'
import styled from 'styled-components'

type MenuDivProps = {
  children: ReactNode
}

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MenuDiv = ({ children }: MenuDivProps) => {
  return <StyledDiv>{children}</StyledDiv>
}
