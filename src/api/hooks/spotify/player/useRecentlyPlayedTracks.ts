import { useQuery } from 'react-query'

import { getRecentlyPlayed } from 'api/actions/spotify/player/getRecentlyPlayed'
import { useSpotifyApi } from 'components/providers/SpotifyApiProvider'

export const RECENTLY_PLAYED_TRACKS_QUERY_KEY = 'recentTracks'

export const useRecentlyPlayedTracks = () => {
  const spotifyApi = useSpotifyApi()
  return useQuery(RECENTLY_PLAYED_TRACKS_QUERY_KEY, () => getRecentlyPlayed(spotifyApi))
}
