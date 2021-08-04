type ApiType = 'Spotify'

export interface GetTokensValues {
  userId: number
  apiType: ApiType
}

export interface SaveFbTokensValues {
  userId: number
  fbUserId: number
  accessToken: string
}

export interface SaveFbTokensResponse {
  accessToken: string
}
