import { Globe, Package, Clock, Shield, MessageCircle, CheckCircle, FileText, Truck, HelpCircle } from 'lucide-react';

export function ExportPage() {
  const exportProcess = [
    {
      step: '01',
      title: 'Send Requirement',
      description: 'Share your parts list via WhatsApp or email with detailed specifications'
    },
    {
      step: '02',
      title: 'Receive Quotation',
      description: 'Get instant quotation with competitive pricing and availability confirmation'
    },
    {
      step: '03',
      title: 'Confirm Order',
      description: 'Review and confirm your order with payment and shipping details'
    },
    {
      step: '04',
      title: 'Safe Packing',
      description: 'Expert export-grade packing ensuring parts reach you in perfect condition'
    },
    {
      step: '05',
      title: 'Fast Dispatch',
      description: 'Quick dispatch from ready stock with complete shipping documentation'
    }
  ];

  const exportHighlights = [
    {
      icon: Package,
      title: 'Ready Stock',
      description: 'Extensive inventory ready for immediate export orders'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Fast quotations and order confirmations within hours'
    },
    {
      icon: Shield,
      title: 'Safe Packing',
      description: 'Export-grade packaging for damage-free international shipping'
    },
    {
      icon: MessageCircle,
      title: 'Reliable Communication',
      description: 'Constant updates and clear communication throughout the process'
    },
    {
      icon: Truck,
      title: 'Fast Dispatch',
      description: '24-48 hour dispatch with complete export documentation'
    },
    {
      icon: FileText,
      title: 'Documentation Support',
      description: 'Complete assistance with export paperwork and customs requirements'
    }
  ];

  const markets = [
    {
      country: 'United Arab Emirates (UAE)',
      highlights: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Other Emirates']
    },
    {
      country: 'Sri Lanka',
      highlights: ['Colombo', 'Kandy', 'Galle', 'Other Cities']
    },
    {
      country: 'Gulf Region',
      highlights: ['Saudi Arabia', 'Oman', 'Kuwait', 'Qatar', 'Bahrain']
    },
    {
      country: 'Expanding Markets',
      highlights: ['Middle East', 'South Asia', 'Africa', 'Other Regions']
    }
  ];

  const faqs = [
    {
      question: 'Do you ship to my country?',
      answer: 'We currently export to UAE, Sri Lanka, and Gulf markets. Contact us to discuss shipping to other locations.'
    },
    {
      question: 'What is the minimum order quantity for export?',
      answer: 'We accommodate both small and large orders. Send us your requirement and we will provide a suitable quotation.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Dispatch is within 24-48 hours from order confirmation. International shipping time depends on the destination and shipping method.'
    },
    {
      question: 'Do you provide export documentation?',
      answer: 'Yes, we provide complete export documentation including invoices, packing lists, and certificates as required.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods for international transactions. Details will be provided with your quotation.'
    },
    {
      question: 'Can I track my shipment?',
      answer: 'Yes, we provide tracking information and regular updates on your shipment status.'
    }
  ];

  return (
    <div className="bg-background">
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Globe className="size-20 mx-auto mb-6 text-accent" />
            <h1 className="text-4xl md:text-6xl mb-6">Export Services</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Reliable truck and bus spare parts export to UAE, Sri Lanka, Gulf, and beyond
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">Markets We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expanding our reach to serve commercial vehicle spare parts buyers worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {markets.map((market, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <Globe className="size-8 text-accent shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-2xl text-card-foreground mb-3">{market.country}</h3>
                    <div className="flex flex-wrap gap-2">
                      {market.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm"
                        >
                          {highlight}
                        </span>
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
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">Export Support Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, fast, and reliable process from inquiry to delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {exportProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border rounded-xl p-6 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="size-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl text-card-foreground mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </div>
                {index < exportProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-0.5 bg-accent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">Why Choose Us for Export?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Export excellence backed by trust, quality, and customer satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="size-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <highlight.icon className="size-6 text-accent" />
                </div>
                <h3 className="text-xl mb-2 text-card-foreground">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-foreground mb-4">Export FAQ</h2>
            <p className="text-lg text-muted-foreground">
              Common questions from our international buyers
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="size-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg text-card-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl mb-6">Ready to Export?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us now for instant quotations and start your export journey with confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors gap-2 text-lg"
            >
              <MessageCircle className="size-6" />
              WhatsApp for Export Inquiry
            </a>
            <a
              href="mailto:export@singlaautomobiles.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-primary hover:bg-white/90 transition-colors gap-2 text-lg"
            >
              <FileText className="size-6" />
              Email for Quotation
            </a>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <CheckCircle className="size-8 text-accent mx-auto mb-3" />
              <h3 className="text-xl mb-2">Competitive Pricing</h3>
              <p className="text-sm opacity-80">Best rates for bulk and export orders</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <CheckCircle className="size-8 text-accent mx-auto mb-3" />
              <h3 className="text-xl mb-2">Genuine Parts</h3>
              <p className="text-sm opacity-80">100% authentic spare parts guaranteed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <CheckCircle className="size-8 text-accent mx-auto mb-3" />
              <h3 className="text-xl mb-2">Expert Support</h3>
              <p className="text-sm opacity-80">Dedicated team for international clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
