import { apiSlice } from '../api/apiSlice';

export const ordersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        newOrder: builder.mutation({
            query: (data) => ({
                url: '/new-order',
                method: 'POST',
                body: data,
                credentials: 'include' as const,
            }),
        }),
        getOrders: builder.query({
            query: () => ({
                url: '/get-orders',
                method: 'GET',
                credentials: 'include' as const,
            }),
        }),
    }),
});

export const { useNewOrderMutation, useGetOrdersQuery } = ordersApi;
