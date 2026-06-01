import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
    const posts = [
        {
            title: "The Future of Web Development in 2025",
            category: "Technology",
            date: "Dec 15, 2024",
            author: "Ali Raza",
            image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&fit=crop",
            excerpt: "Explore the emerging trends and technologies that will shape the web development landscape in the coming year.",
        },
        {
            title: "Maximizing ROI with Digital Marketing",
            category: "Marketing",
            date: "Dec 10, 2024",
            author: "Zara Sheikh",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&fit=crop",
            excerpt: "Learn how to optimize your digital marketing strategies to achieve the best return on investment for your business.",
        },
        {
            title: "UI/UX Best Practices for Mobile Apps",
            category: "Design",
            date: "Dec 05, 2024",
            author: "Sarah Ahmed",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&fit=crop",
            excerpt: "Discover the key principles of designing intuitive and engaging user interfaces for mobile applications.",
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
                            Our Blog
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in animation-delay-100">
                            Insights & <span className="text-gradient-orange">Updates</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-10 animate-fade-in animation-delay-200">
                            Latest news, tips, and insights from the world of technology and digital innovation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Grid with Coming Soon Overlay */}
            <section className="py-20 bg-secondary/30 relative">
                <div className="container mx-auto px-4">
                    <div className="relative">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-40 pointer-events-none filter blur-[2px]">
                            {posts.map((post, index) => (
                                <article
                                    key={index}
                                    className="bg-background rounded-2xl overflow-hidden border border-border shadow-sm"
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                                            <span className="px-3 py-1 bg-secondary rounded-full text-foreground">{post.category}</span>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {post.date}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                                        <p className="text-muted-foreground text-sm mb-6">{post.excerpt}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Coming Soon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="bg-background/80 backdrop-blur-md border border-primary/20 p-12 rounded-3xl text-center shadow-2xl max-w-lg mx-4">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary animate-pulse">
                                    <Calendar className="w-10 h-10" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Full Blog is <span className="text-gradient-orange">Coming Soon</span></h2>
                                <p className="text-muted-foreground text-lg mb-8">
                                    We're curating the best insights, tutorials, and success stories for you.
                                    Stay tuned for our first deep-dive articles!
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link to="/contact">
                                        <Button variant="hero" className="w-full sm:w-auto">
                                            Notify Me
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
