import { Response } from "../interfaces/response";
import { User } from "../interfaces/user";
import { api } from "./api";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<Response<void>, User>({
      query: (user) => ({
        url: '/auth/register',
        method: "POST",
        body: user
      })
    }),
    login: build.mutation<Response<User>, Partial<User>>({
      query: (user) => ({
        url: '/auth/login',
        method: "POST",
        body: user
      })
    })
  })
})

export const { useRegisterMutation, useLoginMutation } = authApi