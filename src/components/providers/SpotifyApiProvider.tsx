import { useEffect, useMemo } from 'react'
import constate from 'constate'
import SpotifyWebApi from 'spotify-web-api-node'

import { CALLBACK_ROUTE } from 'constants/routeNames'
import { useAuthSpotify, useSpotifyToken, useUserId } from 'components/providers/AuthProvider'
import { useRefreshTokensMutation } from 'api/hooks/auth/useRefreshTokensMutation'

const useSpotifyApiHelper = () => {
  const spotifyAccessToken = useSpotifyToken()
  const userId = useUserId()
  const spotifyApi = useMemo(() => new SpotifyWebApi(), [])
  const redirectUri = `${(new URL(window.location.href)).origin}${CALLBACK_ROUTE}`
  const authSpotify = useAuthSpotify()
  const { mutate: refreshMutate } = useRefreshTokensMutation({
    onSuccess: ({ access_token: newAccessToken }) => {
      authSpotify(newAccessToken)
    },
  })

  useEffect(() => {
    if (spotifyAccessToken) {
      spotifyApi.setAccessToken(spotifyAccessToken)
    } else if (userId) {
      refreshMutate({ userId, apiType: 'Spotify' })
    }
  }, [refreshMutate, spotifyAccessToken, spotifyApi, userId])

  return { spotifyApi, redirectUri }
}

const [
  SpotifyApiProvider,
  useSpotifyApi,
  useRedirectUri
] = constate(
  useSpotifyApiHelper,
  value => value.spotifyApi,
  value => value.redirectUri,
)

export {
  SpotifyApiProvider,
  useSpotifyApi,
  useRedirectUri
}
