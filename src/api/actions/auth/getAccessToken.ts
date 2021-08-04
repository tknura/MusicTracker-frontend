import { AxiosInstance } from 'axios'

import { GetTokensValues } from 'api/types/auth/tokens'

export async function getAccessToken(instance: AxiosInstance, values: GetTokensValues) {
  const { data } = await instance.get(
    '/gettokens.php',
    { params:
      {
        user: values.userId,
        type: values.apiType
      }
    }
  )
  return data
}
