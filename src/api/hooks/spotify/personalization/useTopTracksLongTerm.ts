import { useQuery } from 'react-query'

import { getTopTracksLongTerm } from 'api/actions/spotify/personalization/getTopTracksLongTerm'
import { useSpotifyApi } from 'components/providers/SpotifyApiProvider'

export const TOP_TRACKS_LONG_TERM_QUERY_KEY = 'tracksLong'

export const useTopTracksLongTerm = () => {
  const spotifyApi = useSpotifyApi()
  return useQuery(TOP_TRACKS_LONG_TERM_QUERY_KEY, () => getTopTracksLongTerm(spotifyApi))
}
