import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Shield, Globe, GraduationCap, Activity, Building2, Terminal,
  CheckCircle2, ArrowRight, ArrowLeft, Send, ChevronRight,
  TrendingUp, Code2, Layers, Users, Clock, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

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
  {
    slug: "fintech",
    title: "FinTech & Digital Wallets",
    tagline: "Secure, real-time financial platforms built for compliance and scale.",
    icon: Shield,
    iconColor: "text-blue-500",
    accentFrom: "from-blue-600",
    accentTo: "to-indigo-500",
    overview:
      "We engineer end-to-end financial technology platforms covering digital wallets, investment dashboards, accounting automation, and payment gateways. Our systems are built with bank-grade encryption, multi-currency support, and real-time ledger syncing that financial businesses demand.",
    challenges: [
      {
        problem: "Complex payment integrations break under high transaction volumes.",
        solution: "We implement queue-based async transaction handlers with auto-retry logic and fallback gateways.",
      },
      {
        problem: "Regulatory compliance requirements are constantly shifting.",
        solution: "Our dashboards generate SOC2 and PCI-DSS audit logs automatically with built-in compliance reporting.",
      },
      {
        problem: "Users distrust fintech platforms due to poor security UX.",
        solution: "We integrate 2FA, biometric auth, and granular user session management by default.",
      },
    ],
    features: [
      "PCI-DSS compliant payment gateway integrations",
      "Multi-currency digital wallet engine",
      "Real-time SVG stock + investment charting",
      "Automated tax and VAT computation",
      "Fraud detection with ML pattern scoring",
      "Role-based financial access control",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe API", "AWS Lambda", "TensorFlow"],
    metrics: [
      { label: "Uptime SLA", value: "99.9%" },
      { label: "Transaction Speed", value: "< 200ms" },
      { label: "Compliance Score", value: "SOC2 Ready" },
      { label: "Security Layer", value: "PCI-DSS L1" },
    ],
    caseStudy:
      "A Karachi-based digital wallet startup processed over PKR 2 billion in transactions within 3 months of launch using our platform. Zero security incidents, 99.98% uptime, and full SBP audit compliance.",
  },
  {
    slug: "ecommerce",
    title: "E-Commerce & Marketplaces",
    tagline: "High-conversion online stores and multi-vendor marketplaces that scale.",
    icon: Globe,
    iconColor: "text-emerald-500",
    accentFrom: "from-emerald-600",
    accentTo: "to-teal-500",
    overview:
      "We build blazing-fast e-commerce platforms optimized for Pakistani and international markets. From single-brand storefronts to complex multi-vendor marketplaces with inventory management, automated shipping, and built-in CRM systems — we handle the full stack.",
    challenges: [
      {
        problem: "Slow page speed kills conversion rates, especially on mobile.",
        solution: "We build with Next.js SSR and edge-cached product pages, achieving sub-1s load times globally.",
      },
      {
        problem: "Managing inventory across multiple warehouses is chaotic.",
        solution: "Our systems use real-time stock sync APIs with threshold alerts and automatic reorder triggers.",
      },
      {
        problem: "Local payment methods (EasyPaisa, JazzCash) are hard to integrate.",
        solution: "We have pre-built custom SDKs for all major Pakistani payment processors ready to plug in.",
      },
    ],
    features: [
      "Headless commerce with custom storefront",
      "Multi-vendor marketplace with seller dashboards",
      "EasyPaisa, JazzCash, Stripe, COD integration",
      "Inventory management with low-stock alerts",
      "Abandoned cart recovery automation",
      "AI-powered product recommendation engine",
    ],
    techStack: ["Next.js", "Shopify", "Vue.js", "PostgreSQL", "Redis", "Cloudflare CDN"],
    metrics: [
      { label: "Avg. Page Load", value: "< 0.9s" },
      { label: "Conversion Lift", value: "+150%" },
      { label: "Orders/Day Capacity", value: "50,000+" },
      { label: "SEO Ranking", value: "Top 3 Google" },
    ],
    caseStudy:
      "An eco-fashion brand saw 150% sales growth within 6 months of switching to our custom Next.js storefront from a generic Shopify theme. Featured on local news for their carbon-tracking checkout feature.",
  },
  {
    slug: "edtech",
    title: "EdTech & Learning Portals",
    tagline: "Intelligent learning systems that personalize education at scale.",
    icon: GraduationCap,
    iconColor: "text-violet-500",
    accentFrom: "from-violet-600",
    accentTo: "to-fuchsia-500",
    overview:
      "Our EdTech platforms serve schools, universities, tutoring academies, and corporate trainers. We create adaptive learning experiences combining video coursework, live virtual classrooms, AI-powered quiz builders, and student performance analytics into one unified portal.",
    challenges: [
      {
        problem: "Students disengage with static, text-heavy online courses.",
        solution: "We build interactive module flows with gamification points, progress bars, and achievement badges.",
      },
      {
        problem: "Teachers waste hours manually grading quizzes and assignments.",
        solution: "Our AI auto-grader evaluates MCQs and short answers and generates feedback reports instantly.",
      },
      {
        problem: "Live classes crash under high student concurrency.",
        solution: "We integrate WebRTC with Jitsi or Agora SDKs on scalable cloud infrastructure, tested to 1000+ concurrent users.",
      },
    ],
    features: [
      "Drag-and-drop course builder for instructors",
      "Live virtual classrooms with screen share and polls",
      "Personalized AI learning path recommendations",
      "Auto-graded quiz and assignment engine",
      "Student progress dashboards and parent reports",
      "PDF certificates auto-generated on course completion",
    ],
    techStack: ["Django", "React", "WebRTC", "Agora SDK", "AWS S3", "PostgreSQL"],
    metrics: [
      { label: "Grade Improvement", value: "+30%" },
      { label: "Schools Using", value: "500+" },
      { label: "Daily Active Students", value: "25,000+" },
      { label: "Certificate Generation", value: "Automated" },
    ],
    caseStudy:
      "A Lahore-based tutoring network onboarded 500 schools within 8 months using our EdTech portal. Average student grades improved by 30% across mathematics and science subjects after switching to personalized learning paths.",
  },
  {
    slug: "healthcare",
    title: "Healthcare & Telemedicine",
    tagline: "HIPAA-compliant digital health systems connecting patients with care.",
    icon: Activity,
    iconColor: "text-rose-500",
    accentFrom: "from-rose-600",
    accentTo: "to-orange-500",
    overview:
      "We build secure, HIPAA-compliant telemedicine platforms, hospital management systems, patient portals, and digital prescription tools for clinics, specialists, and health networks across Pakistan and beyond.",
    challenges: [
      {
        problem: "Patient data must be encrypted at rest and during transmission.",
        solution: "We implement AES-256 encryption, TLS 1.3, and HIPAA-aligned access logging across all health data storage.",
      },
      {
        problem: "Scheduling specialists is a logistical nightmare for large clinics.",
        solution: "Our smart appointment engine uses availability algorithms to auto-match patients to the right specialist.",
      },
      {
        problem: "Patients in remote areas cannot access quality healthcare.",
        solution: "Our telemedicine module uses low-bandwidth WebRTC streams optimized for 3G/4G Pakistan network conditions.",
      },
    ],
    features: [
      "End-to-end encrypted video consultations",
      "Smart appointment scheduling algorithms",
      "Digital prescriptions with pharmacy integrations",
      "Patient health history and vital records store",
      "Lab report upload and AI-assisted interpretation",
      "Multi-doctor clinic management panel",
    ],
    techStack: ["Flutter", "Node.js", "WebRTC", "PostgreSQL", "Firebase", "AWS HealthLake"],
    metrics: [
      { label: "HIPAA Status", value: "Compliant" },
      { label: "Avg. Wait Time", value: "< 3 Minutes" },
      { label: "App Downloads", value: "100,000+" },
      { label: "Video Quality", value: "Adaptive HD" },
    ],
    caseStudy:
      "A Karachi-based specialist clinic network onboarded 100,000 patients digitally within 6 months. The telemedicine module eliminated 60% of unnecessary in-person visits, reducing both costs and patient wait times.",
  },
  {
    slug: "realestate",
    title: "Real Estate Portals",
    tagline: "Modern property platforms with virtual tours and smart lead capture.",
    icon: Building2,
    iconColor: "text-amber-500",
    accentFrom: "from-amber-600",
    accentTo: "to-yellow-500",
    overview:
      "We engineer premium real estate listing platforms with map-integrated property searches, 3D virtual tour support, automated lead scoring, and agent CRM dashboards — helping property businesses dominate their market digitally.",
    challenges: [
      {
        problem: "Users abandon search because filtering thousands of listings is slow.",
        solution: "We use Elasticsearch-powered filtering with map clustering to instantly narrow 50,000+ properties.",
      },
      {
        problem: "Virtual property tours require expensive third-party platforms.",
        solution: "We build WebGL-powered 360° virtual tours hosted on your own servers, eliminating recurring subscription fees.",
      },
      {
        problem: "Agents miss follow-ups on incoming buyer inquiries.",
        solution: "Our CRM auto-assigns leads, sends WhatsApp alerts to agents, and tracks follow-up statuses in real time.",
      },
    ],
    features: [
      "Map-based property search with clustering",
      "In-browser 360° virtual tour viewer",
      "Intelligent lead scoring and auto-assignment",
      "Agent performance dashboards and leaderboards",
      "Automated WhatsApp and email follow-up triggers",
      "Mortgage calculator and affordability estimator",
    ],
    techStack: ["Next.js", "Three.js", "Elasticsearch", "PostgreSQL", "Google Maps API", "Twilio"],
    metrics: [
      { label: "Lead Conversion", value: "2x Higher" },
      { label: "Search Speed", value: "< 500ms" },
      { label: "Virtual Tours", value: "Fully Embedded" },
      { label: "SEO Ranking", value: "Top 3 Local" },
    ],
    caseStudy:
      "A Karachi luxury real estate agency doubled their inbound inquiry rate within 3 months of launching our custom portal. Their listings now rank top 3 for all DHA and Bahria Town search queries.",
  },
  {
    slug: "saas",
    title: "Custom SaaS Architectures",
    tagline: "From MVP to full-scale SaaS — engineered, deployed, and monetized.",
    icon: Terminal,
    iconColor: "text-cyan-500",
    accentFrom: "from-cyan-600",
    accentTo: "to-sky-500",
    overview:
      "We design, develop, and deploy complete SaaS platforms from scratch — just like our own successful in-house products Ikosender and SmartFormsAI. We handle everything from user auth and subscription billing to analytics dashboards and admin panels.",
    challenges: [
      {
        problem: "MVPs take too long to build and run over budget.",
        solution: "We use our battle-tested SaaS boilerplate reducing time-to-market to 8-12 weeks for an MVP.",
      },
      {
        problem: "Subscription billing systems are complex to build correctly.",
        solution: "We integrate Stripe billing with webhooks, plan upgrades, proration, and dunning management out of the box.",
      },
      {
        problem: "Early SaaS products collapse under sudden traffic spikes.",
        solution: "We deploy on auto-scaling Kubernetes clusters with load balancers, ensuring smooth scaling from day one.",
      },
    ],
    features: [
      "Multi-tenant SaaS database architecture",
      "Stripe subscriptions with plan management",
      "User roles, permissions, and team accounts",
      "In-app analytics and usage tracking dashboards",
      "Admin super-panel for user management",
      "API-first design with Swagger documentation",
    ],
    techStack: ["Next.js", "Go", "PostgreSQL", "Stripe", "Kubernetes", "Docker"],
    metrics: [
      { label: "MVP Delivery", value: "8-12 Weeks" },
      { label: "Architecture", value: "Multi-tenant" },
      { label: "Billing System", value: "Stripe Native" },
      { label: "Scaling", value: "Auto K8s" },
    ],
    caseStudy:
      "We built and launched Ikosender and SmartFormsAI — two fully operational SaaS products — in under 10 weeks each. Both are production-live, actively used, and continuously iterated upon by our in-house team.",
  },
];

