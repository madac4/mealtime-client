import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import { IProductProps } from '@/@types/custom';
import { formatPrice } from '@/lib/utils';

const Product: React.FC<IProductProps> = ({ product }) => {
    const dispatch = useDispatch();
    const productsInCart = useSelector((state: any) => state.cart.products);
    const handleAddToCart = () => {
        const item = {
            ...product,
            quantity: 1,
        };
        dispatch(addToCart(item));
    };

    const handleItemsCount = (id: string) => {
        const item = productsInCart.find((item: any) => item._id === id);
        if (item) {
            return `(${item.quantity})`;
        }
    };
    return (
        <div className="p-5 border rounded-md">
            <img src={product.image.url} alt={product.name} className="rounded mb-2 max-h-[316px] w-full object-contain" />
            <h3>{product.name}</h3>
            <Badge className="my-2">{product.packageInfo}</Badge>
            <p className="mb-2 text-lg font-semibold text-red-600">
                {formatPrice(product.price)} MDL / buc.
            </p>
            <Button
                className="bg-green-500 w-full mt-auto hover:bg-green-600 active:scale-[0.98] transition-all"
                onClick={handleAddToCart}>
                Adaugă în coș {handleItemsCount(product._id)}
            </Button>
        </div>
    );
};

export default Product;
