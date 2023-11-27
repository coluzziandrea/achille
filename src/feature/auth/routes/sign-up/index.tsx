import { View, Text } from 'react-native'
import { navigateToHomeScreen } from '../../../home/navigation'
import { InputField, Button, Label } from '../../../../core/components'
import { useTranslation } from 'react-i18next'

export default function SignUpScreen({navigation}) {
   const { t } = useTranslation("auth")

  return (
    <View>
      <Label>{t('username')}</Label>

      <InputField placeholder={t("username")}/>

      <Button
        variant="primary"
        label="Go to Home"
        onPress={() => navigateToHomeScreen(navigation)}
      />
    </View>
  )
}
