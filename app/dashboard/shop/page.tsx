'use client';
import React from 'react';
import Product from '@/components/blocks/Product';
import { Button } from '@/components/ui/button';

export default function Shop() {
    const products = [
        {
            id: '1',
            name: 'Limonada Tropic',
            price: 17,
            image: 'https://mealtime.ro/storage/products/May2023/TTlb48zDTyZjYJf4xKNa.jpg',
            packageInfo: 'Cutie (24 buc.)',
            packageSize: 24,
        },
        {
            id: '2',
            name: 'Limonada Tarhon cu ghimbir',
            price: 17,
            image: 'https://mealtime.ro/storage/products/May2023/IahTvlPWuk2Sg0Ffgm4Q.jpg',
            packageInfo: 'Cutie (24 buc.)',
            packageSize: 24,
        },
        {
            id: '3',
            name: 'Limonada Portocala',
            price: 17,
            image: 'https://mealtime.ro/storage/products/May2023/fsmkqmVpZOeq5PzIC3RZ.jpg',
            packageInfo: 'Cutie (24 buc.)',
            packageSize: 24,
        },
        {
            id: '4',
            name: 'Ceai mango cu ghimbir',
            price: 16,
            image: 'https://mealtime.ro/storage/products/December2020/ttoOPmhTiODtEnH0YjnZ.jpg',
            packageInfo: 'Cutie (24 buc.)',
            packageSize: 24,
        },
        {
            id: '5',
            name: 'Ceai Mix 7 feluri',
            price: 16,
            image: 'https://mealtime.ro/storage/products/August2020/FiOIa7RAF3b6LKXcAFvK.jpg',
            packageInfo: 'Cutie (24 buc.)',
            packageSize: 24,
        },
        {
            id: '6',
            name: 'Ceai lime cu mentă',
            price: 16,
            image: 'https://mealtime.ro/storage/products/March2020/QMKL3PRhwSLXwZqsqkJF.jpg',
            packageInfo: 'Cutie (24 buc.)',
            packageSize: 24,
        },
        {
            id: '7',
            name: 'Ceai portocală cu mentă',
            price: 16,
            image: 'https://mealtime.ro/storage/products/March2020/gfIRdJAJiEIVuNmgRsjP.jpg',
            packageInfo: 'Cutie (24 buc.)',
            packageSize: 24,
        },
        {
            id: '8',
            name: 'Ceai cătină cu măr',
            price: 16,
            image: 'https://mealtime.ro/storage/products/March2020/ynaXEhLAdpbmqOJvfHRb.jpg',
            packageInfo: 'Cutie (24 buc.)',
            packageSize: 24,
        },
        {
            id: '9',
            name: 'Ceai ghimbir cu miere și lime',
            price: 16,
            image: 'https://mealtime.ro/storage/products/March2020/18LoVH1FbWKGPKhRceVu.jpg',
            packageInfo: 'Cutie (24 buc.)',
            packageSize: 24,
        },
        {
            id: '10',
            name: 'Ceai cătină cu cimbru',
            price: 16,
            image: 'https://mealtime.ro/storage/products/March2020/PqvWjhWA77bk7q2pcV57.jpg',
            packageInfo: 'Cutie (24 buc.)',
            packageSize: 24,
        },
        {
            id: '11',
            name: 'Ceai coacăză și busuioc',
            price: 16,
            image: 'https://mealtime.ro/storage/products/March2020/bzLl7w75TL0w0OfAQAIQ.jpg',
            packageInfo: 'Cutie (24 buc.)',
            packageSize: 24,
        },
    ];
    return (
        <div className="container">
            <div className="h-80 overflow-clip bg-black bg-opacity-50 my-10 rounded-lg relative text-center flex items-center justify-center">
                <img
                    src="https://mealtime.ro/storage/products/August2020/FiOIa7RAF3b6LKXcAFvK.jpg"
                    className="absolute -z-10 w-full"
                />
                <h1 className="text-white">Mai mult decât un simplu ceai</h1>
            </div>

            <div className="products mb-32 flex flex-col items-center">
                <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>

                {/* <Button
                    size="lg"
                    variant="secondary"
                    className="mt-12 py-7 px-20 hover:bg-gray-300 bg-gray-200 transition-colors">
                    Vezi mai multe (10 produse)
                </Button> */}
            </div>
        </div>
    );
}
