
import {
    Code2, Database, Globe, Layout, Server, Smartphone, Cloud, Shield, Cpu, Terminal
} from "lucide-react";

const TechStack = () => {
    const technologies = [
        { name: "React / Next.js", icon: Code2, color: "text-blue-500" },
        { name: "Node.js", icon: Server, color: "text-green-500" },
        { name: "TypeScript", icon: Terminal, color: "text-blue-600" },
        { name: "Python / Django", icon: Database, color: "text-yellow-500" },
        { name: "AWS / Cloud", icon: Cloud, color: "text-orange-500" },
        { name: "Mobile / React Native", icon: Smartphone, color: "text-purple-500" },
        { name: "UI / UX Design", icon: Layout, color: "text-pink-500" },
        { name: "Cyber Security", icon: Shield, color: "text-red-500" },
        { name: "AI / ML", icon: Cpu, color: "text-cyan-500" },
        { name: "Global Deployment", icon: Globe, color: "text-indigo-500" },
    ];

    return (
        <section className="py-20 bg-background border-t border-border/50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-secondary rounded-full text-foreground font-medium text-sm mb-4">
                        Our Technology Stack
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Built With Modern Technologies
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
                        >
                            <div className={`p-4 rounded-full bg-secondary mb-4 group-hover:scale-110 transition-transform ${tech.color}`}>
                                <tech.icon className="w-8 h-8" />
                            </div>
                            <span className="font-medium text-foreground text-center">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
