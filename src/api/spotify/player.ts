import { useSpotifyApi } from 'components/providers/SpotifyApiProvider'
import { useQuery, UseQueryResult } from 'react-query'
import SpotifyWebApi from 'spotify-web-api-node'

const getRecentlyPlayed = async (api: SpotifyWebApi)
: Promise<SpotifyApi.UsersRecentlyPlayedTracksResponse> => {
  const { body } = await api.getMyRecentlyPlayedTracks()
  return body
}

const useRecentlyPlayedTracks = ()
: UseQueryResult<SpotifyApi.UsersRecentlyPlayedTracksResponse, unknown> => {
  const spotifyApi = useSpotifyApi()
  return useQuery('books', () => getRecentlyPlayed(spotifyApi))
}

export { useRecentlyPlayedTracks }
