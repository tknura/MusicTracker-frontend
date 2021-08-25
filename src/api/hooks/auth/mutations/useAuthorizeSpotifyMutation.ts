import { useMutation, UseMutationOptions } from 'react-query'

import { AuthorizeSpotifyResponse, AuthorizeSpotifyValues } from 'api/types/auth/authorizeSpotify'
import { useFetch } from 'components/providers/FetchProvider'
import { postAuthorize } from 'api/actions/auth/postAuthorize'

export const AUTHORIZE_SPOTIFY_MUTATION_KEY = 'authorizeSpotify'

export const useAuthorizeSpotifyMutation = (
  options: UseMutationOptions<AuthorizeSpotifyResponse, Error, AuthorizeSpotifyValues>
) => {
  const { fetch } = useFetch()

  return useMutation(
    AUTHORIZE_SPOTIFY_MUTATION_KEY,
    (values: AuthorizeSpotifyValues) => postAuthorize(fetch, values),
    options
  )
}
