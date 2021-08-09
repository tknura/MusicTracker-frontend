import { FormikHelpers, useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import {
  Flex,
  Spacer,
  Button,
  Link
} from '@chakra-ui/react'

import { TextField } from 'components/ui/TextField'
import { loginSchema } from 'schemas/loginFormSchema'
import * as Styled from './form.styles'

interface LoginFormFields {
  username: string
  password: string
}

interface LoginFormProps {
  onSubmit?: (values: LoginFormFields, helpers: FormikHelpers<LoginFormFields>) => void
  isLoading?: boolean
}

const LoginForm = ({
  onSubmit: handleSubmit = () => null,
  isLoading = false
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
      <TextField
        id="username"
        value={values.username}
        onChange={handleChange}
        touched={touched.username}
        placeholder={t('common.username')}
        label={t('common.username')}
        errorMessage={t(errors.username as string)}
        required
      />
      <TextField
        id="password"
        value={values.password}
        onChange={handleChange}
        touched={touched.password}
        placeholder={t('common.password')}
        label={t('common.password')}
        errorMessage={t(errors.password as string)}
        required
      />
      <Flex align="center" mt={5}>
        <Link
          component="button"
          href="/"
        >
          {t('screens.login.resetPassword')}
        </Link>
        <Spacer />
        <Button
          isLoading={isLoading}
          colorScheme="primary"
          type="submit"
        >
          {t('screens.login.mainButton')}
        </Button>
      </Flex>
    </Styled.Form>
  )
}

export { LoginForm }
export type { LoginFormFields }
