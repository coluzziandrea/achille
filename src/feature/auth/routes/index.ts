import { Route } from '../../../navigation'
import { AUTH_ROUTES } from '../constants'
import SignUpScreen from './sign-up'

export const authRoutes: Array<Route> = [
  {
    id: AUTH_ROUTES.SIGN_UP,
    name: 'Sign Up',
    component: SignUpScreen
  }
]
