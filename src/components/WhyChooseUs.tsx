
import { CheckCircle2, Clock, Users, ShieldCheck, Zap } from "lucide-react";

const WhyChooseUs = () => {
    const features = [
        {
            icon: Zap,
            title: "Zero-Disruption Transition",
            description: "We digitize and automate your operations without interrupting your ongoing daily physical sales or store activities."
        },
        {
            icon: Users,
            title: "Custom-Tailored For Your Niche",
            description: "Whether you run retail, a clinic, a restaurant, or distribution, our automation logic is built specifically for your physical workflows."
        },
        {
            icon: ShieldCheck,
            title: "Accurate POS & Inventory Sync",
            description: "Never worry about stockouts or lost records. Cloud-synchronized databases keep your physical shelves and online sales 100% aligned."
        },
        {
            icon: Clock,
            title: "Rapid 14-Day Deployment",
            description: "Go from completely offline to an automated online machine with 24/7 WhatsApp AI ordering in as little as 2 weeks."
        }
    ];

    return (
        <section className="py-24 bg-secondary">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
                            Why Choose Ikotek
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                            We Turn Traditional Businesses Into Digital Leaders
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            We don't just sell software — we study your physical store operations, eliminate manual bottlenecks, and build automated systems that multiply your revenue.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {["Zero Sales Disruption", "100% Automated Orders", "Live Inventory Sync", "Dedicated Staff Training"].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span className="font-medium text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className="p-6 bg-card border border-border rounded-2xl hover:shadow-xl transition-all duration-300 h-full"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
