import SpotifyWebApi from 'spotify-web-api-node'

export async function getTopTracksMediumTerm(api: SpotifyWebApi) {
  const { body } = await api.getMyTopTracks()
  return body
}
