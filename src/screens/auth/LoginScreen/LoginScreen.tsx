import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

import { useLoginMutation } from 'api/auth'
import { LoginForm, LoginFormFields } from 'components/forms/LoginForm/LoginForm'
import { RouteContainer } from 'components/navigation/RouteContainer'
import { useLogin } from 'components/providers/AuthProvider'
import { AppLogo } from 'components/common/AppLogo/AppLogo'
import { REGISTER_ROUTE } from 'constants/routeNames'
import * as AuthStyled from '../auth.styles'

const LoginScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const history = useHistory()
  const login = useLogin()

  const { mutate: loginMutate } = useLoginMutation({
    onSuccess: ({ user_id: userId }) => {
      login(userId)
    },
    // eslint-disable-next-line no-console
    onError: () => console.warn(t('screen.signIn.errors.generic'))
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
      <AuthStyled.RootContainer>
        <AuthStyled.FormContainer>
          <AppLogo />
          <LoginForm onSubmit={handleLoginSubmit} />
          <AuthStyled.Hr />
          <AuthStyled.Button
            color="secondary"
            onClick={handleRedirectToRegister}
          >
            {t('screens.login.noAccount')}
          </AuthStyled.Button>
        </AuthStyled.FormContainer>
      </AuthStyled.RootContainer>
    </RouteContainer>
  )
}

export { LoginScreen }
