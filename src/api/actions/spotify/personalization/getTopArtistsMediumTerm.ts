import SpotifyWebApi from 'spotify-web-api-node'

export async function getTopArtistsMediumTerm(api: SpotifyWebApi) {
  const response = await api.getMyTopArtists()
  return response.body
}
