import { AxiosInstance } from 'axios'

import { SaveFbTokensValues } from 'api/types/auth/tokens'

export async function postSaveFbTokens(
  instance: AxiosInstance,
  values: SaveFbTokensValues
) {
  const authorizeData = new URLSearchParams()
  authorizeData.append('user', values.userId.toString())
  authorizeData.append('fb_user_id', values.fbUserId.toString())
  authorizeData.append('access_token', values.accessToken)

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const { data } = await instance.post('/callback/saveFbTokens.php', authorizeData, config)
  return data
}
