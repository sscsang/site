import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      detail: '+91 XXXXX XXXXX',
      action: 'Send Message',
      link: 'https://wa.me/',
      highlight: true
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+91 XXXXX XXXXX',
      action: 'Call Now',
      link: 'tel:+91XXXXXXXXXX',
      highlight: false
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@singlaautomobiles.com',
      action: 'Send Email',
      link: 'mailto:info@singlaautomobiles.com',
      highlight: false
    }
  ];

  const businessHours = [
    { days: 'Monday - Saturday', hours: '9:00 AM - 7:00 PM' },
    { days: 'Sunday', hours: '10:00 AM - 5:00 PM' },
    { days: 'WhatsApp Support', hours: '24/7 Available' }
  ];

  return (
    <div className="bg-background">
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Send your spare parts requirement and get a quick response
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`block p-6 rounded-xl border transition-all ${
                  method.highlight
                    ? 'bg-accent text-accent-foreground border-accent shadow-lg hover:shadow-xl'
                    : 'bg-card text-card-foreground border-border hover:shadow-lg'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`size-16 rounded-lg flex items-center justify-center mb-4 ${
                    method.highlight ? 'bg-white/20' : 'bg-accent/10'
                  }`}>
                    <method.icon className={`size-8 ${method.highlight ? 'text-white' : 'text-accent'}`} />
                  </div>
                  <h3 className="text-xl mb-2">{method.title}</h3>
                  <p className={`mb-4 ${method.highlight ? 'opacity-90' : 'text-muted-foreground'}`}>
                    {method.detail}
                  </p>
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                    method.highlight
                      ? 'bg-white/20 hover:bg-white/30'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  } transition-colors`}>
                    {method.action}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl text-foreground mb-6">Send Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-foreground">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-foreground">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="requirement" className="block mb-2 text-foreground">
                    Product Requirement *
                  </label>
                  <input
                    type="text"
                    id="requirement"
                    name="requirement"
                    required
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="e.g., Ashok Leyland brake parts"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Additional details about your requirement"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Send className="size-5" />
                  Submit Inquiry
                </button>
              </form>

              <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/20">
                <p className="text-sm text-muted-foreground text-center">
                  Or send your requirement directly via WhatsApp for instant response
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl text-foreground mb-6">Business Information</h2>

              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="size-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-card-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Singla Automobiles<br />
                      Punjab, India<br />
                      (Exact address available on request)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <Clock className="size-6 text-accent shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl text-card-foreground mb-4">Business Hours</h3>
                    <div className="space-y-3">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                          <span className="text-muted-foreground">{schedule.days}</span>
                          <span className="text-foreground">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="text-xl text-foreground mb-4">Google Maps</h3>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center text-muted-foreground">
                  Map Placeholder
                  <br />
                  (Embed Google Maps here)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="size-16 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl md:text-5xl mb-6">Prefer WhatsApp?</h2>
          <p className="text-xl mb-8 opacity-90">
            Most of our customers prefer WhatsApp for quick quotations and instant responses. Connect with us now!
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors gap-3 text-lg"
          >
            <MessageCircle className="size-7" />
            Open WhatsApp Chat
          </a>
          <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="opacity-90">Instant Response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="opacity-90">Quick Quotations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="opacity-90">Easy Order Placement</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
