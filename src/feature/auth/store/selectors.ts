import { RootState } from '../../../state'
import { useAppSelector } from '../../../state/hooks'

export const useSelectCount = () =>
  useAppSelector((state: RootState) => state.auth.value)
