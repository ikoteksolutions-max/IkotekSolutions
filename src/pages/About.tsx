import { Users, Target, Award, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const AboutPage = () => {


  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to helping businesses succeed in the digital landscape with innovative solutions.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships based on trust and results.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer service.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about technology and its power to transform businesses.",
    },
  ];

  const stats = [
    { value: "120+", label: "Projects Delivered" },
    { value: "90+", label: "Happy Clients" },
    { value: "2025", label: "Year Established" },
    { value: "20+", label: "Industry Experts" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              We're a Team of <span className="text-gradient-orange">Digital Innovators</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Since 2025, we've been helping businesses transform their digital presence
              and achieve remarkable growth through innovative technology solutions from Karachi to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ikotek Solutions was founded in 2025 in Karachi with a simple mission: to help businesses
                  thrive in the digital age. What started as a focused custom software
                  agency has grown into a full-service digital solutions company.
                </p>
                <p>
                  Over the years, we've had the privilege of working with startups,
                  small businesses, and enterprise clients across Pakistan and internationally.
                  Our diverse experience has shaped our approach to digital transformation.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for over 300 clients
                  worldwide, delivering innovative solutions that drive real results.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              These principles guide everything we do and how we work with our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-background/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your digital presence.
          </p>
          <Link to="/contact">
            <Button variant="hero" className="group">
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
