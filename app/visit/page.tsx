import { MapPin, Phone, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visit Us | Persian & International Market",
    description: "Find our location, hours, and contact information. Visit us at 46970 Community Plaza, Sterling, VA for an authentic shopping experience.",
};

export default function Visit() {
    return (
        <main className="min-h-screen bg-cream relative">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url(/images/persian_pattern_bg.png)', backgroundSize: '400px' }}></div>

            {/* Hero Banner */}
            <div className="relative bg-emerald-950 py-28 flex items-center justify-center overflow-hidden min-h-[400px] z-10">
                <div className="absolute inset-0 opacity-50">
                    <img src="/images/hero-bg.png" alt="Visit Persian Market" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-emerald-950/90"></div>
                <div className="relative z-10 text-center px-6 mt-10">
                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-cream tracking-wide mb-4 drop-shadow-md">
                        VISIT US <span className="block mt-2 md:inline md:mt-0 text-4xl opacity-90 font-normal md:ml-4" style={{ fontFamily: 'serif' }}>از ما دیدن کنید</span>
                    </h1>
                    <p className="text-gold mt-6 text-lg font-light tracking-widest uppercase border-t border-b border-gold/30 py-3 inline-block bg-emerald-950/40 backdrop-blur-md px-8">
                        Come experience authentic Persian & Afghan flavors
                    </p>
                </div>
            </div>

            <div className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-emerald-950/5 shadow-xl">

                    {/* Info Section */}
                    <div>
                        <h1 className="font-serif text-4xl font-bold text-emerald-950 mb-10 border-b border-emerald-900/10 pb-6">
                            Visit Our Market
                        </h1>

                        <div className="space-y-8">
                            {/* Address */}
                            <div className="flex gap-4">
                                <div className="mt-1 bg-emerald-100 p-2 rounded-lg text-emerald-900 h-fit">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">Location</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        46970 Community Plz Ste 111B<br />
                                        Sterling, VA 20164
                                    </p>
                                    <a
                                        href="https://maps.google.com/?q=46970+Community+Plz+Ste+111B+Sterling+VA+20164"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-800 font-bold text-sm mt-2 inline-block hover:underline"
                                    >
                                        Get Directions &rarr;
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-4">
                                <div className="mt-1 bg-emerald-100 p-2 rounded-lg text-emerald-900 h-fit">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">Contact</h3>
                                    <p className="text-gray-600 mb-1">Here to help with your questions.</p>
                                    <a href="tel:7034809449" className="text-xl font-serif font-bold text-emerald-950 hover:text-gold transition-colors">
                                        (703) 480-9449
                                    </a>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex gap-4">
                                <div className="mt-1 bg-emerald-100 p-2 rounded-lg text-emerald-900 h-fit">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-1">Opening Hours</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex justify-between w-full max-w-xs border-b border-dashed border-gray-200 pb-1">
                                            <span>Mon - Wed, Fri - Sat</span>
                                            <span className="font-semibold text-emerald-900">9:00 AM – 9:00 PM</span>
                                        </li>
                                        <li className="flex justify-between w-full max-w-xs border-b border-dashed border-gray-200 pb-1 bg-emerald-50/50 px-1 -mx-1 rounded">
                                            <span className="font-bold text-emerald-800">Thursday</span>
                                            <span className="font-bold text-emerald-900">10:00 AM – 9:00 PM</span>
                                        </li>
                                        <li className="flex justify-between w-full max-w-xs pb-1">
                                            <span>Sunday</span>
                                            <span className="font-semibold text-emerald-900">9:00 AM – 7:00 PM</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="h-full min-h-[400px] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.578677133748!2d-77.40938692346765!3d39.02705997171829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63a2386414777%3A0x6200232490792036!2s46970%20Community%20Plaza%2C%20Sterling%2C%20VA%2020164!5e0!3m2!1sen!2sus!4v1703264000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "500px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
}
