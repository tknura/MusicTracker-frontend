import { useMutation, UseMutationOptions } from 'react-query'

import { useFetch } from 'components/providers/FetchProvider'
import { SaveFbTokensResponse, SaveFbTokensValues } from 'api/types/auth/tokens'
import { postSaveFbTokens } from 'api/actions/auth/postSaveFbTokens'

export const SAVE_FB_TOKENS_MUTATION_KEY = 'saveFbTokens'

export const useSaveFbTokensMutation = (
  options: UseMutationOptions<SaveFbTokensResponse, Error, SaveFbTokensValues>
) => {
  const { fetch } = useFetch()

  return useMutation(
    SAVE_FB_TOKENS_MUTATION_KEY,
    (values: SaveFbTokensValues) => postSaveFbTokens(fetch, values),
    options
  )
}
