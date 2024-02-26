'use client';

import React from 'react';
import Product from '../blocks/Product';
import { Skeleton } from '../ui/skeleton';
import { IProduct } from '@/@types/custom';
import { useGetProductsQuery } from '@/store/products/productsApi';
import ErrorMessage from '../ErrorMessage';

export default function ProductsGrid() {
    const { data, error } = useGetProductsQuery({});

    return (
        <>
            {error && <ErrorMessage error={error} />}
            {
                <Loading>
                    <>
                        {data && data.products.length > 0 ? (
                            data.products.map((product: IProduct) => (
                                <Product key={product._id} product={product} />
                            ))
                        ) : (
                            <h1 className="text-center md:col-span-3 sm:col-span-2 col-span-1">
                                Nu există produse
                            </h1>
                        )}
                    </>
                </Loading>
            }
        </>
    );
}

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isLoading } = useGetProductsQuery({});
    return (
        <>
            {isLoading ? (
                <>
                    <Skeleton className="p-5 rounded-md w-full h-[500px]" />
                    <Skeleton className="p-5 rounded-md w-full h-[500px]" />
                    <Skeleton className="p-5 rounded-md w-full h-[500px]" />
                    <Skeleton className="p-5 rounded-md w-full h-[500px]" />
                    <Skeleton className="p-5 rounded-md w-full h-[500px]" />
                    <Skeleton className="p-5 rounded-md w-full h-[500px]" />
                </>
            ) : (
                <>{children}</>
            )}
        </>
    );
};
