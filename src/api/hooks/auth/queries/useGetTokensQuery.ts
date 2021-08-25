import { useQuery, UseQueryOptions } from 'react-query'

import { AuthorizeSpotifyResponse } from 'api/types/auth/authorizeSpotify'
import { GetTokensValues } from 'api/types/auth/tokens'
import { useFetch } from 'components/providers/FetchProvider'
import { getAccessToken } from 'api/actions/auth/getAccessToken'

export const TOKENS_QUERY_KEY = 'accessToken'

export const useGetTokensQuery = (
  values: GetTokensValues, options?: UseQueryOptions<AuthorizeSpotifyResponse>
) => {
  const { fetch } = useFetch()

  return useQuery(
    TOKENS_QUERY_KEY,
    () => getAccessToken(fetch, values),
    options
  )
}
