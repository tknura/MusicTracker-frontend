export interface AuthorizeSpotifyValues {
  code: string
  userId: number
  redirectUri: string
}

export interface AuthorizeSpotifyResponse {
  access_token: string
}
