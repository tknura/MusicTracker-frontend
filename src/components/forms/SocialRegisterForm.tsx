import { FormikHelpers, useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { Button } from '@chakra-ui/react'

import { TextField } from 'components/ui/TextField'
import { socialRegisterSchema } from 'schemas/socialRegisterFormSchema'
import * as Styled from './form.styles'

interface SocialRegisterFormFields {
  username: string
  password: string
  repeatPassword: string
}

interface SocialRegisterFormProps {
  onSubmit?: (
    values: SocialRegisterFormFields,
    helpers: FormikHelpers<SocialRegisterFormFields>
  ) => void
  isLoading?: boolean
}

const SocialRegisterForm = ({
  onSubmit: handleSubmit = () => null,
  isLoading,
}: SocialRegisterFormProps): JSX.Element => {
  const { t } = useTranslation()

  const {
    handleSubmit: handleFormSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
  } = useFormik<SocialRegisterFormFields>({
    initialValues: {
      username: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: handleSubmit,
    validationSchema: socialRegisterSchema,
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
      <Button
        isLoading={isLoading}
        colorScheme="primary"
        type="submit"
        mt={5}
      >
        {t('screens.register.mainButton')}
      </Button>
    </Styled.Form>
  )
}

export { SocialRegisterForm }
export type { SocialRegisterFormFields }
