import { AxiosInstance } from 'axios'

import { AddMessageValues } from 'api/types/messages'

export async function postAddMessage(
  instance: AxiosInstance,
  values: AddMessageValues
) {
  const addMessageData = new FormData()
  addMessageData.append('sender_id', values.senderId.toString())
  addMessageData.append('receiver_id', values.receiverId.toString())
  addMessageData.append('song_id', values.songId)

  const { data } = await instance.post('/addmessage.php', addMessageData)
  return data
}
