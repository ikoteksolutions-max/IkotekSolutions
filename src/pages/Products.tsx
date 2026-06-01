import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, FileSpreadsheet, Sparkles, Shield, Zap, Send, Layout, FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductsPage = () => {
  const products = [
    {
      id: "ikosender",
      title: "Ikosender",
      tagline: "Ultra-Fast Bulk Email Sender SaaS",
      description: "Send 1000+ personalized marketing or transactional emails in just 4 simple steps. Seamless connection with your custom SMTP or secure Gmail app password with real-time logs.",
      url: "https://ikosender.vercel.app/",
      detailsUrl: "/products/ikosender",
      colorClass: "from-blue-600 to-indigo-500",
      accentColor: "indigo",
      icon: Send,
      stats: [
        { label: "Steps to Send", value: "4 Steps" },
        { label: "Mails Per Run", value: "1,000+" },
        { label: "Delivery Rate", value: "99.8%" },
      ],
      features: [
        "1-Click App Password Login",
        "HTML/Text Email Template Support",
        "CSV & Bulk Recipients Paste Setup",
        "Real-time Send Processing Logs",
      ],
    },
    {
      id: "smartformsai",
      title: "SmartFormsAI",
      tagline: "Next-Gen Intelligent Drag & Drop Forms",
      description: "Say goodbye to boring, manual Google Forms. Generate responsive, customizable interactive forms with 1000+ fields, drag-and-drop flexibility, graphical dashboards, and instant Excel export.",
      url: "https://smartformsai.vercel.app/",
      detailsUrl: "/products/smartformsai",
      colorClass: "from-emerald-600 to-teal-500",
      accentColor: "emerald",
      icon: Layout,
      stats: [
        { label: "Custom Fields", value: "1,000+" },
        { label: "Editor Type", value: "Drag & Drop" },
        { label: "Data Export", value: "CSV & Excel" },
      ],
      features: [
        "Visual Drag-and-Drop Form Builder",
        "Pre-designed Custom Templates Library",
        "Interactive Graphical Responses Dashboard",
        "Zero-code Live Sharing & Embeds",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-primary/5 via-transparent to-transparent">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" /> Our SaaS Products
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 animate-fade-in-up">
              Powering Businesses with <span className="text-gradient-orange">In-House SaaS</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We design, build, and deploy high-performance SaaS solutions tailored to solve real-world problems. Discover our active suite of production-ready platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {products.map((product, idx) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className={`flex flex-col ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-12 items-center bg-card/40 backdrop-blur-md border border-border/80 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500`}
                >
                  {/* Decorative background gradient glow */}
                  <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${product.colorClass} opacity-5 blur-[80px] pointer-events-none`} />

                  {/* Left/Right Visual Panel (Mockup representation) */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6 w-fit">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-sm font-bold text-primary uppercase tracking-widest mb-2 block">
                      Featured SaaS Product
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 group-hover:text-primary transition-colors duration-300">
                      {product.title}
                    </h2>
                    <p className="text-sm font-semibold text-muted-foreground mb-4 italic">
                      {product.tagline}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8 bg-secondary/30 p-4 rounded-2xl border border-border/40">
                      {product.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="text-center">
                          <p className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</p>
                          <p className="text-xs text-muted-foreground font-medium mt-1">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Features list */}
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Links */}
                    <div className="flex flex-wrap gap-4">
                      <Link to={product.detailsUrl}>
                        <Button variant="default" className="gap-2 group shadow-lg shadow-primary/10">
                          Learn More & Features
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                      </Link>
                      <a href={product.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="gap-2">
                          Visit Live SaaS Website
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Right/Left Interactive Representation */}
                  <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <div className="relative w-full aspect-video rounded-2xl bg-gradient-to-br from-secondary/60 to-secondary/30 border border-border/80 p-4 flex flex-col justify-between overflow-hidden shadow-inner group-hover:border-primary/20 transition-all duration-500">
                      {/* Grid representation */}
                      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
                      
                      {/* Window Header */}
                      <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-4">
                        <div className="flex gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-red/40" />
                          <span className="w-3 h-3 rounded-full bg-orange/40" />
                          <span className="w-3 h-3 rounded-full bg-green/40" />
                        </div>
                        <span className="text-xs text-muted-foreground select-none font-mono bg-secondary/80 px-3 py-1 rounded-md border border-border/40">
                          {product.title.toLowerCase()}.vercel.app
                        </span>
                        <div className="w-6" />
                      </div>

                      {/* Content representation */}
                      <div className="flex-1 flex flex-col justify-center items-center text-center p-6 bg-background/30 rounded-xl border border-border/20 backdrop-blur-sm">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${product.colorClass} text-white flex items-center justify-center shadow-lg mb-4 animate-pulse`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <h4 className="text-lg font-bold text-foreground mb-1">{product.title} Dashboard</h4>
                        <p className="text-xs text-muted-foreground max-w-xs mb-4">Interactive preview showcasing dynamic live metrics and active tools.</p>
                        <div className="w-full bg-secondary/60 rounded-full h-2 mb-2 overflow-hidden max-w-[200px]">
                          <div className={`h-full bg-gradient-to-r ${product.colorClass}`} style={{ width: "85%" }} />
                        </div>
                        <div className="flex gap-6 text-[10px] text-muted-foreground font-mono">
                          <span>Status: Online</span>
                          <span>Ping: 12ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Operations */}
      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">Built with Production Standards</h3>
            <p className="text-muted-foreground">Every product built under the Ikotek name undergoes strict testing for performance, speed, and safety.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border/60 p-8 rounded-2xl hover:border-primary/20 transition-all duration-300">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h4 className="text-lg font-bold mb-2">High Performance</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Built using Next.js/Vite, TailwindCSS, and cloud architectures to support high-velocity bulk tasks without slow down.</p>
            </div>
            <div className="bg-card border border-border/60 p-8 rounded-2xl hover:border-primary/20 transition-all duration-300">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h4 className="text-lg font-bold mb-2">Enterprise Security</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">OAuth integrations, secure App password encryptions, and strict client data separation policies for full safety.</p>
            </div>
            <div className="bg-card border border-border/60 p-8 rounded-2xl hover:border-primary/20 transition-all duration-300">
              <FileSpreadsheet className="w-10 h-10 text-primary mb-4" />
              <h4 className="text-lg font-bold mb-2">Detailed Data Logs</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Export client results in spreadsheets, check deliverability, and analyze form responses through visual reports.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
