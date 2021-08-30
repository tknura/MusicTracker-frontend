import { useState } from 'react'
import { useQueryClient } from 'react-query'
import constate from 'constate'

import { USER_ID } from 'constants/localStorageKeys'
import { useRefreshTokensMutation } from 'api/hooks/auth/mutations/useRefreshTokensMutation'

interface SpotifyUserData {
  accessToken: string
  refreshToken?: string
}

interface User {
  userId: number
}

const useAuthorization = () => {
  const queryClient = useQueryClient()

  const [user, setUser] = useState<User | null>({
    userId: parseInt(localStorage.getItem(USER_ID) || '', 10)
  })
  const [spotifyData, setSpotifyData] = useState<SpotifyUserData | null>(null)

  const { mutateAsync: refreshMutate } = useRefreshTokensMutation({})

  const login = async (userId: number) => {
    setUser({
      userId,
    })
    localStorage.setItem(USER_ID, userId.toString())

    try {
      const { access_token: newAccessToken } = await refreshMutate({ apiType: 'Spotify', userId })
      authSpotify(newAccessToken)
      return { isSpotifyConnected: true }
    } catch {
      return ({ isSpotifyConnected: false })
    }
  }

  const logout = () => {
    setUser(null)
    setSpotifyData(null)
    localStorage.removeItem(USER_ID)
    queryClient.clear()
  }

  const authSpotify = (accessToken: string) => {
    setSpotifyData({
      accessToken,
    })
  }

  return {
    login,
    logout,
    user,
    authSpotify,
    spotifyData
  }
}

const [
  AuthProvider,
  useLogin,
  useLogout,
  useUserLoggedIn,
  useUserId,
  useAuthSpotify,
  useSpotifyToken,
] = constate(
  useAuthorization,
  value => value.login,
  value => value.logout,
  value => !!value.user?.userId,
  value => value.user?.userId,
  value => value.authSpotify,
  value => value.spotifyData?.accessToken
)

export {
  AuthProvider,
  useLogin,
  useLogout,
  useUserLoggedIn,
  useUserId,
  useAuthSpotify,
  useSpotifyToken,
}
