import { useSpotifyApi } from 'components/providers/FetchProvider'
import { useQuery, UseQueryResult } from 'react-query'
import SpotifyWebApi from 'spotify-web-api-node'

const getTopArtists = async (api: SpotifyWebApi, timeRange: 'long_term' | 'medium_term' | 'short_term')
: Promise<SpotifyApi.UsersTopArtistsResponse> => {
  const { body } = await api.getMyTopArtists({ time_range: timeRange })
  return body
}

const useTopArtists = (timeRange: 'long_term' | 'medium_term' | 'short_term')
: UseQueryResult<SpotifyApi.UsersTopArtistsResponse, unknown> => {
  const spotifyApi = useSpotifyApi()
  return useQuery(['artists', timeRange], () => getTopArtists(spotifyApi, timeRange))
}

const getTopTracks = async (api: SpotifyWebApi, timeRange: 'long_term' | 'medium_term' | 'short_term')
: Promise<SpotifyApi.UsersTopTracksResponse> => {
  const { body } = await api.getMyTopTracks({ time_range: timeRange })
  return body
}

const useTopTracks = (timeRange: 'long_term' | 'medium_term' | 'short_term')
: UseQueryResult<SpotifyApi.UsersTopTracksResponse, unknown> => {
  const spotifyApi = useSpotifyApi()
  return useQuery(['tracks', timeRange], () => getTopTracks(spotifyApi, timeRange))
}

export { useTopArtists, useTopTracks }
