import { authRoutes } from '../../feature/auth/routes'
import { homeRoutes } from '../../feature/home/routes/routes'
import { Route } from '../types'

export const appRoutes: Array<Route> = [...homeRoutes, ...authRoutes]
