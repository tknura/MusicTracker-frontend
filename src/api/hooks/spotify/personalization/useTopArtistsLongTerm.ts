import { useQuery } from 'react-query'

import { getTopArtistsLongTerm } from 'api/actions/spotify/personalization/getTopArtistsLongTerm'
import { useSpotifyApi } from 'components/providers/SpotifyApiProvider'

export const TOP_ARTIST_LONG_TERM_QUERY_KEY = 'artistsLong'

export const useTopArtistsLongTerm = () => {
  const spotifyApi = useSpotifyApi()
  return useQuery(TOP_ARTIST_LONG_TERM_QUERY_KEY, () => getTopArtistsLongTerm(spotifyApi))
}
