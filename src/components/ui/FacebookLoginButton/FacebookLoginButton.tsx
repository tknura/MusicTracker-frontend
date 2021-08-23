import { MouseEvent } from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { FaFacebook } from 'react-icons/fa'

import { useInitFacebookSdk } from './useInitFacebookSdk'

interface FacebookLoginButtonProps extends ButtonProps {
  className?: string
  callback?: (response: FacebookLoginResponse) => void
}

interface FacebookUserData {
  name: string
  email: string
  id: string
}

interface FacebookLoginResponse {
  authData: fb.AuthResponse
  userData: FacebookUserData
}

const FacebookLoginButton = ({
  className,
  onClick,
  callback,
  ...props
}: FacebookLoginButtonProps) => {
  const { t } = useTranslation()

  useInitFacebookSdk()

  const handleFbLogin = async (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event)
    FB.login((authResponse) => {
      FB.api('/me', { fields: 'name, email' }, (userDataResponse) => {
        callback?.({
          authData: authResponse.authResponse,
          userData: userDataResponse as FacebookUserData })
      })
    }, {
      scope: 'public_profile, email',
      enable_profile_selector: true,
    })
  }

  return (
    <Button
      colorScheme="facebook"
      leftIcon={<FaFacebook />}
      onClick={handleFbLogin}
      {...props}
    >
      {t('common.loginFacebook')}
    </Button>
  )
}

export { FacebookLoginButton, useInitFacebookSdk }
export type { FacebookLoginResponse }
