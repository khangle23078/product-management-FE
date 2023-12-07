import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  accessToken: string | null
}

const initialState = {
  accessToken: null
} as AuthState

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
});

// export const { } = authSlice.actions

export default authSlice.reducer