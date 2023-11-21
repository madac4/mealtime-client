'use client';
import React, { useEffect, useState } from 'react';
import { columns } from './columns';
import { DataTable } from './data-table';
import { IUser } from '@/@types/custom';
import { axiosInstance } from '@/utils/axiosInstance';

export default function Clients() {
    const [sellingPoints, setSellingPoints] = useState<IUser[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const handleSellingPoints = async () => {
        await axiosInstance.get('/users').then((res) => {
            if (res.data.success) {
                setSellingPoints(res.data.users);
                setLoading(false);
            } else {
                setLoading(false);
            }
        });
    };

    useEffect(() => {
        handleSellingPoints();
    }, []);

    return (
        <div className="orders py-10 mb-10">
            <div className="container">
                <DataTable columns={columns} data={sellingPoints} />
            </div>
        </div>
    );
}
