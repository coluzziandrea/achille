import React from 'react'
import { TextInput } from 'react-native'

export type InputFieldProps = {
  textContentType?: React.ComponentProps<typeof TextInput>['textContentType']
  secureTextEntry?: React.ComponentProps<typeof TextInput>['secureTextEntry']
  placeholder?: string
}

export const InputField = ({
  textContentType = 'none',
  secureTextEntry = false,
  placeholder
}: InputFieldProps) => {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      textContentType={textContentType}
      placeholder={placeholder}
    />
  )
}
