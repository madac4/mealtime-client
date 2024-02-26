import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/store/cart/cartSlice';
import { IProductProps } from '@/@types/custom';
import Image from 'next/image';

const Product: React.FC<IProductProps> = ({ product }) => {
    const productsInCart = useSelector((state: any) => state.cart.products);
    const dispatch = useDispatch();

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
        <div className="p-2 border rounded-md max-w-sm md:max-w-full w-full mx-auto">
            <Image
                className="rounded-md mb-2 object-contain"
                src={product.image.url}
                alt={product.name}
                loading="lazy"
                placeholder="blur"
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                width={440}
                height={440}
            />
            <p className="font-medium">{product.name}</p>
            <Badge className="my-2">{product.packageInfo}</Badge>
            <Button
                className="bg-green-500 w-full mt-auto hover:bg-green-600 active:scale-[0.98] transition-all"
                onClick={handleAddToCart}>
                Adaugă în coș {handleItemsCount(product._id)}
            </Button>
        </div>
    );
};

export default Product;
