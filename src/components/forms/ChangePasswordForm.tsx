import { FormikHelpers, useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { Button } from '@chakra-ui/react'

import { TextField } from 'components/ui/TextField'
import { changePasswordSchema } from 'schemas/changePasswordFormSchema'
import * as Styled from './form.styles'

interface ChangePswdFormFields {
  oldPassword: string
  newPassword: string
}

interface RegisterFormProps {
  onSubmit?: (values: ChangePswdFormFields, helpers: FormikHelpers<ChangePswdFormFields>) => void
  isLoading?: boolean
}

const ChangePasswordForm = ({
  onSubmit: handleSubmit = () => null,
  isLoading,
}: RegisterFormProps): JSX.Element => {
  const { t } = useTranslation()

  const {
    handleSubmit: handleFormSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
  } = useFormik<ChangePswdFormFields>({
    initialValues: {
      oldPassword: '',
      newPassword: '',
    },
    onSubmit: handleSubmit,
    validationSchema: changePasswordSchema,
  })

  return (
    <Styled.Form autoComplete="off" onSubmit={handleFormSubmit}>
      <TextField
        id="oldPassword"
        value={values.oldPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.oldPassword}
        placeholder={t('common.password')}
        label={t('common.password')}
        errorMessage={t(errors.oldPassword as string)}
        type="password"
        required
      />
      <TextField
        id="newPassword"
        value={values.newPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched.newPassword}
        placeholder={t('screens.settings.newPassword')}
        label={t('screens.settings.newPassword')}
        errorMessage={t(errors.newPassword as string)}
        type="password"
        required
      />
      <Button
        isLoading={isLoading}
        colorScheme="primary"
        type="submit"
        mt={5}
      >
        {t('screens.settings.changeUserData')}
      </Button>
    </Styled.Form>
  )
}

export { ChangePasswordForm }
export type { ChangePswdFormFields }
