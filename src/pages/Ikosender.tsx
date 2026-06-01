import React, { useState } from "react";
import { Send, Key, FileText, Users, Play, HelpCircle, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IkosenderPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [sendingSimulated, setSendingSimulated] = useState(false);
  const [sendingLogs, setSendingLogs] = useState<string[]>([]);

  const steps = [
    {
      number: 1,
      title: "Login Securely",
      icon: Key,
      description: "Log in to the tool using our simple, secure authentication interface.",
      detail: "Enter your username/password on the Ikosender portal to access your private dashboard. No complex API keys required at start.",
    },
    {
      number: 2,
      title: "Add SMTP Credentials",
      icon: ShieldCheck,
      description: "Provide your sending email and App Password (or SMTP server details).",
      detail: "Securely input your Sender Email (e.g. Gmail) and app password. This app password ensures we send emails from your own server, keeping deliverability high.",
    },
    {
      number: 3,
      title: "Compose & Select Template",
      icon: FileText,
      description: "Write your email content manually or pick from gorgeous pre-saved templates.",
      detail: "Write a high-converting Subject Line, custom HTML templates, or plain text bodies. You can dynamically personalize fields in the text.",
    },
    {
      number: 4,
      title: "Upload Recipients & Go!",
      icon: Users,
      description: "Paste a comma-separated list of target emails, click Send, and monitor live logs.",
      detail: "Input 1000+ recipient emails in one run (either upload a CSV or paste lists). Click 'Go' and watch Ikosender dispatch your emails instantly.",
    },
  ];

  const triggerSimulation = () => {
    if (sendingSimulated) return;
    setSendingSimulated(true);
    setSendingLogs(["Initializing SMTP connection...", "SMTP Connection established successfully."]);
    
    const recipients = [
      "contact@google.com",
      "hiring@microsoft.com",
      "support@amazon.com",
      "deals@meta.com",
      "hello@ikotek.com"
    ];

    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < recipients.length) {
        setSendingLogs(prev => [
          ...prev, 
          `[${new Date().toLocaleTimeString()}] Sending mail to: ${recipients[currentLogIndex]} ... SUCCESS`
        ]);
        currentLogIndex++;
      } else {
        setSendingLogs(prev => [...prev, "--- Bulk sending task completed. 5/5 delivered ---"]);
        clearInterval(interval);
        setSendingSimulated(false);
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-blue-950/20 via-transparent to-transparent">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-600/10 to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 font-semibold text-sm mb-6 animate-fade-in">
                <Send className="w-4 h-4" /> Bulk Email SaaS Product
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Send <span className="text-gradient-orange">1,000+ Mails</span> At Once in Just 4 Steps!
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Meet **Ikosender**, our custom in-house SaaS built to automate mass email outreach. Reach thousands of potential clients, subscribers, or partners directly from your custom inbox with no rate limits.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://ikosender.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2 font-bold px-8 shadow-lg shadow-blue-500/20">
                    Open Live App <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href="#demo" className="scroll-smooth">
                  <Button size="lg" variant="outline">
                    See How It Works
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl filter blur-[50px] pointer-events-none" />
              {/* Product Dashboard Visualizer */}
              <div className="relative bg-card border border-border/80 rounded-3xl p-6 shadow-2xl">
                <div className="flex justify-between items-center border-b border-border/40 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5 text-blue-500 animate-bounce" />
                    <span className="font-bold text-sm">Ikosender Live Stats</span>
                  </div>
                  <span className="px-2.5 py-1 text-xs rounded-full bg-green-500/15 text-green-500 font-bold">Active Servers: 4/4</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-secondary/40 border border-border/40 p-4 rounded-2xl text-center">
                    <p className="text-xs text-muted-foreground font-semibold">Total Outgoing Emails</p>
                    <p className="text-3xl font-extrabold text-foreground mt-1">2.4M+</p>
                  </div>
                  <div className="bg-secondary/40 border border-border/40 p-4 rounded-2xl text-center">
                    <p className="text-xs text-muted-foreground font-semibold">Average Send Speed</p>
                    <p className="text-3xl font-extrabold text-foreground mt-1">60ms / mail</p>
                  </div>
                </div>

                {/* Simulated delivery graph */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Hourly Dispatch Traffic</span>
                    <span>100% capacity</span>
                  </div>
                  <div className="h-16 flex items-end gap-1.5 bg-secondary/20 p-2 rounded-xl border border-border/30">
                    <div className="flex-1 bg-blue-500/30 rounded-sm h-[30%]" />
                    <div className="flex-1 bg-blue-500/40 rounded-sm h-[50%]" />
                    <div className="flex-1 bg-blue-500/60 rounded-sm h-[40%]" />
                    <div className="flex-1 bg-blue-500/70 rounded-sm h-[75%]" />
                    <div className="flex-1 bg-blue-500 rounded-sm h-[90%] shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section id="demo" className="py-20 bg-secondary/30 border-t border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-500 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full">Interactive Demo</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6">Learn The 4-Step Process</h2>
            <p className="text-muted-foreground">See how incredibly fast it is to fire up your marketing campaigns. Click through the steps below to see the screen visualizer in action.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Step Selection Accordion (LHS) */}
            <div className="lg:col-span-5 space-y-4">
              {steps.map((step) => {
                const StepIcon = step.icon;
                const isSelected = activeStep === step.number;
                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(step.number)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex gap-4 ${
                      isSelected
                        ? "bg-card border-blue-500 shadow-xl shadow-blue-500/5 scale-[1.02]"
                        : "bg-card/40 border-border/80 hover:border-blue-500/40 hover:bg-card/60"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? "bg-blue-600 text-white" : "bg-secondary text-muted-foreground"
                    }`}>
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-blue-500">Step {step.number}</span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                      </div>
                      <h4 className="font-bold text-base mt-0.5 text-foreground">{step.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{step.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Interactive Mockup Visualizer (RHS) */}
            <div className="lg:col-span-7 bg-card border border-border/80 rounded-3xl p-6 shadow-2xl relative min-h-[400px] flex flex-col justify-between">
              {/* Window Bar */}
              <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-6">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-secondary/60 px-3 py-1 rounded-md">
                  ikosender.app &gt; step-{activeStep}-visualizer
                </span>
                <div className="w-6" />
              </div>

              {/* Render dynamic screens based on selected step */}
              <div className="flex-1 flex flex-col justify-center">
                {activeStep === 1 && (
                  <div className="max-w-sm mx-auto w-full space-y-4 animate-fade-in">
                    <h5 className="font-bold text-lg text-center text-foreground">Sign In to Ikosender</h5>
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs text-muted-foreground font-semibold block mb-1">Email Address</label>
                        <input type="text" disabled placeholder="admin@ikotek.com" className="w-full bg-secondary/50 border border-border/60 rounded-xl px-4 py-3 text-sm" />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground font-semibold block mb-1">Password</label>
                        <input type="password" disabled value="••••••••••••" className="w-full bg-secondary/50 border border-border/60 rounded-xl px-4 py-3 text-sm" />
                      </div>
                      <Button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl cursor-default" onClick={() => setActiveStep(2)}>
                        Sign In Securely
                      </Button>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="max-w-md mx-auto w-full space-y-4 animate-fade-in">
                    <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 p-3 rounded-xl text-xs">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>App Passwords keep your main password secure and prevent spam classification.</span>
                    </div>
                    <h5 className="font-bold text-base text-foreground">SMTP & Mail Server Connection</h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] text-muted-foreground font-semibold block mb-1">Sender Email</label>
                        <input type="text" disabled placeholder="sender@gmail.com" className="w-full bg-secondary/50 border border-border/60 rounded-xl px-3 py-2 text-xs" />
                      </div>
                      <div>
                        <label className="text-[10px] text-muted-foreground font-semibold block mb-1">App Password</label>
                        <input type="password" disabled value="xxxx-xxxx-xxxx-xxxx" className="w-full bg-secondary/50 border border-border/60 rounded-xl px-3 py-2 text-xs" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <input type="text" disabled placeholder="Host: smtp.gmail.com" className="bg-secondary/50 border border-border/60 rounded-lg px-2 py-1 text-[10px] text-center" />
                      <input type="text" disabled placeholder="Port: 465" className="bg-secondary/50 border border-border/60 rounded-lg px-2 py-1 text-[10px] text-center" />
                      <input type="text" disabled placeholder="SSL: Yes" className="bg-secondary/50 border border-border/60 rounded-lg px-2 py-1 text-[10px] text-center" />
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="w-full space-y-3 animate-fade-in">
                    <h5 className="font-bold text-base text-foreground">Compose Email & Choose Templates</h5>
                    <input type="text" disabled placeholder="Subject: 🚀 Accelerate Your E-Commerce Sales in Karachi Today!" className="w-full bg-secondary/50 border border-border/60 rounded-xl px-4 py-2.5 text-xs font-semibold" />
                    <div className="bg-secondary/50 border border-border/60 rounded-xl p-3 text-[11px] font-mono min-h-[100px] text-muted-foreground">
                      &lt;p&gt;Dear &#123;&#123;name&#125;&#125;,&lt;/p&gt;<br />
                      &lt;p&gt;We noticed your shop could double its page performance using React/Next.js. Let's discuss details!&lt;/p&gt;<br />
                      &lt;p&gt;Best, &lt;br /&gt; Ikotek Team&lt;/p&gt;
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-500 text-[10px] font-semibold border border-blue-500/20">Template: Sales-Cold Outreach</span>
                      <span className="px-2.5 py-1 rounded bg-secondary text-muted-foreground text-[10px] border border-border/60 cursor-default">View HTML Preview</span>
                    </div>
                  </div>
                )}

                {activeStep === 4 && (
                  <div className="w-full space-y-4 animate-fade-in">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-bold text-xs text-foreground mb-2">Recipient Mail List (CSV or List)</h5>
                        <textarea disabled className="w-full bg-secondary/50 border border-border/60 rounded-xl p-2 text-[10px] h-[100px] font-mono" placeholder="email1@gmail.com, name1&#10;email2@gmail.com, name2&#10;email3@gmail.com, name3" />
                      </div>
                      <div>
                        <h5 className="font-bold text-xs text-foreground mb-2 flex items-center justify-between">
                          <span>Live Console Logs</span>
                          <Button size="sm" className="h-6 px-2 text-[9px] bg-blue-600 hover:bg-blue-700" onClick={triggerSimulation}>
                            <Play className="w-2.5 h-2.5 mr-1" /> Run Demo
                          </Button>
                        </h5>
                        <div className="bg-black text-green-500 p-2.5 rounded-xl text-[9px] font-mono h-[100px] overflow-y-auto border border-border/40 scrollbar-thin">
                          {sendingLogs.length === 0 ? (
                            <span className="text-gray-500 italic">Click "Run Demo" to simulate sending...</span>
                          ) : (
                            sendingLogs.map((log, lIdx) => (
                              <div key={lIdx} className="leading-tight">{log}</div>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom detail text */}
              <div className="mt-6 pt-4 border-t border-border/40 text-center">
                <p className="text-xs text-muted-foreground">{steps[activeStep - 1].detail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specifications & Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold">Product Specifications</h2>
            <p className="text-muted-foreground mt-2">Why Ikosender outperforms generic mail chimp services for cold campaigns.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-card border border-border/60 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">Infinite Recipients</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Unlike paid services that charge per contact list size, Ikosender allows you to import and send to lists of any size with zero premium fees.</p>
            </div>
            <div className="p-6 bg-card border border-border/60 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">High Deliverability</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">By connecting directly to your custom GSuite, SMTP, or Outlook server, emails carry authentic SPF/DKIM details straight to the Inbox folder.</p>
            </div>
            <div className="p-6 bg-card border border-border/60 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                <Key className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">Secure Credential Store</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Your SMTP credentials are saved in local memory or encrypted parameters, protecting your systems from outside breaches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to Send Your First Campaign?</h2>
          <p className="text-lg text-background/60 mb-8 max-w-2xl mx-auto">Launch Ikosender right now on Vercel. Input your credentials, upload your target email lists, and trigger sending within minutes.</p>
          <div className="flex justify-center gap-4">
            <a href="https://ikosender.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="hero" className="gap-2 font-bold px-8">
                Launch Live App <Send className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IkosenderPage;
