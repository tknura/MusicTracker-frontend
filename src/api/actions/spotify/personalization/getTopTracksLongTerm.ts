import SpotifyWebApi from 'spotify-web-api-node'

export async function getTopTracksLongTerm(api: SpotifyWebApi) {
  const { body } = await api.getMyTopTracks({ time_range: 'long_term' })
  return body
}
