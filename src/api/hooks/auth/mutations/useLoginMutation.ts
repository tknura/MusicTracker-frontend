import { useMutation, UseMutationOptions } from 'react-query'

import { LoginResponse, LoginValues } from 'api/types/auth/login'
import { useFetch } from 'components/providers/FetchProvider'
import { postLogin } from 'api/actions/auth/postLogin'

export const LOGIN_MUTATTION_KEY = 'login'

export const useLoginMutation = (
  options: UseMutationOptions<LoginResponse, Error, LoginValues>
) => {
  const { fetch } = useFetch()

  return useMutation(
    LOGIN_MUTATTION_KEY,
    (values: LoginValues) => postLogin(fetch, values),
    options
  )
}
