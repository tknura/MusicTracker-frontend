import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { Box, Button, Center, Divider } from '@chakra-ui/react'

import { useRegisterMutation } from 'api/hooks/auth/mutations/useRegisterMutation'
import { RegisterForm, RegisterFormFields } from 'components/forms/RegisterForm'
import { RouteContainer } from 'components/navigation/RouteContainer'
import { AppLogo } from 'components/ui/AppLogo/AppLogo'
import { LOGIN_ROUTE } from 'constants/routeNames'

const RegisterScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const history = useHistory()

  const { mutate: registerMutate, isLoading } = useRegisterMutation({
    onSuccess: () => {
      history.push(LOGIN_ROUTE)
    },
    // eslint-disable-next-line no-console
    onError: () => console.warn(t('screen.signIn.errors.generic'))
  })

  const handleRegisterSubmit = (values: RegisterFormFields) => {
    registerMutate({
      nick: values.username,
      email: values.email,
      password1: values.password,
      password2: values.repeatPassword,
      consent: true,
    })
  }

  const handleRedirectToLogin = () => {
    history.push(LOGIN_ROUTE)
  }

  return (
    <RouteContainer>
      <Center w="100%">
        <Box maxW="500px" p={5}>
          <AppLogo />
          <RegisterForm isLoading={isLoading} onSubmit={handleRegisterSubmit} />
          <Divider colorScheme="primary" mt={10} mb={10} />
          <Button
            variant="ghost"
            colorScheme="secondary"
            onClick={handleRedirectToLogin}
            w="100%"
          >
            {t('screens.login.noAccount')}
          </Button>
        </Box>
      </Center>
    </RouteContainer>
  )
}

export { RegisterScreen }
