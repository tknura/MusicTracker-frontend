import { useSpotifyApi } from 'components/providers/FetchProvider'
import { useQuery, UseQueryResult } from 'react-query'
import SpotifyWebApi from 'spotify-web-api-node'

const getRecentlyPlayed = async (api: SpotifyWebApi): Promise<unknown> => {
  const { body } = await api.getMyRecentlyPlayedTracks()
  return body
}

const useRecentlyPlayedTracks = ()
: UseQueryResult<unknown, unknown> => {
  const spotifyApi = useSpotifyApi()
  return useQuery('books', () => getRecentlyPlayed(spotifyApi))
}

export { useRecentlyPlayedTracks }
