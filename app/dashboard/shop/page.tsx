'use client';

import React, { useState } from 'react';
import ProductsGrid from '../../../components/sections/ProductsGrid';
import { Skeleton } from '@/components/ui/skeleton';

export default async function Shop() {
    const [loading, setLoading] = useState<boolean>(true);

    return (
        <div className="container">
            {loading ? (
                <Skeleton className="w-full h-80 rounded-lg my-10" />
            ) : (
                <div className="h-80 overflow-clip bg-black bg-opacity-50 my-10 rounded-lg relative text-center flex items-center justify-center">
                    <img
                        src="https://mealtime.ro/storage/products/August2020/FiOIa7RAF3b6LKXcAFvK.jpg"
                        className="absolute -z-10 w-full"
                    />
                    <h1 className="text-white">Mai mult decât un simplu ceai</h1>
                </div>
            )}

            <div className="products mb-32 flex flex-col items-center">
                <ProductsGrid loading={loading} setLoading={setLoading} />
            </div>
        </div>
    );
}
