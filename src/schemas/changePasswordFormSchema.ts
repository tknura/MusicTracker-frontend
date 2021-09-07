import * as yup from 'yup'

export const changePasswordSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .required('common.errors.password.required')
    .min(8, 'common.errors.password.toShort'),
  newPassword: yup
    .string()
    .required('common.errors.repeatPassword.required')
    .min(8, 'common.errors.password.toShort'),
})
