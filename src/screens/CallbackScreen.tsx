import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { Spinner, Center } from '@chakra-ui/react'

import { useAuthorizeSpotifyMutation } from 'api/hooks/auth/mutations/useAuthorizeSpotifyMutation'
import { useAuthSpotify, useUserId } from 'components/providers/AuthProvider'
import { APP_CONNECTION_ROUTE } from 'constants/routeNames'
import { useRedirectUri } from 'components/providers/SpotifyApiProvider'

const CallbackScreen = (): JSX.Element => {
  const authSpotify = useAuthSpotify()
  const history = useHistory()
  const userId = useUserId()
  const redirectUri = useRedirectUri()

  const { mutate: authorizeSpotify } = useAuthorizeSpotifyMutation({
    onSuccess: ({ access_token: accessToken }) => {
      authSpotify(accessToken)
      history.push(APP_CONNECTION_ROUTE)
    },
    onError: () => {
      history.push(APP_CONNECTION_ROUTE)
    }
  })

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code && userId && redirectUri) {
      authorizeSpotify({ code, userId, redirectUri })
    }
  }, [authorizeSpotify, redirectUri, userId])

  return (
    <Center h="100%">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="red"
        size="xl"
      />
    </Center>
  )
}

export { CallbackScreen }
