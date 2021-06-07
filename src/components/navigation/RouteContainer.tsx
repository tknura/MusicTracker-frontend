import styled, { css } from 'styled-components'

const RouteContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    min-height: 100vh;
    background-color: ${theme.palette.background.default};
  `}
`

export { RouteContainer }
