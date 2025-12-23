import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Story | Persian & International Market",
    description: "Learn about our family-owned market in Sterling, VA. We bring the authentic taste of Persia and international flavors to your table.",
};

export default function About() {
    return (
        <main className="min-h-screen bg-cream relative">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url(/images/persian_pattern_bg.png)', backgroundSize: '400px' }}></div>

            {/* Hero Banner */}
            <div className="relative bg-emerald-950 py-24 flex items-center justify-center overflow-hidden z-10">
                <div className="absolute inset-0 opacity-40">
                    <img src="/images/our_story_hero.png" alt="Persian Market History" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream tracking-wide mb-2 drop-shadow-md">
                        OUR STORY <span className="block mt-2 md:inline md:mt-0 text-4xl opacity-90 font-normal md:ml-4" style={{ fontFamily: 'serif' }}>داستان ما</span>
                    </h1>
                    <p className="text-gold mt-4 text-lg font-light tracking-widest uppercase border-t border-b border-gold/30 py-2 inline-block bg-emerald-950/30 backdrop-blur-sm px-6">
                        Family Owned Since 2015
                    </p>
                </div>
            </div>

            <div className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-gold/20">
                            <img
                                src="/images/authentic_store_feature.png"
                                alt="Traditional Persian Market Spices"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-900 rounded-full flex items-center justify-center p-6 text-center shadow-lg hidden md:flex border-4 border-cream">
                            <span className="font-serif text-gold text-lg italic leading-tight">
                                "Bringing the taste of home to your table"
                            </span>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="font-serif text-3xl md:text-4xl font-bold text-emerald-950 mb-6 leading-tight">
                            A Delightful International Experience
                        </h1>

                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                            <p>
                                Welcome to the vibrant realm of <span className="font-semibold text-emerald-900">Persian and International Market</span> in Sterling, VA. We are more than just a grocery store—we are a destination for culinary explorers.
                            </p>

                            <div>
                                <p className="mb-3 font-medium text-emerald-950">Discover our diverse range of products:</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold"></div>Fresh Halal Meat</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold"></div>Freshly Baked Bread</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold"></div>Dried Fruits & Nuts</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold"></div>Traditional Persian Dishes</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold"></div>Hard-to-Find Ingredients</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold"></div>Sweets & Cookies</li>
                                </ul>
                            </div>

                            <p>
                                Enjoy a clean, organized shopping experience with our friendly staff ready to assist you.
                            </p>
                            <p>
                                Visit us at <span className="font-semibold text-emerald-900">46970 Community Plaza</span> and enrich your kitchen with global flavors.
                            </p>

                            <div className="pt-6 border-t border-emerald-100 mt-8">
                                <h3 className="font-serif text-2xl font-bold text-emerald-950 mb-4">Our Promise</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-gold"></div>
                                        <span>100% Zabiha Halal Meats</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-gold"></div>
                                        <span>Authentic Imported Goods</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-gold"></div>
                                        <span>Fresh Daily Bakery</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-gold"></div>
                                        <span>Family Owned & Operated</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
