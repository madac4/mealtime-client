import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { ShoppingCartIcon } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '@/store/slices/cartSlice';
import { usePathname } from 'next/navigation';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { setAdmin } from '@/store/slices/userSlice';
import { useRouter } from 'next/navigation';

function Header() {
    const active = 'font-semibold text-red-500';
    const currentRoute = usePathname();
    const dispatch = useDispatch();
    const productsCount = useSelector((state: any) => state.cart.products.length);
    const isAdmin = useSelector((state: any) => state.user.user.isAdmin);
    const router = useRouter();

    const handleAdmin = () => {
        dispatch(setAdmin(!isAdmin));
    };

    const logout = () => {
        router.push('/');
    };

    return (
        <header className="py-3 border-b sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
            <div className="container flex gap-5 items-center">
                <Link href="/dashboard">
                    <img src="/images/logo.png" alt="MealTime" className="w-14 h-14" />
                </Link>

                {!isAdmin && (
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
                )}

                {isAdmin && (
                    <nav className="ml-auto flex gap-4">
                        <Link
                            href="/dashboard"
                            className={currentRoute === '/dashboard' ? active : ''}>
                            Dashboard
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
                )}

                {!isAdmin && (
                    <button onClick={() => dispatch(toggleCart())} className="relative">
                        <Badge className="absolute -top-3 -right-3">{productsCount}</Badge>
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </button>
                )}

                <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none">
                        <Avatar className="w-11 h-11 cursor-pointer">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-2">
                        <DropdownMenuLabel>Contul meu</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer" onClick={handleAdmin}>
                            Toggle Admin
                        </DropdownMenuItem>
                        {/* <DropdownMenuItem className="cursor-pointer">Profil</DropdownMenuItem> */}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 cursor-pointer" onClick={logout}>
                            Ieşi din cont
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
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
