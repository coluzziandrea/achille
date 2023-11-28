import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { appRoutes } from './src/navigation'
import { AUTH_ROUTES } from './src/feature/auth/constants'
import { ThemeProvider } from 'styled-components/native'
import { useAppTheme } from './src/config'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  const theme = useAppTheme()
  const Stack = createNativeStackNavigator()
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={AUTH_ROUTES.LOGIN}
            screenOptions={{ headerShown: false }}
          >
            {appRoutes.map((route) => (
              <Stack.Screen
                key={route.id}
                name={route.id}
                component={route.component}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
