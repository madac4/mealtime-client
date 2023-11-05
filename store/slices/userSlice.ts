import { createSlice } from '@reduxjs/toolkit';

interface IUser {
    isAdmin: boolean;
}

interface IUserState {
    user: IUser | null;
}

const initialState: IUserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setAdmin(state, action) {
            state.user = {
                isAdmin: action.payload,
            };
        },
    },
});

export const { setUser, setAdmin } = userSlice.actions;
export default userSlice.reducer;
