import { useSpotifyApi } from 'components/providers/SpotifyApiProvider'
import { useQuery, UseQueryResult } from 'react-query'
import SpotifyWebApi from 'spotify-web-api-node'

const getTopArtistsMedTerm = async (api: SpotifyWebApi)
: Promise<SpotifyApi.UsersTopArtistsResponse> => {
  const response = await api.getMyTopArtists()
  return response.body
}

const useTopArtistsMedTerm = ()
: UseQueryResult<SpotifyApi.UsersTopArtistsResponse, unknown> => {
  const spotifyApi = useSpotifyApi()
  return useQuery('artists', () => getTopArtistsMedTerm(spotifyApi))
}

const getTopTracksMedTerm = async (api: SpotifyWebApi)
: Promise<SpotifyApi.UsersTopTracksResponse> => {
  const response = await api.getMyTopTracks()
  return response.body
}

const useTopTracksMedTerm = ()
: UseQueryResult<SpotifyApi.UsersTopTracksResponse, unknown> => {
  const spotifyApi = useSpotifyApi()
  return useQuery('tracks', () => getTopTracksMedTerm(spotifyApi))
}

export { useTopArtistsMedTerm, useTopTracksMedTerm }
