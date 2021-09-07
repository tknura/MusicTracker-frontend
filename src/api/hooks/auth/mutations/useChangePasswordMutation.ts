import { useMutation, UseMutationOptions } from 'react-query'

import { ChangePasswordResponse, ChangePasswordValues } from 'api/types/auth/changePassword'
import { useFetch } from 'components/providers/FetchProvider'
import { postChangePassword } from 'api/actions/auth/postChangePassword'

export const CHANGE_PASSWORD_MUTATTION_KEY = 'changePassword'

export const useChngPswdMutation = (
  options: UseMutationOptions<ChangePasswordResponse, Error, ChangePasswordValues>
) => {
  const { fetch } = useFetch()

  return useMutation(
    CHANGE_PASSWORD_MUTATTION_KEY,
    (values: ChangePasswordValues) => postChangePassword(fetch, values),
    options
  )
}
