import React, { useState, useEffect } from "react";
import { Calculator, Smartphone, Globe, Layout, ShieldCheck, Mail, CreditCard, Sparkles, Send, Database, Compass, CheckCircle2, ChevronRight, UserPlus, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { useWeb3Form } from "@/hooks/useWeb3Form";

interface Feature {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: any;
}

const ProjectCalculator = () => {
  const { toast } = useToast();
  const { submitForm, isSubmitting } = useWeb3Form({ subject: "New Project Quote Request - Ikotek Solutions" });
  const [projectType, setProjectType] = useState<"web" | "app" | "ecommerce" | "saas">("web");
  const [projectSize, setProjectSize] = useState<"small" | "medium" | "large">("medium");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["auth", "database"]);
  const [timeline, setTimeline] = useState<"flexible" | "standard" | "urgent">("standard");

  // Client Details Form State
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientDetails, setClientDetails] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Dynamic cost estimates
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [weeks, setWeeks] = useState(0);

  const basePrices = {
    web: { base: 600, duration: 3 },
    app: { base: 1200, duration: 6 },
    ecommerce: { base: 800, duration: 4 },
    saas: { base: 1500, duration: 8 },
  };

  const sizeMultipliers = {
    small: 1.0,
    medium: 1.5,
    large: 2.2,
  };

  const sizeDescriptions = {
    small: "1 - 5 Pages / Screens (Simple layout)",
    medium: "5 - 15 Pages / Screens (Standard system)",
    large: "15+ Pages / Screens (Enterprise system)",
  };

  const featuresList: Feature[] = [
    { id: "auth", name: "User Accounts & Profiles", price: 250, description: "Secure login, register, and custom user portals.", icon: UserPlus },
    { id: "payments", name: "Stripe & Subscriptions", price: 350, description: "Accept major cards, set plans, or e-commerce checkouts.", icon: CreditCard },
    { id: "database", name: "Real-time Database Sync", price: 300, description: "Structured cloud relational store with encryption.", icon: Database },
    { id: "ai", name: "AI & ChatGPT Integrations", price: 600, description: "Smarter workflows, chatbot help, or semantic logic.", icon: Sparkles },
    { id: "smtp", name: "Ikosender Mail Automation", price: 200, description: "Bulk outreach SMTP dispatch system with reports.", icon: Mail },
    { id: "forms", name: "SmartFormsAI Builder Engine", price: 200, description: "Drag & drop questionnaires and live dashboard tools.", icon: Layout },
  ];

  const timelineModifiers = {
    flexible: { cost: 0.9, duration: 1.3, label: "Flexible (3+ Months, 10% Discount)" },
    standard: { cost: 1.0, duration: 1.0, label: "Standard (1 - 3 Months)" },
    urgent: { cost: 1.25, duration: 0.6, label: "Urgent (2 - 4 Weeks, 25% Markup)" },
  };

  // Recalculate price ranges
  useEffect(() => {
    // 1. Base price based on project type
    let tempBase = basePrices[projectType].base;
    let tempDuration = basePrices[projectType].duration;

    // 2. Adjust for project size
    tempBase = tempBase * sizeMultipliers[projectSize];
    tempDuration = tempDuration * sizeMultipliers[projectSize];

    // 3. Add feature costs
    let featuresTotal = 0;
    featuresList.forEach((feature) => {
      if (selectedFeatures.includes(feature.id)) {
        featuresTotal += feature.price;
      }
    });
    tempBase += featuresTotal;

    // 4. Adjust for timeline
    const modifier = timelineModifiers[timeline];
    const finalMin = Math.round(tempBase * modifier.cost);
    const finalMax = Math.round(finalMin * 1.25);
    const finalDuration = Math.round(tempDuration * modifier.duration);

    setMinPrice(finalMin);
    setMaxPrice(finalMax);
    setWeeks(finalDuration || 1);
  }, [projectType, projectSize, selectedFeatures, timeline]);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) {
      toast({
        title: "Validation Error",
        description: "Please enter your name and email address.",
        variant: "destructive",
      });
      return;
    }

    const success = await submitForm({
      name: clientName,
      email: clientEmail,
      project_type: projectType.toUpperCase(),
      project_size: projectSize.toUpperCase(),
      selected_features: selectedFeatures.join(", ") || "None",
      timeline_priority: timeline.toUpperCase(),
      estimated_budget: `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`,
      estimated_weeks: `${weeks} weeks`,
      additional_details: clientDetails || "No additional details provided.",
    });

    if (success) {
      setFormSubmitted(true);
      toast({
        title: "Estimate Submitted!",
        description: `Your custom quote request ($${minPrice} - $${maxPrice}) has been sent. An Ikotek architect will contact you.`,
      });
    } else {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    }
  };

  // Complexity level check
  const getComplexity = () => {
    const totalCount = selectedFeatures.length;
    if (totalCount <= 2 && projectSize === "small") return "Simple Setup";
    if (totalCount >= 4 || projectSize === "large") return "Highly Custom Architecture";
    return "Balanced System";
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 bg-gradient-to-b from-primary/5 via-transparent to-transparent">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-6">
              <Calculator className="w-4 h-4 text-primary" /> Dynamic Quotation Tool
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">
              Interactive <span className="text-gradient-orange">Project Calculator</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Design your system specifications below. Choose your platform parameters and watch estimated timelines and budgets update in real time.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Workspace */}
      <section className="py-8 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* LHS Selections Area (8 columns) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Project Type */}
              <div className="bg-card border border-border/80 rounded-3xl p-6 shadow-xl">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-2">Step 1</span>
                <h3 className="text-xl font-bold mb-4">Choose Project Type</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { id: "web", label: "Web Portal", icon: Globe },
                    { id: "app", label: "Mobile App", icon: Smartphone },
                    { id: "ecommerce", label: "E-Commerce", icon: CreditCard },
                    { id: "saas", label: "Custom SaaS", icon: Layout },
                  ].map((type) => {
                    const TypeIcon = type.icon;
                    const isSelected = projectType === type.id;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setProjectType(type.id as any)}
                        className={`p-4 rounded-2xl border flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 ${
                          isSelected
                            ? "bg-primary/10 border-primary text-primary scale-105"
                            : "bg-secondary/40 border-border/40 hover:bg-card hover:border-primary/20 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <TypeIcon className="w-6 h-6" />
                        <span className="text-xs font-bold">{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Project Size */}
              <div className="bg-card border border-border/80 rounded-3xl p-6 shadow-xl">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-2">Step 2</span>
                <h3 className="text-xl font-bold mb-4">Project Size & Scope</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "small", label: "Small" },
                      { id: "medium", label: "Medium" },
                      { id: "large", label: "Large" },
                    ].map((size) => {
                      const isSelected = projectSize === size.id;
                      return (
                        <button
                          key={size.id}
                          onClick={() => setProjectSize(size.id as any)}
                          className={`py-3 rounded-xl border font-bold text-xs transition-all duration-300 ${
                            isSelected
                              ? "bg-primary/10 border-primary text-primary"
                              : "bg-secondary/40 border-border/40 hover:bg-card text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {size.label}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-muted-foreground bg-secondary/50 px-4 py-2.5 rounded-xl border border-border/30 italic">
                    💡 Scale: {sizeDescriptions[projectSize]}
                  </p>
                </div>
              </div>

              {/* Step 3: Add-on Features */}
              <div className="bg-card border border-border/80 rounded-3xl p-6 shadow-xl">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-2">Step 3</span>
                <h3 className="text-xl font-bold mb-2">Select Functional Integrations</h3>
                <p className="text-xs text-muted-foreground mb-4">Click to select all advanced features your product requires.</p>
                
                <div className="grid md:grid-cols-2 gap-3">
                  {featuresList.map((feature) => {
                    const FeatureIcon = feature.icon;
                    const isSelected = selectedFeatures.includes(feature.id);
                    return (
                      <button
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={`p-4 rounded-2xl border text-left flex gap-3.5 transition-all duration-300 relative ${
                          isSelected
                            ? "bg-card border-primary shadow-md scale-[1.01]"
                            : "bg-secondary/40 border-border/40 hover:bg-card hover:border-primary/20 text-muted-foreground"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"
                        }`}>
                          <FeatureIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xs text-foreground flex items-center gap-1.5 justify-between">
                            <span>{feature.name}</span>
                            <span className={`text-[10px] font-mono shrink-0 px-2 py-0.5 rounded ${isSelected ? "bg-primary/10 text-primary" : "bg-secondary"}`}>
                              +${feature.price}
                            </span>
                          </h4>
                          <p className="text-[10px] text-muted-foreground mt-1">{feature.description}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Timeline Priority */}
              <div className="bg-card border border-border/80 rounded-3xl p-6 shadow-xl">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-2">Step 4</span>
                <h3 className="text-xl font-bold mb-4">Development Timeline Priority</h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    { id: "flexible", label: "Flexible Schedule", desc: "No hurry, save 10%" },
                    { id: "standard", label: "Standard Delivery", desc: "Our normal speed" },
                    { id: "urgent", label: "Urgent Outroll", desc: "Fast-tracked, +25%" },
                  ].map((time) => {
                    const isSelected = timeline === time.id;
                    return (
                      <button
                        key={time.id}
                        onClick={() => setTimeline(time.id as any)}
                        className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all duration-300 ${
                          isSelected
                            ? "bg-primary/10 border-primary text-primary"
                            : "bg-secondary/40 border-border/40 hover:bg-card text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Clock className="w-5 h-5 mb-1.5" />
                        <span className="text-xs font-bold">{time.label}</span>
                        <span className="text-[10px] text-muted-foreground mt-0.5">{time.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* RHS Summary Panel (5 columns) */}
            <div className="lg:col-span-5 space-y-8 sticky top-24">
              
              {/* Pricing Cards Dashboard */}
              <div className="bg-card border border-border/80 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-[50px] pointer-events-none" />
                
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 border-b border-border/40 pb-3">
                  <Compass className="w-5 h-5 text-primary" /> Cost Summary
                </h3>

                <div className="space-y-6">
                  {/* Estimated Price Range */}
                  <div>
                    <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider block">Estimated Budget Range</span>
                    <div className="flex items-baseline gap-1.5 mt-2">
                      <span className="text-3xl md:text-5xl font-extrabold text-foreground">${minPrice.toLocaleString()}</span>
                      <span className="text-muted-foreground text-sm font-semibold">to</span>
                      <span className="text-3xl md:text-5xl font-extrabold text-foreground">${maxPrice.toLocaleString()}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground block mt-1">Approximate range based on selections.</span>
                  </div>

                  {/* Estimated Duration */}
                  <div className="grid grid-cols-2 gap-4 bg-secondary/30 p-4 rounded-2xl border border-border/40 text-center">
                    <div>
                      <span className="text-[10px] text-muted-foreground block">Build Time</span>
                      <span className="text-2xl font-bold text-foreground mt-0.5">{weeks} Weeks</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground block">System Severity</span>
                      <span className="text-xs font-bold text-primary mt-1.5 block uppercase tracking-wide">{getComplexity()}</span>
                    </div>
                  </div>
                </div>

                {/* Submissions feedback form nested inside RHS */}
                <div className="mt-8 border-t border-border/40 pt-6">
                  {formSubmitted ? (
                    <div className="text-center py-6 space-y-4 animate-scale-in">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-base">Request Submitted</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">Our technical architects will inspect your requirements and mail a customized RFP blueprint shortly.</p>
                      <Button variant="outline" size="sm" onClick={() => setFormSubmitted(false)}>
                        Recalculate Estimate
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs font-semibold">
                      <h4 className="font-bold text-xs text-foreground mb-3 uppercase tracking-wider">Email This Quote Estimate</h4>
                      <div>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Your Name *"
                          className="w-full bg-secondary/50 border border-border/60 rounded-xl px-4 py-2.5 text-xs"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="Your Email Address *"
                          className="w-full bg-secondary/50 border border-border/60 rounded-xl px-4 py-2.5 text-xs"
                        />
                      </div>
                      <div>
                        <textarea
                          rows={2}
                          value={clientDetails}
                          onChange={(e) => setClientDetails(e.target.value)}
                          placeholder="Describe specific features or goals (optional)..."
                          className="w-full bg-secondary/50 border border-border/60 rounded-xl p-3 text-xs"
                        />
                      </div>
                      <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-xl gap-2 mt-2">
                        {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Request Quote Consultation</>}
                      </Button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Calculator standards trust */}
      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <span className="text-xl font-bold block mb-1">Transparent Pricing</span>
              <p className="text-xs text-muted-foreground">No hidden charges or unexpected bills. Every task estimation follows strict rate specifications.</p>
            </div>
            <div className="p-4">
              <span className="text-xl font-bold block mb-1">Architect Consultation</span>
              <p className="text-xs text-muted-foreground">Every quote request initiates a complete engineering overview call to refine parameters before launching code.</p>
            </div>
            <div className="p-4">
              <span className="text-xl font-bold block mb-1">Local Delivery Standards</span>
              <p className="text-xs text-muted-foreground">Engineered by Karachi's premier software house aligning layouts to world-class UI standards.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectCalculator;
