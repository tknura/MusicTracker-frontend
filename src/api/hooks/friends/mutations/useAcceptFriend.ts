import { useMutation, UseMutationOptions } from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'
import { AcceptFriendValues } from 'api/types/friends'
import { postAcceptFriend } from 'api/actions/friends/postAcceptFriend'

export const ACCEPT_FRIEND_MUTATTION_KEY = 'accept-friend'

export const useAcceptFriendMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, AcceptFriendValues>
) => {
  const { fetch } = useFetch()

  return useMutation(
    ACCEPT_FRIEND_MUTATTION_KEY,
    (values: AcceptFriendValues) => postAcceptFriend(fetch, values),
    options
  )
}
