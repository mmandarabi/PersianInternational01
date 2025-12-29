'use client';

import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useCart } from "@/context/CartContext";

const navigation = [
    { name: 'Shop', href: '/products' },
    { name: 'Our Story', href: '/about' },
    { name: 'Visit Us', href: '/visit' },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';
    const { totalItems, setIsCartOpen } = useCart();

    return (
        <header className={cn(
            "fixed w-full z-50 transition-all duration-300",
            isHome
                ? "bg-transparent border-transparent text-cream"
                : "bg-cream/95 backdrop-blur-sm border-b border-black/5 text-gray-900"
        )}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <span className={cn(
                            "font-serif text-lg font-bold tracking-tight border-2 px-2 py-0.5 uppercase",
                            isHome ? "text-cream border-cream" : "text-emerald-900 border-emerald-900"
                        )}>
                            Persian & International Market
                        </span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className={cn("-m-2.5 inline-flex items-center justify-center rounded-md p-2.5", isHome ? "text-cream" : "text-gray-700")}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Toggle main menu</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-semibold leading-6 transition-colors uppercase tracking-wide",
                                isHome ? "text-cream hover:text-gold" : "text-gray-900 hover:text-emerald-900"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
                    {/* Cart icon */}
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className={cn(
                            "relative group transition-colors",
                            isHome ? "text-cream hover:text-gold" : "text-gray-900 hover:text-emerald-900"
                        )}
                    >
                        <ShoppingBag className="h-6 w-6" />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-gold text-emerald-950 text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                                {totalItems}
                            </span>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile menu - Dropdown style */}
            <div className={cn(
                "lg:hidden absolute top-full left-0 w-full bg-cream border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out transform origin-top",
                mobileMenuOpen ? "opacity-100 py-6 visible scale-y-100" : "opacity-0 py-0 invisible scale-y-0"
            )}>
                <div className="space-y-1 px-6 pb-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center uppercase tracking-wider"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
