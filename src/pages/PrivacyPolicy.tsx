import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const PrivacyPolicy = () => {
    const lastUpdated = "December 18, 2024";

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
                        <p className="text-xl text-muted-foreground">
                            Last updated: {lastUpdated}
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto prose prose-invert lg:prose-xl">
                        <div className="space-y-12">
                            <div>
                                <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                                    <Shield className="text-primary w-6 h-6" />
                                    1. Information We Collect
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We collect information that you provide directly to us, such as when you fill out a contact form,
                                    request a quote, or subscribe to our newsletter. This may include your name, email address,
                                    phone number, and company information.
                                </p>
                            </div>

                            <div>
                                <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                                    <Lock className="text-primary w-6 h-6" />
                                    2. How We Use Your Information
                                </h2>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>To provide, maintain, and improve our services.</li>
                                    <li>To respond to your inquiries and fulfill your requests.</li>
                                    <li>To send you technical notices, updates, and administrative messages.</li>
                                    <li>To communicate with you about products, services, offers, and events.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                                    <Eye className="text-primary w-6 h-6" />
                                    3. Information Sharing
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We do not share, sell, or rent your personal information to third parties. We may disclose
                                    your information only if required by law or to protect our rights and property.
                                </p>
                            </div>

                            <div>
                                <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                                    <FileText className="text-primary w-6 h-6" />
                                    4. Security
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We take reasonable measures to help protect information about you from loss, theft,
                                    misuse, and unauthorized access. However, no method of transmission over the internet
                                    is 100% secure.
                                </p>
                            </div>

                            <div>
                                <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                                    5. Contact Us
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    If you have any questions about this Privacy Policy, please contact us at:
                                    <br />
                                    <a href="mailto:ikoteksolutions@hotmail.com" className="text-primary hover:underline">
                                        ikoteksolutions@hotmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
