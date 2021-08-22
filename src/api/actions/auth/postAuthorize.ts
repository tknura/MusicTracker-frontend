import { AxiosInstance } from 'axios'

import { AuthorizeSpotifyValues } from 'api/types/auth/authorizeSpotify'

export async function postAuthorize(
  instance: AxiosInstance,
  values: AuthorizeSpotifyValues
) {
  const authorizeData = new URLSearchParams()
  authorizeData.append('user', values.userId.toString())
  authorizeData.append('type', 'Spotify')
  authorizeData.append('code', values.code)
  authorizeData.append('redirect_uri', values.redirectUri)

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const { data } = await instance.post('/callback/authorize.php', authorizeData, config)
  return data
}
