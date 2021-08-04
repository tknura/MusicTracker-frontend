import { getTopTracksShortTerm } from 'api/actions/spotify/personalization/getTopTracksShortTerm'
import { useSpotifyApi } from 'components/providers/SpotifyApiProvider'
import { useQuery } from 'react-query'

export const TOP_TRACKS_SHORT_TERM_QUERY_KEY = 'tracksShort'

export const useTopTracksShortTerm = () => {
  const spotifyApi = useSpotifyApi()
  return useQuery(TOP_TRACKS_SHORT_TERM_QUERY_KEY, () => getTopTracksShortTerm(spotifyApi))
}
