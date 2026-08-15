import { useState, useEffect } from "react";
import { Globe, Search, Megaphone, Code, Palette, Smartphone, ArrowRight, Check, Loader2, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { useSearchParams } from "react-router-dom";

const WEB3FORMS_ACCESS_KEY = "cb5ea38c-2cec-448f-968c-9f3ae698cae0";

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20).optional(),
  company: z.string().trim().max(100).optional(),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  project_details: z.string().trim().max(2000).optional(),
});

const QuotePage = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "",
    project_details: "",
  });
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    const service = searchParams.get("service");
    const plan = searchParams.get("plan");
    const price = searchParams.get("price");

    if (service) {
      // Normalize service labels to match the ones in our array
      const serviceNormalized = service.replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

      // Special case for UI/UX
      const finalService = service.toLowerCase().includes('ui/ux') ? "UI/UX Design" : service;

      setSelectedServices([finalService]);
    }
    if (plan) {
      setSelectedPlan(plan);
    }
    if (price) {
      setFormData(prev => ({ ...prev, budget: price }));
    }

    // If we have all the info from pricing, jump straight to contact info
    if (service && plan && price) {
      setStep(3);
    } else if (service) {
      setStep(2);
    }
  }, [searchParams]);

  const services = [
    { icon: Globe, label: "Web Development", color: "text-primary" },
    { icon: Search, label: "SEO Optimization", color: "text-[hsl(142,70%,45%)]" },
    { icon: Megaphone, label: "Digital Marketing", color: "text-[hsl(270,70%,55%)]" },
    { icon: Code, label: "Custom Software", color: "text-[hsl(200,70%,50%)]" },
    { icon: Palette, label: "UI/UX Design", color: "text-[hsl(0,70%,55%)]" },
    { icon: Smartphone, label: "Mobile Development", color: "text-[hsl(45,90%,50%)]" },
    { icon: Bot, label: "AI Agent Development", color: "text-orange-500" },
  ];

  const budgets = [
    "PKR 50K - 100K",
    "PKR 100K - 250K",
    "PKR 250K - 500K",
    "PKR 500K - 1M",
    "PKR 1M+",
  ];

  const timelines = [
    "Less than 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Ongoing / Flexible",
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

    const data = {
      ...formData,
      services: selectedServices,
    };

    const validation = quoteSchema.safeParse(data);
    if (!validation.success) {
      toast({
        title: "Validation Error",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Web3Forms
      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Quote Request - Ikotek Solutions",
          from_name: "Ikotek Solutions Website",
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone?.trim() || "Not provided",
          company: formData.company?.trim() || "Not provided",
          services: selectedServices.join(", "),
          plan: selectedPlan || "Not specified",
          budget: formData.budget || "Not specified",
          timeline: formData.timeline || "Not specified",
          project_details: formData.project_details?.trim() || "Not provided",
        }),
      });

      const web3Result = await web3Response.json();

      // Also save to Supabase
      await supabase.from("quote_requests").insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone?.trim() || null,
          company: formData.company?.trim() || null,
          services: selectedServices,
          budget: formData.budget || null,
          timeline: formData.timeline || null,
          project_details: formData.project_details?.trim() || null,
        },
      ]);

      if (web3Result.success) {
        toast({
          title: "Quote Request Submitted!",
          description: "We'll send you a detailed proposal within 24 hours.",
        });

        // Reset form
        setStep(1);
        setSelectedServices([]);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          budget: "",
          timeline: "",
          project_details: "",
        });
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
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              Get a Quote
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get Your <span className="text-gradient-orange">Free Proposal</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tell us about your project and we'll send you a detailed proposal
              with timeline and pricing within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= s
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                    }`}
                >
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 md:w-24 h-1 rounded-full transition-colors ${step > s ? "bg-primary" : "bg-secondary"
                      }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm text-muted-foreground max-w-md mx-auto">
            <span>Services</span>
            <span>Details</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12">
        <div className="container mx-auto max-w-3xl">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Select Services */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                  What services do you need?
                </h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {services.map((service) => (
                    <button
                      type="button"
                      key={service.label}
                      onClick={() => toggleService(service.label)}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${selectedServices.includes(service.label)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                        }`}
                    >
                      <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center`}>
                        <service.icon className={`w-6 h-6 ${service.color}`} />
                      </div>
                      <span className="font-medium text-foreground">{service.label}</span>
                      {selectedServices.includes(service.label) && (
                        <Check className="w-5 h-5 text-primary ml-auto" />
                      )}
                    </button>
                  ))}
                </div>
                <Button
                  type="button"
                  variant="hero"
                  className="w-full"
                  onClick={() => setStep(2)}
                  disabled={selectedServices.length === 0}
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            )}

            {/* Step 2: Project Details */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Tell us about your project
                </h2>

                <div className="space-y-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {budgets.map((budget) => (
                        <button
                          type="button"
                          key={budget}
                          onClick={() => setFormData({ ...formData, budget })}
                          className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${formData.budget === budget
                            ? "border-primary bg-primary/5 text-foreground"
                            : "border-border text-muted-foreground hover:border-primary/50"
                            }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>




                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    variant="hero"
                    className="flex-1"
                    onClick={() => setStep(3)}
                  >
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {step === 3 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Your Contact Information
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        maxLength={255}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        placeholder="+92 XXX XXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        maxLength={20}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        maxLength={100}
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Timeline
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {timelines.map((timeline) => (
                        <button
                          type="button"
                          key={timeline}
                          onClick={() => setFormData({ ...formData, timeline })}
                          className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${formData.timeline === timeline
                            ? "border-primary bg-primary/5 text-foreground"
                            : "border-border text-muted-foreground hover:border-primary/50"
                            }`}
                        >
                          {timeline}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Details / Message (Optional)
                    </label>
                    <Textarea
                      placeholder="Tell us more about your requirements, specific features, or questions you have..."
                      rows={4}
                      value={formData.project_details}
                      onChange={(e) =>
                        setFormData({ ...formData, project_details: e.target.value })
                      }
                      className="resize-none"
                      maxLength={2000}
                    />
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-secondary rounded-xl p-6 mb-8">
                  <h3 className="font-semibold text-foreground mb-4">Request Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Services:</span>
                      <span className="text-foreground font-medium">
                        {selectedServices.join(", ")}
                      </span>
                    </div>
                    {selectedPlan && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Selected Plan:</span>
                        <span className="text-primary font-bold">{selectedPlan}</span>
                      </div>
                    )}
                    {formData.budget && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Price/Budget:</span>
                        <span className="text-foreground font-medium">{formData.budget}</span>
                      </div>
                    )}
                    {formData.timeline && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Timeline:</span>
                        <span className="text-foreground font-medium">{formData.timeline}</span>
                      </div>
                    )}
                    {formData.project_details && (
                      <div className="pt-2 border-t border-border mt-2">
                        <span className="text-muted-foreground block mb-1">Project Details:</span>
                        <p className="text-foreground line-clamp-3 italic">"{formData.project_details}"</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </Button>
                  <Button type="submit" variant="hero" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section >

      <Footer />
    </div >
  );
};

export default QuotePage;
