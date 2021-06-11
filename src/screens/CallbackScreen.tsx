import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { Spinner, Center } from '@chakra-ui/react'

import { useAuthorizeSpotifyMutation } from 'api/auth'
import { useAuthSpotify } from 'components/providers/AuthProvider'
import { APP_CONNECTION_ROUTE } from 'constants/routeNames'

const CallbackScreen = (): JSX.Element => {
  const authSpotify = useAuthSpotify()
  const history = useHistory()

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
    if (code) {
      authorizeSpotify({ code })
    }
  }, [authorizeSpotify])

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
