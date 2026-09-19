import { Workflow, Bot, Database, Zap, Send, Cpu, Check, ArrowRight } from "lucide-react";
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
      title: "Full Business Automation",
      description: "Turn-key end-to-end automation of your company's entire operations, sales, support, and AI infrastructure.",
      color: "bg-primary/10 text-primary",
      features: [
        "Complete Operational Audit",
        "Turn-key AI Infrastructure",
        "Autonomous Sales & Support",
        "CRM & ERP Data Synchronization",
        "Custom Management Dashboard",
        "Dedicated SLA & 24/7 Monitoring"
      ],
      price: "Starting from PKR 300,000"
    },
    {
      icon: Workflow,
      title: "AI Workflow Automation",
      description: "Custom AI pipelines that automate complex multi-step business logic, decision trees, and document processing.",
      color: "bg-[hsl(200,70%,50%)]/10 text-[hsl(200,70%,50%)]",
      features: [
        "Autonomous Logic Trees",
        "Document & OCR Parsing",
        "Multi-step Zapier/Make Pipelines",
        "Approval Flow Automations",
        "Custom Python AI Scripts",
        "Real-time Error Monitoring"
      ],
      price: "Starting from PKR 100,000"
    },
    {
      icon: Bot,
      title: "Custom AI Agents & Bots",
      description: "Autonomous conversational AI agents for 24/7 customer support, internal knowledge RAG, and query handling.",
      color: "bg-orange-500/10 text-orange-500",
      features: [
        "LLM & GPT-4o Integrations",
        "WhatsApp & Messenger Automation",
        "Knowledge Base RAG Setup",
        "Customer Support AI Agents",
        "Automated Action Triggers",
        "Prompt Fine-tuning"
      ],
      price: "Starting from PKR 100,000"
    },
    {
      icon: Database,
      title: "CRM & ERP Automation",
      description: "Seamless synchronization of customer data, invoice processing, inventory tracking, and enterprise ERP tasks.",
      color: "bg-[hsl(200,70%,50%)]/10 text-[hsl(200,70%,50%)]",
      features: [
        "HubSpot / Salesforce Sync",
        "Automated Invoice Generation",
        "Inventory Stock Triggers",
        "Role-based Data Routing",
        "Legacy Database Pipelines",
        "Custom ERP Connectors"
      ],
      price: "Starting from PKR 200,000"
    },
    {
      icon: Zap,
      title: "Lead & Sales Automation",
      description: "Automated lead capture, instant qualification, AI follow-ups, and calendar booking routing for sales teams.",
      color: "bg-[hsl(142,70%,45%)]/10 text-[hsl(142,70%,45%)]",
      features: [
        "Instant Lead Qualification",
        "Automated Meeting Booking",
        "Multi-channel AI Follow-ups",
        "CRM Deal State Updates",
        "Sales Rep Lead Distribution",
        "Conversion Analytics"
      ],
      price: "Starting from PKR 80,000"
    },
    {
      icon: Send,
      title: "Marketing Automation",
      description: "High-volume automated email flows, WhatsApp campaign triggers, and multi-channel engagement.",
      color: "bg-[hsl(270,70%,55%)]/10 text-[hsl(270,70%,55%)]",
      features: [
        "Ikosender Email Pipelines",
        "WhatsApp Broadcast Flows",
        "Drip Campaign Triggers",
        "Behavioral User Segmenting",
        "Omnichannel Messaging",
        "Automated ROI Tracking"
      ],
      price: "Starting from PKR 60,000"
    },
    {
      icon: Cpu,
      title: "API Systems Integration",
      description: "Unify your entire software ecosystem (SaaS, databases, webhooks) into frictionless automated operations.",
      color: "bg-[hsl(45,90%,50%)]/10 text-[hsl(45,90%,50%)]",
      features: [
        "Custom REST/GraphQL APIs",
        "Webhook Relay Systems",
        "SaaS Tool Bridging",
        "Cloud Data Sync (AWS/GCP)",
        "Automated Backup Flows",
        "24/7 Security Auditing"
      ],
      price: "Starting from PKR 120,000"
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
              Automation Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Intelligent Business <span className="text-gradient-orange">Automation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From custom AI agents to enterprise CRM/ERP integrations, we engineer automated workflows that eliminate friction and multiply operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" className="group">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/work">
                <Button variant="outline" className="h-12 px-6">
                  View Our Work
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
