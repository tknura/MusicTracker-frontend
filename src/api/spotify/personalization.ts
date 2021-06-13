import { useSpotifyApi } from 'components/providers/FetchProvider'
import { useQuery, UseQueryResult } from 'react-query'
import SpotifyWebApi from 'spotify-web-api-node'

const getTopArtistsMedTerm = async (api: SpotifyWebApi)
: Promise<SpotifyApi.UsersTopArtistsResponse> => {
  const { body } = await api.getMyTopArtists()
  return body
}

const useTopArtistsMedTerm = ()
: UseQueryResult<SpotifyApi.UsersTopArtistsResponse, unknown> => {
  const spotifyApi = useSpotifyApi()
  return useQuery('artists', () => getTopArtistsMedTerm(spotifyApi))
}

const getTopTracksMedTerm = async (api: SpotifyWebApi)
: Promise<SpotifyApi.UsersTopTracksResponse> => {
  const { body } = await api.getMyTopTracks()
  return body
}

const useTopTracksMedTerm = ()
: UseQueryResult<SpotifyApi.UsersTopTracksResponse, unknown> => {
  const spotifyApi = useSpotifyApi()
  return useQuery('tracks', () => getTopTracksMedTerm(spotifyApi))
}

export { useTopArtistsMedTerm, useTopTracksMedTerm }
