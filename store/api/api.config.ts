import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { userLoggedIn, userLoggedOut } from '../auth/authSlice';

export const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER,
    credentials: 'include',
});

const baseQueryWithCredentials: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        const refresh = (await baseQuery('/refresh', api, extraOptions)) as any;

        if (refresh.data) {
            api.dispatch(
                userLoggedIn({
                    accessToken: refresh.data.accessToken,
                    user: refresh.data.user,
                }),
            );
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(userLoggedOut());
        }
    }

    return result;
};

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithCredentials,
    tagTypes: ['Products'],
    endpoints: (builder) => ({}),
});
