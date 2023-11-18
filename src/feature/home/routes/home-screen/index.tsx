import { View, Text, Button } from 'react-native'
import { navigateToSignUpScreen } from '../../../auth/navigation'

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Sign Up"
        onPress={() => navigateToSignUpScreen(navigation)}
      />
    </View>
  )
}
