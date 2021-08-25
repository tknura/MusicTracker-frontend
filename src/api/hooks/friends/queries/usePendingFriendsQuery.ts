import { useQuery, UseQueryOptions } from 'react-query'

import { useFetch } from 'components/providers/FetchProvider'
import { GetPendingFriendsResponse, GetPendingFriendsValues } from 'api/types/friends'
import { getPendingFriends } from 'api/actions/friends/getPendingFriends'

export const PENDING_FRIENDS_QUERY_KEY = 'pending-friends'

export const usePendingFriendsQuery = (
  values: GetPendingFriendsValues, options?: UseQueryOptions<GetPendingFriendsResponse>
) => {
  const { fetch } = useFetch()

  return useQuery(
    PENDING_FRIENDS_QUERY_KEY,
    () => getPendingFriends(fetch, values),
    options
  )
}
