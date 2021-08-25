import { useMutation, UseMutationOptions } from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'
import { AddFriendsValues } from 'api/types/friends'
import { postAddFriend } from 'api/actions/friends/postAddFriend'

export const ADD_FRIEND_MUTATTION_KEY = 'add-friend'

export const useAddFriendMutation = (
  options: UseMutationOptions<AxiosResponse, AxiosError, AddFriendsValues>
) => {
  const { fetch } = useFetch()

  return useMutation(
    ADD_FRIEND_MUTATTION_KEY,
    (values: AddFriendsValues) => postAddFriend(fetch, values),
    options
  )
}
