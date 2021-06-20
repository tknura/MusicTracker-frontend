import { useSpotifyApi } from 'components/providers/FetchProvider'
import { useQuery, UseQueryResult } from 'react-query'
import SpotifyWebApi from 'spotify-web-api-node'

const getTopArtistsLongTerm = async (api: SpotifyWebApi)
: Promise<SpotifyApi.UsersTopArtistsResponse> => {
  const { body } = await api.getMyTopArtists({ time_range: 'long_term' })
  return body
}

const getTopArtistsMediumTerm = async (api: SpotifyWebApi)
: Promise<SpotifyApi.UsersTopArtistsResponse> => {
  const { body } = await api.getMyTopArtists()
  return body
}

const getTopArtistsShortTerm = async (api: SpotifyWebApi)
: Promise<SpotifyApi.UsersTopArtistsResponse> => {
  const { body } = await api.getMyTopArtists({ time_range: 'short_term' })
  return body
}

const useTopArtistsLongTerm = ()
: UseQueryResult<SpotifyApi.UsersTopArtistsResponse, unknown> => {
  const spotifyApi = useSpotifyApi()
  return useQuery('artistsLong', () => getTopArtistsLongTerm(spotifyApi))
}

const useTopArtistsMediumTerm = ()
: UseQueryResult<SpotifyApi.UsersTopArtistsResponse, unknown> => {
  const spotifyApi = useSpotifyApi()
  return useQuery('artistsMedium', () => getTopArtistsMediumTerm(spotifyApi))
}

const useTopArtistsShortTerm = ()
: UseQueryResult<SpotifyApi.UsersTopArtistsResponse, unknown> => {
  const spotifyApi = useSpotifyApi()
  return useQuery('artistsShort', () => getTopArtistsShortTerm(spotifyApi))
}

const getTopTracksLongTerm = async (api: SpotifyWebApi)
: Promise<SpotifyApi.UsersTopTracksResponse> => {
  const { body } = await api.getMyTopTracks({ time_range: 'long_term' })
  return body
}

const getTopTracksMediumTerm = async (api: SpotifyWebApi)
: Promise<SpotifyApi.UsersTopTracksResponse> => {
  const { body } = await api.getMyTopTracks()
  return body
}

const getTopTracksShortTerm = async (api: SpotifyWebApi)
: Promise<SpotifyApi.UsersTopTracksResponse> => {
  const { body } = await api.getMyTopTracks({ time_range: 'short_term' })
  return body
}

const useTopTracksLongTerm = ()
: UseQueryResult<SpotifyApi.UsersTopTracksResponse, unknown> => {
  const spotifyApi = useSpotifyApi()
  return useQuery('tracksLong', () => getTopTracksLongTerm(spotifyApi))
}

const useTopTracksMediumTerm = ()
: UseQueryResult<SpotifyApi.UsersTopTracksResponse, unknown> => {
  const spotifyApi = useSpotifyApi()
  return useQuery('tracksMedium', () => getTopTracksMediumTerm(spotifyApi))
}

const useTopTracksShortTerm = ()
: UseQueryResult<SpotifyApi.UsersTopTracksResponse, unknown> => {
  const spotifyApi = useSpotifyApi()
  return useQuery('tracksShort', () => getTopTracksShortTerm(spotifyApi))
}

export { useTopArtistsLongTerm, useTopArtistsMediumTerm, useTopArtistsShortTerm,
  useTopTracksLongTerm, useTopTracksMediumTerm, useTopTracksShortTerm }
