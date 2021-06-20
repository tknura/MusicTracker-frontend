import { useState } from 'react'
import constate from 'constate'
import { USER_ID } from 'constants/localStorageKeys'

interface SpotifyUserData {
  accessToken: string
  refreshToken?: string
}

interface User {
  userId: number
}

const useAuthorization = () => {
  const [user, setUser] = useState<User | null>({
    userId: parseInt(localStorage.getItem(USER_ID) || '', 10)
  })
  const [spotifyData, setSpotifyData] = useState<SpotifyUserData | null>(null)

  const login = (userId: number) => {
    setUser({
      userId,
    })
    localStorage.setItem(USER_ID, userId.toString())
  }
  const logout = () => {
    setUser(null)
    localStorage.setItem(USER_ID, '')
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
