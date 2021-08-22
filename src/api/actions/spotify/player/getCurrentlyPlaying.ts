import SpotifyWebApi from 'spotify-web-api-node'

export async function getCurrentlyPlaying(api: SpotifyWebApi) {
  const { body } = await api.getMyCurrentPlayingTrack()
  return body
}
