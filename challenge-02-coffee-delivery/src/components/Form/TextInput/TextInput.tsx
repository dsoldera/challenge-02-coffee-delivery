import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
} from 'react'
import { Container, ErrorMessage } from './styles'
import { FieldError } from 'react-hook-form'

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string
  error?: FieldError
  stylesProps?: HTMLAttributes<HTMLDivElement>
}

export const TextInput = forwardRef(function TextInput(
  { placeholder, stylesProps, error, ...rest }: TextInputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <Container {...stylesProps}>
      <input placeholder={placeholder} type="text" ref={ref} {...rest} />
      {error?.message ? (
        <ErrorMessage role="alert">{error.message}</ErrorMessage>
      ) : null}
    </Container>
  )
})
