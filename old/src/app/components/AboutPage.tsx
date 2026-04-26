import { Shield, Heart, Zap, CheckCircle, Award, Users } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building long-term relationships through transparent and reliable business practices'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Committed to providing only genuine, high-quality spare parts from trusted brands'
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'Quick turnaround on quotations, inquiries, and order fulfillment'
    },
    {
      icon: Heart,
      title: 'Honest Dealing',
      description: 'Fair pricing, honest communication, and ethical business conduct in every transaction'
    },
    {
      icon: CheckCircle,
      title: 'Reliable Service',
      description: 'Consistent delivery of quality products with dependable after-sales support'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Understanding and meeting the unique needs of each customer with personalized service'
    }
  ];

  const strengths = [
    'Specialists in Ashok Leyland spare parts',
    'Extensive inventory of 500+ products',
    'Ready stock for immediate dispatch',
    'Competitive pricing without quality compromise',
    'Fast 24-48 hour dispatch capability',
    'Export-ready operations for international markets',
    'Trusted by fleet operators and workshops',
    'Serving customers across India and beyond'
  ];

  return (
    <div className="bg-background">
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl mb-6">About Singla Automobiles</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Your trusted partner for truck and bus spare parts
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl text-foreground mb-6">Who We Are</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Singla Automobiles is a leading supplier of truck and bus spare parts, specializing in Ashok Leyland components. We serve a diverse customer base including wholesale buyers, retail customers, fleet operators, workshop owners, and export clients across UAE, Sri Lanka, and Gulf markets.
                </p>
                <p>
                  Our commitment to quality, trust, and customer satisfaction has made us a preferred partner for businesses looking for reliable spare parts supply with competitive pricing and fast delivery.
                </p>
                <p>
                  With ready stock of over 500 fast-moving parts and a dedicated team focused on customer service, we ensure that your business never faces downtime due to parts unavailability.
                </p>
              </div>
            </div>
            <div className="bg-secondary rounded-xl p-8 border border-border">
              <h3 className="text-2xl text-foreground mb-6">Our Strengths</h3>
              <ul className="space-y-3">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="size-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">Our Business Philosophy</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe in building long-term relationships through trust, quality, and responsive service. Every order is treated with the same level of care and attention, whether it's a small retail purchase or a large export shipment.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="flex items-start gap-3">
                <span className="text-accent text-2xl shrink-0">•</span>
                <span><strong className="text-foreground">Quality First:</strong> We supply only genuine, high-quality spare parts that meet industry standards and customer expectations.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-accent text-2xl shrink-0">•</span>
                <span><strong className="text-foreground">Customer-Centric Approach:</strong> Your business needs drive our service. We focus on fast response, competitive pricing, and reliable delivery.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-accent text-2xl shrink-0">•</span>
                <span><strong className="text-foreground">Export Excellence:</strong> We understand the unique requirements of international buyers and provide seamless export support with safe packing and fast dispatch.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-accent text-2xl shrink-0">•</span>
                <span><strong className="text-foreground">Transparent Communication:</strong> Honest dealing and clear communication form the foundation of our business relationships.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow text-center"
              >
                <div className="size-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="size-8 text-accent" />
                </div>
                <h3 className="text-xl mb-2 text-card-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl mb-6">Our Focus</h2>
          <p className="text-xl mb-8 opacity-90">
            Specializing in Ashok Leyland spare parts with a commitment to ready stock availability, competitive pricing, fast dispatch, and exceptional customer service for both domestic and international markets.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl mb-4">For Indian Markets</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Pan-India delivery network</li>
                <li>• 24-48 hour dispatch guarantee</li>
                <li>• Wholesale and retail supply</li>
                <li>• Dedicated support for fleet operators</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl mb-4">For Export Markets</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• UAE, Sri Lanka, Gulf coverage</li>
                <li>• Export-grade packing standards</li>
                <li>• Fast international dispatch</li>
                <li>• Multilingual support available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
