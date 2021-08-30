import SpotifyWebApi from 'spotify-web-api-node'

export async function getTopTracksShortTerm(api: SpotifyWebApi) {
  const { body } = await api.getMyTopTracks({ time_range: 'short_term' })
  return body
}
