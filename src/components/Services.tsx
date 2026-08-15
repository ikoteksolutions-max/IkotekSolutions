import { Globe, Search, Megaphone, Code, Palette, Smartphone, ArrowUpRight, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites built with cutting-edge technologies for optimal performance and user experience.",
      color: "bg-primary/10 text-primary",
      href: "/services#web-development",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Data-driven SEO strategies that boost your visibility and drive organic traffic to your business.",
      color: "bg-[hsl(142,70%,45%)]/10 text-[hsl(142,70%,45%)]",
      href: "/services#seo-optimization",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that maximize ROI and reach your target audience effectively.",
      color: "bg-[hsl(270,70%,55%)]/10 text-[hsl(270,70%,55%)]",
      href: "/services#digital-marketing",
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions designed to streamline your operations and boost productivity.",
      color: "bg-[hsl(200,70%,50%)]/10 text-[hsl(200,70%,50%)]",
      href: "/services#custom-software",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that create memorable experiences and drive conversions.",
      color: "bg-[hsl(0,70%,55%)]/10 text-[hsl(0,70%,55%)]",
      href: "/services#ui/ux-design",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver seamless experiences on any device.",
      color: "bg-[hsl(45,90%,50%)]/10 text-[hsl(45,90%,50%)]",
      href: "/services#mobile-development",
    },
    {
      icon: Bot,
      title: "AI Agent Development",
      description: "Custom conversational AI bots, LLM integrations, and automated customer support workflows.",
      color: "bg-orange-500/10 text-orange-500",
      href: "/services#ai-agent-development",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Complete Digital Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to execution, we provide end-to-end digital services
            that help your business stand out and succeed.
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
