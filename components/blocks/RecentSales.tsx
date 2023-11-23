import React from 'react';
import { Avatar, AvatarFallback } from '../ui/avatar';

function RecentSales() {
    return (
        <div className="space-y-8 mb-8">
            <div className="flex items-center gap-2">
                <Avatar className="h-9 w-9">
                    <AvatarFallback>R</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                        Rompetro, str. Tudor Strișcă 6
                    </p>
                    <p className="text-sm text-muted-foreground">12.08.2022</p>
                </div>
                <p className="ml-auto font-medium md:text-base text-sm whitespace-nowrap text-green-700">
                    +4.080,00 MDL
                </p>
            </div>
        </div>
    );
}

export default RecentSales;
