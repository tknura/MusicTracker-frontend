import { useEffect, useMemo, useState } from 'react'
import constate from 'constate'
import SpotifyWebApi from 'spotify-web-api-node'

import { CALLBACK_ROUTE } from 'constants/routeNames'
import { useAuthSpotify, useSpotifyToken, useUserId } from 'components/providers/AuthProvider'
import { useRefreshTokensMutation } from 'api/hooks/auth/mutations/useRefreshTokensMutation'

const useSpotifyApiHelper = () => {
  const spotifyAccessToken = useSpotifyToken()
  const userId = useUserId()
  const authSpotify = useAuthSpotify()

  const [isTokenRefreshing, setTokenRefreshing] = useState<boolean>(true)

  const spotifyApi = useMemo(() => new SpotifyWebApi(), [])
  const redirectUri = `${(new URL(window.location.href)).origin}${CALLBACK_ROUTE}`

  const { mutateAsync: refreshMutate } = useRefreshTokensMutation({
    onSuccess: ({ access_token: newAccessToken }) => {
      authSpotify(newAccessToken)
    },
  })

  useEffect(() => {
    const refresh = async () => {
      setTokenRefreshing(true)
      if (spotifyAccessToken) {
        spotifyApi.setAccessToken(spotifyAccessToken)
      } else if (userId) {
        await refreshMutate({ userId, apiType: 'Spotify' })
      }
      setTokenRefreshing(false)
    }

    refresh()
  }, [refreshMutate, spotifyAccessToken, spotifyApi, userId])

  return { spotifyApi, redirectUri, isTokenRefreshing }
}

const [
  SpotifyApiProvider,
  useSpotifyApi,
  useRedirectUri,
  useIsTokenRefreshing,
] = constate(
  useSpotifyApiHelper,
  value => value.spotifyApi,
  value => value.redirectUri,
  value => value.isTokenRefreshing
)

export {
  SpotifyApiProvider,
  useSpotifyApi,
  useRedirectUri,
  useIsTokenRefreshing,
}
