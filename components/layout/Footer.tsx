import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-emerald-950 text-emerald-100 py-12 border-t border-emerald-900 relative overflow-hidden">
            {/* Rug Pattern Overlay */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'url(/images/persian_rug_footer_bg.png)', backgroundSize: '400px', filter: 'brightness(1.5) contrast(0.8)' }}></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                <div>
                    <h3 className="text-xl font-serif font-bold text-gold mb-4">PERSIAN & INTERNATIONAL MARKET</h3>
                    <p className="text-sm font-light leading-6 text-emerald-200">
                        A culinary journey that transcends borders. Bringing the authentic taste of Persia to Sterling, VA.
                    </p>
                </div>
                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Visit Us</h4>
                    <p className="text-sm leading-6">46970 Community Plz Ste 111B</p>
                    <p className="text-sm leading-6 mb-2">Sterling, VA 20164</p>
                    <p className="text-sm leading-6"><a href="tel:7034809449" className="hover:text-gold">(703) 480-9449</a></p>
                </div>
                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Opening Hours</h4>
                    <ul className="text-sm leading-6 space-y-1">
                        <li className="flex justify-between max-w-[200px]"><span>Mon - Wed:</span> <span>9:00 AM – 9:00 PM</span></li>
                        <li className="flex justify-between max-w-[200px] text-emerald-400"><span>Thursday:</span> <span>10:00 AM – 9:00 PM</span></li>
                        <li className="flex justify-between max-w-[200px]"><span>Fri - Sat:</span> <span>9:00 AM – 9:00 PM</span></li>
                        <li className="flex justify-between max-w-[200px]"><span>Sunday:</span> <span>9:00 AM – 7:00 PM</span></li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-emerald-900 text-center text-xs text-emerald-400">
                &copy; {new Date().getFullYear()} Persian & International Market. All rights reserved.
            </div>
        </footer>
    );
}
