import { Product } from "../interfaces/product";
import { Response } from "../interfaces/response";
import { api } from "./api";

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Response<Product[]>, void>({
      query: () => '/product/list',
      providesTags: ['Product']
    }),
    getProduct: build.query<Response<Product>, string | undefined>({
      query: (id) => `/product/${id}`
    }),
    createProduct: build.mutation<Response<void>, Omit<Product, 'id'>>({
      query: (product) => ({
        url: '/product/create',
        method: 'POST',
        body: product
      })
    }),
    editProduct: build.mutation<Response<void>, { id: string | undefined, data: Omit<Product, 'id'> }>({
      query: (product) => ({
        url: `/product/update/${product.id}`,
        method: 'PUT',
        body: product.data
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
  useGetProductQuery,
  useCreateProductMutation,
  useEditProductMutation,
  useDeleteProductMutation
} = productApi