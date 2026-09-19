import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap, Star, Shield, Cpu, Bot, Workflow, Database, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingData = [
  {
    id: "full-business-automation",
    category: "Full Business Automation",
    icon: Cpu,
    tagline: "End-to-end company operations automation",
    plans: [
      {
        title: "Auto-Lite",
        price: "PKR 300,000",
        period: "one-time setup",
        description: "Automate core recurring daily tasks, lead capture, and departmental handoffs.",
        features: [
          "Complete Operations & Tech Audit",
          "CRM & Lead Auto-Routing",
          "Email & WhatsApp Auto-Responders",
          "Zapier / Make Multi-Step Logic",
          "1 Month SLA Maintenance & Support",
        ],
        highlighted: false,
        icon: Zap,
      },
      {
        title: "Business Elite",
        price: "PKR 750,000",
        period: "one-time setup",
        description: "Full-scale autonomous infrastructure replacing manual data entry across departments.",
        features: [
          "Turn-key AI Business Infrastructure",
          "Custom ERP & Payment Reconciliation",
          "Autonomous Sales & Customer Support Bots",
          "Live Inventory & HR Payroll Sync",
          "Role-based Dashboard & Reports",
          "6 Months Dedicated SLA Support",
        ],
        highlighted: true,
        icon: Star,
      },
      {
        title: "Enterprise Autonomous",
        price: "Custom",
        period: "tailored architecture",
        description: "Custom AI-driven autonomous enterprise ecosystem built for high-throughput scaling.",
        features: [
          "Multi-Agent AI Orchestration (LangChain/CrewAI)",
          "Real-time Big Data Pipeline & Analytics",
          "Legacy Core System & Database Migration",
          "On-premise / Private Cloud Deployment",
          "24/7 Priority SLA & Dedicated Tech Team",
        ],
        highlighted: false,
        icon: Shield,
      },
    ],
  },
  {
    id: "custom-ai-agents",
    category: "AI Agents & Bots",
    icon: Bot,
    tagline: "Autonomous 24/7 intelligent agents",
    plans: [
      {
        title: "AI Starter Bot",
        price: "PKR 100,000",
        period: "setup + training",
        description: "Trained conversational chatbot for 24/7 FAQ handling and instant lead capture.",
        features: [
          "1 Active Channel (Web or WhatsApp)",
          "Knowledge-base FAQ Training",
          "Standard LLM (GPT-4o) Integration",
          "Lead Form Auto-Ingestion",
          "1 Month System Support",
        ],
        highlighted: false,
        icon: Zap,
      },
      {
        title: "AI Business Pro",
        price: "PKR 250,000",
        period: "setup + integrations",
        description: "Dynamic autonomous assistant taking live actions and database lookups.",
        features: [
          "Omnichannel (WhatsApp + Web + Social)",
          "Vector DB Knowledge Base (RAG Architecture)",
          "Live Database Querying & Order Tracking",
          "Custom API Action Triggers & Bookings",
          "3 Months Priority Support",
        ],
        highlighted: true,
        icon: Star,
      },
      {
        title: "AI Enterprise Logic",
        price: "Custom",
        period: "enterprise deployment",
        description: "Multi-agent autonomous fleet handling specialized internal company tasks.",
        features: [
          "Collaborative Multi-Agent Architecture",
          "Voice AI Phone Caller Integration",
          "Deep ERP / CRM Core Integration",
          "Private Open-Source Model Fine-Tuning",
          "Dedicated AI Engineer SLA",
        ],
        highlighted: false,
        icon: Shield,
      },
    ],
  },
  {
    id: "ai-workflow-automation",
    category: "AI Workflows",
    icon: Workflow,
    tagline: "Intelligent data pipelines & processes",
    plans: [
      {
        title: "Starter Pipeline",
        price: "PKR 100,000",
        period: "one-time setup",
        description: "Automate repetitive data transfers and document ingestion pipelines.",
        features: [
          "Document & PDF OCR AI Extraction",
          "Make / Zapier Advanced Workflows",
          "Custom Webhook & Event Handlers",
          "Standard AI Decision Trees",
          "1 Month Support",
        ],
        highlighted: false,
        icon: Zap,
      },
      {
        title: "Pro Workflow",
        price: "PKR 250,000",
        period: "one-time setup",
        description: "End-to-end automated business logic connecting all company tools.",
        features: [
          "Custom Python AI Microservices",
          "Multi-System Data Sync & Cleaning",
          "Automated Multi-Stage Approval Flows",
          "Real-time Failure Monitoring & Alerts",
          "3 Months Dedicated Support",
        ],
        highlighted: true,
        icon: Star,
      },
      {
        title: "Enterprise Workflow",
        price: "Custom",
        period: "tailored architecture",
        description: "Mission-critical high-throughput operational pipeline for enterprises.",
        features: [
          "Autonomous Distributed Logic Engine",
          "AWS / GCP Serverless Cloud Infra",
          "24/7 SLA & Zero-Downtime Guarantee",
          "High-Frequency Financial Sync",
          "Dedicated DevOps Engineer",
        ],
        highlighted: false,
        icon: Shield,
      },
    ],
  },
  {
    id: "crm-erp-automation",
    category: "CRM & ERP",
    icon: Database,
    tagline: "Automated customer & resource management",
    plans: [
      {
        title: "CRM Sync",
        price: "PKR 200,000",
        period: "one-time setup",
        description: "Bi-directional customer pipeline sync across HubSpot, Zoho, or Salesforce.",
        features: [
          "Lead Ingestion from All Channels",
          "Deal Stage Progression Automations",
          "Automated Task Creation for Reps",
          "Bi-directional Database Sync",
          "1 Month Support & Training",
        ],
        highlighted: false,
        icon: Zap,
      },
      {
        title: "ERP Automation",
        price: "PKR 450,000",
        period: "one-time setup",
        description: "Automate purchase orders, invoicing, payments, and stock movements.",
        features: [
          "Automated PDF Invoicing & WhatsApp Delivery",
          "Live Inventory Stock Deduction & Alerts",
          "Payment Gateway Webhooks & Reconciliation",
          "Role-based Executive Reporting",
          "6 Months Dedicated Support",
        ],
        highlighted: true,
        icon: Star,
      },
      {
        title: "Enterprise ERP Engine",
        price: "Custom",
        period: "tailored architecture",
        description: "Custom enterprise resource planning automation for multi-branch organizations.",
        features: [
          "Custom Microservices Architecture",
          "Legacy SAP, Oracle or Odoo Sync",
          "Financial Audit Logging & Encryption",
          "24/7 System Health Monitoring",
          "Dedicated Solutions Architect",
        ],
        highlighted: false,
        icon: Shield,
      },
    ],
  },
  {
    id: "lead-sales-automation",
    category: "Sales & Leads",
    icon: Zap,
    tagline: "Autonomous sales funnel & outreach",
    plans: [
      {
        title: "Lead Qualifier",
        price: "PKR 80,000",
        period: "one-time setup",
        description: "Instant response system that qualifies leads within 60 seconds of inquiry.",
        features: [
          "Multi-Form Lead Ingestion",
          "AI Lead Scoring & Prioritization",
          "Instant Slack & WhatsApp Alerts",
          "Round-Robin Lead Assignment",
          "1 Month Support",
        ],
        highlighted: false,
        icon: Zap,
      },
      {
        title: "Sales Engine Pro",
        price: "PKR 180,000",
        period: "one-time setup",
        description: "Hands-free booking and conversion pipeline for your sales reps.",
        features: [
          "Calendly / Cal.com Integration",
          "Instant AI WhatsApp Follow-up Drips",
          "Automated Proposal Follow-up Reminders",
          "No-Show Re-engagement System",
          "Sales Conversion Analytics Dashboard",
        ],
        highlighted: true,
        icon: Star,
      },
      {
        title: "Autonomous Sales Hub",
        price: "Custom",
        period: "tailored architecture",
        description: "Fully automated outbound & inbound revenue engine powered by AI.",
        features: [
          "Multi-Channel Cold Outreach Engine",
          "AI Personalized Cold Email & SMS",
          "Autonomous Voice Call Qualifier",
          "Real-time Pipeline CRM Sync",
          "Dedicated Growth Strategist",
        ],
        highlighted: false,
        icon: Shield,
      },
    ],
  },
  {
    id: "marketing-automation",
    category: "Marketing Automation",
    icon: Send,
    tagline: "Omnichannel nurture & drip campaigns",
    plans: [
      {
        title: "Mailer Lite",
        price: "PKR 60,000/mo",
        period: "monthly service",
        description: "Automated email sequences & Ikosender setup for consistent customer engagement.",
        features: [
          "Ikosender SaaS Infrastructure",
          "Welcome & Onboarding Drip Flows",
          "Customer Audience Segmentation",
          "Deliverability & SPF/DKIM Monitoring",
          "Monthly Performance Reports",
        ],
        highlighted: false,
        icon: Zap,
      },
      {
        title: "Omnichannel Pro",
        price: "PKR 150,000/mo",
        period: "monthly service",
        description: "Cross-platform behavioral automation across Email, WhatsApp, and SMS.",
        features: [
          "Email + WhatsApp + SMS Automated Funnels",
          "Behavioral Trigger Sequences (Cart Recovery)",
          "Dynamic Product Recommendation Logic",
          "A/B Testing on All Copy & Subject Lines",
          "Fortnightly Strategy & Review Call",
        ],
        highlighted: true,
        icon: Star,
      },
      {
        title: "Enterprise Brand Growth",
        price: "Custom",
        period: "dedicated retainer",
        description: "360-degree marketing automation and custom revenue orchestration.",
        features: [
          "All Digital Channels Orchestration",
          "Autonomous Ad Spend Sync (Meta / Google)",
          "Custom Predictive Analytics Dashboard",
          "Unlimited Automated Workflows",
          "Dedicated Automation Marketing Manager",
        ],
        highlighted: false,
        icon: Shield,
      },
    ],
  },
  {
    id: "api-systems-integration",
    category: "API Integration",
    icon: Cpu,
    tagline: "Seamless data flow across software tools",
    plans: [
      {
        title: "API Connector",
        price: "PKR 120,000",
        period: "one-time setup",
        description: "Connect 2 to 3 third-party SaaS tools with automated webhooks and sync.",
        features: [
          "Webhook Relay & Receiver Setup",
          "REST API Data Schema Mapping",
          "Error Handling & Retries",
          "Full API Documentation",
          "1 Month Warranty Support",
        ],
        highlighted: false,
        icon: Zap,
      },
      {
        title: "Hub Integration",
        price: "PKR 280,000",
        period: "one-time setup",
        description: "Centralized middleware syncing your entire corporate software stack in real-time.",
        features: [
          "Multi-API Unified Ecosystem",
          "Real-time Event-Driven Webhooks",
          "Data Cleaning & Transformation Engine",
          "Cloud Serverless Middleware (AWS)",
          "3 Months Priority Support",
        ],
        highlighted: true,
        icon: Star,
      },
      {
        title: "Enterprise Integration",
        price: "Custom",
        period: "enterprise middleware",
        description: "Custom enterprise middleware for legacy on-premise and modern cloud stacks.",
        features: [
          "High-Throughput RabbitMQ / Kafka Queues",
          "Custom GraphQL / REST Translators",
          "Zero-Downtime Failover Redundancy",
          "Bank-Grade Encryption Standards",
          "Full 24/7 SLA Coverage",
        ],
        highlighted: false,
        icon: Shield,
      },
    ],
  },
];

const PricingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("full-business-automation");

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
            Pricing Plans
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Transparent Pricing for <span className="text-gradient-orange">Scale & ROI</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            No hidden costs or bloated retainers. Select your desired automation focus and explore tailored investment packages built to generate immediate operational ROI.
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
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer ${
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
            <h4 className="text-lg font-bold">Have unique enterprise automation requirements?</h4>
            <p className="text-sm text-muted-foreground mt-1">
              We design custom autonomous architectures, SLA roadmaps, and multi-agent systems for organizations of any scale.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/contact">
              <Button variant="outline">Consult Architect</Button>
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
