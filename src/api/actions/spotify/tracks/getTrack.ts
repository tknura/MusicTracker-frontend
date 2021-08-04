import SpotifyWebApi from 'spotify-web-api-node'

export async function getTrack(api: SpotifyWebApi, trackId: string) {
  const { body } = await api.getTrack(trackId)
  return body
}
