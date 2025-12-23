'use client';

import { products, categoriesList } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { useState } from "react";

export default function ProductsClient() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <main className="min-h-screen bg-cream relative">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url(/images/persian_pattern_bg.png)', backgroundSize: '400px' }}></div>

            {/* Shop Hero Banner */}
            <div className="relative bg-emerald-950 py-28 px-6 sm:px-12 lg:px-24 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img src="/images/persian_bazaar_hero.png" alt="Persian Bazaar" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 text-center">
                    <h1 className="font-serif text-6xl font-bold text-cream tracking-wide mb-2 drop-shadow-md">
                        SHOP <span className="text-3xl opacity-80 font-normal ml-3" style={{ fontFamily: 'serif' }}>فروشگاه</span>
                    </h1>
                    <p className="text-gold mt-4 text-lg font-light tracking-widest uppercase border-t border-b border-gold/30 py-2 inline-block bg-emerald-950/30 backdrop-blur-sm px-6">
                        Authentic Persian Groceries
                    </p>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 relative z-10">

                {/* Left Sidebar - Categories */}
                <aside className="w-full lg:w-64 flex-shrink-0">
                    <div className="sticky top-24">
                        <h3 className="font-serif text-xl font-bold text-emerald-950 mb-6 pb-2 border-b border-emerald-950/10">
                            Departments
                        </h3>
                        <div className="space-y-2">
                            <button
                                onClick={() => setSelectedCategory("all")}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${selectedCategory === "all"
                                    ? "bg-emerald-900 text-gold shadow-md"
                                    : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-900"
                                    }`}
                            >
                                All Products
                            </button>
                            {categoriesList.filter(c => c.id !== 'all').map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${selectedCategory === category.id
                                        ? "bg-emerald-900 text-gold shadow-md"
                                        : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-900"
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        {/* Contact Widget */}
                        <div className="mt-12 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gold/20 text-center shadow-sm">
                            <h4 className="font-serif font-bold text-emerald-900 text-lg mb-2">Need Help?</h4>
                            <p className="text-sm text-gray-600 mb-4">Call us to place your order directly.</p>
                            <a href="tel:7034809449" className="block bg-gold text-emerald-950 font-bold py-2 rounded-lg hover:bg-emerald-900 hover:text-gold transition-colors">
                                (703) 480-9449
                            </a>
                        </div>
                    </div>
                </aside>

                {/* Main Content - Grid */}
                <div className="flex-grow">
                    {/* Toolbar */}
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-emerald-950/10">
                        <p className="text-gray-500 text-sm">
                            Showing <span className="font-bold text-emerald-950">{filteredProducts.length}</span> results
                        </p>
                        <select className="bg-transparent text-sm font-semibold text-emerald-950 border-none focus:ring-0 cursor-pointer outline-none">
                            <option>Sort by: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20 bg-white/50 rounded-2xl border border-dashed border-gray-300">
                            <p className="text-gray-500">No products found in this category.</p>
                        </div>
                    )}
                </div>
            </div>

        </main>
    );
}
