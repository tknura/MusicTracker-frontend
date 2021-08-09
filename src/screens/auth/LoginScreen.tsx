import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { Box, Button, Center, Divider } from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa'
import FacebookLogin, {
  ReactFacebookFailureResponse,
  ReactFacebookLoginInfo
} from 'react-facebook-login'

import { useLoginMutation } from 'api/hooks/auth/useLoginMutation'
import { LoginForm, LoginFormFields } from 'components/forms/LoginForm'
import { RouteContainer } from 'components/navigation/RouteContainer'
import { useLogin } from 'components/providers/AuthProvider'
import { AppLogo } from 'components/common/AppLogo/AppLogo'
import { REGISTER_ROUTE, SOCIAL_REGISTER_ROUTE } from 'constants/routeNames'
import { useFbLoginMutation } from 'api/hooks/auth/useFbLoginMutation'

const LoginScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const history = useHistory()
  const login = useLogin()

  const { mutate: loginMutate, isLoading: isLoginLoading } = useLoginMutation({
    onSuccess: ({ user_id: newUserId }) => login(newUserId),
  })

  const { mutate: fbLoginMutate, isLoading: isFbLoginLoading } = useFbLoginMutation({
    onSuccess: ({ user_id: newUserId }) => login(newUserId),
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
        <div id="fb-root" />
        <Box maxW="500px" p={5}>
          <AppLogo />
          <LoginForm isLoading={isLoginLoading || isFbLoginLoading} onSubmit={handleLoginSubmit} />
          <Divider colorScheme="primary" mt={10} mb={10} />
          {process.env.REACT_APP_FACEBOOK_APP_ID && (
            <FacebookLogin
              appId={process.env.REACT_APP_FACEBOOK_APP_ID || ''}
              autoLoad
              fields="name,email,picture"
              onClick={() => null}
              callback={responseFacebook}
              cssClass="chakra-button css-1j7an4u"
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
