'use client';

import { useOrdersSumQuery } from '@/store/analytics/analyticsApi';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { DollarSign } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

export default function OrdersSum() {
    const { data } = useOrdersSumQuery({});
    return (
        <Card className="col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Suma Comenzilor</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground"></DollarSign>
            </CardHeader>
            <CardContent>
                <Loading>
                    <div className="md:text-2xl xs:text-xl text-md font-bold">
                        {data && formatPrice(data.totalSum)} MDL
                    </div>
                </Loading>
                {/* <p className="text-xs text-muted-foreground mt-1">
                <span className="text-red-600">-10.9%</span> de luna trecută
            </p> */}
            </CardContent>
        </Card>
    );
}

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isLoading } = useOrdersSumQuery({});
    return (
        <>
            {isLoading ? (
                <>
                    <Skeleton className="w-1/2 h-10" />
                </>
            ) : (
                <>{children}</>
            )}
        </>
    );
};
