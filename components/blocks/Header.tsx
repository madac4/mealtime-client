import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { ShoppingCartIcon } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '@/store/slices/cartSlice';
import { usePathname } from 'next/navigation';

function Header() {
    const active = 'font-semibold text-red-500';
    const currentRoute = usePathname();
    const dispatch = useDispatch();
    const productsCount = useSelector((state: any) => state.cart.products.length);
    return (
        <header className="py-4 border-b sticky top-0 w-full bg-white z-10">
            <div className="container flex gap-5 items-center">
                <Link href="/dashboard">
                    <img src="/images/logo.png" alt="MealTime" className="w-16" />
                </Link>

                <nav className="ml-auto flex gap-4">
                    <Link href="/dashboard" className={currentRoute === '/dashboard' ? active : ''}>
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

                <Avatar className="w-11 h-11 cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            {/* <div className="container mt-6">
                <nav className="flex gap-7">
                    <Link href="/dashboard">Overview</Link>
                    <Link href="/dashboard/shop">Shop</Link>
                    <Link href="/dashboard/history">History</Link>
                </nav>
            </div> */}
        </header>
    );
}

export default Header;
