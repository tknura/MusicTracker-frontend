import { useQuery } from 'react-query'

import { getTopTracksMediumTerm } from 'api/actions/spotify/personalization/getTopTracksMediumTerm'
import { useSpotifyApi } from 'components/providers/SpotifyApiProvider'

export const TOP_TRACKS_MEDIUM_TERM_QUERY_KEY = 'tracksMedium'

export const useTopTracksMediumTerm = () => {
  const spotifyApi = useSpotifyApi()
  return useQuery(TOP_TRACKS_MEDIUM_TERM_QUERY_KEY, () => getTopTracksMediumTerm(spotifyApi))
}
