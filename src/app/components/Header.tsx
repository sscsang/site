import { Menu, X, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const phone = "919463588541";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-3 group"
            >
              <div className="size-11 rounded-full bg-primary flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-xl shadow-primary/20">
                <span className="text-xl font-black text-white">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-primary tracking-tighter uppercase">Singla</span>
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] -mt-1">Automobiles</span>
              </div>
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-bold text-primary/70 hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3 rounded-full bg-accent text-white font-black text-sm hover:shadow-2xl hover:shadow-accent/40 hover:-translate-y-1 transition-all active:scale-95 gap-2"
            >
              <MessageCircle className="size-4" />
              WhatsApp Inquiry
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
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

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-2xl border-b border-primary/5 transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden shadow-2xl`}
      >
        <div className="px-6 py-12 space-y-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block text-3xl font-black text-primary hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-8">
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-accent text-white font-black text-xl shadow-xl shadow-accent/20"
            >
              <MessageCircle className="size-6" />
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
