import { ID } from '../ID'

export interface LoginResponse {
  user_id: ID
}

export interface LoginValues {
  login: string
  password: string
}

export interface FbLoginValues {
  email: string
  fbUserID: string
  accessToken: string
}
