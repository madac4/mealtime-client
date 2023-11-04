import { decreaseQuantity, increaseQuantity, removeProduct } from '@/store/slices/cartSlice';
import { Minus, Plus } from 'lucide-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../ui/input';

export default function CartProduct({ product }: any) {
    const dispatch = useDispatch();

    const handleIncreaseQuantity = (id: string) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecreaseQuantity = (id: string) => {
        dispatch(decreaseQuantity(id));
    };
    const handleRemoveProduct = () => {
        dispatch(removeProduct(product));
    };

    return (
        <li className="flex py-6">
            <div className="w-20 h-20 md:h-24 md:w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            <div className="ml-2 md:ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h6 className="text-gray-700">{product.name}</h6>
                        <div className="prices whitespace-nowrap flex items-end flex-col">
                            <p className="ml-4">{product.price * product.packageSize} MDL</p>
                            <small className="block">{product.price} MDL (buc.)</small>
                        </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{product.package}</p>
                </div>
                <div className="flex flex-1 items-center justify-between text-sm">
                    <div className="text-gray-500 flex items-center gap-4">
                        <Minus
                            className="w-5 h-5 text-gray-700 cursor-pointer"
                            onClick={() => handleDecreaseQuantity(product.id)}
                        />{' '}
                        {/* <Input
                            type="number"
                            value={product.quantity}
                            className="w-10 h-10 p-0 text-center"></Input> */}
                        {product.quantity}
                        <Plus
                            className="w-5 h-5 text-gray-700 cursor-pointer"
                            onClick={() => handleIncreaseQuantity(product.id)}
                        />
                    </div>

                    <button
                        type="button"
                        onClick={handleRemoveProduct}
                        className="font-medium text-red-600 hover:text-red-500">
                        Șterge
                    </button>
                </div>
            </div>
        </li>
    );
}
