import { useTranslation } from 'react-i18next'

import Logo from 'assets/logo.png'
import * as Styled from './AppLogo.styles'

const AppLogo = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Styled.LogoContainer>
      <Styled.SpotifyLogo
        src={Logo}
        alt="Spotify"
      />
      <Styled.AppName color="primary">
        {t('common.appName')}
      </Styled.AppName>
    </Styled.LogoContainer>
  )
}

export { AppLogo }
