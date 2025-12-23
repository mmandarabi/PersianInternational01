'use client';

import { useCart } from "@/context/CartContext";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function CartSidebar() {
    const { isCartOpen, setIsCartOpen, items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
    const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        pickupTime: '',
        notes: ''
    });

    // Reset step when cart opens/closes
    useEffect(() => {
        if (!isCartOpen) {
            // small delay to reset after animation
            setTimeout(() => {
                setStep('cart');
                setFormData({ name: '', phone: '', pickupTime: '', notes: '' });
            }, 300);
        }
    }, [isCartOpen]);

    // Prevent body scroll when cart is open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isCartOpen]);

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();

        // Prepare Order Payload
        const orderDetails = {
            customer: formData,
            items: items.map(i => ({ title: i.title, qty: i.quantity, price: i.price })),
            total: totalPrice,
            timestamp: new Date().toISOString()
        };

        // Simulate Sending (Options A & B & C)
        console.group("🚀 New Order Received");
        console.log("To: Business Email");
        console.log("To: SMS (703) 480-9449");
        console.log("Payload:", orderDetails);
        console.groupEnd();

        // In a real app, this would call:
        // await fetch('/api/orders', { method: 'POST', body: JSON.stringify(orderDetails) });

        setStep('success');
        clearCart();
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                    />

                    {/* SidebarPanel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-cream shadow-2xl flex flex-col border-l border-emerald-900/10"
                    >
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-white">
                            <h2 className="text-lg font-serif font-bold text-emerald-950 flex items-center gap-2">
                                <ShoppingBag className="w-5 h-5 text-gold" />
                                {step === 'cart' && 'Your Cart'}
                                {step === 'checkout' && 'Checkout'}
                                {step === 'success' && 'Order Received'}
                            </h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 text-gray-400 hover:text-emerald-900 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content Switching */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {/* STEP 1: CART REVIEW */}
                            {step === 'cart' && (
                                <div className="space-y-6">
                                    {items.length === 0 ? (
                                        <div className="h-full flex flex-col items-center justify-center text-center opacity-60 pt-20">
                                            <ShoppingBag className="w-12 h-12 mb-4 text-emerald-900/30" />
                                            <p className="text-gray-500 font-medium">Your cart is empty</p>
                                            <p className="text-sm text-gray-400 mt-2">Add some fresh bread to get started!</p>
                                        </div>
                                    ) : (
                                        items.map((item) => (
                                            <div key={item.id} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                                <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex-shrink-0">
                                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 min-w-0 flex flex-col justify-between">
                                                    <h3 className="text-emerald-950 font-bold text-sm truncate pr-4">{item.title}</h3>
                                                    <p className="text-gray-500 text-xs">${item.price.toFixed(2)} each</p>

                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center gap-3 mt-2">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="text-sm font-bold text-emerald-950 w-4 text-center">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-end justify-between">
                                                    <p className="font-bold text-emerald-900">${(item.price * item.quantity).toFixed(2)}</p>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                                                        title="Remove"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            )}

                            {/* STEP 2: CHECKOUT FORM */}
                            {step === 'checkout' && (
                                <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-emerald-950 mb-1 uppercase tracking-wide">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full rounded-lg border-emerald-900/10 bg-white/50 focus:border-gold focus:ring-gold p-3 transition-all"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold text-emerald-950 mb-1 uppercase tracking-wide">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            className="w-full rounded-lg border-emerald-900/10 bg-white/50 focus:border-gold focus:ring-gold p-3 transition-all"
                                            placeholder="(703) 555-0123"
                                            value={formData.phone}
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="pickup" className="block text-sm font-bold text-emerald-950 mb-1 uppercase tracking-wide">Pickup Date & Time</label>
                                        <input
                                            type="datetime-local"
                                            id="pickup"
                                            required
                                            className="w-full rounded-lg border-emerald-900/10 bg-white/50 focus:border-gold focus:ring-gold p-3 transition-all cursor-pointer"
                                            value={formData.pickupTime}
                                            onChange={e => setFormData({ ...formData, pickupTime: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="notes" className="block text-sm font-bold text-emerald-950 mb-1 uppercase tracking-wide">Order Notes (Optional)</label>
                                        <textarea
                                            id="notes"
                                            className="w-full rounded-lg border-emerald-900/10 bg-white/50 focus:border-gold focus:ring-gold p-3 transition-all"
                                            rows={3}
                                            placeholder="Slice the bread, extra sesame..."
                                            value={formData.notes}
                                            onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                        />
                                    </div>
                                </form>
                            )}

                            {/* STEP 3: SUCCESS */}
                            {step === 'success' && (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <ShoppingBag className="w-8 h-8 text-emerald-900" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-4">Order Received!</h3>
                                    <p className="text-gray-600 mb-6">
                                        We&apos;ll call you to confirm within 30 minutes.
                                    </p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="bg-emerald-900 text-gold px-8 py-3 rounded-xl font-bold uppercase tracking-wider hover:bg-emerald-800 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && step !== 'success' && (
                            <div className="p-6 bg-white border-t border-gray-200">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-gray-600 font-medium">Subtotal</span>
                                    <span className="text-2xl font-serif font-bold text-emerald-950">${totalPrice.toFixed(2)}</span>
                                </div>

                                {step === 'cart' ? (
                                    <div className="space-y-3">
                                        <button
                                            onClick={() => setStep('checkout')}
                                            className="w-full bg-emerald-950 text-gold py-4 rounded-xl font-serif font-bold tracking-widest hover:bg-emerald-900 transition-all shadow-lg active:scale-[0.98] transform border border-gold/20"
                                        >
                                            Proceed to Order
                                        </button>
                                        <button
                                            onClick={() => setIsCartOpen(false)}
                                            className="w-full text-emerald-900 text-sm font-bold uppercase tracking-wide py-2 hover:bg-gray-50 rounded-lg transition-colors"
                                        >
                                            Continue Shopping
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => setStep('cart')}
                                            className="w-1/3 border border-emerald-900/30 text-emerald-900 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-emerald-50 transition-colors"
                                        >
                                            Back
                                        </button>
                                        <button
                                            form="checkout-form"
                                            type="submit"
                                            className="flex-1 bg-emerald-950 text-gold py-4 rounded-xl font-serif font-bold tracking-widest hover:bg-emerald-900 transition-all shadow-lg active:scale-[0.98] transform border border-gold/20"
                                        >
                                            Place Order
                                        </button>
                                    </div>
                                )}

                                {step === 'checkout' && (
                                    <div className="mt-6 p-4 bg-emerald-50/50 rounded-xl border border-emerald-900/10 text-center">
                                        <p className="text-xs text-emerald-800 font-medium">
                                            <span className="font-bold text-emerald-950 block mb-1 text-sm">NO PAYMENT REQUIRED ONLINE</span>
                                            Please pay in-store at pickup (Cash or Card).
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
