import { View, Text } from 'react-native'
import { navigateToHomeScreen } from '../../../home/navigation'
import { InputField } from '../../../../core/components/input-field'
import { Button } from '../../../../core/components/button'

export default function SignUpScreen({navigation}) {
  return (
    <View>

      <InputField />

      <Button variant='primary' label='Go to Home' onPress={() => navigateToHomeScreen(navigation)} />
    </View>
  )
}
