import { useMemo, useEffect } from 'react'
import Axios from 'axios'
import constate from 'constate'
import SpotifyWebApi from 'spotify-web-api-node'

import { useSpotifyToken } from 'components/providers/AuthProvider'

const useFetchHelper = () => {
  const spotifyAccessToken = useSpotifyToken()

  const fetch = useMemo(() => {
    const instance = Axios.create({
      baseURL: process.env.REACT_APP_API_URL
    })
    return instance
  }, [])

  const spotifyApi = useMemo(() => new SpotifyWebApi(), [])
  useEffect(() => {
    if (spotifyAccessToken) {
      spotifyApi.setAccessToken(spotifyAccessToken)
    }
  }, [spotifyAccessToken, spotifyApi])

  return { fetch, spotifyApi }
}

const [
  FetchProvider,
  useFetch,
  useSpotifyApi
] = constate(
  useFetchHelper,
  value => ({ fetch: value.fetch }),
  value => value.spotifyApi,
)

export {
  FetchProvider,
  useFetch,
  useSpotifyApi,
}
