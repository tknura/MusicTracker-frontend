import { AxiosInstance } from 'axios'

import { GoogleLoginValues } from 'api/types/auth/login'

export async function postGoogleLogin(
  instance: AxiosInstance,
  values: GoogleLoginValues
) {
  const loginData = new URLSearchParams()
  loginData.append('email', values.email)
  loginData.append('google_user_id', values.googleUserID.toString())
  loginData.append('access_token', values.accessToken)

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const { data } = await instance.post('/googlelogin.php', loginData, config)
  return data
}
