import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
    title: "Shop Authentic Groceries | Persian & International Market",
    description: "Browse our selection of fresh Halal meats, daily baked bread, authentic Persian ingredients, and global pantry staples.",
};

export default function ProductsPage() {
    return <ProductsClient />;
}
