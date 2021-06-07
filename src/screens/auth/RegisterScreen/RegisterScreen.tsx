import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

import { useRegisterMutation } from 'api/auth'
import { RegisterForm, RegisterFormFields } from 'components/forms/RegisterForm/RegisterForm'
import { RouteContainer } from 'components/navigation/RouteContainer'
import { AppLogo } from 'components/common/AppLogo/AppLogo'
import { LOGIN_ROUTE } from 'constants/routeNames'
import * as AuthStyled from '../auth.styles'

const RegisterScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const history = useHistory()

  const { mutate: registerMutate } = useRegisterMutation({
    onSuccess: () => {
      history.push(LOGIN_ROUTE)
    },
    // eslint-disable-next-line no-console
    onError: () => console.warn(t('screen.signIn.errors.generic'))
  })

  const handleLoginSubmit = (values: RegisterFormFields) => {
    registerMutate({
      nick: values.username,
      email: values.email,
      password1: values.password,
      password2: values.repeatPassword,
      regulamin: true,
    })
  }

  const handleRedirectToRegister = () => {
    history.push(LOGIN_ROUTE)
  }

  return (
    <RouteContainer>
      <AuthStyled.RootContainer>
        <AuthStyled.FormContainer>
          <AppLogo />
          <RegisterForm onSubmit={handleLoginSubmit} />
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

export { RegisterScreen }
