import { apiSlice } from '../api/apiSlice';

export const companyApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCompanies: builder.query({
            query: () => ({
                url: '/get-companies',
                method: 'GET',
                credentials: 'include' as const,
            }),
        }),
    }),
});

export const { useGetCompaniesQuery } = companyApi;
