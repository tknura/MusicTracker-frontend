import { AxiosInstance } from 'axios'

import { GetFriendsValues } from 'api/types/friends'

export async function getFriends(
  instance: AxiosInstance,
  values: GetFriendsValues
) {
  const getFriendsData = new FormData()
  getFriendsData.append('user_id', values.userId.toString())

  const { data } = await instance.post('/getfriends.php', getFriendsData)
  return data
}
