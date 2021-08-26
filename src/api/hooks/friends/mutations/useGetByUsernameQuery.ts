import { UseMutationOptions, useMutation } from 'react-query'
import { AxiosError } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'
import { getFriendByUsername } from 'api/actions/friends/getFriendByUsername'
import { GetByUsernameResponse, GetByUsernameValues } from 'api/types/friends'

export const GET_BY_USERNAME_MUTATION_KEY = 'get-by-username'

export const useGetByUsernameMutation = (
  options?: UseMutationOptions<GetByUsernameResponse[], AxiosError, GetByUsernameValues>
) => {
  const { fetch } = useFetch()

  return useMutation(
    GET_BY_USERNAME_MUTATION_KEY,
    (values: GetByUsernameValues) => getFriendByUsername(fetch, values),
    options
  )
}
