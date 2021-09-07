import { FormikHelpers, useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { Button } from '@chakra-ui/react'

import { TextField } from 'components/ui/TextField'
import { changeEmailSchema } from 'schemas/changeEmailFormSchema'
import * as Styled from './form.styles'

interface ChangeEmlFormFields{
    newEmail: string
}

interface ChangeEmailFormProps {
    onSubmit?: (values: ChangeEmlFormFields, helpers: FormikHelpers<ChangeEmlFormFields>) => void
    isLoading?: boolean
}

const ChangeEmailForm = ({
  onSubmit: handleSubmit = () => null,
  isLoading = false
}: ChangeEmailFormProps): JSX.Element => {
  const { t } = useTranslation()

  const {
    handleSubmit: handleFormSubmit,
    handleChange,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      newEmail: '',
    },
    onSubmit: handleSubmit,
    validationSchema: changeEmailSchema,
  })

  return (
    <Styled.Form autoComplete="off" onSubmit={handleFormSubmit}>
      <TextField
        id="newEmail"
        value={values.newEmail}
        onChange={handleChange}
        touched={touched.newEmail}
        placeholder={t('common.email')}
        label={t('common.email')}
        errorMessage={t(errors.newEmail as string)}
        required
        type="email"
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

export { ChangeEmailForm }
export type { ChangeEmlFormFields }
