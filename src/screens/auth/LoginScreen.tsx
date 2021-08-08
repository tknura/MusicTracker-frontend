import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { Box, Button, Center, Divider } from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa'
import FacebookLogin, { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from 'react-facebook-login'

import { useRefreshTokensMutation } from 'api/hooks/auth/useRefreshTokensMutation'
import { useLoginMutation } from 'api/hooks/auth/useLoginMutation'
import { LoginForm, LoginFormFields } from 'components/forms/LoginForm'
import { RouteContainer } from 'components/navigation/RouteContainer'
import { useAuthSpotify, useLogin } from 'components/providers/AuthProvider'
import { AppLogo } from 'components/common/AppLogo/AppLogo'
import { MAIN_ROUTE, REGISTER_ROUTE } from 'constants/routeNames'
import { useFbLoginMutation } from 'api/hooks/auth/useFbLoginMutation'

const LoginScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const history = useHistory()
  const login = useLogin()
  const authSpotify = useAuthSpotify()

  const { mutate: refreshMutate } = useRefreshTokensMutation({
    onSuccess: ({ access_token: newAccessToken }) => {
      authSpotify(newAccessToken)
      history.push(MAIN_ROUTE)
    },
  })

  const handleLogin = (newUserId: number) => {
    login(newUserId)
    refreshMutate({ apiType: 'Spotify', userId: newUserId })
  }

  const { mutate: loginMutate } = useLoginMutation({
    onSuccess: ({ user_id: newUserId }) => handleLogin(newUserId),
    // eslint-disable-next-line no-console
    onError: () => console.warn(t('screens.signIn.errors.generic'))
  })

  const { mutate: fbLoginMutate } = useFbLoginMutation({
    onSuccess: ({ user_id: newUserId }) => handleLogin(newUserId),
    // eslint-disable-next-line no-console
    onError: (error) => console.warn(error)
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

  const responseFacebook = (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
    if ('accessToken' in response && 'email' in response && 'userID' in response) {
      fbLoginMutate({
        accessToken: response.accessToken,
        email: response.email || '',
        fbUserID: response.userID,
      })
    }
  }

  return (
    <RouteContainer>
      <Center w="100%">
        <Box maxW="500px" p={5}>
          <AppLogo />
          <LoginForm onSubmit={handleLoginSubmit} />
          <Divider colorScheme="primary" mt={10} mb={10} />
          {process.env.REACT_APP_FACEBOOK_APP_ID && (
            <FacebookLogin
              appId={process.env.REACT_APP_FACEBOOK_APP_ID || ''}
              autoLoad
              fields="name,email,picture"
              onClick={() => null}
              callback={responseFacebook}
              cssClass="chakra-button css-1n319a9"
            />
          )}
          <Button
            colorScheme="twitter"
            leftIcon={<FaTwitter />}
            w="100%"
            my={3}
          >
            Twitter
          </Button>
          <Button
            variant="ghost"
            colorScheme="secondary"
            onClick={handleRedirectToRegister}
            w="100%"
          >
            {t('screens.login.noAccount')}
          </Button>
        </Box>
      </Center>
    </RouteContainer>
  )
}

export { LoginScreen }
