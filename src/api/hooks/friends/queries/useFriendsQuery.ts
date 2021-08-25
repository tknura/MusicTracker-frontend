import { useQuery, UseQueryOptions } from 'react-query'

import { useFetch } from 'components/providers/FetchProvider'
import { GetFriendsResponse, GetFriendsValues, } from 'api/types/friends'
import { getFriends } from 'api/actions/friends/getFriends'

export const FRIENDS_QUERY_KEY = 'friends'

export const useFriendsQuery = (
  values: GetFriendsValues, options?: UseQueryOptions<GetFriendsResponse>
) => {
  const { fetch } = useFetch()

  return useQuery(
    FRIENDS_QUERY_KEY,
    () => getFriends(fetch, values),
    options
  )
}
