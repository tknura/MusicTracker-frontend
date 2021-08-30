import { AxiosInstance } from 'axios'

import { GetMessagesValues } from 'api/types/messages'

export async function getMessages(
  instance: AxiosInstance,
  values: GetMessagesValues
) {
  const getMessagesData = new FormData()
  getMessagesData.append('user_id', values.userId.toString())

  const { data } = await instance.post('/getmessages.php', getMessagesData)
  return data
}
