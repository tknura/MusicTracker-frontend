import { useMutation, UseMutationOptions } from 'react-query'

import { FbLoginValues, LoginResponse } from 'api/types/auth/login'
import { useFetch } from 'components/providers/FetchProvider'
import { postFbLogin } from 'api/actions/auth/postFbLogin'
import { AxiosError } from 'axios'

export const FB_LOGIN_MUTATTION_KEY = 'fbLogin'

export const useFbLoginMutation = (
  options: UseMutationOptions<LoginResponse, AxiosError, FbLoginValues>
) => {
  const { fetch } = useFetch()

  return useMutation(
    FB_LOGIN_MUTATTION_KEY,
    (values: FbLoginValues) => postFbLogin(fetch, values),
    options
  )
}
