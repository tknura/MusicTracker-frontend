import { AxiosInstance } from 'axios'

import { GetTokensValues } from 'api/types/auth/tokens'

export async function getNewAccessToken(instance: AxiosInstance, values: GetTokensValues) {
  const authorizeData = new URLSearchParams()
  authorizeData.append('user', values.userId.toString())
  authorizeData.append('type', values.apiType)

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const { data } = await instance.post('/refresh.php', authorizeData, config)
  return data
}
