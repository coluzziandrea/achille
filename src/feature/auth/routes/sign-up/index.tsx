import { View } from 'react-native'
import { navigateToHomeScreen } from '../../../home/navigation'
import { InputField, Button } from '../../../../core/components'

export default function SignUpScreen({navigation}) {
  return (
    <View>

      <InputField />

      <Button variant='primary' label='Go to Home' onPress={() => navigateToHomeScreen(navigation)} />
    </View>
  )
}
