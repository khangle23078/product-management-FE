import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  user_name: string | null,
  isAuthentication: boolean
}

const initialState = {
  user_name: null,
  isAuthentication: false
} as AuthState

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.user_name = payload.user_name
      state.isAuthentication = true
    },
    logout: (state) => {
      state.user_name = null
      state.isAuthentication = false
    }
  }
});

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer