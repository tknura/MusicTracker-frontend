import { AxiosInstance } from 'axios'

import { RegisterValues } from 'api/types/auth/register'

export async function postRegister(
  instance: AxiosInstance,
  values: RegisterValues
) {
  const registerData = new FormData()
  registerData.append('nick', values.nick)
  registerData.append('email', values.email)
  registerData.append('password1', values.password1)
  registerData.append('password2', values.password2)
  registerData.append('consent', values.consent ? 'yes' : 'no')

  const { data } = await instance.post('/register.php', registerData)
  return data
}
