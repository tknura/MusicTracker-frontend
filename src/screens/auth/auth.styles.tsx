import styled, { css } from 'styled-components'
import {
  Button,
  Typography
} from '@material-ui/core'

const RootContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    ${theme.breakpoints.down('sm')} {
      align-items: stretch;
    }
  `}
`

const FormContainer = styled.div`
  flex: 1;
  max-width: 500px;
  padding: 20px;
`

const Title = styled(Typography)`
  flex: 1;
  text-align: center;
`

const StyledHr = styled.hr`
  ${({ theme }) => css`
    margin: 35px 0;
    border-top: 1;
    border-top-style: solid;
    border-top-color: ${theme.palette.primary.main};
    border: 0;
  `}
`

const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 20px;
`

export {
  RootContainer,
  FormContainer,
  Title,
  StyledHr as Hr,
  StyledButton as Button,
}
