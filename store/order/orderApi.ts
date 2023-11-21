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
    }),
});

export const { useNewOrderMutation } = ordersApi;
