import { useParams, Navigate } from "react-router-dom";
import { Check, ArrowRight, Star, Shield, Zap, Globe, Search, Megaphone, Code, Palette, Smartphone, Cpu, Bot, Workflow, Database, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";

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

  if (!serviceId) {
    return <Navigate to="/" replace />;
  }

  const servicePricing = [
    {
      id: "ai-workflow-automation",
      service: "AI Workflow Automation",
      icon: Workflow,
      plans: [
        {
          title: "Starter Pipeline",
          price: "PKR 100,000",
          description: "Automate basic multi-step repetitive tasks.",
          features: ["Document & OCR Parsing", "Zapier / Make Integration", "Custom Webhook Triggers", "Standard AI Logic Trees", "1 Month Support"],
          icon: Zap
        },
        {
          title: "Pro Workflow",
          price: "PKR 250,000",
          description: "Full end-to-end automated business process.",
          features: ["Custom Python AI Agents", "Multi-system Data Routing", "Automated Approval Flows", "Real-time Error Monitoring", "3 Months Support"],
          highlighted: true,
          icon: Star
        },
        {
          title: "Enterprise Workflow",
          price: "Custom",
          description: "High-throughput mission critical automation.",
          features: ["Autonomous Logic Engine", "Custom Infrastructure (AWS/GCP)", "SLA & 24/7 Monitoring", "Legacy DB Synchronization", "Dedicated Dev Team"],
          icon: Shield
        }
      ]
    },
    {
      id: "custom-ai-agents",
      service: "Custom AI Agents & Bots",
      icon: Bot,
      plans: [
        {
          title: "AI Starter Bot",
          price: "PKR 100,000",
          description: "Custom FAQ chatbot with standard LLM setup.",
          features: ["1 Chat Channel (Web/WhatsApp)", "Basic FAQ Training", "Standard GPT-4o Integration", "Lead Gen Capture Form", "1 Month Support"],
          icon: Zap
        },
        {
          title: "AI Business Pro",
          price: "PKR 250,000",
          description: "Intelligent assistant with dynamic workflows.",
          features: ["2 Chat Channels (WhatsApp + Web)", "Custom Knowledge Base (RAG)", "Database Integrations", "Custom API Action Triggers", "3 Months Support"],
          highlighted: true,
          icon: Star
        },
        {
          title: "AI Enterprise Logic",
          price: "Custom",
          description: "Autonomous multi-agent system for complex logic.",
          features: ["Multi-Agent Orchestration", "Voice Assistant Integration", "Legacy System Synchronization", "Custom Model Fine-tuning", "Ongoing Maintenance"],
          icon: Shield
        }
      ]
    },
    {
      id: "crm-erp-automation",
      service: "CRM & ERP Automation",
      icon: Database,
      plans: [
        {
          title: "CRM Sync",
          price: "PKR 200,000",
          description: "HubSpot, Salesforce, or Zoho customer sync.",
          features: ["Lead Auto-Ingestion", "Customer Pipeline Stages", "Automated Task Creation", "Bi-directional Data Sync", "Basic Admin Panel"],
          icon: Zap
        },
        {
          title: "ERP Automation",
          price: "PKR 450,000",
          description: "Automated billing, invoicing, and inventory.",
          features: ["Automated Invoice Creation", "Inventory Stock Alerts", "Payment Gateway Webhooks", "Role-based Access", "6 Months Support"],
          highlighted: true,
          icon: Star
        },
        {
          title: "Enterprise ERP Engine",
          price: "Custom",
          description: "Custom ERP architecture and autonomous operations.",
          features: ["Microservices Architecture", "Legacy SAP/Oracle Sync", "High Availability", "End-to-end Encryption", "Dedicated SLA"],
          icon: Shield
        }
      ]
    },
    {
      id: "lead-sales-automation",
      service: "Lead & Sales Automation",
      icon: Zap,
      plans: [
        {
          title: "Lead Qualifier",
          price: "PKR 80,000",
          description: "Instant lead capture and scoring.",
          features: ["Form Lead Ingestion", "AI Lead Scoring", "Email Notification Alerts", "Basic CRM Routing", "1 Month Support"],
          icon: Zap
        },
        {
          title: "Sales Engine Pro",
          price: "PKR 180,000",
          description: "Full automated sales pipeline and booking.",
          features: ["Cal.com / Calendly Integration", "Instant AI WhatsApp Follow-up", "Deal Stage Automations", "Rep Lead Round-Robin", "Sales Analytics"],
          highlighted: true,
          icon: Star
        },
        {
          title: "Autonomous Sales Hub",
          price: "Custom",
          description: "End-to-end AI outreach and deal closing.",
          features: ["Multi-channel Outreach Engine", "AI Cold Email & SMS", "Custom Voice Agent Caller", "Live CRM Sync", "Dedicated Account Manager"],
          icon: Shield
        }
      ]
    },
    {
      id: "marketing-automation",
      service: "Marketing Automation",
      icon: Send,
      plans: [
        {
          title: "Mailer Lite",
          price: "PKR 60,000/mo",
          description: "Automated email sequences & Ikosender setup.",
          features: ["Ikosender Integration", "1 Platform Automation", "Drip Sequence Triggers", "User Segmenting", "Monthly Analytics"],
          icon: Zap
        },
        {
          title: "Omnichannel Pro",
          price: "PKR 150,000/mo",
          description: "Multi-channel automated marketing campaigns.",
          features: ["Email & WhatsApp Sequences", "Behavioral Trigger Flows", "Cart Abandonment Recovery", "Custom Lead Magnets", "Fortnightly Review"],
          highlighted: true,
          icon: Star
        },
        {
          title: "Enterprise Brand Growth",
          price: "Custom",
          description: "360-degree marketing automation suite.",
          features: ["All Messaging Channels", "Autonomous Ad Spend Sync", "Custom Analytics Dashboard", "Unlimited Flow Building", "Dedicated Strategist"],
          icon: Shield
        }
      ]
    },
    {
      id: "api-systems-integration",
      service: "API Systems Integration",
      icon: Cpu,
      plans: [
        {
          title: "API Connector",
          price: "PKR 120,000",
          description: "Connect 2 to 3 SaaS software tools.",
          features: ["Webhook Relay Setup", "REST API Data Mapping", "Error Handling Triggers", "Documentation", "1 Month Support"],
          icon: Zap
        },
        {
          title: "Hub Integration",
          price: "PKR 280,000",
          description: "Unify your central SaaS software stack.",
          features: ["Multi-API Ecosystem", "Real-time Event Webhooks", "Data Transformation Engine", "Cloud Middleware (AWS)", "3 Months Support"],
          highlighted: true,
          icon: Star
        },
        {
          title: "Enterprise Integration",
          price: "Custom",
          description: "Custom middleware for legacy and modern cloud software.",
          features: ["High-Throughput Queueing", "GraphQL / REST Adapters", "24/7 Failover System", "Security & Encryption", "Full SLA Coverage"],
          icon: Shield
        }
      ]
    }
  ];

  const filteredPricing = servicePricing.filter(s => s.id === serviceId);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container mx-auto relative px-4 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            Pricing Plans
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {serviceId
              ? `Pricing for ${filteredPricing[0]?.service || "Our Services"}`
              : <>The Right Price for <span className="text-gradient-orange">Scale</span></>
            }
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {serviceId
              ? `Transparent pricing packages tailored for ${filteredPricing[0]?.service} excellence.`
              : "Transparent pricing designed to grow with your business. No hidden fees, just pure value and high-end results."
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
                subtitle={serviceId ? "Choose your plan" : `Pricing for ${service.service}`}
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
