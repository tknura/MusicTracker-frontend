import { ID } from '../ID'

type ApiType = 'Spotify'

export interface GetTokensValues {
  userId: ID
  apiType: ApiType
}

export interface SaveFbTokensValues {
  userId: number
  fbUserId: string
  accessToken: string
}

export interface SaveFbTokensResponse {
  accessToken: string
}
