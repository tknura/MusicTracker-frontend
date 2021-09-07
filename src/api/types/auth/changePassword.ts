import { ID } from '../ID'

export interface ChangePasswordResponse {
  user_id: ID
}

export interface ChangePasswordValues {
  user_id: ID
  oldPassword: string
  newPassword: string
}