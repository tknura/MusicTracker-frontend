import { AxiosInstance } from 'axios'

import { GetByUsernameValues } from 'api/types/friends'

export async function getFriendByUsername(
  instance: AxiosInstance,
  values: GetByUsernameValues
) {
  const getByUsernameData = new FormData()
  getByUsernameData.append('login', values.username)

  const { data } = await instance.post('/getuserbyname.php', getByUsernameData)
  return data
}
