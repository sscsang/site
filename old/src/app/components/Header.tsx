import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Export', href: '/export' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="size-12 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-xl text-primary-foreground">SA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">Singla Automobiles</span>
                <span className="text-xs text-muted-foreground">Driven by Trust, Powered by Quality</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 transition-colors ${
                  location.pathname === item.href
                    ? 'text-primary border-b-2 border-accent'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors gap-2"
            >
              <MessageCircle className="size-5" />
              WhatsApp Us
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-secondary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md ${
                  location.pathname === item.href
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground hover:bg-secondary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full px-3 py-2 mt-4 rounded-lg bg-accent text-accent-foreground"
            >
              <MessageCircle className="size-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
