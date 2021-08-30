import { Text } from '@chakra-ui/react'
import styled from 'styled-components'

const LogoContainer = styled.div`
  position: relative;
`

const AppName = styled(Text)`
  position: absolute;
  bottom: 0;
  right: 10%;
`

export {
  LogoContainer,
  AppName,
}
