import { Globe, Search, Megaphone, Code, Palette, Smartphone, Check, ArrowRight } from "lucide-react";
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
      icon: Globe,
      title: "Web Development",
      description: "Custom websites built with cutting-edge technologies for optimal performance and user experience.",
      color: "bg-primary/10 text-primary",
      features: [
        "Custom Website Design",
        "E-commerce Solutions",
        "CMS Development",
        "Progressive Web Apps",
        "API Integration",
        "Performance Optimization"
      ],
      price: "Starting from PKR 50,000"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Data-driven SEO strategies that boost your visibility and drive organic traffic to your business.",
      color: "bg-[hsl(142,70%,45%)]/10 text-[hsl(142,70%,45%)]",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO Audit",
        "Link Building",
        "Local SEO",
        "Monthly Reporting"
      ],
      price: "Starting from PKR 25,000/mo"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that maximize ROI and reach your target audience effectively.",
      color: "bg-[hsl(270,70%,55%)]/10 text-[hsl(270,70%,55%)]",
      features: [
        "Google Ads Management",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Influencer Marketing",
        "Analytics & Reporting"
      ],
      price: "Starting from PKR 35,000/mo"
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions designed to streamline your operations and boost productivity.",
      color: "bg-[hsl(200,70%,50%)]/10 text-[hsl(200,70%,50%)]",
      features: [
        "Business Process Automation",
        "CRM Development",
        "ERP Solutions",
        "Database Design",
        "Cloud Integration",
        "Ongoing Support"
      ],
      price: "Starting from PKR 200,000"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that create memorable experiences and drive conversions.",
      color: "bg-[hsl(0,70%,55%)]/10 text-[hsl(0,70%,55%)]",
      features: [
        "User Research",
        "Wireframing",
        "Prototype Development",
        "Visual Design",
        "Usability Testing",
        "Design Systems"
      ],
      price: "Starting from PKR 40,000"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver seamless experiences on any device.",
      color: "bg-[hsl(45,90%,50%)]/10 text-[hsl(45,90%,50%)]",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Apps",
        "App Store Optimization",
        "Push Notifications",
        "Analytics Integration"
      ],
      price: "Starting from PKR 300,000"
    },
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Complete <span className="text-gradient-orange">Digital Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From concept to execution, we provide end-to-end digital services
              that help your business stand out and dominate in the digital age.
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
