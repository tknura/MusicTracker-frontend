import { ID } from './ID'

interface Message {
  sender: string
  receiver: ID
  song_id: string
}

interface GetMessagesValues {
  userId: ID
}

interface AddMessageValues {
  senderId: ID
  receiverId: ID
  songId: string
}

export type { AddMessageValues, Message, GetMessagesValues }
