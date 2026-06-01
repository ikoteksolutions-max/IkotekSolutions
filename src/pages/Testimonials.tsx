import React, { useState } from "react";
import { Star, MessageCircle, Heart, UserCheck, ThumbsUp, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { useWeb3Form } from "@/hooks/useWeb3Form";

interface Review {
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  category: "web" | "app" | "marketing" | "automation";
  verified: boolean;
}

const TestimonialsPage = () => {
  const { toast } = useToast();
  const { submitForm, isSubmitting } = useWeb3Form({ subject: "New Client Review Submission - Ikotek Solutions" });
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "Ahmed Raza",
      role: "Founder & Director",
      company: "Apex Luxury Estate",
      rating: 5,
      text: "Ikotek Solutions built our property platform and integrated immersive virtual tours. Our inbound sales inquiries doubled in Karachi. Highly recommended team!",
      category: "web",
      verified: true,
    },
    {
      name: "Sophia Carter",
      role: "Product Manager",
      company: "HealthConnect UK",
      rating: 5,
      text: "The telemedicine application they developed runs securely and meets compliance standards perfectly. Communication was smooth, delivery was right on time.",
      category: "app",
      verified: true,
    },
    {
      name: "Bilal Hussain",
      role: "Marketing Head",
      company: "Glow Cosmetics",
      rating: 5,
      text: "Their team ran a full SEO campaign that pushed our website to page 1 of search engine results for all target queries. Sales went up by 150%. Excellent team!",
      category: "marketing",
      verified: true,
    },
    {
      name: "Daniyal Shah",
      role: "Operations Chief",
      company: "Logistics Hub",
      rating: 4,
      text: "Automated our database entries and client invoice triggers using Python models. Cut down manual processing times by several hours each week.",
      category: "automation",
      verified: true,
    },
    {
      name: "Fatima Noor",
      role: "Founder",
      company: "EcoSmart Boutique",
      rating: 5,
      text: "A beautiful, premium e-commerce design with carbon footprint indicators. Client feedback has been absolutely stellar regarding the shopping flow.",
      category: "web",
      verified: true,
    },
  ]);

  // Form states for adding review
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newCategory, setNewCategory] = useState<"web" | "app" | "marketing" | "automation">("web");
  const [newText, setNewText] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newText) {
      toast({
        title: "Validation Error",
        description: "Please fill out your name and feedback message.",
        variant: "destructive",
      });
      return;
    }

    const success = await submitForm({
      name: newName,
      role: newRole || "Client Partner",
      company: newCompany || "Independent",
      rating: String(newRating),
      service_type: newCategory,
      review_text: newText,
    });

    if (success) {
      const submission: Review = {
        name: newName,
        role: newRole || "Client Partner",
        company: newCompany || "Independent",
        rating: newRating,
        text: newText,
        category: newCategory,
        verified: false,
      };
      setReviews([submission, ...reviews]);
      setFormSubmitted(true);
      toast({
        title: "Review Submitted!",
        description: "Thank you for your valuable feedback. It has been listed below.",
      });
      setNewName("");
      setNewRole("");
      setNewCompany("");
      setNewText("");
    } else {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    }
  };

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Portals" },
    { id: "app", label: "Mobile Apps" },
    { id: "marketing", label: "SEO & Growth" },
    { id: "automation", label: "SaaS & Automation" },
  ];

  const filteredReviews = selectedFilter === "all"
    ? reviews
    : reviews.filter(r => r.category === selectedFilter);

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
              <Star className="w-4 h-4 fill-primary text-primary animate-pulse" /> Client Feedback
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">
              What Our <span className="text-gradient-orange">Clients Say</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We build long-term partnerships built on performance, transparent design systems, and software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Rating Dashboard Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-border/80 rounded-3xl p-6 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <span className="text-5xl font-extrabold text-foreground">4.9</span>
              <span className="text-xl text-muted-foreground"> / 5.0</span>
              <div className="flex gap-1 justify-center md:justify-start mt-2 mb-3">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground font-medium">Based on 300+ worldwide project submissions</p>
            </div>

            <div className="flex-1 w-full space-y-2">
              <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                <span className="w-12 text-right">5 Stars</span>
                <div className="flex-1 bg-secondary rounded-full h-2.5 overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "94%" }} />
                </div>
                <span className="w-8">94%</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                <span className="w-12 text-right">4 Stars</span>
                <div className="flex-1 bg-secondary rounded-full h-2.5 overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "5%" }} />
                </div>
                <span className="w-8">5%</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                <span className="w-12 text-right">3 Stars</span>
                <div className="flex-1 bg-secondary rounded-full h-2.5 overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "1%" }} />
                </div>
                <span className="w-8">1%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Reviews Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  selectedFilter === f.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-muted-foreground hover:bg-primary/10 border border-border/40"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-card/45 backdrop-blur-md border border-border/80 rounded-2xl p-6 shadow-lg flex flex-col justify-between group hover:border-primary/20 transition-all duration-300"
              >
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: review.rating }).map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 text-muted-foreground/30" />
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed italic mb-6">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 flex justify-between items-center mt-auto">
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{review.name}</h4>
                    <p className="text-[10px] text-muted-foreground">{review.role}, {review.company}</p>
                  </div>
                  {review.verified && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <UserCheck className="w-3 h-3" /> Verified Project
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Submission Widget */}
      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-card border border-border/80 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="text-center mb-6">
              <Heart className="w-8 h-8 text-primary fill-primary/10 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">Leave Us a Review</h3>
              <p className="text-xs text-muted-foreground mt-1">We value client feedback immensely to enhance our engineering standards.</p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-4 animate-scale-in">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 className="w-6 h-6 animate-pulse" />
                </div>
                <h4 className="font-bold text-lg">Thank You for Your Feedback!</h4>
                <p className="text-xs text-muted-foreground">Your review has been successfully submitted and listed in the reviews dashboard.</p>
                <Button variant="outline" size="sm" onClick={() => setFormSubmitted(false)}>
                  Submit Another Review
                </Button>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs font-semibold">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] text-muted-foreground block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="e.g. Asad Siddiqui"
                      className="w-full bg-secondary/50 border border-border/60 rounded-xl px-4 py-3 text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-muted-foreground block mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={newCompany}
                      onChange={(e) => setNewCompany(e.target.value)}
                      placeholder="e.g. Prime Logistics"
                      className="w-full bg-secondary/50 border border-border/60 rounded-xl px-4 py-3 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] text-muted-foreground block mb-1">Designation / Role</label>
                    <input
                      type="text"
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      placeholder="e.g. Chief Executive Officer"
                      className="w-full bg-secondary/50 border border-border/60 rounded-xl px-4 py-3 text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-muted-foreground block mb-1">Rating *</label>
                    <select
                      value={newRating}
                      onChange={(e) => setNewRating(Number(e.target.value))}
                      className="w-full bg-secondary/50 border border-border/60 rounded-xl px-4 py-3 text-xs text-muted-foreground font-semibold"
                    >
                      <option value={5}>5 Stars ★★★★★ (Excellent)</option>
                      <option value={4}>4 Stars ★★★★☆ (Good)</option>
                      <option value={3}>3 Stars ★★★☆☆ (Average)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-muted-foreground block mb-1">Service Type</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full bg-secondary/50 border border-border/60 rounded-xl px-4 py-3 text-xs text-muted-foreground font-semibold"
                  >
                    <option value="web">Web Portals & Dev</option>
                    <option value="app">Mobile Apps</option>
                    <option value="marketing">SEO & Marketing Campaigns</option>
                    <option value="automation">SaaS Automation systems</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] text-muted-foreground block mb-1">Feedback Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder="Describe your project experience and the results delivered by our engineering team..."
                    className="w-full bg-secondary/50 border border-border/60 rounded-xl p-3 text-xs"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-xl gap-2 mt-2">
                  {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send Feedback Rating</>}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
