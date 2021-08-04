import { useQuery } from 'react-query'

import { getTrack } from 'api/actions/spotify/tracks/getTrack'
import { useSpotifyApi } from 'components/providers/SpotifyApiProvider'

export const TRACK_QUERY_KEY = 'tracks'

export const useTrack = (trackId: string) => {
  const spotifyApi = useSpotifyApi()
  return useQuery([TRACK_QUERY_KEY, trackId], () => getTrack(spotifyApi, trackId))
}
