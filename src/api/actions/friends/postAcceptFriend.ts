import { AxiosInstance } from 'axios'

import { AcceptFriendValues } from 'api/types/friends'

export async function postAcceptFriend(
  instance: AxiosInstance,
  values: AcceptFriendValues
) {
  const acceptFriendData = new FormData()
  acceptFriendData.append('friendship_id', values.friendshipId.toString())
  acceptFriendData.append('user_id', values.userId.toString())

  const { data } = await instance.post('/acceptfriend.php', acceptFriendData)
  return data
}
