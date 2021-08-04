import SpotifyWebApi from 'spotify-web-api-node'

export async function getRecentlyPlayed(api: SpotifyWebApi) {
  const { body } = await api.getMyRecentlyPlayedTracks()
  return body
}
