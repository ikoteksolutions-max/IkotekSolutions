import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "Enterprise E-Commerce Platform",
      category: "Web Development",
      description: "Full-stack e-commerce solution with real-time inventory and payment integration",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
      gradient: "from-primary to-[hsl(35,99%,55%)]",
    },
    {
      title: "Healthcare Management System",
      category: "Custom Software",
      description: "Comprehensive hospital management software with patient tracking and billing",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      gradient: "from-[hsl(200,70%,50%)] to-[hsl(220,70%,60%)]",
    },
    {
      title: "Fitness & Wellness App",
      category: "Mobile Development",
      description: "Cross-platform fitness tracking with AI-powered workout recommendations",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      gradient: "from-[hsl(142,70%,45%)] to-[hsl(160,70%,50%)]",
    },
    {
      title: "Real Estate Platform",
      category: "Web Development",
      description: "Property listing platform with virtual tours and smart search functionality",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      gradient: "from-[hsl(270,70%,55%)] to-[hsl(290,70%,60%)]",
    },
  ];

  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              Our Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Ikotek Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover how we help businesses transform and grow with our innovative digital solutions.
            </p>
          </div>
          <Link to="/work">
            <Button variant="outline" className="mt-6 md:mt-0">
              View All Projects
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              to="/work"
              className="group bg-card border border-border rounded-2xl p-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
            >
              {/* Card Cover (Image + Gradient Overlay) */}
              <div className="h-64 rounded-xl relative overflow-hidden shrink-0">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity z-10`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-background/60 backdrop-blur-md rounded-full text-xs font-semibold text-foreground border border-white/10 shadow-sm">
                    Ikotek Solutions
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-foreground uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 line-clamp-2 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center text-primary font-medium group/link mt-auto">
                  View Case Study
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Portfolio;
