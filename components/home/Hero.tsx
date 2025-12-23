import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <div className="relative isolate px-6 lg:px-8 bg-emerald-950 min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image - Premium Spice Market */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero-bg.png"
                    alt="Premium Persian glossary items including pistachios, dates, figs, and pomegranates"
                    className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-emerald-950/90" />
            </div>

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center z-10 relative">
                <h1 className="font-serif text-4xl font-bold tracking-tight text-cream sm:text-6xl mb-6">
                    Persian & International Market
                </h1>
                <p className="text-xl text-emerald-100 font-medium mb-8">
                    Authentic Persian & International Groceries
                </p>
                <div className="flex items-center justify-center gap-x-6">
                    <Link
                        href="/products"
                        className="rounded-none bg-gold px-10 py-4 text-base font-bold text-emerald-950 shadow-sm hover:bg-white transition-all duration-300 uppercase tracking-widest"
                    >
                        Shop Groceries
                    </Link>
                </div>
            </div>
        </div>
    );
}
