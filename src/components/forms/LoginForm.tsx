import { FormikHelpers, useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import {
  Flex,
  Spacer,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Link
} from '@chakra-ui/react'

import { loginSchema } from 'schemas/loginFormSchema'
import * as Styled from './form.styles'

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
      <FormControl isInvalid={touched.username && !!errors.username} mt={5}>
        <FormLabel>{t('common.username')}</FormLabel>
        <Input
          id="username"
          value={values.username}
          onChange={handleChange}
          required
          placeholder={t('common.username')}
          variant="filled"
        />
        <FormErrorMessage>{t(errors.username as string)}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={touched.password && !!errors.password} mt={5}>
        <FormLabel>{t('common.password')}</FormLabel>
        <Input
          id="password"
          value={values.password}
          onChange={handleChange}
          required
          type="password"
          placeholder={t('common.password')}
          variant="filled"
        />
        <FormErrorMessage>{t(errors.password as string)}</FormErrorMessage>
      </FormControl>
      <Flex align="center" mt={5}>
        <Link
          component="button"
          href="/"
        >
          {t('screens.login.resetPassword')}
        </Link>
        <Spacer />
        <Button colorScheme="primary" type="submit">
          {t('screens.login.mainButton')}
        </Button>
      </Flex>
    </Styled.Form>
  )
}

export { LoginForm }
export type { LoginFormFields }
