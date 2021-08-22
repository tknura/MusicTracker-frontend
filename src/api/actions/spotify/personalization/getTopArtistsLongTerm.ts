import SpotifyWebApi from 'spotify-web-api-node'

export async function getTopArtistsLongTerm(api: SpotifyWebApi) {
  const { body } = await api.getMyTopArtists({ time_range: 'long_term' })
  return body
}
