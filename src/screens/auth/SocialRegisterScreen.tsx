import { Box, Center, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

import { AppLogo } from 'components/common/AppLogo/AppLogo'
import { SocialRegisterForm, SocialRegisterFormFields } from 'components/forms/SocialRegisterForm'
import { RouteContainer } from 'components/navigation/RouteContainer'
import { useRegisterMutation } from 'api/hooks/auth/useRegisterMutation'
import { MAIN_ROUTE } from 'constants/routeNames'

const SocialRegisterScreen = () => {
  const { t } = useTranslation()
  const history = useHistory()

  const { mutate: registerMutate } = useRegisterMutation({
    onSuccess: () => {
      history.push(MAIN_ROUTE)
    },
    // eslint-disable-next-line no-console
    onError: () => console.warn(t('screen.signIn.errors.generic'))
  })

  const handleRegisterSubmit = (values: SocialRegisterFormFields) => {
    registerMutate({
      nick: values.username,
      email: 'placeholder@xd.pl',
      password1: values.password,
      password2: values.repeatPassword,
      consent: true,
    })
  }

  return (
    <RouteContainer>
      <Center w="100%">
        <Box w="100%" maxW="500px" p={5}>
          <AppLogo />
          <Text mt="10" align="center">{t('screens.socialRegister.helper')}</Text>
          <SocialRegisterForm onSubmit={handleRegisterSubmit} />
        </Box>
      </Center>
    </RouteContainer>
  )
}

export default SocialRegisterScreen
