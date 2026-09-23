import { useParams, Link } from "react-router-dom";
import { Check, ArrowRight, Star, Shield, Zap, Globe, Bot, Database, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const PricingCard = ({ title, price, description, features, highlighted = false, icon: Icon, serviceName }: any) => (
  <div className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full ${highlighted
    ? "bg-card border-primary shadow-xl scale-105 z-10"
    : "bg-card/50 border-border hover:border-primary/50 hover:shadow-lg"
    }`}>
    {highlighted && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
        Most Popular
      </div>
    )}
    <div className="mb-6">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${highlighted ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold text-primary">{price}</span>
      </div>
      <p className="text-muted-foreground mt-2 text-sm">{description}</p>
    </div>
    <ul className="space-y-3 mb-8 flex-1">
      {features.map((feature: string, index: number) => (
        <li key={index} className="flex items-start gap-3 text-sm">
          <Check className="w-5 h-5 text-primary shrink-0" />
          <span className="text-muted-foreground">{feature}</span>
        </li>
      ))}
    </ul>
    <Link to={`/quote?service=${encodeURIComponent(serviceName)}&plan=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}`} className="w-full">
      <Button variant={highlighted ? "default" : "outline"} className="w-full group">
        Get Started
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </Link>
  </div>
);

const SectionHeader = ({ title, subtitle, icon: Icon }: any) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
      <Icon className="w-4 h-4" />
      {title}
    </div>
    <h2 className="text-3xl md:text-5xl font-bold mb-6">{subtitle}</h2>
  </div>
);

const PricingPage = () => {
  const { serviceId } = useParams();

  const servicePricing = [
    {
      id: "full-physical-to-online",
      service: "Full Physical-to-Online Transformation",
      icon: Cpu,
      plans: [
        {
          title: "Local Starter Auto",
          price: "PKR 150,000",
          description: "Ideal for single retail shops, clinics, salons, or service businesses going online.",
          features: [
            "Complete Physical Store Operations Audit",
            "Mobile-First Digital Catalog & Ordering",
            "24/7 WhatsApp Auto-Responder",
            "Google Maps & Local SEO Setup",
            "Digital Payment QR & Bank Integration",
            "1 Month SLA Maintenance & Support",
          ],
          icon: Zap
        },
        {
          title: "Business Growth Auto",
          price: "PKR 350,000",
          description: "Full end-to-end automation for busy retail stores, restaurants, and wholesalers.",
          features: [
            "Full E-Commerce Store & Customer Portal",
            "24/7 Smart WhatsApp AI Sales & Order Bot",
            "Live POS & Physical Shelf Inventory Sync",
            "Automated PDF Invoicing & WhatsApp Receipts",
            "Courier API Dispatch Setup (TCS / Trax / Leopard)",
            "Automated Review Booster & 3 Months SLA",
          ],
          highlighted: true,
          icon: Star
        },
        {
          title: "Enterprise Omnichannel",
          price: "PKR 750,000+",
          description: "Autonomous cloud infrastructure for multi-branch stores, factories, and distributors.",
          features: [
            "Multi-Branch Centralized ERP & Stock Sync",
            "Multi-Agent AI Fleet (Voice + WhatsApp + Web)",
            "Automated Supplier Re-Ordering & PO Dispatch",
            "Custom Accounting & Finance Software Integration",
            "Live Executive Revenue & Analytics Dashboard",
            "Dedicated Automation Engineer & 24/7 Priority SLA",
          ],
          icon: Shield
        }
      ]
    },
    {
      id: "digital-storefront-booking",
      service: "Digital Storefront & Booking Portal",
      icon: Globe,
      plans: [
        {
          title: "Digital Catalog / Menu",
          price: "PKR 90,000",
          description: "Interactive online menu or catalog with instant WhatsApp order buttons.",
          features: [
            "Mobile-Optimized Digital Catalog",
            "Direct WhatsApp 'Order Now' Routing",
            "Fast Cloud Hosting & Custom Domain",
            "Basic SEO & Google Maps Tagging",
            "1 Month System Support",
          ],
          icon: Zap
        },
        {
          title: "Automated E-Store / Booking",
          price: "PKR 180,000",
          description: "Self-service store or appointment booking where customers order and pay.",
          features: [
            "Self-Checkout & Customer Accounts",
            "Credit Card & Digital Wallet Gateways",
            "Automated Appointment Slot Booking",
            "SMS & Email Order Confirmations",
            "Admin Order Management Panel",
            "3 Months Technical Support",
          ],
          highlighted: true,
          icon: Star
        },
        {
          title: "Custom Brand Portal",
          price: "Custom",
          description: "High-volume web portal with proprietary multi-location workflows.",
          features: [
            "Tailored Customer Portal & Loyalty Area",
            "Multi-Vendor / Multi-Location Logic",
            "High-Traffic Cloud Infrastructure",
            "ERP & Core Database Integration",
            "Full SLA Coverage",
          ],
          icon: Shield
        }
      ]
    },
    {
      id: "whatsapp-ai-sales-bot",
      service: "24/7 WhatsApp AI Sales & Order Bot",
      icon: Bot,
      plans: [
        {
          title: "WhatsApp Order Responder",
          price: "PKR 80,000",
          description: "Automated greeting bot that sends menus/catalogs and collects customer details.",
          features: [
            "Automated Welcome & Menu Sharing",
            "Customer Information Collection",
            "Order Confirmation Notifications",
            "Human Agent Handoff Trigger",
            "1 Month Support",
          ],
          icon: Zap
        },
        {
          title: "Intelligent AI Sales Agent",
          price: "PKR 180,000",
          description: "Trained GPT-4o agent conversing in English & Urdu, checking stock, and booking orders.",
          features: [
            "Natural Language Urdu & English Chat",
            "Live Product Stock & Price Inquiries",
            "Direct Order Booking & Customer CRM Sync",
            "Personalized Upsells & Recommendations",
            "3 Months Dedicated Support",
          ],
          highlighted: true,
          icon: Star
        },
        {
          title: "Multi-Agent Fleet",
          price: "Custom",
          description: "Autonomous multi-agent system for voice calls, chat inquiries, and outbound campaigns.",
          features: [
            "Voice AI Phone Call Support",
            "Multi-Number WhatsApp Orchestration",
            "Deep Internal CRM/POS Database Querying",
            "Automated Outbound Campaign Triggers",
            "Ongoing AI Model Tuning & SLA",
          ],
          icon: Shield
        }
      ]
    },
    {
      id: "pos-inventory-sync",
      service: "Live POS & Inventory Sync",
      icon: Database,
      plans: [
        {
          title: "Single Store Sync",
          price: "PKR 120,000",
          description: "Connect physical store barcode/POS system to online storefront.",
          features: [
            "Bi-Directional Stock Deduction",
            "Low Stock WhatsApp Warning Alerts",
            "CSV / Excel Automated Bulk Upload",
            "End-of-Day Sales Report Generation",
            "1 Month Support",
          ],
          icon: Zap
        },
        {
          title: "Multi-Channel Stock Hub",
          price: "PKR 250,000",
          description: "Sync stock across physical store, website, Daraz, and WhatsApp simultaneously.",
          features: [
            "Real-Time Multi-Channel Synchronization",
            "Automated Purchase Order Generator",
            "Warehouse & Store Shelf Tracking",
            "Barcode Scanner Hardware Integration",
            "Role-based Staff Access Control",
            "3 Months Support",
          ],
          highlighted: true,
          icon: Star
        },
        {
          title: "Enterprise ERP Engine",
          price: "Custom",
          description: "Custom supply chain and multi-warehouse synchronization for large operations.",
          features: [
            "Legacy SAP, Oracle, or Custom DB Sync",
            "Automated Factory Restock Pipelines",
            "Multi-Branch Financial Consolidation",
            "Real-Time Audit Trail & Security",
            "Dedicated DevOps & Database Architect",
          ],
          icon: Shield
        }
      ]
    }
  ];

  const filteredPricing = serviceId
    ? servicePricing.filter(s => s.id === serviceId)
    : servicePricing;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container mx-auto relative px-4 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            Automation Investment Plans
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {serviceId
              ? `Pricing for ${filteredPricing[0]?.service || "Our Services"}`
              : <>Transform Your Business <span className="text-gradient-orange">With Transparent Pricing</span></>
            }
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {serviceId
              ? `Transparent packages tailored for ${filteredPricing[0]?.service} excellence.`
              : "Turn-key investment packages to take your physical business fully online and automated with high ROI."
            }
          </p>
        </div>
      </section>

      {/* Pricing Sections */}
      {filteredPricing.length > 0 ? (
        filteredPricing.map((service, sIndex) => (
          <section key={service.id} className={`py-20 ${sIndex % 2 === 0 ? "bg-background" : "bg-secondary/20"}`}>
            <div className="container mx-auto px-4">
              <SectionHeader
                title={service.service}
                subtitle={serviceId ? "Choose your plan" : `${service.service} Plans`}
                icon={service.icon}
              />
              <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                {service.plans.map((plan, pIndex) => (
                  <PricingCard key={pIndex} {...plan} serviceName={service.service} />
                ))}
              </div>
            </div>
          </section>
        ))
      ) : (
        <section className="py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
          <Link to="/pricing">
            <Button>View All Pricing</Button>
          </Link>
        </section>
      )}

      <CTASection />
      <Footer />
    </div>
  );
};

export default PricingPage;
