import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import About from '@/app/about/page'
import Visit from '@/app/visit/page'
import ProductsClient from '@/app/products/ProductsClient'
import { CartProvider } from '@/context/CartContext'

// Mock components and dependencies
vi.mock('next/font/google', () => ({
    Inter: () => ({ variable: 'font-inter' }),
    Playfair_Display: () => ({ variable: 'font-playfair' }),
}))

vi.mock('next/link', () => ({
    default: ({ children, href }: { children: React.ReactNode; href: string }) => {
        return <a href={href}>{children}</a>
    }
}))

vi.mock('lucide-react', () => ({
    MapPin: () => <div data-testid="icon-map-pin" />,
    Phone: () => <div data-testid="icon-phone" />,
    Clock: () => <div data-testid="icon-clock" />,
    Menu: () => <div data-testid="icon-menu" />,
    X: () => <div data-testid="icon-x" />,
    ChevronRight: () => <div data-testid="icon-chevron-right" />,
    Search: () => <div data-testid="icon-search" />,
    Plus: () => <div data-testid="icon-plus" />,
    Minus: () => <div data-testid="icon-minus" />,
    ShoppingBag: () => <div data-testid="icon-shopping-bag" />,
    Trash2: () => <div data-testid="icon-trash" />,
}))

describe('About Page', () => {
    it('renders the main heading and authentic history', () => {
        render(
            <CartProvider>
                <About />
            </CartProvider>
        )
        expect(screen.getByText('OUR STORY')).toBeDefined()
        // Verify the correctly updated date
        expect(screen.getByText(/Family Owned Since 2015/i)).toBeDefined()
    })
})

describe('Visit Page', () => {
    it('renders contact information and location', () => {
        render(
            <CartProvider>
                <Visit />
            </CartProvider>
        )
        // Address and phone appear in both page content and Footer
        expect(screen.getAllByText(/46970 Community Plz Ste 111B/i).length).toBeGreaterThanOrEqual(1)
        expect(screen.getAllByText(/Sterling, VA 20164/i).length).toBeGreaterThanOrEqual(1)
        expect(screen.getAllByText('(703) 480-9449').length).toBeGreaterThanOrEqual(1)
    })

    it('renders opening hours', () => {
        render(
            <CartProvider>
                <Visit />
            </CartProvider>
        )
        // Opening Hours appears in both page content and Footer
        const hoursHeadings = screen.getAllByText('Opening Hours')
        expect(hoursHeadings.length).toBeGreaterThanOrEqual(1)

        // Check for specific days to ensure list renders
        expect(screen.getAllByText(/Mon - Wed/i).length).toBeGreaterThanOrEqual(1)
        expect(screen.getAllByText(/Sunday/i).length).toBeGreaterThanOrEqual(1)
    })
})

describe('Products Page (Client)', () => {
    it('renders categories and product grid', () => {
        render(
            <CartProvider>
                <ProductsClient />
            </CartProvider>
        )
        expect(screen.getByText('Departments')).toBeDefined()
        expect(screen.getByText('All Products')).toBeDefined()

        // Check standard category filtering buttons
        expect(screen.getByRole('button', { name: /Halal Butcher/i })).toBeDefined()
        expect(screen.getByRole('button', { name: /Fresh Bakery/i })).toBeDefined()
    })

    it('filters products when a category is selected', () => {
        render(
            <CartProvider>
                <ProductsClient />
            </CartProvider>
        )

        // Initial state should show all products (or a significant number)
        // We can check if "All Products" button is active (styled differently)
        const allBtn = screen.getByRole('button', { name: /All Products/i })
        expect(allBtn.className).toContain('bg-emerald-900')

        // Click a category
        const meatBtn = screen.getByRole('button', { name: /Halal Butcher/i })
        fireEvent.click(meatBtn)

        // Now meat button should be active
        expect(meatBtn.className).toContain('bg-emerald-900')
        expect(allBtn.className).not.toContain('bg-emerald-900')
    })
})
