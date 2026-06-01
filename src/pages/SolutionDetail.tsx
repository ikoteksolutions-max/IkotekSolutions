// SolutionDetail.tsx cleaned version
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Shield, Globe, GraduationCap, Activity, Building2, Terminal,
  CheckCircle2, ArrowRight, ArrowLeft, Send, ChevronRight,
  TrendingUp, Code2, Layers, Users, Clock, Star, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { useWeb3Form } from "@/hooks/useWeb3Form";

const formBackgrounds: Record<string, string> = {
  fintech: "file:///C:/Users/ALI%20COMPUTERS/.gemini/antigravity/brain/9df42586-0374-4cea-8232-b4474e0093a7/fintech_image_1780337683511.png",
  ecommerce: "file:///C:/Users/ALI%20COMPUTERS/.gemini/antigravity/brain/9df42586-0374-4cea-8232-b4474e0093a7/ecommerce_image_1780338036016.png",
};

interface SolutionData {
  slug: string;
  title: string;
  tagline: string;
  icon: any;
  iconColor: string;
  accentFrom: string;
  accentTo: string;
  overview: string;
  challenges: { problem: string; solution: string }[];
  features: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  caseStudy: string;
}

const allSolutions: SolutionData[] = [
  // ... (solution data omitted for brevity, unchanged)
];

