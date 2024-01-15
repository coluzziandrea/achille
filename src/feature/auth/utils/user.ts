import { User as MyUser } from '../types'
import { User as RawUser } from 'firebase/auth'

export const formatRawUser = (rawUser: RawUser) => {
  return {
    id: rawUser.uid,
    email: rawUser.email,
    name: rawUser.displayName,
    avatarUrl: rawUser.photoURL
  } as MyUser
}
