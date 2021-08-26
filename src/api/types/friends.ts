import { ID } from './ID'

interface AddFriendsValues {
  userId: ID
  friendId: number
}

interface GetByUsernameValues {
  username: string
}

interface GetByUsernameResponse {
  login: string
  user_id: ID
}

interface PendingFriend {
  friendship_id: ID
  from: string
}

type GetPendingFriendsResponse = PendingFriend[]

interface GetPendingFriendsValues {
  userId: ID
}

interface AcceptFriendValues {
  friendshipId: ID
  userId: ID
}

type GetFriendsValues = GetPendingFriendsValues

interface Friend {
  friend_id: ID
  friend_name: string
}

type GetFriendsResponse = Friend[]

export type {
  AddFriendsValues,
  GetByUsernameValues,
  GetByUsernameResponse,
  GetPendingFriendsValues,
  GetPendingFriendsResponse,
  AcceptFriendValues,
  GetFriendsValues,
  GetFriendsResponse
}
