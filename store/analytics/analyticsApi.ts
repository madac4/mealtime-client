import { apiSlice } from '../api/apiSlice';

export const analyticsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        ordersHistory: builder.query({
            query: () => ({
                url: '/orders/history',
                method: 'GET',
                credentials: 'include' as const,
            }),
        }),
        ordersCount: builder.query({
            query: () => ({
                url: '/orders/count',
                method: 'GET',
                credentials: 'include' as const,
            }),
        }),
        ordersSum: builder.query({
            query: () => ({
                url: '/orders/sum',
                method: 'GET',
                credentials: 'include' as const,
            }),
        }),
    }),
});

export const { useOrdersHistoryQuery, useOrdersCountQuery, useOrdersSumQuery } = analyticsApi;
