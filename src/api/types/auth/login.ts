export interface LoginResponse {
  user_id: number
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
