import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const phone = "919463588541";
  const displayPhone = "+91-9463588541";
  const email = "md@singlaservicecentre.com";

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
  };

  return (
    <footer className="bg-primary text-white pt-32 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-white/10" />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="space-y-10">
            <div className="flex items-center space-x-3">
              <div className="size-12 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-black text-primary">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter uppercase leading-none">Singla</span>
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">Automobiles</span>
              </div>
            </div>
            <p className="text-white/40 font-medium leading-relaxed">
              Driven by Trust, Powered by Quality. Your premier destination for high-quality commercial vehicle parts. Trusted domestic supply specialist.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="size-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent transition-all duration-500">
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-12 text-white/30">Navigation</h4>
            <ul className="space-y-6">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Product Categories', href: '#products' },
                { name: 'Why Choose Us', href: '#why-choose-us' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xl font-black hover:text-accent transition-colors uppercase tracking-tight"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-12 text-white/30">Connect</h4>
            <ul className="space-y-8">
              <li className="flex gap-6 items-start">
                <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="size-6 text-accent" />
                </div>
                <span className="text-lg font-bold text-white/60">Sangrur, Punjab, India</span>
              </li>
              <li className="flex gap-6 items-start">
                <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="size-6 text-accent" />
                </div>
                <span className="text-lg font-bold text-white/60">{displayPhone}</span>
              </li>
              <li className="flex gap-6 items-start">
                <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="size-6 text-accent" />
                </div>
                <span className="text-lg font-bold text-white/60">{email}</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-white/5 rounded-[2.5rem] -rotate-3 scale-110" />
            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] relative z-10">
              <h4 className="text-xl font-black mb-6 uppercase tracking-tight">Need Support?</h4>
              <p className="text-white/60 mb-8 font-medium">
                Connect directly with our team for quick quotations.
              </p>
              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-5 rounded-2xl bg-accent text-white font-black hover:shadow-2xl transition-all gap-3"
              >
                <MessageCircle className="size-6" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-xs font-black uppercase tracking-widest">
            © {currentYear} Singla Automobiles. Domestic Supply Specialist.
          </p>
          <div className="flex space-x-12">
            <a href="#" className="text-white/20 hover:text-white transition-colors text-xs font-black uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-xs font-black uppercase tracking-widest">Terms</a>
          </div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute -bottom-[5%] left-0 text-[20rem] font-black text-white/5 whitespace-nowrap select-none pointer-events-none uppercase">
        Singla
      </div>
    </footer>
  );
}
