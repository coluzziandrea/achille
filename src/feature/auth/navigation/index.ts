import { AUTH_ROUTES } from '../constants'

export const navigateToSignUpScreen = (navigation: any) => {
  navigation.navigate(AUTH_ROUTES.SIGN_UP)
}
