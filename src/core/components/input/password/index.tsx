import React from 'react'
import { InputField } from '../simple'

export type PasswordFieldProps = {
  placeholder?: string
}

export const PasswordField = ({ placeholder }: PasswordFieldProps) => {
  return (
    <InputField
      secureTextEntry
      textContentType={'password'}
      placeholder={placeholder}
    />
  )
}
