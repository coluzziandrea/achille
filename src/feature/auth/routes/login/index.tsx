import { navigateToHomeScreen } from '../../../home/navigation'
import { InputField, Button, Label } from '../../../../core/components'
import { useTranslation } from 'react-i18next'
import { FullPageLayout } from '../../../../core/layout'
import { PasswordField } from '../../../../core/components/input'
import React from 'react'
import { useAppDispatch } from '../../../../state/hooks'
import { loginByEmailAndPassword } from '../../store/action/loginByEmailAndPassword'
import { useAuthError, useIsAuthLoading, useLoggedUser } from '../../store'

export default function LoginScreen({ navigation }) {
  const { t } = useTranslation('auth')

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const isLoading = useIsAuthLoading()
  const loggedUser = useLoggedUser()
  const authError = useAuthError()

  const dispatch = useAppDispatch()

  const handleLogin = () => {
    console.warn('email: ', email, 'password: ', password)

    dispatch(loginByEmailAndPassword({ email, password }))
  }

  React.useEffect(() => {
    if (loggedUser) {
      navigateToHomeScreen(navigation)
    }
  }, [loggedUser])

  return (
    <FullPageLayout>
      <Label>{t('email')}</Label>

      <InputField
        placeholder={t('email')}
        content={email}
        onChange={(newValue) => setEmail(newValue)}
      />

      <Label>{t('password')}</Label>
      <PasswordField
        placeholder={t('password')}
        content={password}
        onChange={(newValue) => setPassword(newValue)}
      />

      {isLoading && <Label>{t('loading')}</Label>}

      {authError && <Label>{authError}</Label>}

      <Button variant="primary" label={t('login')} onPress={handleLogin} />
    </FullPageLayout>
  )
}
