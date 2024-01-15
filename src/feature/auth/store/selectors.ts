import { RootState } from '../../../state'
import { useAppSelector } from '../../../state/hooks'

export const useIsAuthLoading = () =>
  useAppSelector((state: RootState) => state.auth.isLoading)

export const useLoggedUser = () =>
  useAppSelector((state: RootState) => state.auth.user)

export const useAuthError = () =>
  useAppSelector((state: RootState) => state.auth.error)
