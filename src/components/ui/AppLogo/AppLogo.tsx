import { useTranslation } from 'react-i18next'
import { Image } from '@chakra-ui/react'

import Logo from 'assets/logo.png'
import * as Styled from './AppLogo.styles'

const AppLogo = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Styled.LogoContainer>
      <Image
        src={Logo}
        alt="Spotify"
        w="100%"
      />
      <Styled.AppName colorScheme="secondary">
        {t('common.appName')}
      </Styled.AppName>
    </Styled.LogoContainer>
  )
}

export { AppLogo }
