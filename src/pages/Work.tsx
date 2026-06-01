import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const WorkPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "FinTech Dashboard Pro",
      category: "Web Development",
      description: "A comprehensive financial analytics dashboard with real-time stock tracking and AI-powered investment insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      gradient: "from-primary to-emerald-600",
      results: ["40% increase in user engagement", "Real-time data processing"],
      tags: ["React", "D3.js", "Node.js"]
    },
    {
      title: "Luxury Estate Vision",
      category: "Web Development",
      description: "Interactive real estate platform featuring 3D virtual tours, neighborhood analytics, and automated lead scoring.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      gradient: "from-blue-600 to-cyan-500",
      results: ["2x lead conversion rate", "Top 3 SEO ranking"],
      tags: ["Next.js", "Three.js", "PostgreSQL"]
    },
    {
      title: "HealthConnect Plus",
      category: "Mobile Development",
      description: "Telemedicine application connecting patients with specialists instantly, featuring secure video consultations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      gradient: "from-rose-500 to-orange-500",
      results: ["100k+ downloads", "HIPAA Compliant"],
      tags: ["Flutter", "WebRTC", "Firebase"]
    },
    {
      title: "EcoSmart Store",
      category: "Web Development",
      description: "Sustainable marketplace with carbon footprint tracking per product and eco-friendly packaging options.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      gradient: "from-green-500 to-teal-400",
      results: ["150% sales growth", "Best Clean Tech Award"],
      tags: ["Shopify", "Vue.js", "Liquid"]
    },
    {
      title: "CyberGuard Sentinel",
      category: "Custom Software",
      description: "AI-driven cybersecurity platform for SME threat detection and automated regulatory compliance reporting.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      gradient: "from-indigo-600 to-purple-600",
      results: ["Zero breaches reported", "SOC2 Certified"],
      tags: ["Python", "TensorFlow", "React"]
    },
    {
      title: "Urban Eats Delivery",
      category: "Mobile Development",
      description: "Hyper-local food delivery service focusing on cloud kitchens and drone delivery integration.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
      gradient: "from-orange-500 to-yellow-500",
      results: ["15 min avg delivery", "50k daily orders"],
      tags: ["React Native", "Go", "Kubernetes"]
    },
    {
      title: "EduTech Master",
      category: "Web Development",
      description: "Adaptive learning platform that creates personalized curriculums based on student performance.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      gradient: "from-violet-600 to-fuchsia-600",
      results: ["30% better grades", "Used by 500 schools"],
      tags: ["Django", "React", "AWS"]
    },
    {
      title: "AutoStream Analytics",
      category: "Custom Software",
      description: "Fleet management system optimized for electric vehicle logistics and charging station route planning.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
      gradient: "from-slate-700 to-slate-500",
      results: ["20% fuel saving", "Real-time tracking"],
      tags: ["Java", "Spring Boot", "IoT"]
    },
    {
      title: "Glow Beauty Brand",
      category: "Digital Marketing",
      description: "360-degree digital transformation for a cosmetics brand including rebranding, social, and influencer strategy.",
      image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&h=600&fit=crop",
      gradient: "from-pink-500 to-rose-400",
      results: ["Viral TikTok Campaign", "400% ROI"],
      tags: ["Social Media", "Content", "Ads"]
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Custom Software", "Digital Marketing"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Projects That <span className="text-gradient-orange">Drive Results</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of successful projects and see how we've helped
              businesses transform their digital presence across Pakistan and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                  : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full animate-fade-up"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-60 transition-opacity duration-500 mix-blend-overlay`} />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="hero" className="scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-100">
                      View Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-md mb-2">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="pt-4 border-t border-border mt-auto">
                    <div className="grid grid-cols-2 gap-4">
                      {project.results.map((result) => (
                        <div key={result} className="flex items-center gap-2 text-xs font-medium text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-background/70 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get your free project proposal today.
          </p>
          <Link to="/quote">
            <Button variant="hero" className="group">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkPage;
