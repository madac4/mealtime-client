import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { apiSlice } from './api/apiSlice';
import authSlice from './auth/authSlice';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart', 'auth'],
};

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSlice,
    auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NEXT_PUBLIC_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }).concat(apiSlice.middleware),
});

const initializeApp = async () => {
    const { isSuccess } = await store.dispatch(
        apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true }),
    );

    if (isSuccess) {
        await store.dispatch(apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true }));
    }
};

initializeApp();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
