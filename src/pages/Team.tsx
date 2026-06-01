import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Linkedin, Twitter, Github, Rocket, Heart, Lightbulb, Users, MapPin, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Team = () => {
    const team = [
      {
      name: "Muhammad Hassan Khan",
      role: "CMO & Marketing Head",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFIFY5w3TcN0A/profile-displayphoto-scale_400_400/B4DZwgMyGdJQAk-/0/1770066749835?e=1780531200&v=beta&t=8mNSgeFmOB4LeQarcWuuepCYNCWYolUzDR5z0ak-veo",
    },
    
     {
      name: "Muhammad Raza Tariq",
      role: "CEO & Founder",
      image: "https://liquid-green-kxg14orgph.edgeone.app/2.png",
    },
  
    ];

    const values = [
        {
            icon: Lightbulb,
            title: "Innovation First",
            description: "We constantly explore new technologies to keep our clients ahead of the curve."
        },
        {
            icon: Heart,
            title: "Client Passion",
            description: "Your success is our heartbeat. We treat every project as our own legacy."
        },
        {
            icon: Users,
            title: "Team Synergy",
            description: "We believe in the power of collaboration and diverse perspectives."
        },
        {
            icon: Rocket,
            title: "Relentless Growth",
            description: "We never stop learning and evolving our processes for better results."
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6 animate-fade-in">
                            Meet The Team
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in animation-delay-100">
                            The Minds Behind <span className="text-gradient-orange">Innovation</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-10 animate-fade-in animation-delay-200">
                            A dedicated group of visionaries and builders committed to transforming
                            the digital landscape of Pakistan and beyond.
                        </p>
                    </div>
                </div>
            </section>

          {/* Team */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-muted-foreground">
              The talented people behind Ikotek Solutions who make the magic happen.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center group w-full md:w-[calc(33.333%-1.5rem)] min-w-[280px]">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Core Values Section */}
            <section className="py-24 bg-background border-y border-border/50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Values</h2>
                        <p className="text-lg text-muted-foreground">The principles that define our culture and drive our results.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <value.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Life at Ikotek Section */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">Culture & Environment</span>
                            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8">Life at <span className="text-gradient-orange">Ikotek Solutions</span></h2>
                            <div className="space-y-6 text-muted-foreground text-lg">
                                <p>We nurture an environment where creativity meets technical excellence. At Ikotek, we don't just build software; we build careers and lifelong friendships.</p>
                                <p>Our team thrives on solving complex problems with simple, elegant solutions. We believe in high ownership, zero bureaucracy, and continuous innovation.</p>
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span className="text-foreground font-medium text-sm">Hybrid Workspace</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span className="text-foreground font-medium text-sm">Learning Budget</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span className="text-foreground font-medium text-sm">Weekly Tech Talks</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span className="text-foreground font-medium text-sm">Fun Fridays</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&fit=crop" alt="Culture" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary rounded-3xl -z-10 blur-2xl opacity-20" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Our Journey Section */}
            <section className="py-24 bg-foreground text-background">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-6xl font-bold mb-8">Join Our Journey</h2>
                    <p className="text-xl text-background/70 mb-12 max-w-2xl mx-auto">
                        We're always looking for talented individuals who are passionate about building the future of digital solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact">
                            <Button variant="hero" size="xl" className="group h-16 px-10 rounded-full text-lg">
                                <Briefcase className="w-5 h-5 mr-3" />
                                Explore Careers
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Team;









