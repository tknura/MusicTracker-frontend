import { AxiosInstance } from 'axios'

import { FbLoginValues } from 'api/types/auth/login'

export async function postFbLogin(
  instance: AxiosInstance,
  values: FbLoginValues
) {
  const loginData = new URLSearchParams()
  loginData.append('email', values.email)
  loginData.append('fb_user_id', values.fbUserID.toString())
  loginData.append('access_token', values.accessToken)

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const { data } = await instance.post('/fblogin.php', loginData, config)
  return data
}
