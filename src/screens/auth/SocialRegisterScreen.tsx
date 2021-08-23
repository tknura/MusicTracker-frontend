import { Box, Center, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

import { AppLogo } from 'components/common/AppLogo/AppLogo'
import { SocialRegisterForm, SocialRegisterFormFields } from 'components/forms/SocialRegisterForm'
import { RouteContainer } from 'components/navigation/RouteContainer'
import { useRegisterMutation } from 'api/hooks/auth/useRegisterMutation'
import { useLogin } from 'components/providers/AuthProvider'
import { useFbLoginMutation } from 'api/hooks/auth/useFbLoginMutation'
import { FbLoginValues } from 'api/types/auth/login'

const SocialRegisterScreen = () => {
  const { t } = useTranslation()
  const login = useLogin()
  const history = useHistory()
  const fbLoginData = history.location.state as FbLoginValues

  const { mutate: fbLoginMutate, isLoading: isFbLoginLoading } = useFbLoginMutation({
    onSuccess: ({ user_id: newUserId }) => login(newUserId),
  })

  const { mutate: registerMutate, isLoading } = useRegisterMutation({
    onSuccess: () => {
      fbLoginMutate(fbLoginData)
    },
  })

  const handleRegisterSubmit = (values: SocialRegisterFormFields) => {
    registerMutate({
      nick: values.username,
      email: fbLoginData.email,
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
          <SocialRegisterForm
            isLoading={isLoading || isFbLoginLoading}
            onSubmit={handleRegisterSubmit}
          />
        </Box>
      </Center>
    </RouteContainer>
  )
}

export default SocialRegisterScreen
