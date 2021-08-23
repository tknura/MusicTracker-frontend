import * as yup from 'yup'

export const socialRegisterSchema = yup.object().shape({
  username: yup
    .string()
    .required('common.errors.username.required'),
  password: yup
    .string()
    .required('common.errors.password.required')
    .min(8, 'common.errors.password.toShort'),
  repeatPassword: yup
    .string()
    .required('common.errors.repeatPassword.required')
    .oneOf([yup.ref('password'), ''], 'common.errors.repeatPassword.notMatch'),
})
