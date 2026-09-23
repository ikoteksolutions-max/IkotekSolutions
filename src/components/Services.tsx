import { Globe, Bot, Database, Zap, Send, Cpu, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "Full Physical-to-Online Transformation",
      description: "Turn-key overhaul that transitions your entire offline shop, clinic, or office into a high-revenue automated online operation.",
      color: "bg-primary/10 text-primary",
      price: "Starting from PKR 300,000",
      href: "/services#full-physical-to-online",
    },
    {
      icon: Globe,
      title: "Digital Storefront & Booking Portal",
      description: "Mobile-first online store or appointment booking portal that enables customers to browse, order, and pay without visiting in person.",
      color: "bg-[hsl(200,70%,50%)]/10 text-[hsl(200,70%,50%)]",
      price: "Starting from PKR 120,000",
      href: "/services#digital-storefront-booking",
    },
    {
      icon: Bot,
      title: "24/7 WhatsApp AI Sales & Order Bot",
      description: "Smart WhatsApp AI agent that interacts with customers, shares catalogs, takes orders, and answers inquiries 24/7 on autopilot.",
      color: "bg-orange-500/10 text-orange-500",
      price: "Starting from PKR 100,000",
      href: "/services#whatsapp-ai-sales-bot",
    },
    {
      icon: Database,
      title: "Live POS & Inventory Sync",
      description: "Real-time synchronization between your physical shop shelves and online channels, preventing stockouts and manual counting.",
      color: "bg-[hsl(200,70%,50%)]/10 text-[hsl(200,70%,50%)]",
      price: "Starting from PKR 150,000",
      href: "/services#pos-inventory-sync",
    },
    {
      icon: Zap,
      title: "Automated Invoicing & Digital Payments",
      description: "Instant card and bank payments, automated PDF invoice generation, and real-time courier dispatch routing.",
      color: "bg-[hsl(142,70%,45%)]/10 text-[hsl(142,70%,45%)]",
      price: "Starting from PKR 90,000",
      href: "/services#automated-invoicing-payments",
    },
    {
      icon: Send,
      title: "Customer Retention & Review Automation",
      description: "Automated WhatsApp & SMS follow-ups, Google review collection, loyalty rewards, and repeat order reminders.",
      color: "bg-[hsl(270,70%,55%)]/10 text-[hsl(270,70%,55%)]",
      price: "Starting from PKR 70,000",
      href: "/services#customer-retention-reviews",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Physical to Online Transformation
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Turn Your Physical Business Into An Automated Online Powerhouse
          </h2>
          <p className="text-lg text-muted-foreground">
            We specialize exclusively in taking local and offline businesses completely online — automating sales, inventory, WhatsApp orders, and customer management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative p-8 bg-card border border-border rounded-2xl hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Price Tag & Arrow */}
              <div className="pt-4 border-t border-border mt-auto flex items-center justify-between">
                <span className="text-xs font-semibold text-primary px-3 py-1.5 bg-primary/10 rounded-full">
                  {service.price}
                </span>
                <span className="text-xs text-muted-foreground group-hover:text-primary font-medium flex items-center gap-1">
                  Details <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
