import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function RecentSales() {
    return (
        <div className="space-y-8 mb-8">
            <div className="flex items-center gap-2">
                <Avatar className="h-9 w-9">
                    {/* <AvatarImage src="/avatars/01.png" alt="Avatar" /> */}
                    <AvatarFallback>R</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Rompetrol</p>
                    <p className="text-sm text-muted-foreground">Str. Tudor Strișcă 6</p>
                </div>
                <p className="ml-auto font-medium md:text-base text-sm whitespace-nowrap text-green-700">
                    +4.080,00 MDL
                </p>
            </div>
            <div className="flex items-center">
                <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
                    {/* <AvatarImage src="/avatars/02.png" alt="Avatar" /> */}
                    <AvatarFallback>V</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Vento</p>
                    <p className="text-sm text-muted-foreground">Str. Nicolae Testemițanu 9/1</p>
                </div>
                <p className="ml-auto font-medium md:text-base text-sm whitespace-nowrap text-green-700">
                    +816.00 MDL
                </p>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    {/* <AvatarImage src="/avatars/03.png" alt="Avatar" /> */}
                    <AvatarFallback>V</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Vento</p>
                    <p className="text-sm text-muted-foreground">Str. Alexandru cel Bun 55C</p>
                </div>
                <p className="ml-auto font-medium md:text-base text-sm whitespace-nowrap text-green-700">
                    +1.632,00 MDL
                </p>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    {/* <AvatarImage src="/avatars/04.png" alt="Avatar" /> */}
                    <AvatarFallback>P</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Petrom</p>
                    <p className="text-sm text-muted-foreground">Str. Sarmizegetusa 24</p>
                </div>
                <p className="ml-auto font-medium md:text-base text-sm whitespace-nowrap text-green-700">
                    +8.160,00 MDL
                </p>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    {/* <AvatarImage src="/avatars/05.png" alt="Avatar" /> */}
                    <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Avante</p>
                    <p className="text-sm text-muted-foreground">Str. Grenoble 120</p>
                </div>
                <p className="ml-auto font-medium md:text-base text-sm whitespace-nowrap text-green-700">
                    +1.536,00 MDL
                </p>
            </div>
        </div>
    );
}

export default RecentSales;
