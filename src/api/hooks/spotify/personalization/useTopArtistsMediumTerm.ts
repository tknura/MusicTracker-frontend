import { useQuery } from 'react-query'

import { getTopArtistsMediumTerm } from 'api/actions/spotify/personalization/getTopArtistsMediumTerm'
import { useSpotifyApi } from 'components/providers/SpotifyApiProvider'

export const TOP_ARTIST_MEDIUM_TERM_QUERY_KEY = 'artistsMedium'

export const useTopArtistsMediumTerm = () => {
  const spotifyApi = useSpotifyApi()
  return useQuery(TOP_ARTIST_MEDIUM_TERM_QUERY_KEY, () => getTopArtistsMediumTerm(spotifyApi))
}
