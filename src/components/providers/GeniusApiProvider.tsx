import Axios from 'axios'
import constate from 'constate'
import { useMemo } from 'react'

const [GeniusApiProvider, useGeniusApi] = constate(() => {
  const fetch = useMemo(() => {
    const instance = Axios.create({
      baseURL: process.env.REACT_APP_GENIUS_API_URL
    })
    return instance
  }, [])

  return { fetch }
})

export { GeniusApiProvider, useGeniusApi }
