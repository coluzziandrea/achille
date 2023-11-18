import { View, Text, Button } from 'react-native'
import { navigateToHomeScreen } from '../../../home/navigation'

export default function SignUpScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign Up Screen</Text>

      <Button
        title="Go to Home"
        onPress={() => navigateToHomeScreen(navigation)}
      />
    </View>
  )
}
