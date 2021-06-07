import { Link, Button } from '@material-ui/core'
import { FormikHelpers, useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

import { loginSchema } from 'schemas/loginFormSchema'
import * as Styled from './LoginForm.styles'

interface LoginFormFields {
  username: string
  password: string
}

interface LoginFormProps {
  onSubmit?: (values: LoginFormFields, helpers: FormikHelpers<LoginFormFields>) => void
}

const LoginForm = ({
  onSubmit: handleSubmit = () => null
}: LoginFormProps): JSX.Element => {
  const { t } = useTranslation()

  const {
    handleSubmit: handleFormSubmit,
    handleChange,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: handleSubmit,
    validationSchema: loginSchema,
  })

  return (
    <Styled.Form autoComplete="off" onSubmit={handleFormSubmit}>
      <Styled.TextField
        id="username"
        value={values.username}
        error={touched.username && !!errors.username}
        helperText={touched.password && t(errors.username as string)}
        onChange={handleChange}
        required
        label={t('common.username')}
        variant="filled"
      />
      <Styled.TextField
        id="password"
        value={values.password}
        error={touched.password && !!errors.password}
        helperText={touched.password && t(errors.password as string)}
        onChange={handleChange}
        required
        type="password"
        label={t('common.password')}
        variant="filled"
      />
      <Styled.ButtonContainer>
        <Link
          component="button"
          href="/"
        >
          {t('screens.login.resetPassword')}
        </Link>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
        >
          {t('screens.login.mainButton')}
        </Button>
      </Styled.ButtonContainer>
    </Styled.Form>
  )
}

export { LoginForm }
export type { LoginFormFields }
