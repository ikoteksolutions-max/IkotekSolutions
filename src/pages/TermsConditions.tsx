import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, FileWarning, Gavel, Globe } from "lucide-react";

const TermsConditions = () => {
    const lastUpdated = "December 18, 2024";

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
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
                                    <Globe className="text-primary w-6 h-6" />
                                    1. Acceptance of Terms
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    By accessing and using this website, you accept and agree to be bound by the terms and
                                    provisions of this agreement. If you do not agree to these terms, please do not use
                                    our services.
                                </p>
                            </div>

                            <div>
                                <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                                    <Gavel className="text-primary w-6 h-6" />
                                    2. Intellectual Property Rights
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    The content, organization, graphics, design, compilation, and other matters related
                                    to the Site are protected under applicable copyrights, trademarks, and other proprietary
                                    rights. The copying, redistribution, use, or publication of any such matters is strictly prohibited.
                                </p>
                            </div>

                            <div>
                                <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                                    <FileWarning className="text-primary w-6 h-6" />
                                    3. Limitation of Liability
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Ikotek Solutions shall not be liable for any direct, indirect, incidental, special,
                                    or consequential damages resulting from the use or inability to use the services or
                                    for the cost of procurement of substitute services.
                                </p>
                            </div>

                            <div>
                                <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                                    <Scale className="text-primary w-6 h-6" />
                                    4. Governing Law
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    These terms and conditions shall be governed by and construed in accordance with the
                                    laws of Pakistan. Any disputes relating to these terms and conditions shall be subject
                                    to the exclusive jurisdiction of the courts of Karachi.
                                </p>
                            </div>

                            <div>
                                <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
                                    5. Changes to Terms
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We reserve the right to modify these terms from time to time at our sole discretion.
                                    Your continued use of the site following any such change constitutes your agreement
                                    to follow and be bound by the terms as changed.
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

export default TermsConditions;
