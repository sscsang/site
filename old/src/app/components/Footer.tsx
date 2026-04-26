import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="size-12 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-xl text-accent-foreground">SA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Singla Automobiles</span>
                <span className="text-sm opacity-90">Driven by Trust, Powered by Quality</span>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4 max-w-md">
              Leading supplier of truck and bus spare parts. Specializing in Ashok Leyland parts with ready stock, competitive pricing, and fast dispatch for customers across India and export markets.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/products" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Products</Link></li>
              <li><Link to="/export" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Export</Link></li>
              <li><Link to="/why-choose-us" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Why Choose Us</Link></li>
              <li><Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="size-4 mt-0.5 shrink-0" />
                <span className="text-sm opacity-80">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="size-4 mt-0.5 shrink-0" />
                <span className="text-sm opacity-80">WhatsApp Support</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="size-4 mt-0.5 shrink-0" />
                <span className="text-sm opacity-80">info@singlaautomobiles.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 shrink-0" />
                <span className="text-sm opacity-80">Punjab, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-sm opacity-70">
            © {new Date().getFullYear()} Singla Automobiles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
