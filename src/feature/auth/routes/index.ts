import { Route } from '../../../navigation'
import { AUTH_ROUTES } from '../constants'
import LoginScreen from './login'
import SignUpScreen from './sign-up'

export const authRoutes: Array<Route> = [
  {
    id: AUTH_ROUTES.SIGN_UP,
    component: SignUpScreen
  },
  {
    id: AUTH_ROUTES.LOGIN,
    component: LoginScreen
  }
]
