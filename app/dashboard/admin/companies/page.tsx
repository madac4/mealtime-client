'use client';

import React, { useEffect, useState } from 'react';
import { DataTable } from './data-table';
import { columns } from './columns';
import { ICompany } from '@/@types/custom';
import { axiosInstance } from '@/utils/axiosInstance';
import { Skeleton } from '@/components/ui/skeleton';

export default function Companies() {
    const [companies, setCompanies] = useState<ICompany[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const handleCompanies = async () => {
        await axiosInstance.get('/get-companies').then((res) => {
            if (res.data.success) {
                setCompanies(res.data.companies);
                setLoading(false);
            } else {
                setLoading(false);
            }
        });
    };

    useEffect(() => {
        handleCompanies();
    }, []);
    return (
        <div className="orders py-10 mb-10">
            <div className="container">
                {loading ? (
                    <div className="loading py-4">
                        <div className="flex justify-between">
                            <Skeleton className="w-64 h-12 rounded-lg mb-4" />
                            <Skeleton className="w-44 h-12 rounded-lg mb-4" />
                        </div>
                        <Skeleton className="w-full h-screen rounded-lg" />
                    </div>
                ) : (
                    <DataTable columns={columns} data={companies} />
                )}
            </div>
        </div>
    );
}
