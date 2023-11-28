import { Route } from '../../../navigation'
import { HOME_ROUTES } from '../constants'
import HomeScreen from './home-screen'

export const homeRoutes: Array<Route> = [
  {
    id: HOME_ROUTES.HOME,
    component: HomeScreen
  }
]
