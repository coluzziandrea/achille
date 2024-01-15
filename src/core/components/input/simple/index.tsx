import React from 'react'
import { TextInput } from 'react-native'

export type InputFieldProps = {
  textContentType?: React.ComponentProps<typeof TextInput>['textContentType']
  secureTextEntry?: React.ComponentProps<typeof TextInput>['secureTextEntry']
  placeholder?: string
  content?: string
  onChange?: (newValue: string) => void
}

export const InputField = ({
  textContentType = 'none',
  secureTextEntry = false,
  placeholder,
  content,
  onChange
}: InputFieldProps) => {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      textContentType={textContentType}
      placeholder={placeholder}
      value={content}
      onChange={(event) => {
        onChange(event.nativeEvent.text)
      }}
    />
  )
}