const SolutionDetail = () => {
  const { solutionId } = useParams<{ solutionId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const solution = allSolutions.find((s) => s.slug === solutionId);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!solution) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Navbar />
        <div className="text-center mt-32">
          <h2 className="text-3xl font-bold mb-4">Solution Not Found</h2>
          <p className="text-muted-foreground mb-8">The industry solution you are looking for does not exist.</p>
          <Link to="/solutions">
            <Button>Back to Solutions</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = solution.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast({ title: "Please fill in your name and email.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({
      title: "Request Submitted!",
      description: `Your ${solution.title} consultation request has been sent. We'll be in touch shortly.`,
    });
  };

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
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {solution.tagline}
              </p>
              <div className="flex gap-4">
                <a href="#contact-form">
                  <Button size="lg" className="gap-2 shadow-lg shadow-primary/20 font-bold px-8">
                    Request Consultation <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <Link to="/solutions">
                  <Button size="lg" variant="outline" className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> All Solutions
                  </Button>
                </Link>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {solution.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className={`bg-card border border-border/80 rounded-2xl p-6 text-center shadow-xl relative overflow-hidden group hover:border-primary/20 transition-all duration-300`}
                >
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
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                  <span className="text-destructive font-bold text-xs">✕</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{c.problem}</p>
                <div className="flex items-start gap-2 pt-3 border-t border-border/40">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.solution}</p>
                </div>
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
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${solution.accentFrom} ${solution.accentTo} flex items-center justify-center shrink-0`}>
                      <span className="text-white text-[10px] font-bold">✓</span>
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="bg-card border border-border/80 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <Code2 className={`w-5 h-5 ${solution.iconColor}`} />
                <h3 className="font-bold text-lg">Recommended Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {solution.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-secondary border border-border/60 text-sm font-bold text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border/40">
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  Stack selection is tailored to each project's scalability requirements, team preferences, and deployment environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <TrendingUp className={`w-10 h-10 mx-auto mb-4 ${solution.iconColor}`} />
          <h2 className="text-3xl font-extrabold mb-6">Real-World Case Study</h2>
          <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 text-left bg-card rounded-2xl p-6 shadow-lg border border-border/80">
            "{solution.caseStudy}"
          </blockquote>
          <div className="flex justify-center gap-1 mt-6">
            {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-primary text-primary" />)}
          </div>
          <p className="text-xs text-muted-foreground mt-2">Verified client result — Ikotek Solutions</p>
        </div>
      </section>

      {/* Quote Request Form */}
      <section id="contact-form" className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="text-center mb-10">
            <Users className="w-10 h-10 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-extrabold mb-3">Request a Consultation</h2>
            <p className="text-background/60 text-sm leading-relaxed">
              Tell us about your {solution.title} project. Our architects will reach out within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-scale-in">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-xl text-background">Request Received!</h4>
              <p className="text-background/60 text-sm max-w-xs mx-auto">Our team will contact you within 24 hours with a tailored proposal for your {solution.title} project.</p>
              <Button variant="outline" className="border-background/20 text-background hover:bg-background/10" onClick={() => setSubmitted(false)}>
                Send Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your Full Name *"
                className="w-full bg-background/10 border border-background/20 text-background placeholder:text-background/40 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email Address *"
                className="w-full bg-background/10 border border-background/20 text-background placeholder:text-background/40 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-primary"
              />
              <textarea
                rows={4}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder={`Describe your ${solution.title} project goals, current pain points, and timeline expectations...`}
                className="w-full bg-background/10 border border-background/20 text-background placeholder:text-background/40 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-primary resize-none"
              />
              <div className="bg-background/5 border border-background/10 rounded-xl px-5 py-3 flex justify-between items-center text-xs text-background/50">
                <span>Industry</span>
                <span className="font-bold text-background">{solution.title}</span>
              </div>
              <Button
                type="submit"
                size="lg"
                variant="hero"
                className="w-full gap-2 font-bold text-base"
              >
                <Send className="w-4 h-4" /> Submit Consultation Request
              </Button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionDetail;
