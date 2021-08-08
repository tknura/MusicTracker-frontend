import { FormikHelpers, useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { Button } from '@chakra-ui/react'

import { TextField } from 'components/ui/TextField'
import { registerSchema } from 'schemas/registerFormSchema'
import * as Styled from './form.styles'

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
    handleBlur,
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
      <TextField
        id="username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.username}
        placeholder={t('common.username')}
        label={t('common.username')}
        errorMessage={t(errors.username as string)}
        required
      />
      <TextField
        id="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.email}
        placeholder={t('common.email')}
        label={t('common.email')}
        errorMessage={t(errors.email as string)}
        required
      />
      <TextField
        id="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.password}
        placeholder={t('common.password')}
        label={t('common.password')}
        errorMessage={t(errors.password as string)}
        type="password"
        required
      />
      <TextField
        id="repeatPassword"
        value={values.repeatPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.repeatPassword}
        placeholder={t('common.repeatPassword')}
        label={t('common.repeatPassword')}
        errorMessage={t(errors.repeatPassword as string)}
        type="password"
        required
      />
      <Button colorScheme="primary" type="submit" mt={5}>
        {t('screens.register.mainButton')}
      </Button>
    </Styled.Form>
  )
}

export { RegisterForm }
export type { RegisterFormFields }
