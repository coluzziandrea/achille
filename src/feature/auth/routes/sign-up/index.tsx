import { View, Text } from 'react-native'
import { navigateToHomeScreen } from '../../../home/navigation'
import { InputField, Button } from '../../../../core/components'
import { useTranslation } from 'react-i18next'

export default function SignUpScreen({navigation}) {
   const { t } = useTranslation()

  return (
    <View>
      <Text>{t('auth.signup')}</Text>

      <InputField />

      <Button
        variant="primary"
        label="Go to Home"
        onPress={() => navigateToHomeScreen(navigation)}
      />
    </View>
  )
}
