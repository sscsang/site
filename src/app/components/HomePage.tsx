import { 
  MessageCircle, 
  FileText, 
  Package, 
  TrendingUp, 
  CheckCircle, 
  Timer, 
  Shield, 
  Zap, 
  Award, 
  Settings, 
  Gauge, 
  Wrench,
  Phone,
  Mail,
  MapPin,
  Truck,
  Users,
  Handshake,
  ArrowRight
} from 'lucide-react';

export function HomePage() {
  const phone = "919463588541";
  const displayPhone = "+91-9463588541";
  const email = "md@singlaservicecentre.com";

  const productCategories = [
    { 
      name: 'Engine Parts', 
      icon: Settings, 
      desc: 'High-performance components for maximum engine reliability.',
      accent: 'bg-blue-500'
    },
    { 
      name: 'Brake Parts', 
      icon: Gauge, 
      desc: 'Safety-critical systems for heavy-duty commercial vehicles.',
      accent: 'bg-red-500'
    },
    { 
      name: 'Clutch Parts', 
      icon: Settings, 
      desc: 'Durable assemblies for efficient power transmission.',
      accent: 'bg-orange-500'
    },
    { 
      name: 'Suspension Parts', 
      icon: TrendingUp, 
      desc: 'Robust components designed for maximum load stability.',
      accent: 'bg-emerald-500'
    },
    { 
      name: 'Electrical Parts', 
      icon: Zap, 
      desc: 'Precision electrical systems and wiring solutions.',
      accent: 'bg-yellow-500'
    },
    { 
      name: 'Filters & Consumables', 
      icon: Wrench, 
      desc: 'Premium quality filtration for engine protection.',
      accent: 'bg-indigo-500'
    },
    { 
      name: 'Body Parts', 
      icon: Truck, 
      desc: 'High-strength structural panels and accessories.',
      accent: 'bg-purple-500'
    },
    { 
      name: 'Fast-Moving Spares', 
      icon: Timer, 
      desc: 'Essential components always available for rapid replacement.',
      accent: 'bg-rose-500'
    }
  ];

  const offerings = [
    { icon: Award, title: 'Truck Parts Specialist', desc: 'Expert supplier of high-quality spare parts with extensive domestic inventory.' },
    { icon: Truck, title: 'Heavy Vehicle Supply', desc: 'Complete range of spare parts for all major commercial truck models.' },
    { icon: TrendingUp, title: 'Wholesale & Retail', desc: 'Flexible supply options for fleet operators, workshops, and retailers.' },
    { icon: FileText, title: 'Quick Quotations', desc: 'Get instant price details for all your requirements via WhatsApp.' },
    { icon: MessageCircle, title: 'Direct Support', desc: 'Real-time customer assistance for part identification and orders.' },
    { icon: Users, title: 'Reliable After-Sales', desc: 'Dedicated support to ensure your fleet stays operational.' },
    { icon: Package, title: 'Ready Stock', desc: 'Extensive inventory of fast-moving parts maintained in our warehouse.' },
    { icon: Shield, title: 'Competitive Pricing', desc: 'Market-leading rates without compromising on part quality.' }
  ];

  return (
    <div className="bg-white selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] size-[600px] bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute top-[20%] -left-[5%] size-[400px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl">
            <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-primary text-white text-xs font-black uppercase tracking-[0.3em] mb-12 shadow-2xl shadow-primary/20">
              <span>Commercial Vehicle Specialist</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-primary leading-none mb-12 tracking-tighter uppercase">
              Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Trust</span>.<br />
              Powered by <span className="underline decoration-accent/30 decoration-8 underline-offset-8 text-primary">Quality</span>.
            </h1>
            
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <p className="text-xl md:text-2xl text-primary/60 font-medium leading-relaxed">
                Singla Automobiles provides premium truck spare parts with ready stock, competitive pricing, and <span className="text-primary font-black">24-48h dispatch</span> for all commercial vehicle parts.
              </p>
              
              <div>
                <a
                  href={`https://wa.me/${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-6 rounded-full bg-accent text-white font-black text-lg hover:shadow-[0_20px_50px_rgba(249,115,22,0.3)] hover:-translate-y-2 transition-all duration-500 group"
                >
                  <MessageCircle className="size-6 mr-3 group-hover:rotate-12 transition-transform" />
                  WhatsApp Inquiry
                  <ArrowRight className="size-5 ml-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>
            </div>

            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-primary/10">
              {[
                { label: '500+', sub: 'Ready Items' },
                { label: '24-48h', sub: 'Fast Dispatch' },
                { label: 'Premium', sub: 'Quality Parts' },
                { label: 'Direct', sub: 'WhatsApp Help' }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-4xl font-black text-primary mb-1 group-hover:text-accent transition-colors">{stat.label}</div>
                  <div className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em]">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-20 bg-primary overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {[
              { icon: Package, text: 'Ready Stock' },
              { icon: Zap, text: 'Fast Response' },
              { icon: TrendingUp, text: 'Market Pricing' },
              { icon: Shield, text: 'Quality Supply' },
              { icon: Handshake, text: 'Honest Dealing' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="size-16 rounded-3xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-500">
                  <item.icon className="size-8 text-white" />
                </div>
                <span className="text-sm font-black text-white uppercase tracking-widest">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-auto lg:aspect-square bg-white rounded-[4rem] p-12 shadow-2xl relative overflow-hidden">
                <div className="relative z-10 h-full flex flex-col justify-between min-h-[350px] lg:min-h-0">
                  <div className="size-24 rounded-3xl bg-accent flex items-center justify-center shadow-2xl shadow-accent/20">
                    <Award className="size-12 text-white" />
                  </div>
                  <div className="mt-8">
                    <h3 className="text-5xl font-black text-primary mb-6 uppercase leading-none">Truck Parts Specialist.</h3>
                    <p className="text-xl text-primary/60 font-medium leading-relaxed">
                      We focus on supplying high-performance commercial vehicle parts with transparency and dependable service.
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-[-10%] right-[-10%] size-64 bg-primary/5 rounded-full" />
              </div>
            </div>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-5xl md:text-7xl font-black text-primary mb-8 uppercase leading-none tracking-tighter">
                  Domestic <span className="text-accent">Reliability</span>.
                </h2>
                <p className="text-xl text-primary/60 font-medium leading-relaxed">
                  Singla Automobiles is focused on supplying quality truck spare parts with honest dealing and quick response. We help customers source the right parts quickly through ready stock and reliable support.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: 'Quality', text: 'Rigorous sourcing for every single part.', icon: Shield },
                  { title: 'Response', text: 'Immediate quotation via WhatsApp support.', icon: Zap },
                  { title: 'Stock', text: 'Extensive range ready for dispatch.', icon: Package },
                  { title: 'Pricing', text: 'Fair and competitive market rates.', icon: TrendingUp }
                ].map((item, i) => (
                  <div key={i} className="group p-8 rounded-[2rem] bg-white hover:bg-primary transition-all duration-500 shadow-xl hover:shadow-primary/20">
                    <item.icon className="size-10 text-accent mb-6 group-hover:text-white transition-colors" />
                    <h4 className="text-xl font-black text-primary group-hover:text-white mb-2 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-sm text-primary/40 group-hover:text-white/60 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <div className="max-w-3xl">
              <h2 className="text-6xl md:text-8xl font-black text-primary mb-8 uppercase leading-none tracking-tighter">
                Our <span className="text-accent">Categories</span>.
              </h2>
              <p className="text-xl text-primary/60 font-medium leading-relaxed">
                Comprehensive range of components for heavy commercial vehicles. Quality parts maintained in ready inventory.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productCategories.map((cat, i) => (
              <div key={i} className="group relative aspect-auto sm:aspect-square rounded-[2.5rem] bg-secondary/30 p-10 overflow-hidden min-h-[250px] sm:min-h-0">
                <div className={`absolute top-0 right-0 size-32 opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-100 ${cat.accent}`} />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="size-16 rounded-2xl bg-white shadow-xl flex items-center justify-center">
                    <cat.icon className="size-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-primary mb-3 uppercase tracking-tighter">{cat.name}</h3>
                    <p className="text-sm text-primary/40 font-medium leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-5xl md:text-7xl font-black mb-24 uppercase leading-none tracking-tighter text-center">
            Professional <span className="text-accent">Service</span>.
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden">
            {offerings.map((off, i) => (
              <div key={i} className="p-12 bg-primary hover:bg-white group transition-all duration-500">
                <off.icon className="size-12 text-accent mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-black group-hover:text-primary mb-4 uppercase leading-tight tracking-tight">{off.title}</h3>
                <p className="text-sm text-white/40 group-hover:text-primary/60 font-medium leading-relaxed">{off.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-32 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-6xl md:text-8xl font-black text-primary mb-12 uppercase leading-none tracking-tighter">
                Why <span className="text-accent">Us</span>?
              </h2>
              <div className="space-y-12">
                {[
                  { title: 'Ready Stock', text: 'We maintain our own warehouse with extensive categories of parts, ensuring minimal downtime.' },
                  { title: 'Honest Dealing', text: 'No hidden costs. We provide transparent pricing and quality products for every requirement.' },
                  { title: 'Market Knowledge', text: 'Deep expertise in sourcing parts for all major commercial vehicle brands.' }
                ].map((point, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-6xl font-black text-primary/5 group-hover:text-accent/20 transition-colors leading-none">0{i+1}</div>
                    <div>
                      <h4 className="text-2xl font-black text-primary mb-4 uppercase tracking-tight group-hover:text-accent transition-colors">{point.title}</h4>
                      <p className="text-lg text-primary/60 font-medium leading-relaxed">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-secondary/30 p-16 rounded-[4rem] relative overflow-hidden group">
              <div className="relative z-10 text-center">
                <h3 className="text-4xl font-black text-primary mb-12 uppercase tracking-tighter leading-tight">Trusted for Quality.</h3>
                <div className="space-y-6">
                  {[
                    "Quick response and reliable supply.",
                    "Premium quality parts and honest dealing.",
                    "Helpful support for all requirements."
                  ].map((t, i) => (
                    <div key={i} className="p-8 rounded-[2rem] bg-white shadow-xl italic text-xl font-medium text-primary/70">
                      "{t}"
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter mb-6">Simple <span className="text-accent">Process</span>.</h2>
            <p className="text-xl text-primary/40 font-bold uppercase tracking-widest">Efficiency in every step</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Share Need', text: 'Send part details or descriptions via WhatsApp.' },
              { title: 'Get Price', text: 'Receive a quick quotation from our team.' },
              { title: 'Confirm Order', text: 'Finalize your requirement and confirm details.' },
              { title: '24-48h Dispatch', text: 'Get your parts dispatched within 24-48 hours.' }
            ].map((step, i) => (
              <div key={i} className="relative p-12 bg-white rounded-[3rem] shadow-xl group hover:bg-primary transition-all duration-500">
                <div className="text-8xl font-black text-primary/5 group-hover:text-white/10 absolute top-4 right-8 transition-colors">0{i+1}</div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black text-primary group-hover:text-white mb-4 uppercase tracking-tighter leading-none">{step.title}</h4>
                  <p className="text-sm text-primary/40 group-hover:text-white/60 font-medium leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tighter">
              Ready to <span className="underline decoration-white/30 underline-offset-8">Order</span>?
            </h2>
            <div className="flex flex-wrap gap-6 justify-center">
              <a
                href={`https://wa.me/${phone}`}
                className="px-12 py-7 rounded-full bg-white text-accent font-black text-2xl hover:shadow-2xl transition-all hover:-translate-y-2 active:scale-95 flex items-center gap-4"
              >
                <MessageCircle className="size-8" /> WhatsApp Now
              </a>
              <a
                href={`tel:${phone}`}
                className="px-12 py-7 rounded-full bg-primary text-white font-black text-2xl hover:shadow-2xl transition-all hover:-translate-y-2 active:scale-95 flex items-center gap-4"
              >
                <Phone className="size-8" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-black text-primary mb-12 uppercase leading-none tracking-tighter text-center">
              Let's <span className="text-accent">Connect</span>.
            </h2>
            <p className="text-xl text-primary/60 font-medium leading-relaxed mb-20 text-center">
              Share your spare parts requirement and our team will respond quickly. We provide reliable support for all your commercial vehicle part needs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: Phone, label: 'Call / WhatsApp', val: displayPhone, link: `tel:${phone}` },
                { icon: Mail, label: 'Email', val: email, link: `mailto:${email}` },
                { icon: MapPin, label: 'Location', val: 'Sangrur, Punjab, India', link: '#' }
              ].map((item, i) => (
                <a href={item.link} key={i} className="flex flex-col items-center text-center group">
                  <div className="size-20 rounded-[2rem] bg-secondary/50 flex items-center justify-center group-hover:bg-accent transition-all duration-500 shadow-xl group-hover:shadow-accent/20 mb-8">
                    <item.icon className="size-8 text-primary group-hover:text-white" />
                  </div>
                  <div className="text-xs font-black text-primary/30 uppercase tracking-[0.2em] mb-2">{item.label}</div>
                  <div className="text-lg font-black text-primary uppercase tracking-tight">{item.val}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
