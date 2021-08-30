import SpotifyWebApi from 'spotify-web-api-node'

export async function getTopArtistsShortTerm(api: SpotifyWebApi) {
  const { body } = await api.getMyTopArtists({ time_range: 'short_term' })
  return body
}
