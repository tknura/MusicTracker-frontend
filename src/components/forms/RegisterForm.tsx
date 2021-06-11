import { FormikHelpers, useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react'

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
      <FormControl isInvalid={!!errors.username && !!touched.username} mt={5}>
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
      <FormControl isInvalid={touched.email && !!errors.email} mt={5}>
        <FormLabel>{t('common.email')}</FormLabel>
        <Input
          id="email"
          value={values.email}
          onChange={handleChange}
          required
          placeholder={t('common.email')}
          variant="filled"
        />
        <FormErrorMessage>{t(errors.email as string)}</FormErrorMessage>
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
      <FormControl isInvalid={touched.repeatPassword && !!errors.repeatPassword} mt={5}>
        <FormLabel>{t('screens.register.repeatPassword')}</FormLabel>
        <Input
          id="repeatPassword"
          value={values.repeatPassword}
          onChange={handleChange}
          required
          type="password"
          placeholder={t('screens.register.repeatPassword')}
          variant="filled"
        />
        <FormErrorMessage>{t(errors.password as string)}</FormErrorMessage>
      </FormControl>
      <Button colorScheme="primary" type="submit" mt={5}>
        {t('screens.register.mainButton')}
      </Button>
    </Styled.Form>
  )
}

export { RegisterForm }
export type { RegisterFormFields }
