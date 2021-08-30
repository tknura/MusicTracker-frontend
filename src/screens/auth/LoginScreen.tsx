import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { Box, Button, Center, Divider } from '@chakra-ui/react'

import { useLoginMutation } from 'api/hooks/auth/mutations/useLoginMutation'
import { LoginForm, LoginFormFields } from 'components/forms/LoginForm'
import { RouteContainer } from 'components/navigation/RouteContainer'
import { FacebookLoginButton, FacebookLoginResponse } from 'components/ui/FacebookLoginButton/FacebookLoginButton'
import { useLogin } from 'components/providers/AuthProvider'
import { AppLogo } from 'components/common/AppLogo/AppLogo'
import { MAIN_ROUTE, REGISTER_ROUTE, SOCIAL_REGISTER_ROUTE } from 'constants/routeNames'
import { useFbLoginMutation } from 'api/hooks/auth/mutations/useFbLoginMutation'
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { GoogleLoginButton } from 'components/ui/GoogleLoginButton'
import { useGoogleLoginMutation } from 'api/hooks/auth/mutations/useGoogleLoginMutation'
import { AxiosError } from 'axios'
import { FbLoginValues, GoogleLoginValues } from 'api/types/auth/login'

const LoginScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const history = useHistory()
  const login = useLogin()

  const handleLogin = async (userId: number) => {
    login(userId)
    history.push(MAIN_ROUTE)
  }

  const handleSocialLoginError = (
    error: AxiosError,
    variables: FbLoginValues | GoogleLoginValues
  ) => {
    if (error.response?.status === 400) {
      history.push({
        pathname: SOCIAL_REGISTER_ROUTE,
        state: variables
      })
    }
  }

  const { mutate: loginMutate, isLoading: isLoginLoading } = useLoginMutation({
    onSuccess: async ({ user_id: newUserId }) => { await handleLogin(newUserId) },
  })

  const { mutate: fbLoginMutate, isLoading: isFbLoginLoading } = useFbLoginMutation({
    onSuccess: async ({ user_id: newUserId }) => { await handleLogin(newUserId) },
    onError: handleSocialLoginError
  })

  const { mutate: googleLoginMutate, isLoading: isGoogleLoginLoading } = useGoogleLoginMutation({
    onSuccess: async ({ user_id: newUserId }) => { await handleLogin(newUserId) },
    onError: handleSocialLoginError
  })

  const handleLoginSubmit = (values: LoginFormFields) => {
    loginMutate({
      login: values.username,
      password: values.password
    })
  }

  const handleRedirectToRegister = () => {
    history.push(REGISTER_ROUTE)
  }

  const responseFacebook = ({ authData, userData }: FacebookLoginResponse) => {
    if ('accessToken' in authData && 'email' in userData && 'userID' in authData) {
      fbLoginMutate({
        accessToken: authData.accessToken,
        email: userData.email || '',
        fbUserID: authData.userID,
      })
    }
  }

  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const loginResponse = response as GoogleLoginResponse
    googleLoginMutate({
      accessToken: loginResponse.tokenObj.access_token,
      email: loginResponse.profileObj.email,
      googleUserID: loginResponse.googleId,
    })
  }

  const isLoading = isLoginLoading || isFbLoginLoading || isGoogleLoginLoading

  return (
    <RouteContainer>
      <Center w="100%">
        <div id="fb-root" />
        <Box maxW="500px" p={5}>
          <AppLogo />
          <LoginForm isLoading={isLoading} onSubmit={handleLoginSubmit} />
          <Divider colorScheme="primary" mt={10} />
          {process.env.REACT_APP_FACEBOOK_APP_ID && (
            <FacebookLoginButton
              callback={responseFacebook}
              w="100%"
              mb={3}
              mt={5}
            />
          )}
          {process.env.REACT_APP_GOOGLE_CLIENT_ID && (
            <GoogleLoginButton callback={responseGoogle} />
          )}
          <Button
            variant="ghost"
            colorScheme="secondary"
            onClick={handleRedirectToRegister}
            w="100%"
            mt={3}
          >
            {t('screens.login.noAccount')}
          </Button>
        </Box>
      </Center>
    </RouteContainer>
  )
}

export { LoginScreen }
