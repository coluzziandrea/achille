import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { User } from '../../types'
import { formatRawUser } from '../../utils'

export type LoginByEmailAndPasswordResult = {
  user?: User
  error?: string
}

export type LoginByEmailAndPasswordPayload = { email: string; password: string }

export const loginByEmailAndPassword = createAsyncThunk<
  LoginByEmailAndPasswordResult,
  LoginByEmailAndPasswordPayload
>('auth/loginByEmailAndPassword', async ({ email, password }) => {
  try {
    const auth = getAuth()
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    // Signed in
    const user = userCredential.user
    console.info('[loginByEmailAndPassword]: Logged user: ', user)
    return { user: formatRawUser(user) }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    console.warn(
      '[loginByEmailAndPassword]: errorCode: ',
      errorCode,
      'errorMessage: ',
      errorMessage
    )
    return { error: errorMessage }
  }
})
