import { useMutation, UseMutationOptions } from 'react-query'

import { getNewAccessToken } from 'api/actions/auth/getNewAccessToken'
import { AuthorizeSpotifyResponse } from 'api/types/auth/authorizeSpotify'
import { GetTokensValues } from 'api/types/auth/tokens'
import { useFetch } from 'components/providers/FetchProvider'

export const REFRESH_TOKENS_QUERY_KEY = 'refreshToken'

export const useRefreshTokensMutation = (
  options: UseMutationOptions<AuthorizeSpotifyResponse, Error, GetTokensValues>
) => {
  const { fetch } = useFetch()

  return useMutation(
    REFRESH_TOKENS_QUERY_KEY,
    (values: GetTokensValues) => getNewAccessToken(fetch, values),
    options
  )
}
