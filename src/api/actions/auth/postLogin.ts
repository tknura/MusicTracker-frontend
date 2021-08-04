import { AxiosInstance } from 'axios'

import { LoginValues } from 'api/types/auth/login'

export async function postLogin(
  instance: AxiosInstance,
  values: LoginValues
) {
  const loginData = new FormData()
  loginData.append('login', values.login)
  loginData.append('password', values.password)

  const { data } = await instance.post('/login.php', loginData)
  return data
}
