import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote, Sparkles, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const CEOSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient blur elements */}
      <div className="absolute top-1/2 left-[-10%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl opacity-35 pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl opacity-20 pointer-events-none -z-10" />
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-card/45 backdrop-blur-xl border border-border/80 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Top subtle decoration */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* CEO Image Container on Left */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-[320px] md:max-w-[360px]">
                {/* Glow effects behind image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-orange-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 -z-10" />
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-primary/30 to-orange-500/30 rounded-2xl opacity-40 blur-sm -z-10" />

                {/* White background container for transparent image */}
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white border-[6px] border-white shadow-xl transition-all duration-500 hover:scale-[1.03] flex items-end justify-center">
                  <img
                    src="/images/Muhammad Raza Tariq.png"
                    alt="Muhammad Hassan Khan - CEO"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Dynamic Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-background border border-border px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 animate-bounce" style={{ animationDuration: "3s" }}>
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider leading-none">Established</p>
                    <p className="text-xs font-black text-foreground leading-tight">Year 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CEO Text/Content on Right */}
            <div className="lg:col-span-7 space-y-6 md:pl-4">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/15 rounded-full text-primary font-bold text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
                  Founder Message
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                  Leadership with a <span className="text-gradient-orange">Vision</span>
                </h2>
              </div>

              {/* CEO Big Quote */}
              <div className="relative pt-4">
                <Quote className="w-10 h-10 text-primary/10 absolute -top-2 -left-2" />
                <p className="text-xl md:text-2xl font-semibold text-foreground italic pl-6 border-l-3 border-primary relative z-10 leading-snug">
                  "At Ikotek, we believe in high-ownership culture and absolute engineering excellence. We don't build temporary fixes — we engineer digital systems that drive growth."
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Established in <strong>2025</strong> in Karachi, Ikotek Solutions was structured to bridge the gap between high-level technology and real-world business results. Under the leadership of <strong>Muhammad Hassan Khan</strong>, our goal is to empower companies to navigate digital transformation effortlessly, utilizing clean architecture, agile timelines, and high-performance scalability.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-t border-border/60">
                <div>
                  <h4 className="font-extrabold text-foreground text-lg leading-tight">Muhammad Hassan Khan</h4>
                  <p className="text-xs text-primary font-bold uppercase tracking-wider mt-0.5">CEO & Founder, Ikotek Solutions</p>
                </div>
                
                <Link to="/ceo">
                  <Button variant="hero" size="lg" className="group shadow-lg hover:shadow-primary/20 transition-all duration-300">
                    Read CEO Message
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
