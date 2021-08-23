import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps
} from '@chakra-ui/react'

interface TextFieldProps extends InputProps {
  label?: string,
  touched?: boolean
  required?: boolean
  errorMessage?: string
}

const TextField = ({
  label,
  touched,
  errorMessage,
  required,
  ...props
}: TextFieldProps) => (
  <FormControl isInvalid={!!errorMessage && touched} mt={5}>
    {!!label && <FormLabel>{label}</FormLabel>}
    <Input
      variant="filled"
      required={required}
      {...props}
    />
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
)

export type { TextFieldProps }
export { TextField }
