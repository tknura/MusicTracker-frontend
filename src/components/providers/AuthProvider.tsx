import { useState } from 'react'
import constate from 'constate'

import { Id } from 'types/Id'

interface SpotifyUserData {
  accessToken: string
  refreshToken: string
}

interface User {
  userId: Id
  spotify?: SpotifyUserData
}

const useAuthorization = () => {
  const [user, setUser] = useState<User | null>(null)

  const login = (userId: Id) => {
    setUser({
      userId,
    })
  }

  const logout = () => setUser(null)

  return { login, logout, user }
}

const [
  AuthProvider,
  useLogin,
  useLogout,
  useUserLoggedIn,
  useUserId,
] = constate(
  useAuthorization,
  value => value.login,
  value => value.logout,
  value => !!value.user?.userId,
  value => value.user?.userId
)

export {
  AuthProvider,
  useLogin,
  useLogout,
  useUserLoggedIn,
  useUserId,
}
