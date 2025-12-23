import { Product } from "@/lib/data";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);
    const isBakery = product.category === 'bakery';

    const handleAddToCart = () => {
        addToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="group text-center">
            {/* Image Container - Circular/Highly Rounded */}
            <div className="relative mx-auto w-full aspect-square max-w-[280px] rounded-full overflow-hidden border-[3px] border-gold/20 shadow-xl mb-6 group-hover:scale-105 transition-transform duration-500 bg-emerald-950/5">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover"
                />
                {/* Popular Tag - Pill shape at bottom */}
                {product.isPopular && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gold text-emerald-950 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
                        Best Seller
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="px-2">
                <p className="text-xs font-bold text-gold uppercase tracking-widest mb-2">
                    {product.category}
                </p>
                <h3 className="font-serif text-xl font-bold text-emerald-950 mb-2 group-hover:text-emerald-700 transition-colors">
                    {product.title}
                </h3>
                <p className="text-sm text-gray-400 font-light mt-1 mb-4">
                    {product.description}
                </p>

                {/* Conditional Action Button */}
                {isBakery ? (
                    <button
                        onClick={handleAddToCart}
                        disabled={isAdded}
                        className={`px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm transition-all shadow-md flex items-center gap-2 mx-auto ${isAdded
                            ? "bg-emerald-700 text-white scale-105"
                            : "bg-emerald-900 text-gold hover:bg-emerald-800"
                            }`}
                    >
                        {isAdded ? (
                            <>
                                <Check className="w-4 h-4" /> Added!
                            </>
                        ) : (
                            <>
                                <Plus className="w-4 h-4" /> Add to Cart
                            </>
                        )}
                    </button>
                ) : (
                    <a href="tel:7034809449" className="text-emerald-900 font-bold text-sm uppercase tracking-wider hover:text-gold transition-colors inline-block border-b border-gold/30 pb-1">
                        Call to Order
                    </a>
                )}
            </div>
        </div>
    );
}
