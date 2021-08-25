import { AxiosInstance } from 'axios'

import { AddFriendsValues } from 'api/types/friends'

export async function postAddFriend(
  instance: AxiosInstance,
  values: AddFriendsValues
) {
  const addFriendData = new FormData()
  addFriendData.append('user_id', values.userId.toString())
  addFriendData.append('friend_id', values.friendId.toString())

  const { data } = await instance.post('/addfriend.php', addFriendData)
  return data
}
