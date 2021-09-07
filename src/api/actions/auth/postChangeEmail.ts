import { AxiosInstance } from 'axios'

import { ChangeEmailValues } from 'api/types/auth/changeEmail'

export async function postChangeEmail(
  instance: AxiosInstance,
  values: ChangeEmailValues
) {
  const changeEmail = new FormData()
  changeEmail.append('user_id', values.user_id.toString())
  changeEmail.append('new_email', values.new_email)
  const { data } = await instance.post('/changeemail.php', changeEmail)
  return data
}
