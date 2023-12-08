import { Product } from "../interfaces/product";
import { Response } from "../interfaces/response";
import { api } from "./api";

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Response<Product[]>, void>({
      query: () => '/product/list',
      providesTags: ['Product']
    }),
  })
})

export const { useGetProductsQuery } = productApi