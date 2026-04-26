import { Settings, Gauge, Wrench, Zap, Filter, Package, MessageCircle, CheckCircle } from 'lucide-react';

export function ProductsPage() {
  const productCategories = [
    {
      icon: Settings,
      name: 'Engine Parts',
      description: 'Complete range of engine components including pistons, rings, gaskets, and cylinder parts',
      parts: ['Pistons & Rings', 'Cylinder Heads', 'Engine Gaskets', 'Crankshafts', 'Camshafts']
    },
    {
      icon: Gauge,
      name: 'Brake Parts',
      description: 'High-quality brake systems and components for safe and reliable vehicle operation',
      parts: ['Brake Shoes', 'Brake Drums', 'Brake Linings', 'Brake Chambers', 'Master Cylinders']
    },
    {
      icon: Settings,
      name: 'Clutch Parts',
      description: 'Durable clutch assemblies and components for smooth power transmission',
      parts: ['Clutch Plates', 'Pressure Plates', 'Release Bearings', 'Clutch Cables', 'Master Cylinders']
    },
    {
      icon: Wrench,
      name: 'Suspension Parts',
      description: 'Robust suspension components for enhanced ride quality and vehicle stability',
      parts: ['Leaf Springs', 'Shock Absorbers', 'U-Bolts', 'Spring Bushes', 'Center Bolts']
    },
    {
      icon: Zap,
      name: 'Electrical Parts',
      description: 'Complete electrical system components for trucks and buses',
      parts: ['Alternators', 'Starters', 'Batteries', 'Wiring Harness', 'Sensors & Switches']
    },
    {
      icon: Filter,
      name: 'Filters & Consumables',
      description: 'Regular maintenance items and consumables for optimal vehicle performance',
      parts: ['Oil Filters', 'Air Filters', 'Fuel Filters', 'Coolants', 'Lubricants']
    },
    {
      icon: Package,
      name: 'Transmission Parts',
      description: 'Gearbox components and transmission system parts',
      parts: ['Gearbox Assemblies', 'Synchro Rings', 'Transmission Shafts', 'Gear Sets', 'Bearings']
    },
    {
      icon: Settings,
      name: 'Cooling System',
      description: 'Radiators, hoses, and cooling system components',
      parts: ['Radiators', 'Water Pumps', 'Thermostats', 'Radiator Hoses', 'Expansion Tanks']
    },
    {
      icon: Wrench,
      name: 'Steering Parts',
      description: 'Steering system components for precise vehicle control',
      parts: ['Steering Boxes', 'Tie Rods', 'Drag Links', 'Steering Pumps', 'Steering Arms']
    },
    {
      icon: Package,
      name: 'Body Parts',
      description: 'Exterior and interior body components and accessories',
      parts: ['Mirrors', 'Lights', 'Bumpers', 'Door Parts', 'Cabin Accessories']
    },
    {
      icon: Settings,
      name: 'Fuel System',
      description: 'Fuel injection and delivery system components',
      parts: ['Fuel Pumps', 'Injectors', 'Fuel Tanks', 'Fuel Lines', 'Injection Pumps']
    },
    {
      icon: Gauge,
      name: 'Fast-Moving Parts',
      description: 'Commonly required spare parts with guaranteed stock availability',
      parts: ['Service Kits', 'Maintenance Parts', 'Wear Parts', 'Common Spares', 'Emergency Parts']
    }
  ];

  const brands = [
    'Ashok Leyland',
    'Tata Motors',
    'Mahindra',
    'Eicher',
    'Bharat Benz',
    'Other Leading Brands'
  ];

  return (
    <div className="bg-background">
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl mb-6">Our Products</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Comprehensive range of truck and bus spare parts with ready stock and fast delivery
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">Product Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our extensive catalog of genuine spare parts for commercial vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                    <category.icon className="size-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl mb-2 text-card-foreground">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {category.parts.map((part, partIndex) => (
                    <div key={partIndex} className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-accent shrink-0" />
                      <span className="text-sm text-muted-foreground">{part}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <MessageCircle className="size-4" />
                  <span className="text-sm">Inquire Now</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">Brands We Supply</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Authorized supplier of genuine spare parts from leading commercial vehicle manufacturers
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-lg text-foreground">{brand}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-accent/10 border border-accent/20 rounded-xl p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl text-foreground mb-4">Specializing in Ashok Leyland Parts</h3>
            <p className="text-lg text-muted-foreground">
              As authorized specialists, we maintain extensive inventory of Ashok Leyland spare parts with guaranteed authenticity and competitive pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-xl p-8 md:p-12 text-center">
            <MessageCircle className="size-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">Can't Find Your Part?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Send us your requirement on WhatsApp and we'll get back to you with availability and pricing within minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors gap-2 text-lg"
              >
                <MessageCircle className="size-6" />
                Contact on WhatsApp
              </a>
              <a
                href="mailto:info@singlaautomobiles.com"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors gap-2 text-lg"
              >
                Request Price List
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl text-accent mb-2">500+</div>
              <div className="text-sm md:text-base">Products in Stock</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl text-accent mb-2">24-48h</div>
              <div className="text-sm md:text-base">Dispatch Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl text-accent mb-2">100%</div>
              <div className="text-sm md:text-base">Genuine Parts</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl text-accent mb-2">24/7</div>
              <div className="text-sm md:text-base">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
