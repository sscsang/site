import { MessageCircle, FileText, Package, TrendingUp, CheckCircle, Timer, Globe, Shield, Zap, Award, Settings, Gauge, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  const offerings = [
    {
      icon: Award,
      title: 'Ashok Leyland Parts Specialist',
      description: 'Authorized supplier of genuine Ashok Leyland spare parts with extensive inventory'
    },
    {
      icon: Package,
      title: 'Truck & Bus Spare Parts Supply',
      description: 'Complete range of spare parts for trucks and buses from trusted brands'
    },
    {
      icon: TrendingUp,
      title: 'Wholesale & Retail Supply',
      description: 'Flexible supply options for fleet operators, workshops, and individual buyers'
    },
    {
      icon: Globe,
      title: 'Fast Dispatch for Export Orders',
      description: 'Specialized export support with fast dispatch to UAE, Sri Lanka, and Gulf markets'
    },
    {
      icon: FileText,
      title: 'Quick Quotation & Price List',
      description: 'Get instant quotations and latest price lists for all your requirements'
    },
    {
      icon: MessageCircle,
      title: 'After-Sales Support',
      description: '24/7 customer support via WhatsApp for all your queries and assistance'
    }
  ];

  const benefits = [
    {
      icon: Package,
      title: 'Ready Stock',
      description: 'Extensive inventory of 500+ fast-moving parts always in stock'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Price',
      description: 'Best market rates without compromising on quality'
    },
    {
      icon: Shield,
      title: 'Trusted Quality',
      description: 'Guaranteed genuine parts with consistent quality standards'
    },
    {
      icon: Zap,
      title: 'Quick Response',
      description: 'Fast quotations and immediate response to all inquiries'
    },
    {
      icon: CheckCircle,
      title: 'Honest Dealing',
      description: 'Transparent pricing and reliable business practices'
    },
    {
      icon: Timer,
      title: 'Fast Delivery',
      description: '24-48 hour dispatch across India and export markets'
    }
  ];

  const productCategories = [
    { name: 'Engine Parts', icon: Settings },
    { name: 'Brake Parts', icon: Gauge },
    { name: 'Clutch Parts', icon: Settings },
    { name: 'Suspension Parts', icon: Settings },
    { name: 'Electrical Parts', icon: Zap },
    { name: 'Filters & Consumables', icon: Wrench }
  ];

  return (
    <div className="bg-background">
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl mb-6">
              Trusted Truck & Bus Spare Parts Supplier
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Specialists in Ashok Leyland parts with ready stock, competitive pricing, fast dispatch, and export support to UAE, Sri Lanka & Gulf markets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors gap-2 text-lg"
              >
                <MessageCircle className="size-6" />
                Send Requirement on WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-primary hover:bg-white/90 transition-colors gap-2 text-lg"
              >
                <FileText className="size-6" />
                Request Price List
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-secondary border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl text-accent mb-2">500+</div>
              <div className="text-sm md:text-base text-foreground">Products Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl text-accent mb-2">24-48h</div>
              <div className="text-sm md:text-base text-foreground">Fast Dispatch</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl text-accent mb-2">Pan India</div>
              <div className="text-sm md:text-base text-foreground">Service Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl text-accent mb-2">Export</div>
              <div className="text-sm md:text-base text-foreground">UAE, Sri Lanka, Gulf</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive spare parts solutions for commercial vehicles with trust and reliability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="size-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <offering.icon className="size-6 text-accent" />
                </div>
                <h3 className="text-xl mb-2 text-card-foreground">{offering.title}</h3>
                <p className="text-muted-foreground">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">Why Buyers Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on trust, quality, and customer satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-xl mb-2 text-card-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">Product Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our extensive range of truck and bus spare parts
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <Link
                key={index}
                to="/products"
                className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-accent transition-all text-center"
              >
                <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/10 transition-colors">
                  <category.icon className="size-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl text-card-foreground">{category.name}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl mb-6">Export-Ready Business Support</h2>
              <p className="text-lg mb-6 opacity-90">
                Serving international markets including UAE, Sri Lanka, and Gulf regions with reliable export support, safe packing, and fast dispatch.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="size-5 text-accent shrink-0" />
                  <span>Quick quotations for international buyers</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="size-5 text-accent shrink-0" />
                  <span>Safe and secure export packing</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="size-5 text-accent shrink-0" />
                  <span>Fast dispatch and reliable communication</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="size-5 text-accent shrink-0" />
                  <span>Ready stock for immediate export orders</span>
                </li>
              </ul>
              <Link
                to="/export"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-primary hover:bg-white/90 transition-colors"
              >
                Learn More About Export
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl mb-6">Markets We Serve</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="size-6 text-accent" />
                  <span className="text-lg">United Arab Emirates (UAE)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="size-6 text-accent" />
                  <span className="text-lg">Sri Lanka</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="size-6 text-accent" />
                  <span className="text-lg">Gulf Region</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="size-6 text-accent" />
                  <span className="text-lg">Pan India Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl mb-6">Send Your Requirement Now</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Get instant quotations, latest price lists, and expert assistance for all your truck and bus spare parts needs
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 rounded-lg bg-white text-accent hover:bg-white/90 transition-colors gap-3 text-lg"
          >
            <MessageCircle className="size-7" />
            Connect on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
