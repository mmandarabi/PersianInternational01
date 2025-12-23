import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { Footer } from "@/components/layout/Footer";
import Link from 'next/link';

const categories = [
  {
    title: "Halal Butcher",
    description: "Premium cuts of Zabiha Halal lamb, beef, and poultry.",
    color: "bg-red-50 text-red-900",
    href: "/products?category=meat"
  },
  {
    title: "Fresh Bakery",
    description: "Daily baked Sangak and Barbari bread from our stone oven.",
    color: "bg-amber-50 text-amber-900",
    href: "/products?category=bakery"
  },
  {
    title: "Global Pantry",
    description: "Exquisite saffron, nuts, pickles, and international spices.",
    color: "bg-emerald-50 text-emerald-900",
    href: "/products?category=grocery"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold selection:text-emerald-950">
      <Hero />

      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-emerald-950 sm:text-4xl">Our Departments</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Everything you need for an authentic Persian feast, carefully curated for quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href} className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-8 hover:shadow-lg transition-all duration-300">
              <div className="mb-4">
                <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-gold transition-colors">{cat.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{cat.description}</p>
              <div className="flex items-center text-sm font-semibold text-emerald-900">
                Shop Now <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 bg-emerald-50/50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-emerald-950 sm:text-4xl">What Makes Us Special</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We take pride in offering authentic products you won't find anywhere else.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. Bread */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 text-emerald-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2M12 13V6" /></svg>
              </div>
              <h3 className="font-serif font-bold text-lg text-emerald-950 mb-2">Fresh Sangak & Barbari</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Baked fresh daily in our traditional stone oven. The authentic taste of Iran.</p>
            </div>

            {/* 2. Meat */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 text-emerald-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" /><path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" /></svg>
              </div>
              <h3 className="font-serif font-bold text-lg text-emerald-950 mb-2">Premium Zabiha Halal Meats</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Ethically sourced, fresh lamb, beef, and poultry cut to your preference.</p>
            </div>

            {/* 3. Saffron */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 text-emerald-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m3 4.5V15m4.5-3a4.5 4.5 0 1 1-4.5-4.5M12 12v3" /></svg>
              </div>
              <h3 className="font-serif font-bold text-lg text-emerald-950 mb-2">Authentic Saffron</h3>
              <p className="text-sm text-gray-600 leading-relaxed">The finest red gold imported directly for your aromatic rice and tea.</p>
            </div>

            {/* 4. Fruits & Nuts */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 text-emerald-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.2 14.5A4.3 4.3 0 0 1 5.5 8h.27c2.3.6 3.6 2.4 4.7 5.1s2.5 4.7 4.8 5.3v.1a4.3 4.3 0 0 1-7.07 1.1Z" /><path d="M12 5V2" /><path d="M10.2 12.5C8.3 15 5.5 16 2.5 16h-.11c-1.3-.2-2.1-1.3-1.8-2.5v-.06c.6-2.5 2.1-5.1 4.7-6.9C7.8 4.7 10 3.7 12 5" /><path d="M12 5c2 .7 4.2 1.3 6.6 1.5 2.6 1.8 4.1 4.4 4.7 6.9 0 0 .1.3 0 .4-.3 1.2-1.1 2.3-2.4 2.5 0 0-.1 0-.1 0-3 0-5.8-1-7.7-3.5" /></svg>
              </div>
              <h3 className="font-serif font-bold text-lg text-emerald-950 mb-2">Dried Fruits & Nuts</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Premium pistachios, tangy barberries, figs, and dates perfect for snacking.</p>
            </div>

            {/* 5. Kabobs */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 text-emerald-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3.7 1.2 1.9 1.8 2.9 2.8Z" /></svg>
              </div>
              <h3 className="font-serif font-bold text-lg text-emerald-950 mb-2">Persian Kabobs</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Expertly pre-marinated chicken, beef, and lamb ready to grill.</p>
            </div>

            {/* 6. Sweets */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 text-emerald-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" /><path d="M11 17v.01" /><path d="M7 14v.01" /></svg>
              </div>
              <h3 className="font-serif font-bold text-lg text-emerald-950 mb-2">Traditional Sweets</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Freshly made baklava, creamy roulette, and delicate pastries.</p>
            </div>

            {/* 7. Ingredients */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-2 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex-shrink-0 flex items-center justify-center text-emerald-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 11-7.5-7.5a2.12 2.12 0 0 0-3 0 2.12 2.12 0 0 0 0 3L13.5 14 11 16.5l-6-6 2.25-2.25a2.12 2.12 0 0 1 3 0 2.12 2.12 0 0 1 0 3L9.5 12l5 5Z" /></svg>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-emerald-950 mb-2">Hard-to-find Persian Ingredients</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Your source for authentic pomegranate molasses, rose water, specialized spices, and everything else you need for Persian cuisine.</p>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-emerald-950 sm:text-4xl">Why Choose Us</h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* 1. Family Owned */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-900 mb-6 rotate-3 hover:rotate-6 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3 className="font-bold text-lg text-emerald-950 mb-2">Family Owned</h3>
              <p className="text-gray-600 text-sm">Serving our community with personal care and dedication.</p>
            </div>

            {/* 2. Baking */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-900 mb-6 -rotate-3 hover:-rotate-6 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2M12 13V6" /></svg>
              </div>
              <h3 className="font-bold text-lg text-emerald-950 mb-2">Fresh Daily Baking</h3>
              <p className="text-gray-600 text-sm">Traditional breads baked fresh in our stone oven every morning.</p>
            </div>

            {/* 3. Halal */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-900 mb-6 rotate-3 hover:rotate-6 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3 className="font-bold text-lg text-emerald-950 mb-2">100% Halal Certified</h3>
              <p className="text-gray-600 text-sm">Rigorous standards ensuring top quality Zabiha Halal meats.</p>
            </div>

            {/* 4. Since 2015 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-900 mb-6 -rotate-3 hover:-rotate-6 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
              </div>
              <h3 className="font-bold text-lg text-emerald-950 mb-2">Since 2015</h3>
              <p className="text-gray-600 text-sm">Proudly serving Sterling and Northern Virginia since 2015.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-serif font-bold text-center text-emerald-950 mb-16">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream/50 p-8 rounded-2xl border border-emerald-950/5 relative">
              <div className="text-gold text-4xl font-serif absolute top-4 left-6">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10 pt-4">
                Exceptional service and culinary offerings. A true gem in Sterling for authentic flavors.
              </p>
              <div className="font-bold text-emerald-900 border-t border-gold/20 pt-4">Keyan Daneshmand</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Loyal Customer</div>
            </div>
            <div className="bg-cream/50 p-8 rounded-2xl border border-emerald-950/5 relative">
              <div className="text-gold text-4xl font-serif absolute top-4 left-6">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10 pt-4">
                Delicious kababs prepared for special occasions. The quality of meat is unmatched.
              </p>
              <div className="font-bold text-emerald-900 border-t border-gold/20 pt-4">Cooking With Kawsar</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Food Blogger</div>
            </div>
            <div className="bg-cream/50 p-8 rounded-2xl border border-emerald-950/5 relative">
              <div className="text-gold text-4xl font-serif absolute top-4 left-6">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10 pt-4">
                Found hard-to-find ingredients that remind me of my heritage. Highly recommended!
              </p>
              <div className="font-bold text-emerald-900 border-t border-gold/20 pt-4">Jacob Ayubi</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Local Guide</div>
            </div>
          </div>
        </div>
      </section>



    </main >
  );
}
