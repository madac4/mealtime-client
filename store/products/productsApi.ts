import { apiSlice } from '../api/apiSlice';

export const productsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: (data) => ({
                url: '/add-product',
                method: 'POST',
                body: data,
                credentials: 'include' as const,
            }),
        }),
        getProducts: builder.query({
            query: () => ({
                url: '/get-products',
                method: 'GET',
                credentials: 'include' as const,
            }),
        }),
        deleteProducts: builder.mutation({
            query: (id) => ({
                url: `/delete-product/${id}`,
                method: 'DELETE',
                credentials: 'include' as const,
            }),
        }),
    }),
});

export const { useCreateProductMutation, useGetProductsQuery, useDeleteProductsMutation } =
    productsApi;
