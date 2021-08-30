import { useMutation, UseMutationOptions } from 'react-query'
import { AxiosError, AxiosResponse } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'
import { postAddMessage } from 'api/actions/messages/postAddMessage'
import { AddMessageValues } from 'api/types/messages'

export const ADD_MESSAGE_MUTATTION_KEY = 'add-message'

export const useAddMessageMutation = (
  options: UseMutationOptions<AxiosResponse, AxiosError, AddMessageValues>
) => {
  const { fetch } = useFetch()

  return useMutation(
    ADD_MESSAGE_MUTATTION_KEY,
    (values: AddMessageValues) => postAddMessage(fetch, values),
    options
  )
}
