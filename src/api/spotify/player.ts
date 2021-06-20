import { useSpotifyApi } from 'components/providers/FetchProvider'
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

const getCurrentlyPlaying = async (api: SpotifyWebApi)
: Promise<SpotifyApi.CurrentlyPlayingResponse> => {
  const { body } = await api.getMyCurrentPlayingTrack()
  return body
}

const useCurrentlyPlaying = ()
: UseQueryResult<SpotifyApi.CurrentlyPlayingResponse, unknown> => {
  const spotifyApi = useSpotifyApi()
  return useQuery('current', () => getCurrentlyPlaying(spotifyApi))
}

export { useRecentlyPlayedTracks, useCurrentlyPlaying }
