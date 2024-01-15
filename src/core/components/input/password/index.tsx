import React from 'react'
import { InputField } from '../simple'

export type PasswordFieldProps = {
  placeholder?: string
  content?: string
  onChange?: (newValue: string) => void
}

export const PasswordField = ({
  placeholder,
  content,
  onChange
}: PasswordFieldProps) => {
  return (
    <InputField
      secureTextEntry
      textContentType={'password'}
      placeholder={placeholder}
      content={content}
      onChange={onChange}
    />
  )
}
