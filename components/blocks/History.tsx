'use client';

import { useOrdersHistoryQuery } from '@/store/analytics/analyticsApi';
import React from 'react';
import { Skeleton } from '../ui/skeleton';
import { formatDateTime } from '@/lib/utils';

export default function History({ className }: { className?: string }) {
    const { data } = useOrdersHistoryQuery({});

    return (
        <div className={`space-y-8 ${className}`}>
            <Loading>
                <>
                    {data && data.orders.length > 0 ? (
                        data.orders.map((order: any) => (
                            <div className="flex items-center gap-2" key={order._id}>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {order.products.length} produse
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {formatDateTime(order.createdAt)}
                                    </p>
                                </div>
                                {/* <p className="ml-auto font-medium md:text-base text-sm whitespace-nowrap text-blue-700">
                                    {formatPrice(order.totalPrice)} MDL
                                </p> */}
                            </div>
                        ))
                    ) : (
                        <h3 className="text-center font-semibold mx-auto">
                            Încă nu ai plasat nici o comandă
                        </h3>
                    )}
                </>
            </Loading>
        </div>
    );
}

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isLoading } = useOrdersHistoryQuery({});
    return (
        <>
            {isLoading ? (
                <>
                    <Skeleton className="w-full h-[60px] mb-1" />
                    <Skeleton className="w-full h-[60px] mb-1" />
                    <Skeleton className="w-full h-[60px] mb-1" />
                    <Skeleton className="w-full h-[60px] mb-1" />
                    <Skeleton className="w-full h-[60px] mb-1" />
                    <Skeleton className="w-full h-[60px] mb-1" />
                    <Skeleton className="w-full h-[60px] mb-1" />
                    <Skeleton className="w-full h-[60px] mb-1" />
                    <Skeleton className="w-full h-[60px] mb-1" />
                    <Skeleton className="w-full h-[60px]" />
                </>
            ) : (
                <>{children}</>
            )}
        </>
    );
};
