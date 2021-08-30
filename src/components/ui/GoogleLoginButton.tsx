import GoogleButton from 'react-google-button'
import { GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin } from 'react-google-login'

interface GoogleLoginError {
  error: string
}

interface GoogleLoginButtonProps {
  callback?: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void
  errorHandler?: (error: GoogleLoginError) => void
}

const GoogleLoginButton = ({
  callback,
  errorHandler,
  ...props
}: GoogleLoginButtonProps) => {
  const { signIn } = useGoogleLogin({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID || '',
    onSuccess: callback,
    onFailure: errorHandler,
  })

  return (
    <GoogleButton
      type="light"
      style={{ width: '100%' }}
      onClick={signIn}
    />
  )
}

export { GoogleLoginButton }
