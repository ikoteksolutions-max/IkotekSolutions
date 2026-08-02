import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
    const positions = [
        {
            title: "Senior Full Stack Developer",
            department: "Engineering",
            location: "Karachi, Pakistan (Hybrid)",
            type: "Full-time",
            description: "We are looking for an experienced Full Stack Developer to lead our web development projects.",
        },
        {
            title: "UI/UX Designer",
            department: "Design",
            location: "Remote",
            type: "Contract",
            description: "Create beautiful and intuitive user interfaces for our global clients.",
        },
        {
            title: "Digital Marketing Specialist",
            department: "Marketing",
            location: "Karachi, Pakistan",
            type: "Full-time",
            description: "Drive growth and engagement through strategic digital marketing campaigns.",
        },
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
                            Join Our Team
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in animation-delay-100">
                            Build the <span className="text-gradient-orange">Future</span> With Us
                        </h1>
                        <p className="text-xl text-muted-foreground mb-10 animate-fade-in animation-delay-200">
                            We're on a mission to revolutionize the digital landscape.
                            If you're passionate about technology and innovation, we want to hear from you.
                        </p>
                        <Button variant="hero" className="animate-fade-in animation-delay-300">
                            View Openings
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {positions.map((job, index) => (
                            <div
                                key={index}
                                className="bg-background border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors group cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-medium px-3 py-1 bg-secondary rounded-full">
                                        {job.department}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{job.title}</h3>
                                <p className="text-muted-foreground mb-6 text-sm">{job.description}</p>
                                <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-6">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        {job.location}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        {job.type}
                                    </div>
                                </div>
                                <a
                                    href={`https://wa.me/923433452279?text=${encodeURIComponent(`Hello Ikotek Solutions, I am interested in applying for the ${job.title} position found on your careers page.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                                        Apply Now
                                    </Button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Careers;
