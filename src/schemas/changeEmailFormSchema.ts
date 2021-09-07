import * as yup from 'yup'

export const changeEmailSchema = yup.object().shape({
  newEmail: yup
    .string()
    .email('common.errors.email.format')
    .required('common.errors.email.required'),
})
