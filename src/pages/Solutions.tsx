import React from "react";
import { Link } from "react-router-dom";
import { Globe, Shield, Activity, GraduationCap, Building2, Terminal, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SolutionsPage = () => {
  const solutions = [
    {
      title: "FinTech & Digital Wallets",
      icon: Shield,
      description: "Secure, real-time transactional platforms equipped with stock tracking charts, AI investment analysis, and automated accounting.",
      colorClass: "from-blue-600/10 to-indigo-500/10",
      iconColor: "text-blue-500",
      borderColor: "group-hover:border-blue-500/30",
      metrics: "99.9% uptime, SOC2 Security compliance",
      features: [
        "PCI-DSS compliant gateways integration",
        "Interactive real-time SVG charting dashboard",
        "Automated auditing ledger logs system",
      ],
    },
    {
      title: "E-Commerce & Marketplaces",
      icon: Globe,
      description: "Feature-rich marketplaces complete with multi-vendor support, inventory monitors, carbon tracking, and localized payment solutions.",
      colorClass: "from-emerald-600/10 to-teal-500/10",
      iconColor: "text-emerald-500",
      borderColor: "group-hover:border-emerald-500/30",
      metrics: "150%+ average page load speed increase",
      features: [
        "Headless Commerce API structures (Shopify/Vue/NextJS)",
        "Automated regional tax calculation triggers",
        "Built-in customer CRM systems",
      ],
    },
    {
      title: "EdTech & Learning Portals",
      icon: GraduationCap,
      description: "Interactive online academies with student-grade tracking charts, virtual classrooms integration, and quiz builders.",
      colorClass: "from-violet-600/10 to-fuchsia-500/10",
      iconColor: "text-violet-500",
      borderColor: "group-hover:border-violet-500/30",
      metrics: "Used by 500+ regional institutions",
      features: [
        "Personalized automated study paths",
        "Real-time chat modules & student notes",
        "PDF certificates generators API",
      ],
    },
    {
      title: "Healthcare & Telemedicine",
      icon: Activity,
      description: "Secure HIPAA-compliant consulting rooms for patient-doctor matchings, visual prescription forms, and live video consulting.",
      colorClass: "from-rose-600/10 to-orange-500/10",
      iconColor: "text-rose-500",
      borderColor: "group-hover:border-rose-500/30",
      metrics: "HIPAA Compliant, WebRTC integrated encryption",
      features: [
        "Encrypted patient records databases",
        "Smart appointment scheduler algorithms",
        "Digital health monitoring widgets",
      ],
    },
    {
      title: "Real Estate Portals",
      icon: Building2,
      description: "High performance real estate indexes with 3D virtual tour support, map integrations, and instant agent-lead tracking.",
      colorClass: "from-amber-600/10 to-yellow-500/10",
      iconColor: "text-amber-500",
      borderColor: "group-hover:border-amber-500/30",
      metrics: "2x average lead capture efficiency",
      features: [
        "Map clustering search functionality",
        "Intelligent drag & drop photo albums",
        "Automated WhatsApp lead forward alerts",
      ],
    },
    {
      title: "Custom SaaS Architectures",
      icon: Terminal,
      description: "Complete design and coding pipeline for in-house SaaS platforms (like our successful Ikosender and SmartFormsAI products).",
      colorClass: "from-cyan-600/10 to-sky-500/10",
      iconColor: "text-cyan-500",
      borderColor: "group-hover:border-cyan-500/30",
      metrics: "Full SaaS MVP delivery within 8-12 weeks",
      features: [
        "Subscription billings (Stripe/PayPal) configs",
        "Interactive customer dashboards widgets",
        "Exportable Excel report builders",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary/5 via-transparent to-transparent">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" /> Sector Alignments
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">
              Industries We <span className="text-gradient-orange">Serve & Transform</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We design specialized software platforms, e-commerce engines, and SaaS architectures targeting specific business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Cards Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div
                  key={idx}
                  className={`bg-card/45 backdrop-blur-md border border-border/80 rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between ${sol.borderColor}`}
                >
                  {/* Decorative background glow */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${sol.colorClass} opacity-30 blur-[40px] pointer-events-none`} />

                  <div>
                    {/* Header */}
                    <div className={`w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6`}>
                      <Icon className={`w-7 h-7 ${sol.iconColor}`} />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {sol.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {sol.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-2 mb-6">
                      {sol.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics & CTA footer */}
                  <div className="pt-6 border-t border-border/40 mt-auto space-y-4">
                    <div className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                      📊 Result: {sol.metrics}
                    </div>
                    <Link to="/contact">
                      <Button variant="ghost" size="sm" className="w-full justify-between hover:bg-primary/10 hover:text-primary border border-border/60 rounded-xl group/btn mt-2">
                        Discuss Industry Solution
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Integration Call */}
      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">Have an Industry Challenge?</h3>
          <p className="text-muted-foreground mb-8">We construct custom blueprints and prototypes matching your business workflow. Connect with our architects for a free quote proposal.</p>
          <Link to="/quote">
            <Button size="lg" className="gap-2 font-bold px-8 shadow-lg shadow-primary/20">
              Get Custom Blueprint Proposal <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
