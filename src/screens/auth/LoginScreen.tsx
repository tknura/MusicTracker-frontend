import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { Box, Button, Center, Divider } from '@chakra-ui/react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'

import { useLoginMutation } from 'api/auth'
import { LoginForm, LoginFormFields } from 'components/forms/LoginForm'
import { RouteContainer } from 'components/navigation/RouteContainer'
import { useLogin } from 'components/providers/AuthProvider'
import { AppLogo } from 'components/common/AppLogo/AppLogo'
import { APP_CONNECTION_ROUTE, REGISTER_ROUTE } from 'constants/routeNames'

const LoginScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const history = useHistory()
  const login = useLogin()

  const { mutate: loginMutate } = useLoginMutation({
    onSuccess: ({ user_id: userId }) => {
      login(userId)
      history.push(APP_CONNECTION_ROUTE)
    },
    // eslint-disable-next-line no-console
    onError: () => console.warn(t('screens.signIn.errors.generic'))
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

  return (
    <RouteContainer>
      <Center w="100%">
        <Box maxW="500px" p={5}>
          <AppLogo />
          <LoginForm onSubmit={handleLoginSubmit} />
          <Divider colorScheme="primary" mt={10} mb={10} />
          <Button
            colorScheme="facebook"
            leftIcon={<FaFacebook />}
            w="100%"
            mb={3}
          >
            Facebook
          </Button>
          <Button
            colorScheme="twitter"
            leftIcon={<FaTwitter />}
            w="100%"
            mb={3}
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
