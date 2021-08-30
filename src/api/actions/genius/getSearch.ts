import { AxiosInstance } from 'axios'

export async function getSearch(instance: AxiosInstance, name: string) {
  const { data } = await instance.get(`/search?q=${name}&access_token=${process.env.REACT_APP_GENIUS_ACCESS_TOKEN}`)
  return data
}
