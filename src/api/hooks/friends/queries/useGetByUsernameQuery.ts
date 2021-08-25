import { useQuery, UseQueryOptions } from 'react-query'

import { useFetch } from 'components/providers/FetchProvider'
import { getFriendByUsername } from 'api/actions/friends/getFriendByUsername'
import { GetByUsernameResponse, GetByUsernameValues } from 'api/types/friends'

export const GET_BY_USERNAME_QUERY_KEY = 'get-by-username'

export const useGetByUsernameQuery = (
  values: GetByUsernameValues, options?: UseQueryOptions<GetByUsernameResponse[]>
) => {
  const { fetch } = useFetch()

  return useQuery(
    GET_BY_USERNAME_QUERY_KEY,
    () => getFriendByUsername(fetch, values),
    options
  )
}
