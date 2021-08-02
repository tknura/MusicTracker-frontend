import { useQuery } from 'react-query'

import { getTopArtistsShortTerm } from 'api/actions/spotify/personalization/getTopArtistsShortTerm'
import { useSpotifyApi } from 'components/providers/SpotifyApiProvider'

export const TOP_ARTISTS_SHORT_TERM_QUERY_KEY = 'artistsShort'

export const useTopArtistsShortTerm = () => {
  const spotifyApi = useSpotifyApi()
  return useQuery(TOP_ARTISTS_SHORT_TERM_QUERY_KEY, () => getTopArtistsShortTerm(spotifyApi))
}
