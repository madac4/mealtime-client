import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { ShoppingCartIcon } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '@/store/cart/cartSlice';
import { usePathname } from 'next/navigation';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useLogOutMutation } from '@/store/auth/authApi';
import HeaderLogo from '../HeaderLogo';
import { userMenu } from '@/constants/data';

function Header() {
    const [logOut] = useLogOutMutation();

    const dispatch = useDispatch();
    const currentRoute = usePathname();
    const { user } = useSelector((state: any) => state.auth);
    const productsCount = useSelector((state: any) => state.cart.products.length);

    // ! TODO: Add logout functionality
    const handleLogout = async () => {
        await logOut({});
    };

    // ! TODO: Dynamic nav menus
    return (
        <header className="py-3 border-b sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
            <div className="container flex gap-5 items-center">
                <HeaderLogo />

                <nav className="ml-auto flex gap-4">
                    {userMenu.map((item) => (
                        <Link
                            href={item.url}
                            className={
                                currentRoute === item.url ? 'font-semibold text-red-500' : ''
                            }>
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <button onClick={() => dispatch(toggleCart())} className="relative">
                    <Badge className="absolute -top-3 -right-3">{productsCount}</Badge>
                    <ShoppingCartIcon></ShoppingCartIcon>
                </button>

                {user && (
                    <DropdownMenu>
                        <DropdownMenuTrigger className="outline-none">
                            <Avatar className="w-11 h-11 cursor-pointer">
                                <AvatarImage src={user.avatar} />
                                <AvatarFallback>MT</AvatarFallback>
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
