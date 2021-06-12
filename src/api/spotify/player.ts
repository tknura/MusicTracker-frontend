import { useSpotifyApi } from 'components/providers/FetchProvider'
import { useQuery, UseQueryResult } from 'react-query'
import SpotifyWebApi from 'spotify-web-api-node'

const getTrack = async (api: SpotifyWebApi, trackId: string)
: Promise<SpotifyApi.SingleTrackResponse> => {
  const { body } = await api.getTrack(trackId)
  return body
}

const useTrack = (trackId: string)
: UseQueryResult<SpotifyApi.SingleTrackResponse, unknown> => {
  const spotifyApi = useSpotifyApi()
  return useQuery(['track', trackId], () => getTrack(spotifyApi, trackId))
}

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

export { useRecentlyPlayedTracks, useTrack }
