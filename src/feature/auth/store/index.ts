import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../types'
import {
  LoginByEmailAndPasswordResult,
  loginByEmailAndPassword
} from './action/loginByEmailAndPassword'
export interface AuthState {
  user?: User
  error?: string
  isLoading?: boolean
}

const initialState: AuthState = {
  user: undefined
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginByEmailAndPassword.pending, (state) => {
        console.log('[loginByEmailAndPassword]: pending')
        state.error = undefined
        state.user = undefined
        state.isLoading = true
      })
      .addCase(
        loginByEmailAndPassword.fulfilled,
        (state, action: PayloadAction<LoginByEmailAndPasswordResult>) => {
          state.isLoading = false
          state.user = action.payload.user
          state.error = action.payload.error
        }
      )
  }
})

export * from './selectors'
export const {} = authSlice.actions
export default authSlice.reducer
