
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with gradient and overlay */}
            <div className="absolute inset-0 bg-primary z-0">
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 dot-pattern opacity-20" />
            </div>

            <div className="container mx-auto relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
                    Ready to Digitally Transform Your Business?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
                    Join 500+ happy clients who have trusted Ikotek Solutions with their digital journey.
                    Let's build something extraordinary together.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/quote">
                        <Button size="xl" className="bg-background text-primary hover:bg-secondary border-none text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                            Get Your Free Proposal
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button size="xl" variant="outline" className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-white text-lg px-8 h-14 rounded-full">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
