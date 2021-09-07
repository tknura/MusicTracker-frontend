import { AxiosInstance } from 'axios'

import { ChangePasswordValues } from 'api/types/auth/changePassword'

export async function postChangePassword(
  instance: AxiosInstance,
  values: ChangePasswordValues
) {
  const changeData = new FormData()
  changeData.append('user_id', values.user_id.toString())
  changeData.append('new_password', values.newPassword)
  changeData.append('old_password', values.oldPassword)
  const { data } = await instance.post('/changepassword.php', changeData)
  return data
}
