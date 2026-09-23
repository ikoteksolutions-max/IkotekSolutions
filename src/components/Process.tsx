import { Search, Globe, Cpu, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Physical Audit & Mapping",
      description: "We analyze your physical store/office, manual registers, customer bottlenecks, and current workflows to map out your automation blueprint.",
    },
    {
      icon: Globe,
      number: "02",
      title: "Digital System Setup",
      description: "We build your online storefront, digital catalog, appointment portal, and secure payment gateways tailored to your exact industry.",
    },
    {
      icon: Cpu,
      number: "03",
      title: "AI & Inventory Wiring",
      description: "We deploy 24/7 WhatsApp AI order bots, link your physical shelf inventory to online channels, and automate PDF invoicing.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Autopilot Launch & Training",
      description: "Your business runs 24/7 on autopilot. We train your team, hand over live management dashboards, and provide dedicated ongoing support.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(270,70%,55%)]/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Transformation Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How We Take Your Business
            <br />
            <span className="text-gradient-orange">Online & On Autopilot</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven 4-stage transformation methodology designed to transition physical operations into frictionless digital machines.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group h-full"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border z-0">
                  <div className="absolute right-0 w-2 h-2 rounded-full bg-primary -top-[3px]" />
                </div>
              )}

              {/* Card */}
              <div className="relative z-10 p-8 bg-card border border-border rounded-2xl hover:border-primary/20 hover:shadow-xl transition-all duration-300 h-full">
                {/* Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
