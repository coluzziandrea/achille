import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export type FullPageLayoutProps = {
  children?: React.ReactNode
}

export const FullPageLayout = ({ children }: FullPageLayoutProps) => {
  const insets = useSafeAreaInsets()
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }}
    >
      {children}
    </View>
  )
}
