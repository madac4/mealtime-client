import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ICartProduct, ICartState } from '@/@types/custom';

const initialState: ICartState = {
    isCartVisible: false,
    products: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart(state) {
            state.isCartVisible = !state.isCartVisible;
        },

        addToCart(state, action: PayloadAction<ICartProduct>) {
            const itemId = state.products.findIndex(
                (product) => product._id === action.payload._id,
            );

            if (itemId >= 0) {
                state.products[itemId].quantity += 1;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
        },
        increaseQuantity: (state, action: PayloadAction<string>) => {
            const productIndex = state.products.findIndex(
                (product) => product._id === action.payload,
            );
            if (productIndex !== -1) {
                state.products[productIndex].quantity += 1;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<string>) => {
            const productIndex = state.products.findIndex(
                (product) => product._id === action.payload,
            );
            if (productIndex !== -1) {
                const product = state.products[productIndex];
                if (product.quantity > 1) {
                    product.quantity -= 1;
                } else {
                    product.quantity = 1;
                }
            }
        },
        removeProduct(state, action: PayloadAction<ICartProduct>) {
            state.products = state.products.filter((product) => product._id !== action.payload._id);
        },
        clearCart(state) {
            state.products = [];
        },
    },
});

export const selectCartProducts = (state: RootState) => state.cart.products;

export const selectCartTotal = createSelector([selectCartProducts], (products) => {
    return products.reduce(
        (total, product) => total + product.price * product.quantity * product.packageSize,
        0,
    );
});

export const {
    toggleCart,
    addToCart,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
