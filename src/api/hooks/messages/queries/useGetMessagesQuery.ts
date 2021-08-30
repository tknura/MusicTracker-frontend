import { useQuery, UseQueryOptions } from 'react-query'

import { GetMessagesValues, Message } from 'api/types/messages'
import { getMessages } from 'api/actions/messages/getMessages'
import { useFetch } from 'components/providers/FetchProvider'

export const MESSAGES_QUERY_KEY = 'messages'

export const useGetMessagesQuery = (
  values: GetMessagesValues, options?: UseQueryOptions<Message[]>
) => {
  const { fetch } = useFetch()

  return useQuery(
    MESSAGES_QUERY_KEY,
    () => getMessages(fetch, values),
    options
  )
}
