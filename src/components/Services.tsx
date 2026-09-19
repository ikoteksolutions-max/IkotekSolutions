import { Workflow, Bot, Database, Zap, Send, Cpu, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Workflow,
      title: "AI Workflow Automation",
      description: "Custom AI pipelines that automate complex multi-step business logic, decision trees, and document processing.",
      color: "bg-primary/10 text-primary",
      href: "/services#ai-workflow-automation",
    },
    {
      icon: Bot,
      title: "Custom AI Agents & Bots",
      description: "Autonomous conversational AI agents for 24/7 customer support, internal knowledge RAG, and query handling.",
      color: "bg-orange-500/10 text-orange-500",
      href: "/services#custom-ai-agents",
    },
    {
      icon: Database,
      title: "CRM & ERP Automation",
      description: "Seamless synchronization of customer data, invoice processing, inventory tracking, and enterprise ERP tasks.",
      color: "bg-[hsl(200,70%,50%)]/10 text-[hsl(200,70%,50%)]",
      href: "/services#crm-erp-automation",
    },
    {
      icon: Zap,
      title: "Lead & Sales Automation",
      description: "Automated lead capture, instant qualification, AI follow-ups, and calendar booking routing for sales teams.",
      color: "bg-[hsl(142,70%,45%)]/10 text-[hsl(142,70%,45%)]",
      href: "/services#lead-sales-automation",
    },
    {
      icon: Send,
      title: "Marketing Automation",
      description: "High-volume automated email flows, WhatsApp campaign triggers, and multi-channel engagement.",
      color: "bg-[hsl(270,70%,55%)]/10 text-[hsl(270,70%,55%)]",
      href: "/services#marketing-automation",
    },
    {
      icon: Cpu,
      title: "API Systems Integration",
      description: "Unify your entire software ecosystem (SaaS, databases, webhooks) into frictionless automated operations.",
      color: "bg-[hsl(45,90%,50%)]/10 text-[hsl(45,90%,50%)]",
      href: "/services#api-systems-integration",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Automation Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            End-to-End Business Automation
          </h2>
          <p className="text-lg text-muted-foreground">
            We architect, deploy, and manage intelligent AI workflows that streamline your entire business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative p-8 bg-card border border-border rounded-2xl hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
