import { ID } from '../ID'

export interface ChangeEmailResponse {
  user_id: ID
  new_email: string
}

export interface ChangeEmailValues {
  user_id: ID
  new_email: string
}