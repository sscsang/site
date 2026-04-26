import { Package, TrendingUp, Shield, Zap, CheckCircle, Timer, Award, MessageCircle, Globe, FileText, Users, Star } from 'lucide-react';

export function WhyChooseUsPage() {
  const reasons = [
    {
      icon: Package,
      title: 'Ready Stock',
      description: 'Extensive inventory of 500+ fast-moving parts always in stock for immediate dispatch',
      benefits: [
        'No waiting time for order fulfillment',
        'Immediate availability confirmation',
        'Regular stock updates and replenishment',
        'Wide range across all product categories'
      ]
    },
    {
      icon: Timer,
      title: 'Fast Delivery',
      description: '24-48 hour dispatch guarantee ensuring your business never faces downtime',
      benefits: [
        'Express dispatch for urgent requirements',
        'Pan-India delivery network',
        'International shipping capability',
        'Real-time tracking and updates'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Competitive Price',
      description: 'Best market rates without compromising on quality or service standards',
      benefits: [
        'Wholesale and bulk order discounts',
        'Transparent pricing structure',
        'No hidden charges or fees',
        'Regular price updates and quotations'
      ]
    },
    {
      icon: Shield,
      title: 'Consistent Quality',
      description: 'Guaranteed genuine parts with consistent quality standards from trusted brands',
      benefits: [
        '100% authentic spare parts',
        'Quality certification available',
        'Strict quality control checks',
        'Warranty support on applicable items'
      ]
    },
    {
      icon: Award,
      title: 'Ashok Leyland Specialization',
      description: 'Authorized specialists with deep expertise in Ashok Leyland spare parts',
      benefits: [
        'Complete Ashok Leyland parts range',
        'Technical knowledge and support',
        'Genuine parts authentication',
        'Latest parts catalog and updates'
      ]
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Support',
      description: '24/7 customer support via WhatsApp for instant assistance and quick responses',
      benefits: [
        'Instant quotations via WhatsApp',
        'Quick order placement',
        'Real-time support and updates',
        'Easy communication in your language'
      ]
    },
    {
      icon: Globe,
      title: 'Wholesale & Export-Friendly',
      description: 'Flexible supply options for both domestic and international bulk buyers',
      benefits: [
        'Wholesale pricing for bulk orders',
        'Export documentation support',
        'International shipping expertise',
        'Flexible payment terms'
      ]
    },
    {
      icon: FileText,
      title: 'Quick Quotation',
      description: 'Instant price quotations with latest rates and availability status',
      benefits: [
        'Same-day quotation response',
        'Detailed pricing breakdown',
        'Regular price list updates',
        'Custom quotations for special requirements'
      ]
    },
    {
      icon: Users,
      title: 'Reliable After-Sales Support',
      description: 'Dedicated customer service team for post-purchase assistance and support',
      benefits: [
        'Installation guidance available',
        'Technical support and troubleshooting',
        'Return and replacement support',
        'Ongoing customer relationship'
      ]
    }
  ];

  const testimonialPlaceholders = [
    {
      name: 'Fleet Owner',
      location: 'Mumbai, India',
      text: 'Reliable supplier with consistent quality and fast delivery. Our fleet operations have improved significantly.'
    },
    {
      name: 'Workshop Owner',
      location: 'Dubai, UAE',
      text: 'Excellent export service with safe packing and competitive pricing. Highly recommended for international buyers.'
    },
    {
      name: 'Parts Dealer',
      location: 'Colombo, Sri Lanka',
      text: 'Best source for Ashok Leyland parts. Quick response and genuine products every time.'
    }
  ];

  const stats = [
    { value: '500+', label: 'Products in Stock' },
    { value: '24-48h', label: 'Dispatch Guarantee' },
    { value: '100%', label: 'Genuine Parts' },
    { value: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="bg-background">
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl mb-6">Why Choose Singla Automobiles?</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Built on trust, quality, and exceptional service for commercial vehicle spare parts
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-secondary border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl text-accent mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">Our Key Advantages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions that make us the preferred choice for spare parts buyers
            </p>
          </div>
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <div className="size-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <reason.icon className="size-8 text-accent" />
                    </div>
                    <h3 className="text-2xl mb-3 text-card-foreground">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                  <div className="md:col-span-2">
                    <div className="grid md:grid-cols-2 gap-3">
                      {reason.benefits.map((benefit, bIndex) => (
                        <div key={bIndex} className="flex items-start gap-3">
                          <CheckCircle className="size-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by businesses across India and international markets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialPlaceholders.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl text-center text-foreground mb-6">Our Promise to You</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="flex items-start gap-3">
                <CheckCircle className="size-6 text-accent shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Genuine Quality:</strong> Every part we supply is authentic and meets the highest quality standards.</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="size-6 text-accent shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Fast Service:</strong> We understand the value of time in your business. Our 24-48 hour dispatch commitment ensures minimal downtime.</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="size-6 text-accent shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Fair Pricing:</strong> Competitive rates that provide real value without hidden costs or quality compromises.</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="size-6 text-accent shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Honest Communication:</strong> Clear, transparent dealings in every transaction, from quotation to delivery.</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="size-6 text-accent shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Ongoing Support:</strong> Our relationship doesn't end with delivery. We're here for after-sales support and future requirements.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl mb-6">Experience the Difference</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join hundreds of satisfied customers who trust Singla Automobiles for their truck and bus spare parts needs
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 rounded-lg bg-white text-accent hover:bg-white/90 transition-colors gap-3 text-lg"
          >
            <MessageCircle className="size-7" />
            Get Started with WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
