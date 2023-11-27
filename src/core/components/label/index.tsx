import React from 'react'
import { Text } from 'react-native'

export type LabelVariant =
  | 'paragraph/medium/regular'
  | 'paragraph/medium/bold'
  | 'title/medium/regular'
  | 'title/medium/bold'

export type LabelProps = {
  children?: React.ReactNode
  variant?: LabelVariant
}

export const Label = ({
  children,
  variant = 'paragraph/medium/regular'
}: LabelProps) => {
  return <Text>{children}</Text>
}