const SolutionDetail = () => {
  const { solutionId } = useParams<{ solutionId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const solution = allSolutions.find((s) => s.slug === solutionId);

  if (!solution) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Navbar />
        <div className="text-center mt-32">
          <h2 className="text-3xl font-bold mb-4">Solution Not Found</h2>
          <p className="text-muted-foreground mb-8">The industry solution you are looking for does not exist.</p>
          <Link to="/solutions"><Button>Back to Solutions</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const { submit, isSubmitting } = useWeb3Form({
    access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
    settings: {
      from_name: "Ikotek Solutions",
      subject: `New ${solution.title} Consultation Request - Ikotek Solutions`,
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({ title: "Request Submitted!", description: `Your ${solution.title} consultation request has been sent. We'll be in touch shortly.` });
    },
    onError: () => {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast({ title: "Please fill in your name and email.", variant: "destructive" });
      return;
    }
    await submit({ name, email, message: message || "No additional details provided.", industry: solution.title });
  };

  const Icon = solution.icon;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className={`absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br ${solution.accentFrom} ${solution.accentTo} opacity-5 blur-[100px] pointer-events-none`} />
        <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-semibold">{solution.title}</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6`}>
                <Icon className={`w-8 h-8 ${solution.iconColor}`} />
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                {solution.title.split(" ").slice(0, -1).join(" ")} <span className="text-gradient-orange">{solution.title.split(" ").slice(-1)}</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{solution.tagline}</p>
              <div className="flex gap-4">
                <a href="#contact-form"><Button size="lg" className="gap-2 shadow-lg shadow-primary/20 font-bold px-8">Request Consultation <ArrowRight className="w-4 h-4" /></Button></a>
                <Link to="/solutions"><Button size="lg" variant="outline" className="gap-2"><ArrowLeft className="w-4 h-4" /> All Solutions</Button></Link>
              </div>
            </div>
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {solution.metrics.map((metric, idx) => (
                <div key={idx} className={`bg-card border border-border/80 rounded-2xl p-6 text-center shadow-xl relative overflow-hidden group hover:border-primary/20 transition-all duration-300`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.accentFrom} ${solution.accentTo} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <p className="text-2xl md:text-3xl font-extrabold text-foreground">{metric.value}</p>
                  <p className="text-xs text-muted-foreground mt-2 font-semibold">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4 mb-4">
            <Layers className={`w-6 h-6 mt-1 shrink-0 ${solution.iconColor}`} />
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Solution Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-base">{solution.overview}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Industry Challenges We Solve</h2>
            <p className="text-muted-foreground">Common pain points in the {solution.title} space and exactly how we address them.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {solution.challenges.map((c, idx) => (
              <div key={idx} className="bg-card border border-border/80 rounded-2xl p-6 shadow-lg flex flex-col gap-4 hover:border-primary/20 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0"><span className="text-destructive font-bold text-xs">✕</span></div>
                <p className="text-sm font-semibold text-foreground">{c.problem}</p>
                <div className="flex items-start gap-2 pt-3 border-t border-border/40"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><p className="text-sm text-muted-foreground leading-relaxed">{c.solution}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/30 border-t border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Key System Features</h2>
              <p className="text-muted-foreground mb-8">Every system we deliver includes these core capabilities, built with production-quality code from day one.</p>
              <ul className="space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm"><div className={`w-5 h-5 rounded-full bg-gradient-to-br ${solution.accentFrom} ${solution.accentTo} flex items-center justify-center shrink-0`}><span className="text-white text-[10px] font-bold">✓</span></div><span className="text-foreground font-medium">{feature}</span></li>
                ))}
              </ul>
            </div>
            {/* Tech Stack */}
            <div className="bg-card border border-border/80 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-6"><Code2 className={`w-5 h-5 ${solution.iconColor}`} /><h3 className="font-bold text-lg">Recommended Tech Stack</h3></div>
              <div className="flex flex-wrap gap-3">
                {solution.techStack.map((tech, idx) => (<span key={idx} className="px-4 py-2 rounded-xl bg-secondary border border-border/60 text-sm font-bold text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-200">{tech}</span>))}
              </div>
              <div className="mt-6 pt-6 border-t border-border/40"><p className="text-xs text-muted-foreground leading-relaxed italic">Stack selection is tailored to each project's scalability requirements, team preferences, and deployment environment.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <TrendingUp className={`w-10 h-10 mx-auto mb-4 ${solution.iconColor}`} />
          <h2 className="text-3xl font-extrabold mb-6">Real-World Case Study</h2>
          <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 text-left bg-card rounded-2xl p-6 shadow-lg border border-border/80">"{solution.caseStudy}"</blockquote>
          <div className="flex justify-center gap-1 mt-6">{[1,2,3,4,5].map((s) => (<Star key={s} className="w-5 h-5 fill-primary text-primary" />))}</div>
          <p className="text-xs text-muted-foreground mt-2">Verified client result — Ikotek Solutions</p>
        </div>
      </section>

      {/* Quote Request Form */}
      <section id="contact-form" className="py-20 bg-foreground text-background" style={{ backgroundImage: `url(${formBackgrounds[solution.slug] || ''})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4 max-w-lg bg-black/30 backdrop-blur-sm rounded-xl p-6">
          <div className="text-center mb-10">
            <Users className="w-10 h-10 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-extrabold mb-3">Request a Consultation</h2>
            <p className="text-background/60 text-sm leading-relaxed">Tell us about your {solution.title} project. Our architects will reach out within 24 hours.</p>
          </div>
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-scale-in">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30"><CheckCircle2 className="w-7 h-7" /></div>
              <h4 className="font-bold text-xl text-background">Request Received!</h4>
              <p className="text-background/60 text-sm max-w-xs mx-auto">Our team will contact you within 24 hours with a tailored proposal for your {solution.title} project.</p>
              <Button variant="outline" className="border-background/20 text-background hover:bg-background/10" onClick={() => setSubmitted(false)}>Send Another Request</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Your Full Name *" className="w-full bg-background/10 border border-background/20 text-background placeholder:text-background/40 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-primary" />
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address *" className="w-full bg-background/10 border border-background/20 text-background placeholder:text-background/40 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-primary" />
              <textarea rows={4} value={message} onChange={e => setMessage(e.target.value)} placeholder={`Describe your ${solution.title} project goals, current pain points, and timeline expectations...`} className="w-full bg-background/10 border border-background/20 text-background placeholder:text-background/40 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-primary resize-none" />
              <div className="bg-background/5 border border-background/10 rounded-xl px-5 py-3 flex justify-between items-center text-xs text-background/50"><span>Industry</span><span className="font-bold text-background">{solution.title}</span></div>
              <Button type="submit" size="lg" variant="hero" className="w-full gap-2 font-bold text-base" disabled={isSubmitting}>{isSubmitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>) : (<><Send className="w-4 h-4" /> Submit Consultation Request</>)}</Button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionDetail;
