import { ID } from '../ID'

export interface AuthorizeSpotifyValues {
  code: string
  userId: ID
  redirectUri: string
}

export interface AuthorizeSpotifyResponse {
  access_token: string
}
