import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { ShoppingCartIcon } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '@/store/cart/cartSlice';
import { useRouter, usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useLogOutQuery } from '@/store/auth/authApi';

function Header() {
    const active = 'font-semibold text-red-500';
    const [logout, setLogout] = useState<boolean>(false);
    const router = useRouter();
    const currentRoute = usePathname();
    const dispatch = useDispatch();
    const {} = useLogOutQuery(undefined, {
        skip: !logout ? true : false,
    });
    const { user } = useSelector((state: any) => state.auth);
    const productsCount = useSelector((state: any) => state.cart.products.length);

    const handleLogout = async () => {
        setLogout(true);
        await signOut();
        router.push('/');
    };

    return (
        <header className="py-3 border-b sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
            <div className="container flex gap-5 items-center">
                <Link href="/dashboard">
                    <img src="/images/logo.png" alt="MealTime" className="w-14 h-14" />
                </Link>

                {user.isAdmin ? (
                    <nav className="ml-auto flex gap-4">
                        <Link
                            href="/dashboard"
                            className={currentRoute === '/dashboard' ? active : ''}>
                            Dashboard
                        </Link>
                        <Link
                            href="/dashboard/companies"
                            className={currentRoute === '/dashboard/companies' ? active : ''}>
                            Companii
                        </Link>
                        <Link
                            href="/dashboard/clients"
                            className={currentRoute === '/dashboard/clients' ? active : ''}>
                            Clienti
                        </Link>
                        <Link
                            href="/dashboard/orders"
                            className={currentRoute === '/dashboard/orders' ? active : ''}>
                            Comenzi
                        </Link>
                        <Link
                            href="/dashboard/products"
                            className={currentRoute === '/dashboard/products' ? active : ''}>
                            Produse
                        </Link>
                    </nav>
                ) : (
                    <>
                        <nav className="ml-auto flex gap-4">
                            <Link
                                href="/dashboard"
                                className={currentRoute === '/dashboard' ? active : ''}>
                                Dashboard
                            </Link>
                            <Link
                                href="/dashboard/shop"
                                className={currentRoute === '/dashboard/shop' ? active : ''}>
                                Magazin
                            </Link>
                        </nav>
                        <button onClick={() => dispatch(toggleCart())} className="relative">
                            <Badge className="absolute -top-3 -right-3">{productsCount}</Badge>
                            <ShoppingCartIcon></ShoppingCartIcon>
                        </button>
                    </>
                )}

                {user && (
                    <DropdownMenu>
                        <DropdownMenuTrigger className="outline-none">
                            <Avatar className="w-11 h-11 cursor-pointer">
                                <AvatarImage src={user.avatar} />
                                <AvatarFallback>
                                    {user.UUID.slice(4, 6).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mt-2">
                            <DropdownMenuLabel>Contul meu</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="text-red-600 cursor-pointer"
                                onClick={() => handleLogout()}>
                                Ieşi din cont
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        </header>
    );
}

export default Header;
