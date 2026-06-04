import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote, Briefcase, Award, Milestone, ArrowRight, Heart, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CEO = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Decorative background grid/gradients */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none -z-10" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl opacity-30 pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "6s" }} />
      <div className="absolute top-[50%] left-[-10%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl opacity-20 pointer-events-none -z-10" />

      {/* Hero / Header Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-xs md:text-sm mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 animate-spin-slow text-orange-500" />
              Leadership Message
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in animation-delay-100 tracking-tight">
              Meet Our <span className="text-gradient-orange">CEO & Founder</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200 leading-relaxed">
              Discover the vision, values, and leadership driving Ikotek Solutions toward digital excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Main Profile Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* CEO Image Side */}
            <div className="lg:col-span-5 flex justify-center animate-fade-in">
              <div className="relative group w-full max-w-[400px]">
                {/* Outer styling rings and glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-orange-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
                <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-orange-500 to-primary rounded-3xl opacity-30 group-hover:opacity-70 transition-opacity duration-500 blur -z-10" />
                
                {/* Image Container with Custom White Background */}
                <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden bg-white border-8 border-white shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                  <img
                    src="/images/Muhammad Raza Tariq.png"
                    alt="Muhammad Hassan Khan - CEO & Founder"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Styled Badge */}
                <div className="absolute -bottom-6 right-6 left-6 bg-background/95 backdrop-blur-md border border-border px-6 py-4 rounded-xl shadow-xl flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Muhammad Hassan Khan</h3>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">CEO & Founder, Ikotek Solutions</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* CEO Message / Bio Side */}
            <div className="lg:col-span-7 space-y-8 animate-fade-in animation-delay-200 mt-8 lg:mt-0">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  Driving Digital Evolution <span className="text-primary">From Karachi to the World</span>
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
              </div>

              <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-6 leading-relaxed">
                <p className="text-foreground font-medium text-lg italic border-l-4 border-primary pl-4 py-1">
                  "At Ikotek Solutions, our philosophy is simple: we don't just write code; we build digital assets that scale businesses, enhance operational speed, and fuel long-term growth."
                </p>
                <p>
                  Ikotek Solutions was established in <strong className="text-foreground">2025</strong> in Karachi, Pakistan, with a clear and ambitious vision: to deliver world-class custom software development, mobile apps, and SaaS products. Muhammad Hassan Khan founded this organization to combine high-performance engineering with intuitive design, helping companies transform their operational workflows.
                </p>
                <p>
                  Hassan is a deep believer in absolute technical excellence, customer-centric architecture, and agility. He champions a high-ownership culture where engineering teams collaborate directly with clients to drive real, measurable metrics. Under his strategic guidance, Ikotek Solutions has rapidly become a hub of digital innovation.
                </p>
              </div>

              {/* CEO Milestones/Details Grid */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Milestone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Established 2025</h4>
                    <p className="text-xs text-muted-foreground">Founded in Karachi with global vision</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Custom Solutions</h4>
                    <p className="text-xs text-muted-foreground">Focusing on high-yield software</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Vision Section */}
      <section className="py-20 bg-secondary/40 border-y border-border/50 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">My Personal Commitments To Our Partners</h2>
            <p className="text-sm text-muted-foreground mt-2">Muhammad Raza Tariq — CEO & Founder</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-4xl text-primary font-black mb-4 block">01</span>
              <h3 className="font-bold text-lg mb-2">Absolute Transparency</h3>
              <p className="text-sm text-muted-foreground">No gatekeeping. Clear, honest timelines, architecture details, and project tracking dashboards for our clients.</p>
            </div>
            
            <div className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-4xl text-primary font-black mb-4 block">02</span>
              <h3 className="font-bold text-lg mb-2">Zero Bureaucracy</h3>
              <p className="text-sm text-muted-foreground">Fast feedback loops, quick engineering adjustments, and direct communication lines with developers.</p>
            </div>

            <div className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-4xl text-primary font-black mb-4 block">03</span>
              <h3 className="font-bold text-lg mb-2">Scalable Integrity</h3>
              <p className="text-sm text-muted-foreground">Every line of code is designed to support high volume traffic, maintaining robust security protocols from Day One.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Letter to Clients / Core Narrative */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-card border border-border/80 p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10" />
            <Quote className="w-16 h-16 text-primary/10 absolute top-8 left-8" />
            
            <div className="relative space-y-6 text-muted-foreground leading-relaxed">
              <h3 className="text-2xl font-bold text-foreground mb-4">A Note From Our Desk</h3>
              <p>
                When I established Ikotek Solutions in Karachi in 2025, my primary focus was to craft a tech hub that prioritizes quality above everything else. Having witnessed the challenges businesses face with bloated frameworks, poor communication, and delays, I structured Ikotek to deliver pure agility.
              </p>
              <p>
                We believe in forging lifelong technological partnerships. Whether we are building a custom CRM, an interactive mobile application, or deployment pipelines for a high-volume SaaS platform, our team approaches it with total dedication and ownership.
              </p>
              <p>
                Thank you for trusting Ikotek Solutions with your digital journey. We look forward to scaling new heights together.
              </p>
              <div className="pt-6 border-t border-border/60 flex items-center justify-between">
                <div>
                  <p className="font-bold text-foreground">Muhammad Hassan Khan</p>
                  <p className="text-xs text-muted-foreground">CEO & Founder, Ikotek Solutions</p>
                </div>
                <Link to="/contact">
                  <Button variant="default" size="sm" className="gap-2">
                    Let's Connect <Send className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CEO;
