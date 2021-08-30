import { useMutation, UseMutationOptions } from 'react-query'

import { useFetch } from 'components/providers/FetchProvider'
import { SaveGoogleTokensResponse, SaveGoogleTokensValues } from 'api/types/auth/tokens'
import { postSaveGoogleTokens } from 'api/actions/auth/postSaveGoogleTokens'

export const SAVE_GOOGLE_TOKENS_MUTATION_KEY = 'saveGoogleTokens'

export const useSaveGoogleTokensMutation = (
  options: UseMutationOptions<SaveGoogleTokensResponse, Error, SaveGoogleTokensValues>
) => {
  const { fetch } = useFetch()

  return useMutation(
    SAVE_GOOGLE_TOKENS_MUTATION_KEY,
    (values: SaveGoogleTokensValues) => postSaveGoogleTokens(fetch, values),
    options
  )
}
