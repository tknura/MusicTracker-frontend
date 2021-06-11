import { useState } from 'react'
import constate from 'constate'

import { Id } from 'types/Id'

interface SpotifyUserData {
  accessToken: string
  refreshToken?: string
}

interface User {
  userId: Id
}

const useAuthorization = () => {
  const [user, setUser] = useState<User | null>(null)
  const [spotifyData, setSpotifyData] = useState<SpotifyUserData | null>(null)

  const login = (userId: Id) => {
    setUser({
      userId,
    })
  }
  const logout = () => setUser(null)

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
