import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Search, Megaphone, Code, Palette, Smartphone, Loader2, Check, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const WEB3FORMS_ACCESS_KEY = "cb5ea38c-2cec-448f-968c-9f3ae698cae0";

const Hero = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const services = [
    { icon: Globe, label: "Web Development" },
    { icon: Search, label: "SEO Optimization" },
    { icon: Megaphone, label: "Digital Marketing" },
    { icon: Code, label: "Custom Software" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: Smartphone, label: "Mobile Apps" },
    { icon: Bot, label: "AI Agent Development" },
  ];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      toast({
        title: "Please select at least one service",
        variant: "destructive",
      });
      return;
    }

    if (!formData.name || !formData.email) {
      toast({
        title: "Please fill in your name and email",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Quick Quote Request - Ikotek Solutions",
          from_name: "Ikotek Solutions Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          services: selectedServices.join(", "),
          message: `Quick quote request for: ${selectedServices.join(", ")}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Request Submitted!",
          description: "We'll send you a proposal within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "" });
        setSelectedServices([]);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 dot-pattern opacity-60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container relative mx-auto py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-5 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Innovative Digital Solutions
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Empowering Your
                <br />
                <span className="text-gradient-orange">Digital Success</span>
                <br />
                With Technology
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                We deliver cutting-edge digital solutions that transform businesses. From powerful websites
                to smart marketing strategies, we help you dominate the digital landscape.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
              <Link to="/quote">
                <Button variant="hero" className="group w-full sm:w-auto">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/work">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  View Portfolio
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 animate-fade-in-up animation-delay-300">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">500+</div>
                <div className="text-muted-foreground text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">300+</div>
                <div className="text-muted-foreground text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">8+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Service Sidebar - Quick Quote Form */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20" />
            <form onSubmit={handleSubmit} className="relative bg-card/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl animate-scale-in animation-delay-400">
              <h3 className="text-xl font-bold text-foreground mb-1">
                Get a Free Quote
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Select services & get proposal within 24 hours
              </p>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {services.map((service, index) => (
                  <button
                    key={service.label}
                    type="button"
                    onClick={() => toggleService(service.label)}
                    className={`flex items-center gap-2 p-3 rounded-xl transition-all cursor-pointer text-left ${selectedServices.includes(service.label)
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                        : "bg-secondary/50 hover:bg-secondary border border-transparent hover:border-primary/20"
                      }`}
                  >
                    <div className={`w-6 h-6 rounded flex items-center justify-center ${selectedServices.includes(service.label)
                        ? "bg-white/20"
                        : "bg-primary/10"
                      }`}>
                      <service.icon className={`w-3.5 h-3.5 ${selectedServices.includes(service.label) ? "text-white" : "text-primary"
                        }`} />
                    </div>
                    <span className="font-medium text-xs truncate">{service.label}</span>
                    {selectedServices.includes(service.label) && (
                      <Check className="w-3.5 h-3.5 ml-auto" />
                    )}
                  </button>
                ))}
              </div>

              <div className="space-y-4 mb-6">
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-11 bg-background/50 border-white/10 focus:border-primary/50 transition-colors"
                />
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-11 bg-background/50 border-white/10 focus:border-primary/50 transition-colors"
                />
                <Input
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-11 bg-background/50 border-white/10 focus:border-primary/50 transition-colors"
                />
              </div>

              <Button type="submit" variant="hero" className="w-full h-12 text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Get Free Proposal
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
