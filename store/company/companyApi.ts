import { apiSlice } from '../api/api.config';

export const companyApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCompanies: builder.query({
            query: () => ({
                url: '/get-companies',
                method: 'GET',
                credentials: 'include' as const,
            }),
        }),
        createCompany: builder.mutation({
            query: (data) => ({
                url: '/create-company',
                method: 'POST',
                body: data,
                credentials: 'include' as const,
            }),
        }),
        deleteCompany: builder.mutation({
            query: (id) => ({
                url: `/delete-company/${id}`,
                method: 'DELETE',
                credentials: 'include' as const,
            }),
        }),
    }),
});

export const { useGetCompaniesQuery, useCreateCompanyMutation, useDeleteCompanyMutation } =
    companyApi;
