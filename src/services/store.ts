import { configureStore } from "@reduxjs/toolkit/react"
import { api } from "./api"
import authSlice from "../features/authSlice"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch