import { useState, useEffect, startTransition } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Truck } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/shipments/create', label: 'Ship' },
  { href: '/shipments/track', label: 'Track' },
  { href: '/prohibited-items', label: 'Prohibited Items' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    startTransition(() => setOpen(false))
  }, [pathname])

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-orange-500 to-green-600 text-white p-1.5 rounded-lg group-hover:from-orange-600 group-hover:to-green-700 transition-colors">
              <Truck size={22} />
            </div>
            <span className="font-bold text-xl text-slate-900">
              JM{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600">
                Logistics
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  to={href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(href)
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-slate-600 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-slate-100 mt-1">
            <ul className="flex flex-col gap-1 pt-3">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive(href)
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-slate-600 hover:text-orange-500 hover:bg-orange-50'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="block text-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
