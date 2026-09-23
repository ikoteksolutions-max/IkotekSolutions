import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap, Star, Shield, Cpu, Bot, Globe, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingData = [
  {
    id: "full-transformation",
    category: "Full Business Transformation",
    icon: Cpu,
    tagline: "Turn-key physical-to-online automation packages",
    plans: [
      {
        title: "Local Starter Auto",
        price: "PKR 150,000",
        period: "one-time investment",
        description: "Perfect for single local shops, clinics, or consultants transitioning their business online.",
        features: [
          "Mobile-First Digital Catalog / Booking Portal",
          "24/7 WhatsApp Auto-Responder & Order Ingestion",
          "Google Business Profile & Local Maps Optimization",
          "Digital Payment QR & Bank Transfer Setup",
          "Basic Admin Order Dashboard",
          "Staff Training & 1 Month Support",
        ],
        highlighted: false,
        icon: Zap,
      },
      {
        title: "Business Growth Auto",
        price: "PKR 350,000",
        period: "one-time investment",
        description: "Complete end-to-end automation for busy retail stores, restaurants, and local brands.",
        features: [
          "Full E-Commerce Storefront & Customer Portal",
          "Smart 24/7 WhatsApp AI Sales & Order Bot",
          "Live POS & Physical Shelf Inventory Sync",
          "Automated PDF Invoicing & WhatsApp Receipts",
          "Courier API Dispatch Setup (TCS / Trax / Leopard)",
          "Automated Google Review & Customer Retention Flows",
          "Dedicated Account Manager & 3 Months SLA",
        ],
        highlighted: true,
        icon: Star,
      },
      {
        title: "Enterprise Omnichannel",
        price: "PKR 750,000+",
        period: "custom architecture",
        description: "Autonomous digital infrastructure for multi-branch stores, factories, and distributors.",
        features: [
          "Multi-Branch Centralized ERP & Stock Sync",
          "Multi-Agent AI Fleet (Voice + WhatsApp + Web)",
          "Automated Supplier Re-Ordering & PO Dispatch",
          "Custom Accounting & Finance Software Integration",
          "Live Executive Revenue & Analytics Dashboard",
          "Dedicated Automation Engineer & 24/7 Priority SLA",
        ],
        highlighted: false,
        icon: Shield,
      },
    ],
  },
  {
    id: "storefront-booking",
    category: "Digital Storefront & Booking",
    icon: Globe,
    tagline: "Take your physical products and appointments online",
    plans: [
      {
        title: "Catalog / Menu Portal",
        price: "PKR 90,000",
        period: "one-time setup",
        description: "Digital showcase for your physical products or services with instant WhatsApp order buttons.",
        features: [
          "Mobile-Optimized Digital Catalog",
          "Direct WhatsApp 'Order Now' Routing",
          "Fast Cloud Hosting & Custom Domain",
          "Basic SEO & Google Maps Tagging",
          "1 Month System Support",
        ],
        highlighted: false,
        icon: Zap,
      },
      {
        title: "Automated E-Shop / Booking",
        price: "PKR 180,000",
        period: "one-time setup",
        description: "Full self-service digital store or appointment system where customers order and pay online.",
        features: [
          "Self-Checkout & Customer Accounts",
          "Credit Card & Digital Wallet Gateways",
          "Automated Appointment Slot Booking",
          "SMS & Email Order Confirmations",
          "Admin Order Management Panel",
          "3 Months Technical Support",
        ],
        highlighted: true,
        icon: Star,
      },
      {
        title: "Custom Brand Portal",
        price: "Custom",
        period: "tailored architecture",
        description: "High-volume custom digital web application with proprietary workflows.",
        features: [
          "Tailored Customer Portal & Loyalty Area",
          "Multi-Vendor / Multi-Location Logic",
          "High-Traffic Cloud Infrastructure",
          "ERP & Core Database Integration",
          "Full SLA Coverage",
        ],
        highlighted: false,
        icon: Shield,
      },
    ],
  },
  {
    id: "whatsapp-ai-bots",
    category: "WhatsApp AI Agents",
    icon: Bot,
    tagline: "24/7 conversational sales & customer support",
    plans: [
      {
        title: "WhatsApp Order Responder",
        price: "PKR 80,000",
        period: "setup + training",
        description: "Automated WhatsApp bot that greets customers, shares current menu/catalog, and collects orders.",
        features: [
          "Automated Welcome & Menu Sharing",
          "Customer Information Collection",
          "Order Confirmation Notifications",
          "Human Agent Handoff Trigger",
          "1 Month Support",
        ],
        highlighted: false,
        icon: Zap,
      },
      {
        title: "Intelligent AI Sales Agent",
        price: "PKR 180,000",
        period: "setup + integration",
        description: "Trained GPT-4o AI agent that converses in English & Urdu, checks stock, and closes orders.",
        features: [
          "Natural Language Urdu & English Chat",
          "Live Product Stock & Price Inquiries",
          "Direct Order Booking & Customer CRM Sync",
          "Personalized Upsells & Recommendations",
          "3 Months Dedicated Support",
        ],
        highlighted: true,
        icon: Star,
      },
      {
        title: "Multi-Agent Fleet",
        price: "Custom",
        period: "enterprise deployment",
        description: "Autonomous conversational fleet handling sales, customer disputes, and automated follow-ups.",
        features: [
          "Voice AI Phone Call Support",
          "Multi-Number WhatsApp Orchestration",
          "Deep Internal CRM/POS Database Querying",
          "Automated Outbound Campaign Triggers",
          "Ongoing AI Model Tuning & SLA",
        ],
        highlighted: false,
        icon: Shield,
      },
    ],
  },
  {
    id: "pos-inventory-sync",
    category: "POS & Inventory Sync",
    icon: Database,
    tagline: "Keep physical shop shelves and online stock 100% aligned",
    plans: [
      {
        title: "Single Store Sync",
        price: "PKR 120,000",
        period: "one-time setup",
        description: "Connect your physical shop barcode/POS system to your online store.",
        features: [
          "Bi-Directional Stock Deduction",
          "Low Stock WhatsApp Warning Alerts",
          "CSV / Excel Automated Bulk Upload",
          "End-of-Day Sales Report Generation",
          "1 Month Support",
        ],
        highlighted: false,
        icon: Zap,
      },
      {
        title: "Multi-Channel Stock Hub",
        price: "PKR 250,000",
        period: "one-time setup",
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
        icon: Star,
      },
      {
        title: "Enterprise ERP Engine",
        price: "Custom",
        period: "tailored architecture",
        description: "Custom supply chain and multi-warehouse synchronization for large operations.",
        features: [
          "Legacy SAP, Oracle, or Custom DB Sync",
          "Automated Factory Restock Pipelines",
          "Multi-Branch Financial Consolidation",
          "Real-Time Audit Trail & Security",
          "Dedicated DevOps & Database Architect",
        ],
        highlighted: false,
        icon: Shield,
      },
    ],
  },
];

const PricingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("full-transformation");

  const currentService = pricingData.find((s) => s.id === selectedCategory) || pricingData[0];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-primary" />
            Automation Investment Plans
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Transparent Pricing for <span className="text-gradient-orange">Physical to Online</span> Transformation
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Invest in systems that eliminate manual overhead, prevent inventory leaks, and generate automated revenue 24 hours a day.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {pricingData.map((s) => {
            const Icon = s.icon;
            const isActive = selectedCategory === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedCategory(s.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                    : "bg-background/80 hover:bg-accent text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{s.category}</span>
              </button>
            );
          })}
        </div>

        {/* Tagline for active category */}
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            {currentService.category} Plans
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {currentService.tagline}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-12">
          {currentService.plans.map((plan, index) => {
            const PlanIcon = plan.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-card border-primary shadow-2xl shadow-primary/10 ring-2 ring-primary scale-105 z-10"
                    : "bg-card/70 border-border hover:border-primary/40 hover:shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Top card info */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        plan.highlighted ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <PlanIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                      {plan.period}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold mb-2">{plan.title}</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-extrabold text-primary">{plan.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="h-px w-full bg-border mb-6" />

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm">
                        <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-muted-foreground leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-border/50">
                  <Link
                    to={`/quote?service=${encodeURIComponent(currentService.category)}&plan=${encodeURIComponent(
                      plan.title
                    )}&price=${encodeURIComponent(plan.price)}`}
                    className="w-full block"
                  >
                    <Button
                      variant={plan.highlighted ? "default" : "outline"}
                      className="w-full gap-2 font-semibold group"
                    >
                      Choose {plan.title}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-card border border-border p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg font-bold">Have a multi-branch or specialized physical operation?</h4>
            <p className="text-sm text-muted-foreground mt-1">
              We conduct on-site workflow audits and design custom automation blueprints tailored to your physical store footprint.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/contact">
              <Button variant="outline">Book Free Audit</Button>
            </Link>
            <Link to="/quote">
              <Button>Custom Quote</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
