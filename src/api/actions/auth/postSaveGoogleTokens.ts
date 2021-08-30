import { AxiosInstance } from 'axios'

import { SaveGoogleTokensValues } from 'api/types/auth/tokens'

export async function postSaveGoogleTokens(
  instance: AxiosInstance,
  values: SaveGoogleTokensValues
) {
  const authorizeData = new URLSearchParams()
  authorizeData.append('user', values.userId.toString())
  authorizeData.append('google_user_id', values.googleUserId)
  authorizeData.append('access_token', values.accessToken)

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const { data } = await instance.post('/callback/saveGoogleTokens.php', authorizeData, config)
  return data
}
