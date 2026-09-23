import { Globe, Bot, Database, Zap, Send, Cpu, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      icon: Cpu,
      title: "Full Physical-to-Online Transformation",
      description: "Turn-key overhaul that transitions your entire offline shop, clinic, or office into a high-revenue automated online operation.",
      color: "bg-primary/10 text-primary",
      features: [
        "Operational & Physical Shop Audit",
        "Turn-key Digital Storefront Setup",
        "Automated Order Routing & POS Sync",
        "24/7 WhatsApp AI Customer Support",
        "Automated Invoicing & Payment Gateways",
        "Dedicated Post-Launch Staff Training"
      ],
      price: "Starting from PKR 300,000"
    },
    {
      icon: Globe,
      title: "Digital Storefront & Booking Portal",
      description: "Mobile-first online store or appointment booking portal that enables customers to browse, order, and pay without visiting in person.",
      color: "bg-[hsl(200,70%,50%)]/10 text-[hsl(200,70%,50%)]",
      features: [
        "Mobile-First Customer Ordering Portal",
        "Automated Appointment & Service Booking",
        "Interactive Digital Product Catalogs",
        "Live Customer Order Tracking Portal",
        "Google Maps & Local SEO Setup",
        "Responsive Tablet & Mobile Checkout"
      ],
      price: "Starting from PKR 120,000"
    },
    {
      icon: Bot,
      title: "24/7 WhatsApp AI Sales & Order Bot",
      description: "Smart WhatsApp AI agent that interacts with customers, shares catalogs, takes orders, and answers inquiries 24/7 on autopilot.",
      color: "bg-orange-500/10 text-orange-500",
      features: [
        "Instant Conversational Order Taking",
        "Catalog & Price Lookups via WhatsApp",
        "Multi-language (English & Urdu) Support",
        "Seamless Human Hand-off Escalation",
        "Instant Sales CRM Lead Capture",
        "Automated Order Status Notifications"
      ],
      price: "Starting from PKR 100,000"
    },
    {
      icon: Database,
      title: "Live POS & Inventory Sync",
      description: "Real-time synchronization between your physical shop shelves and online channels, preventing stockouts and manual counting.",
      color: "bg-[hsl(200,70%,50%)]/10 text-[hsl(200,70%,50%)]",
      features: [
        "Physical Shelf & Online Stock Sync",
        "Real-Time Low Stock WhatsApp Alerts",
        "Multi-Location & Branch Synchronization",
        "Existing POS & Barcode Scanner Connect",
        "Automated Supplier Restock Triggers",
        "Centralized Inventory Analytics Hub"
      ],
      price: "Starting from PKR 150,000"
    },
    {
      icon: Zap,
      title: "Automated Invoicing & Digital Payments",
      description: "Instant card and bank payments, automated PDF invoice generation, and real-time courier dispatch routing.",
      color: "bg-[hsl(142,70%,45%)]/10 text-[hsl(142,70%,45%)]",
      features: [
        "Credit Card, JazzCash & Bank Integration",
        "Instant Automated PDF Invoicing",
        "WhatsApp Receipt & Tracking Dispatch",
        "Courier API Integration (TCS, Trax, Leopard)",
        "Daily Financial & Cashflow Audit",
        "Zero-Error Automated Bookkeeping"
      ],
      price: "Starting from PKR 90,000"
    },
    {
      icon: Send,
      title: "Customer Retention & Review Automation",
      description: "Automated WhatsApp & SMS follow-ups, Google review collection, loyalty rewards, and repeat order reminders.",
      color: "bg-[hsl(270,70%,55%)]/10 text-[hsl(270,70%,55%)]",
      features: [
        "Automated 5-Star Google Review Requests",
        "Post-Purchase Follow-up & Feedback",
        "Predictive Re-order WhatsApp Reminders",
        "Automated Birthday & Seasonal Discounts",
        "VIP Customer Loyalty Retention",
        "Inactive Customer Win-Back Campaigns"
      ],
      price: "Starting from PKR 70,000"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              Transformation Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Taking Local & Physical Businesses <span className="text-gradient-orange">100% Online & Automated</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We turn traditional offline businesses into scalable, automated online powerhouses. From 24/7 WhatsApp AI ordering to live POS inventory sync and automated billing, your business runs effortlessly on autopilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" className="group">
                  Automate Your Business
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="h-12 px-6">
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                className="group relative p-8 bg-card border border-border rounded-2xl hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col scroll-mt-24"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 border-t border-border pt-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="pt-4 border-t border-border mt-auto">
                  <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                  <p className="text-lg font-bold text-primary mb-4">{service.price}</p>
                  <Link to={`/pricing/${service.title.toLowerCase().replace(/[\s/]+/g, '-')}`}>
                    <Button variant="outline" size="sm" className="w-full group/btn">
                      View Detailed Plans
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechStack />
      <Process />
      <FAQSection />
      <CTASection />

      <Footer />
    </div>
  );
};

export default ServicesPage;
