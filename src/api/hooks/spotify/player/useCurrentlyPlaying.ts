import { useQuery } from 'react-query'

import { getCurrentlyPlaying } from 'api/actions/spotify/player/getCurrentlyPlaying'
import { useSpotifyApi } from 'components/providers/SpotifyApiProvider'

export const CURRENT_PLAYING_QUERY_KEY = 'current'

export const useCurrentlyPlaying = () => {
  const spotifyApi = useSpotifyApi()
  return useQuery(CURRENT_PLAYING_QUERY_KEY, () => getCurrentlyPlaying(spotifyApi))
}
