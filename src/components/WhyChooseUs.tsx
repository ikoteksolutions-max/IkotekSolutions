
import { CheckCircle2, Clock, Award, Users, ShieldCheck, Zap } from "lucide-react";

const WhyChooseUs = () => {
    const features = [
        {
            icon: Clock,
            title: "On-Time Delivery",
            description: "We respect your time. Our agile methodology ensures timely delivery of milestones and final deployment without compromising quality."
        },
        {
            icon: Users,
            title: "Expert Team",
            description: "Work with a dedicated team of senior developers, designers, and strategists who have successfully delivered 500+ projects."
        },
        {
            icon: ShieldCheck,
            title: "Secure & Scalable",
            description: "We build systems that are secure by design and ready to scale with your business growth, ensuring long-term reliability."
        },
        {
            icon: Zap,
            title: "Performance First",
            description: "Lightning fast loading times and optimized performance are core to our development process, boosting your SEO and User Experience."
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
                            We Don't Just Write Code, We Build Legacies
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            At Ikotek Solutions, we partner with you to understand your vision and transform it into a digital reality. Here is why leading businesses trust us.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {["24/7 Support", "Free Consultation", "Post-Launch Maintenance", "100% Satisfaction"].map((item) => (
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
