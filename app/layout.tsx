import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { CartSidebar } from "@/components/cart/CartSidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Persian & International Market | Global Groceries",
  description: "Experience the finest authentic Persian and international delicacies in Sterling, VA. Fresh Halal meats, daily baked bread, and global ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} antialiased bg-cream text-black font-sans flex flex-col min-h-screen`}
      >
        <CartProvider>
          <Header />
          {children}
          <div className="mt-auto">
            <Footer />
          </div>
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
