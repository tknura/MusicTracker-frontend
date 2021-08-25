import { AxiosInstance } from 'axios'

import { GetPendingFriendsValues } from 'api/types/friends'

export async function getPendingFriends(
  instance: AxiosInstance,
  values: GetPendingFriendsValues
) {
  const getPendingFriendsData = new FormData()
  getPendingFriendsData.append('user_id', values.userId.toString())

  const { data } = await instance.post('/getpendingfriends.php', getPendingFriendsData)
  return data
}
