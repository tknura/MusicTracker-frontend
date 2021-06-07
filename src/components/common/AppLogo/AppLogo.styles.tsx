import { Typography } from '@material-ui/core'
import styled from 'styled-components'

const SpotifyLogo = styled.img`
  width: 100%;
`

const LogoContainer = styled.div`
  position: relative;
`

const AppName = styled(Typography)`
  position: absolute;
  bottom: 0;
  right: 10%;
  font-weight: 800;
`

export {
  SpotifyLogo,
  LogoContainer,
  AppName,
}
