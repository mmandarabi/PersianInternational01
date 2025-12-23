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
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
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

            {/* Mobile menu */}
            <div className={cn("lg:hidden fixed inset-0 z-50 bg-cream px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-in-out", mobileMenuOpen ? "translate-x-0" : "translate-x-full right-0 left-auto h-full w-full bg-cream")}>
                <div className="flex items-center justify-between">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="font-serif text-lg font-bold tracking-tight text-emerald-900 border-2 border-emerald-900 px-2 py-0.5 uppercase">Persian & International Market</span>
                    </Link>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
