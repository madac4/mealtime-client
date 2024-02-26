import { apiSlice } from '../api/api.config';
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
                headers: {
                    'Content-Type': 'application/json',
                    getSetCookie: 'true',
                },
                credentials: 'include' as const,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(
                        userLoggedIn({
                            accessToken: data.accessToken,
                            user: data.user,
                        }),
                    );
                } catch (error) {
                    console.log(error);
                }
            },
        }),

        logOut: builder.mutation({
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

        register: builder.mutation({
            query: (body) => ({
                url: '/register',
                method: 'POST',
                body,
                credentials: 'include' as const,
            }),
        }),
    }),
});

export const { useLoginMutation, useLogOutMutation, useRegisterMutation } = authApi;
