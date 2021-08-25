import { useQuery, UseQueryOptions } from 'react-query'

import { GetTokensValues } from 'api/types/auth/tokens'
import { Message } from 'api/types/messages'
import { getMessages } from 'api/actions/messages/getMessages'
import { useFetch } from 'components/providers/FetchProvider'

export const MESSAGES_QUERY_KEY = 'messages'

export const useGetMessagesQuery = (
  values: GetTokensValues, options?: UseQueryOptions<Message[]>
) => {
  const { fetch } = useFetch()

  return useQuery(
    MESSAGES_QUERY_KEY,
    () => getMessages(fetch, values),
    options
  )
}
