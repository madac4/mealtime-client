import { Loader2, XIcon } from 'lucide-react';
import React, { useState } from 'react';
import CartProduct from './CartProduct';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, selectCartTotal, toggleCart } from '@/store/slices/cartSlice';
import { formatPrice } from '@/lib/utils';

export default function Cart() {
    const [loading, setloading] = useState<boolean>(false);
    const dispatch = useDispatch();
    const isCartVisible = useSelector((state: any) => state.cart.isCartVisible);
    const total = useSelector(selectCartTotal);
    const products = useSelector((state: any) => state.cart.products);

    const sendOrder = () => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
            dispatch(clearCart());
            dispatch(toggleCart());
            alert('Comanda a fost trimisa');
        }, 3000);
    };
    return (
        <>
            {isCartVisible && (
                <div className="relative z-20">
                    <div
                        onClick={() => dispatch(toggleCart())}
                        className="fixed inset-0 backdrop-blur-md bg-opacity-75"></div>

                    <div className="fixed z-10 overflow-y-auto transition-transform">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-0 md:pl-10 transition-all">
                                <div className="pointer-events-auto w-screen max-w-lg">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <h4>Coşul</h4>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        onClick={() => dispatch(toggleCart())}
                                                        type="button"
                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                                        <XIcon></XIcon>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul className="-my-6 divide-y divide-gray-200">
                                                        {products.length > 0 ? (
                                                            products.map((product: any) => (
                                                                <CartProduct
                                                                    key={product.id}
                                                                    product={product}
                                                                />
                                                            ))
                                                        ) : (
                                                            <h2 className="text-center py-10">
                                                                Nu sunt produse în coș
                                                            </h2>
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {products.length > 0 && (
                                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Total</p>
                                                    <p>{formatPrice(total)} MDL</p>
                                                </div>
                                                {/* <p className="mt-0.5 text-sm text-gray-500">
                                                Shipping and taxes calculated at checkout.
                                            </p> */}
                                                <Button
                                                    disabled={loading}
                                                    onClick={sendOrder}
                                                    className="py-7 w-full mt-6 bg-red-600 hover:bg-red-500 text-md font-semibold">
                                                    {loading && (
                                                        <Loader2 className="mr-2 h-5 w-5 animate-spin"></Loader2>
                                                    )}
                                                    Trimite comanda
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
