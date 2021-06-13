import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { Button, Center, Link } from '@chakra-ui/react'
import SpotifyWebApi from 'spotify-web-api-node'

import { scopes } from 'api/spotify/scopes'
import { CALLBACK_ROUTE, MAIN_ROUTE } from 'constants/routeNames'

const AppConnectionsScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const history = useHistory()

  const spotifyApiUrlGen = new SpotifyWebApi({
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    redirectUri: `${(new URL(window.location.href)).origin}${CALLBACK_ROUTE}`,
  })

  const authorizeUrl = spotifyApiUrlGen?.createAuthorizeURL(scopes, '')

  const handleRedirectToMain = () => {
    history.push(MAIN_ROUTE)
  }

  return (
    <Center h="100%">
      <Link href={authorizeUrl} mr={20}>
        {t('common.loginSpotify')}
      </Link>
      <Button onClick={handleRedirectToMain}>
        Go to main
      </Button>
    </Center>
  )
}

export { AppConnectionsScreen }
