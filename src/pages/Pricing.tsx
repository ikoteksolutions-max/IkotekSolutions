import { useParams, Navigate } from "react-router-dom";
import { Check, ArrowRight, Star, Shield, Zap, Globe, Search, Megaphone, Code, Palette, Smartphone, Cpu, Bot } from "lucide-react";
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
      id: "web-development",
      service: "Web Development",
      icon: Globe,
      plans: [
        {
          title: "Basic",
          price: "PKR 50,000",
          description: "Perfect for startups and simple landing pages.",
          features: ["5 Dynamic Pages", "Mobile Responsive", "Contact Form", "Basic SEO", "1 Month Support", "Free Hosting (1yr)"],
          icon: Zap
        },
        {
          title: "Standard",
          price: "PKR 120,000",
          description: "Ideal for growing businesses needing more features.",
          features: ["15 Dynamic Pages", "E-commerce Ready", "CMS Integration", "Advanced SEO", "3 Months Support", "Custom Animations"],
          highlighted: true,
          icon: Star
        },
        {
          title: "Premium",
          price: "PKR 250,000",
          description: "Enterprise-grade solutions for large scale projects.",
          features: ["Unlimited Pages", "Custom Web Apps", "API Integrations", "Full Security Audit", "12 Months Support", "VIP Priority Hosting"],
          icon: Shield
        }
      ]
    },
    {
      id: "seo-optimization",
      service: "SEO Optimization",
      icon: Search,
      plans: [
        {
          title: "Basic Search",
          price: "PKR 25,000/mo",
          description: "Initial visibility boost for small businesses.",
          features: ["Keyword Research", "On-page Analysis", "Basic Backlinks", "Monthly Report", "Local SEO setup"],
          icon: Zap
        },
        {
          title: "Growth SEO",
          price: "PKR 60,000/mo",
          description: "Strategic growth for competitive markets.",
          features: ["Advanced Competition Analysis", "Content Strategy", "High DA Backlinks", "Technical SEO Fixes", "24/7 Monitoring Tool"],
          highlighted: true,
          icon: Star
        },
        {
          title: "Enterprise SEO",
          price: "PKR 150,000/mo",
          description: "Complete market domination strategy.",
          features: ["Global Rank Tracking", "PR Backlinks", "Internal Linking Audit", "Custom Content Marketing", "Dedicated Manager"],
          icon: Shield
        }
      ]
    },
    {
      id: "digital-marketing",
      service: "Digital Marketing",
      icon: Megaphone,
      plans: [
        {
          title: "Starter Pack",
          price: "PKR 35,000/mo",
          description: "Small scale social media presence.",
          features: ["1 Platform (FB/IG)", "12 Regular Posts", "Basic Ad Management", "Basic Graphics", "Monthly Insights"],
          icon: Zap
        },
        {
          title: "Business Pro",
          price: "PKR 85,000/mo",
          description: "Multi-channel marketing with high ROI focus.",
          features: ["3 Platforms", "25 Premium Posts", "Professional Ad Setup", "Video Content (3 Reels)", "Fortnightly Meetings"],
          highlighted: true,
          icon: Star
        },
        {
          title: "Ultimate Brand",
          price: "PKR 200,000/mo",
          description: "360-degree digital marketing automation.",
          features: ["All Platforms", "Daily Posting & Stories", "Unlimited Ad Budget Management", "Custom Brand Shoot", "Email & SMS Marketing"],
          icon: Shield
        }
      ]
    },
    {
      id: "custom-software",
      service: "Custom Software",
      icon: Code,
      plans: [
        {
          title: "MVP Starter",
          price: "PKR 200,000",
          description: "Turn your idea into a working product.",
          features: ["Core Feature Development", "User Authentication", "Database Setup", "Basic Dashboard", "Deployment Support"],
          icon: Zap
        },
        {
          title: "Business Solution",
          price: "PKR 500,000",
          description: "Full-featured software for your operations.",
          features: ["Advanced Workflow", "Admin Panel", "Role-based Access", "Third-party Integrations", "6 Months Support"],
          highlighted: true,
          icon: Star
        },
        {
          title: "Enterprise Software",
          price: "Custom",
          description: "Scalable enterprise architecture.",
          features: ["Microservices Architecture", "Real-time Monitoring", "High Availability", "End-to-end Encryption", "Dedicated Dev Team"],
          icon: Shield
        }
      ]
    },
    {
      id: "ui-ux-design",
      service: "UI/UX Design",
      icon: Palette,
      plans: [
        {
          title: "Basic Design",
          price: "PKR 40,000",
          description: "Modern look for your existing site.",
          features: ["5 High-fidelity Screens", "Style Guide", "Responsive Design", "Interactive Prototype", "2 Revision Rounds"],
          icon: Zap
        },
        {
          title: "Product Design",
          price: "PKR 100,000",
          description: "Complete product design from scratch.",
          features: ["15+ UX Screens", "User Research", "Wireframing", "Full Design System", "Developer Handoff"],
          highlighted: true,
          icon: Star
        },
        {
          title: "Design System",
          price: "PKR 250,000",
          description: "Enterprise design standards.",
          features: ["Unlimited Screens", "Component Library", "UX Audit", "A/B Testing Support", "Monthly Design Retainer"],
          icon: Shield
        }
      ]
    },
    {
      id: "mobile-development",
      service: "Mobile Development",
      icon: Smartphone,
      plans: [
        {
          title: "Cross-Platform",
          price: "PKR 300,000",
          description: "One code for both iOS and Android.",
          features: ["Flutter/RN Development", "Core Features", "App Store Submission", "Push Notifications", "Firebase Integration"],
          icon: Zap
        },
        {
          title: "Pro App",
          price: "PKR 650,000",
          description: "High-performance feature-rich app.",
          features: ["Offline Capabilities", "Social Media Auth", "Payment Gateway", "Chat System", "Analytics Dashboard"],
          highlighted: true,
          icon: Star
        },
        {
          title: "Native Enterprise",
          price: "Custom",
          description: "Native iOS & Android excellence.",
          features: ["Swift & Kotlin Native", "Maximum Performance", "Complex Animations", "Hardware Integration", "Lifetime Maintenance"],
          icon: Shield
        }
      ]
    },
    {
      id: "business-automation",
      service: "Full Business Automation",
      icon: Cpu,
      plans: [
        {
          title: "Auto-Lite",
          price: "PKR 300,000",
          description: "Automate basic recurring tasks.",
          features: ["CRM Entry Automation", "Email Auto-responders", "Lead Capture Automation", "Basic Zapier Setup", "Internal Process Audit"],
          icon: Zap
        },
        {
          title: "Business Elite",
          price: "PKR 750,000",
          description: "Full workflow automation for your team.",
          features: ["Custom ERP Development", "Payment Gateway Automation", "Inventory Management", "HR System Automation", "Multi-app Sync"],
          highlighted: true,
          icon: Star
        },
        {
          title: "Enterprise Scale",
          price: "Custom",
          description: "Custom AI & ML driven business logic automation.",
          features: ["Custom AI Chatbots", "Big Data Analytics", "Legacy System Migration", "Autonomous Workflows", "24/7 Priority Support"],
          icon: Shield
        }
      ]
    },
    {
      id: "ai-agent-development",
      service: "AI Agent Development",
      icon: Bot,
      plans: [
        {
          title: "AI Starter Bot",
          price: "PKR 100,000",
          description: "Custom FAQ chatbot with standard LLM setup.",
          features: ["1 Chat Channel (Web/WhatsApp)", "Basic FAQ Training", "Standard GPT-4o Integration", "Lead Gen Capture Form", "1 Month Support", "Basic Dashboard"],
          icon: Zap
        },
        {
          title: "AI Business Pro",
          price: "PKR 250,000",
          description: "Intelligent assistant with dynamic workflows and integrations.",
          features: ["2 Chat Channels (WhatsApp + Web)", "Custom Knowledge Base (RAG)", "Database Integrations", "Custom API Action Triggers", "3 Months Support & Analytics", "Fine-tuned Prompts"],
          highlighted: true,
          icon: Star
        },
        {
          title: "AI Enterprise Logic",
          price: "Custom",
          description: "Autonomous multi-agent system matching complex business logic.",
          features: ["Multi-Agent Orchestration", "Voice Assistant Integration", "Legacy System Synchronization", "Custom Model Fine-tuning", "Ongoing SLA Maintenance", "24/7 Security Audit"],
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
