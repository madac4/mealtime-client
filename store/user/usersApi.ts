import { apiSlice } from '../api/api.config';

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
    }),
});

export const { useGetUsersQuery, useDeleteUserMutation } = usersApi;
