import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required('screens.signIn.errors.username.required'),
  password: yup
    .string()
    .required('common.errors.password.required'),
})
