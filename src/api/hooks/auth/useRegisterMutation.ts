import { useMutation, UseMutationOptions } from 'react-query'

import { RegisterValues } from 'api/types/auth/register'
import { useFetch } from 'components/providers/FetchProvider'
import { postRegister } from 'api/actions/auth/postRegister'

export const REGISTER_MUTATION_KEY = 'register'

export const useRegisterMutation = (
  options: UseMutationOptions<unknown, Error, RegisterValues>
) => {
  const { fetch } = useFetch()

  return useMutation(
    REGISTER_MUTATION_KEY,
    (values: RegisterValues) => postRegister(fetch, values),
    options
  )
}
