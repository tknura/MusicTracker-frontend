import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { Button, Link, Select, Stack, useColorMode, VStack } from '@chakra-ui/react'
import SpotifyWebApi from 'spotify-web-api-node'

import { scopes } from 'api/spotify/scopes'
import { CALLBACK_ROUTE, MAIN_ROUTE } from 'constants/routeNames'
import { useLogout, useSpotifyToken } from 'components/providers/AuthProvider'

const AppConnectionsScreen = (): JSX.Element => {
  const { t, i18n } = useTranslation()
  const history = useHistory()
  const spotifyApiToken = useSpotifyToken()
  const logout = useLogout()
  const { colorMode, toggleColorMode } = useColorMode()

  const spotifyApiUrlGen = new SpotifyWebApi({
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    redirectUri: `${(new URL(window.location.href)).origin}${CALLBACK_ROUTE}`,
  })

  const authorizeUrl = spotifyApiUrlGen?.createAuthorizeURL(scopes, '')

  const handleRedirect = () => {
    if (spotifyApiToken) {
      history.push(MAIN_ROUTE)
    } else {
      logout()
    }
  }

  return (
    <VStack
      h="100vh"
      w="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Stack w="300px" spacing="5">
        <Link href={authorizeUrl}>
          <Button mr={20} w="100%">
            {spotifyApiToken ? t('common.connectedSpotify') : t('common.loginSpotify') }
          </Button>
        </Link>
        <Select
          value={i18n.language}
          onChange={(event) => i18n.changeLanguage(event.currentTarget.value)}
        >
          <option value="en">English</option>
          <option value="pl">Polski</option>
        </Select>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light'
            ? t('screens.settings.toggleDarkTheme')
            : t('screens.settings.toggleLightTheme')}
        </Button>
        <Button colorScheme="primary" onClick={handleRedirect}>
          {spotifyApiToken ? t('screens.settings.backMain') : t('common.logout')}
        </Button>
      </Stack>
    </VStack>
  )
}

export { AppConnectionsScreen }
