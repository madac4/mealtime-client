import { apiSlice } from '../api/api.config';

export const analyticsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        ordersHistory: builder.query({
            query: () => ({
                url: '/orders/history',
                method: 'GET',
                credentials: 'include' as const,
            }),
        }),

        userCardAnalytics: builder.query({
            query: () => ({
                url: '/user/card-analytics',
                method: 'GET',
                credentials: 'include' as const,
            }),
        }),

        adminCardAnalytics: builder.query({
            query: () => ({
                url: '/admin/card-analytics',
                method: 'GET',
                credentials: 'include' as const,
            }),
        }),
    }),
});

export const { useOrdersHistoryQuery, useAdminCardAnalyticsQuery, useUserCardAnalyticsQuery } =
    analyticsApi;
