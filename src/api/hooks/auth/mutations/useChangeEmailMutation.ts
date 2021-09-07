import { useMutation, UseMutationOptions } from 'react-query'

import { ChangeEmailResponse, ChangeEmailValues } from 'api/types/auth/changeEmail'
import { useFetch } from 'components/providers/FetchProvider'
import { postChangeEmail } from 'api/actions/auth/postChangeEmail'

export const CHANGE_EMAIL_MUTATTION_KEY = 'changeEmail'

export const useChangeEmailMutation = (
  options: UseMutationOptions<ChangeEmailResponse, Error, ChangeEmailValues>
) => {
  const { fetch } = useFetch()

  return useMutation(
    CHANGE_EMAIL_MUTATTION_KEY,
    (values: ChangeEmailValues) => postChangeEmail(fetch, values),
    options
  )
}
