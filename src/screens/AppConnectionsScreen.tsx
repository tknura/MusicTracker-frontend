import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { Button, Link, VStack } from '@chakra-ui/react'
import SpotifyWebApi from 'spotify-web-api-node'

import { scopes } from 'api/spotify/scopes'
import { CALLBACK_ROUTE, MAIN_ROUTE } from 'constants/routeNames'
import { useSpotifyToken } from 'components/providers/AuthProvider'

const AppConnectionsScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const history = useHistory()
  const spotifyApiToken = useSpotifyToken()

  const spotifyApiUrlGen = new SpotifyWebApi({
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    redirectUri: `${(new URL(window.location.href)).origin}${CALLBACK_ROUTE}`,
  })

  const authorizeUrl = spotifyApiUrlGen?.createAuthorizeURL(scopes, '')

  const handleRedirectToMain = () => history.push(MAIN_ROUTE)

  return (
    <VStack
      h="100vh"
      w="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Link href={authorizeUrl} m="2">
        <Button mr={20} w="100%">
          {spotifyApiToken ? t('common.connectedSpotify') : t('common.loginSpotify') }
        </Button>
      </Link>
      <Button m="2" onClick={handleRedirectToMain}>
        {t('common.back')}
      </Button>
    </VStack>
  )
}

export { AppConnectionsScreen }
