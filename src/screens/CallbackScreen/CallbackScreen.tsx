import { useAuthorizeSpotifyMutation } from 'api/auth'
import { useEffect } from 'react'

// TO DO
const CallbackScreen = (): JSX.Element => {
  const { mutate: authorizeSpotify } = useAuthorizeSpotifyMutation({
    onSuccess: (response) => {
      // eslint-disable-next-line no-console
      console.log(response)
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  })

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      authorizeSpotify({ code })
    }
  }, [authorizeSpotify])

  return (
    <div>
      Redirecting...
    </div>
  )
}

export { CallbackScreen }
