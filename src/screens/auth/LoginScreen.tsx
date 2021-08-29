import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { Box, Button, Center, Divider } from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa'

import { useLoginMutation } from 'api/hooks/auth/mutations/useLoginMutation'
import { LoginForm, LoginFormFields } from 'components/forms/LoginForm'
import { RouteContainer } from 'components/navigation/RouteContainer'
import { FacebookLoginButton, FacebookLoginResponse } from 'components/ui/FacebookLoginButton/FacebookLoginButton'
import { useLogin } from 'components/providers/AuthProvider'
import { AppLogo } from 'components/common/AppLogo/AppLogo'
import { MAIN_ROUTE, REGISTER_ROUTE, SOCIAL_REGISTER_ROUTE } from 'constants/routeNames'
import { useFbLoginMutation } from 'api/hooks/auth/mutations/useFbLoginMutation'

const LoginScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const history = useHistory()
  const login = useLogin()

  const handleLogin = async (userId: number) => {
    login(userId)
    history.push(MAIN_ROUTE)
  }

  const { mutate: loginMutate, isLoading: isLoginLoading } = useLoginMutation({
    onSuccess: async ({ user_id: newUserId }) => { await handleLogin(newUserId) },
  })

  const { mutate: fbLoginMutate, isLoading: isFbLoginLoading } = useFbLoginMutation({
    onSuccess: async ({ user_id: newUserId }) => { await handleLogin(newUserId) },
    onError: (error, variables) => {
      if (error.response?.status === 400) {
        history.push({
          pathname: SOCIAL_REGISTER_ROUTE,
          state: variables
        })
      }
    }
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

  return (
    <RouteContainer>
      <Center w="100%">
        <div id="fb-root" />
        <Box maxW="500px" p={5}>
          <AppLogo />
          <LoginForm isLoading={isLoginLoading || isFbLoginLoading} onSubmit={handleLoginSubmit} />
          <Divider colorScheme="primary" mt={10} mb={10} />
          {process.env.REACT_APP_FACEBOOK_APP_ID && (
            <FacebookLoginButton
              callback={responseFacebook}
              w="100%"
              my={3}
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
