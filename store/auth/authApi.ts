import { apiSlice } from '../api/apiSlice';
import { userLoggedIn, userLoggedOut } from './authSlice';

export interface ILoginData {
    login: string;
    password: string;
}

export interface ILoginResponse {
    accessToken: string;
    user: string;
}

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ login, password }) => ({
                url: '/login',
                method: 'POST',
                body: {
                    login,
                    password,
                },
                credentials: 'include' as const,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        }),
                    );
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        logOut: builder.query({
            query: () => ({
                url: '/logout',
                method: 'GET',
                credentials: 'include' as const,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    dispatch(userLoggedOut());
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useLoginMutation, useLogOutQuery } = authApi;
