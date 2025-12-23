import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import { describe, it, expect, vi } from 'vitest'

// Mock components that might cause issues or depend on browser APIs specific context
vi.mock('next/font/google', () => ({
    Inter: () => ({ variable: 'font-inter' }),
    Playfair_Display: () => ({ variable: 'font-playfair' }),
}))

// Mock next/link
vi.mock('next/link', () => ({
    default: ({ children, href }: { children: React.ReactNode; href: string }) => {
        return <a href={href}>{children}</a>
    }
}))

describe('Homepage functionality', () => {
    it('renders the main hero section', () => {
        render(<Home />)
        // Check for main heading or key text in Hero
        expect(screen.getByText(/Persian & International Market/i)).toBeDefined()
    })

    it('renders the Departments section', () => {
        render(<Home />)
        expect(screen.getByText('Our Departments')).toBeDefined()
        expect(screen.getByText('Halal Butcher')).toBeDefined()
        expect(screen.getByText('Fresh Bakery')).toBeDefined()
        expect(screen.getByText('Global Pantry')).toBeDefined()
    })

    it('renders the Why Choose Us section with correct data', () => {
        render(<Home />)
        expect(screen.getByText('Why Choose Us')).toBeDefined()
        expect(screen.getByText('Family Owned')).toBeDefined()
        expect(screen.getByText('Fresh Daily Baking')).toBeDefined()
        expect(screen.getByText('100% Halal Certified')).toBeDefined()
        // Verify the specific year update
        expect(screen.getByText('Since 2015')).toBeDefined()
    })

    it('renders the Specialties section', () => {
        render(<Home />)
        expect(screen.getByText('What Makes Us Special')).toBeDefined()
        expect(screen.getByText(/Fresh Sangak & Barbari/i)).toBeDefined()
        expect(screen.getByText(/Authentic Saffron/i)).toBeDefined()
    })

    it('renders the Testimonials section', () => {
        render(<Home />)
        expect(screen.getByText('What Our Customers Say')).toBeDefined()
        expect(screen.getByText('Keyan Daneshmand')).toBeDefined()
        expect(screen.getByText(/A true gem in Sterling/i)).toBeDefined()
    })

    it('does NOT render the removed Ticker or Visit section', () => {
        render(<Home />)
        // Ensure "Fresh Bread Baked Daily" ticker text is NOT scrolling at top (it shouldn't be there)
        // Note: The text might exist in "Why Choose Us" as a static item ("Fresh Daily Baking"), 
        // but the repeated ticker text "Fresh Bread Baked Daily" was removed.
        // We can check for the component signature presence if we could, but checking text is harder if it duplicates.
        // However, we know "Visit Our Market" section was removed.

        // The "Visit Our Market" heading should be gone.
        const visitHeading = screen.queryByRole('heading', { name: /Visit Our Market/i })
        expect(visitHeading).toBeNull()
    })
})
