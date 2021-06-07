import { FormikHelpers, useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

import { registerSchema } from 'schemas/registerFormSchema'
import * as Styled from './RegisterForm.styles'

interface RegisterFormFields {
  username: string
  email: string
  password: string
  repeatPassword: string
}

interface RegisterFormProps {
  onSubmit?: (values: RegisterFormFields, helpers: FormikHelpers<RegisterFormFields>) => void
}

const RegisterForm = ({
  onSubmit: handleSubmit = () => null
}: RegisterFormProps): JSX.Element => {
  const { t } = useTranslation()

  const {
    handleSubmit: handleFormSubmit,
    handleChange,
    values,
    errors,
    touched,
  } = useFormik<RegisterFormFields>({
    initialValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: handleSubmit,
    validationSchema: registerSchema,
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
        id="email"
        value={values.email}
        error={touched.email && !!errors.email}
        helperText={touched.password && t(errors.email as string)}
        onChange={handleChange}
        required
        label={t('common.email')}
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
      <Styled.TextField
        id="repeatPassword"
        value={values.repeatPassword}
        error={touched.repeatPassword && !!errors.repeatPassword}
        helperText={touched.repeatPassword && t(errors.repeatPassword as string)}
        onChange={handleChange}
        required
        type="password"
        label={t('screens.register.repeatPassword')}
        variant="filled"
      />
      <Styled.Button
        variant="outlined"
        color="primary"
        type="submit"
      >
        {t('screens.register.mainButton')}
      </Styled.Button>
    </Styled.Form>
  )
}

export { RegisterForm }
export type { RegisterFormFields }
