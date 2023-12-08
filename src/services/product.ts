import { Product } from "../interfaces/product";
import { Response } from "../interfaces/response";
import { api } from "./api";

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Response<Product[]>, void>({
      query: () => '/product/list',
      providesTags: ['Product']
    }),
    createProduct: build.mutation<Response<void>, Omit<Product, 'id'>>({
      query: (product) => ({
        url: '/product/create',
        method: 'POST',
        body: product
      })
    }),
    deleteProduct: build.mutation<Response<void>, string | undefined>({
      query: (_id) => ({
        url: `/product/delete/${_id}`,
        method: "DELETE"
      }),
      invalidatesTags: ['Product']
    })
  })
})

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation
} = productApi