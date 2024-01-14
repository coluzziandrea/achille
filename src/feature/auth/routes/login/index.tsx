import { navigateToHomeScreen } from '../../../home/navigation'
import { InputField, Button, Label } from '../../../../core/components'
import { useTranslation } from 'react-i18next'
import { FullPageLayout } from '../../../../core/layout'
import { PasswordField } from '../../../../core/components/input'

export default function LoginScreen({ navigation }) {
  const { t } = useTranslation('auth')

  return (
    <FullPageLayout>
      <Label>{t('username')}</Label>

      <InputField placeholder={t('username')} />

      <Label>{t('password')}</Label>
      <PasswordField placeholder={t('password')} />

      <Button
        variant="primary"
        label={t('login')}
        onPress={() => navigateToHomeScreen(navigation)}
      />
    </FullPageLayout>
  )
}
