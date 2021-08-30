import { useMutation, UseMutationOptions } from 'react-query'
import { AxiosError } from 'axios'

import { GoogleLoginValues, LoginResponse } from 'api/types/auth/login'
import { useFetch } from 'components/providers/FetchProvider'
import { postGoogleLogin } from 'api/actions/auth/postGoogleLogin'

export const GOOGLE_LOGIN_MUTATTION_KEY = 'googleLogin'

export const useGoogleLoginMutation = (
  options: UseMutationOptions<LoginResponse, AxiosError, GoogleLoginValues>
) => {
  const { fetch } = useFetch()

  return useMutation(
    GOOGLE_LOGIN_MUTATTION_KEY,
    (values: GoogleLoginValues) => postGoogleLogin(fetch, values),
    options
  )
}
