import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult
} from 'react-query'
import { AxiosInstance } from 'axios'

import { useFetch } from 'components/providers/FetchProvider'

type ApiType = 'Spotify'

interface RegisterValues {
  nick: string
  email: string
  password1: string
  password2: string
  regulamin: boolean
}

interface LoginValues {
  login: string
  password: string
}

interface LoginResponse {
  user_id: number
}

interface AuthorizeSpotifyValues {
  code: string
  userId: number
  redirectUri: string
}

interface AuthorizeSpotifyResponse {
  access_token: string
}

interface GetTokensValues {
  userId: number
  apiType: ApiType
}

const postRegister = async (
  instance: AxiosInstance,
  values: RegisterValues
): Promise<unknown> => {
  const registerData = new FormData()
  registerData.append('nick', values.nick)
  registerData.append('email', values.email)
  registerData.append('password1', values.password1)
  registerData.append('password2', values.password2)
  registerData.append('consent', values.regulamin.toString())

  const { data } = await instance.post('/register.php', registerData)
  return data
}

const postLogin = async (
  instance: AxiosInstance,
  values: LoginValues
): Promise<LoginResponse> => {
  const loginData = new FormData()
  loginData.append('login', values.login)
  loginData.append('password', values.password)

  const { data } = await instance.post('/login.php', loginData)
  return data
}

const postAuthorize = async (
  instance: AxiosInstance,
  values: AuthorizeSpotifyValues
): Promise<AuthorizeSpotifyResponse> => {
  const authorizeData = new URLSearchParams()
  authorizeData.append('user', values.userId.toString())
  authorizeData.append('type', 'Spotify')
  authorizeData.append('code', values.code)
  authorizeData.append('redirect_uri', values.redirectUri)

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const { data } = await instance.post('/callback/authorize.php', authorizeData, config)
  return data
}

const getAccessToken = async (instance: AxiosInstance, values: GetTokensValues)
: Promise<AuthorizeSpotifyResponse> => {
  const { data } = await instance.get(
    '/gettokens.php',
    { params:
      {
        user: values.userId,
        type: values.apiType
      }
    }
  )
  return data
}

const getNewAccessToken = async (instance: AxiosInstance, values: GetTokensValues)
: Promise<AuthorizeSpotifyResponse> => {
  const authorizeData = new URLSearchParams()
  authorizeData.append('user', values.userId.toString())
  authorizeData.append('type', values.apiType)

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const { data } = await instance.post('/refresh.php', authorizeData, config)
  return data
}

const useLoginMutation = (options: UseMutationOptions<LoginResponse, Error, LoginValues>)
: UseMutationResult<LoginResponse, Error, LoginValues> => {
  const { fetch } = useFetch()
  return useMutation('login', (values: LoginValues) => postLogin(fetch, values), options)
}

const useRegisterMutation = (options: UseMutationOptions<unknown, Error, RegisterValues>)
: UseMutationResult<unknown, Error, RegisterValues> => {
  const { fetch } = useFetch()
  return useMutation('signUp', (values: RegisterValues) => postRegister(fetch, values), options)
}

const useAuthorizeSpotifyMutation = (
  options: UseMutationOptions<AuthorizeSpotifyResponse, Error, AuthorizeSpotifyValues>
): UseMutationResult<AuthorizeSpotifyResponse, Error, AuthorizeSpotifyValues> => {
  const { fetch } = useFetch()
  return useMutation(
    'authorizeSpotify',
    (values: AuthorizeSpotifyValues) => postAuthorize(fetch, values), options
  )
}

const useGetTokensQuery = (
  values: GetTokensValues, options?: UseQueryOptions<AuthorizeSpotifyResponse>
): UseQueryResult<AuthorizeSpotifyResponse> => {
  const { fetch } = useFetch()
  return useQuery('accessToken', () => getAccessToken(fetch, values), options)
}

const useRefreshTokensMutation = (
  options: UseMutationOptions<AuthorizeSpotifyResponse, Error, GetTokensValues>
): UseMutationResult<AuthorizeSpotifyResponse, Error, GetTokensValues> => {
  const { fetch } = useFetch()
  return useMutation(
    'refreshToken',
    (values: GetTokensValues) => getNewAccessToken(fetch, values),
    options
  )
}

export {
  useLoginMutation,
  useRegisterMutation,
  useAuthorizeSpotifyMutation,
  useGetTokensQuery,
  useRefreshTokensMutation,
}
