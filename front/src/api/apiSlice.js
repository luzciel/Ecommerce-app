import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = 'http://localhost:5000/'

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL
    }),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        getProducts: builder.query({
          query: () => "api/products",
          providesTags: ["Todos"]
            
        }),
        getOneProduct: builder.query({
          query: (id) => `api/products/${id}`
        })
    })
})

export const { useGetProductsQuery, useGetOneProductQuery} = api