import { navigateToHomeScreen } from '../../../home/navigation'
import { InputField, Button, Label } from '../../../../core/components'
import { useTranslation } from 'react-i18next'
import { FullPageLayout } from '../../../../core/layout'
import { increment, useSelectCount } from '../../store'
import { useAppDispatch } from '../../../../state/hooks'

export default function SignUpScreen({ navigation }) {
  const { t } = useTranslation('auth')

  const counter = useSelectCount()

  const dispatch = useAppDispatch()

  return (
    <FullPageLayout>
      <Label>{t('username')}</Label>

      <InputField placeholder={t('username')} />

      <Label>{counter}</Label>

      <Button
        variant="primary"
        label="Increment"
        onPress={() => dispatch(increment())}
      />

      <Button
        variant="primary"
        label="Go to Home"
        onPress={() => navigateToHomeScreen(navigation)}
      />
    </FullPageLayout>
  )
}
