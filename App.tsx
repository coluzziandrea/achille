import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { appRoutes } from './src/navigation'
import { AUTH_ROUTES } from './src/feature/auth/constants'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={AUTH_ROUTES.SIGN_UP}>
        {
          appRoutes.map(route => (<Stack.Screen key={route.name}  name={route.id} component={route.component} options={{ title: route.name}} />
          ))
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
