export interface Product {
    id: string;
    title: string;
    price: number;
    unit?: string;
    description: string;
    category: string;
    image: string;
    isPopular?: boolean;
}

export type Category = "meat" | "bakery" | "grocery" | "dairy";

export const products: Product[] = [
    // Meat
    {
        id: "m1",
        title: "Fresh Lamb Leg (Zabiha Halal)",
        price: 14.99,
        unit: "/lb",
        description: "Fresh, grass-fed Zabiha Halal.",
        category: "meat",
        image: "/images/fresh_lamb_leg.png",
        isPopular: true
    },
    {
        id: "m2",
        title: "Ground Beef 90/10",
        price: 8.99,
        unit: "/lb",
        description: "Lean 90/10, perfect for kabob.",
        category: "meat",
        image: "/images/fresh_ground_beef.png"
    },
    {
        id: "m3",
        title: "Chicken Breast (Boneless)",
        price: 6.99,
        unit: "/lb",
        description: "Boneless, antibiotic-free Halal.",
        category: "meat",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "m4",
        title: "Marinated Chicken Kabob",
        price: 9.99,
        unit: "/lb",
        description: "Marinated in saffron & yogurt.",
        category: "meat",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1000&auto=format&fit=crop",
        isPopular: true
    },
    // Bakery
    {
        id: "b1",
        title: "Traditional Sangak Bread",
        price: 4.99,
        unit: "each",
        description: "Whole wheat sourdough, stone-baked.",
        category: "bakery",
        image: "/images/sangak_bread.png",
        isPopular: true
    },
    {
        id: "b2",
        title: "Crispy Barbari Bread",
        price: 3.99,
        unit: "each",
        description: "Thick, sesame-topped flatbread.",
        category: "bakery",
        image: "/images/barbari_bread.png"
    },
    // Grocery
    {
        id: "g1",
        title: "Premium Saffron (1g)",
        price: 18.99,
        unit: "each",
        description: "Grade A authentic Sargol threads.",
        category: "grocery",
        image: "/images/premium_saffron.png",
        isPopular: true
    },
    {
        id: "g2",
        title: "Basmati Rice (10lb)",
        price: 24.99,
        unit: "bag",
        description: "Aged aromatic long grain.",
        category: "grocery",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "g3",
        title: "Pomegranate Molasses",
        price: 8.49,
        unit: "bottle",
        description: "Rich & tangy pomegranate reduction.",
        category: "grocery",
        image: "/images/pomegranate_molasses.png"
    }
];

export const categoriesList = [
    { id: "all", name: "All Products" },
    { id: "meat", name: "Halal Butcher" },
    { id: "bakery", name: "Fresh Bakery" },
    { id: "grocery", name: "Pantry & Spices" }
];
