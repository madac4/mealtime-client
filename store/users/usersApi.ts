import { apiSlice } from '../api/apiSlice';

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => ({
                url: '/users',
                method: 'GET',
                credentials: 'include' as const,
            }),
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/delete/${id}`,
                method: 'DELETE',
                credentials: 'include' as const,
            }),
        }),
        registerUser: builder.mutation({
            query: (body) => ({
                url: '/register',
                method: 'POST',
                body,
                credentials: 'include' as const,
            }),
        }),
    }),
});

export const { useGetUsersQuery, useDeleteUserMutation, useRegisterUserMutation } = usersApi;
