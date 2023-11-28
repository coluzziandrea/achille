import React from 'react'
import { TextInput } from 'react-native'

export type InputFieldProps = {
  placeholder?: string
}

export const InputField = ({ placeholder }: InputFieldProps) => {
  return <TextInput placeholder={placeholder} />
}
