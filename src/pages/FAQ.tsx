import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            question: "What automation services do you offer?",
            answer: "We offer specialized Business Automation solutions including AI Workflow Automation, Custom AI Agents & Chatbots, CRM/ERP Synchronization, Lead & Sales Pipeline Automation, Marketing Automation, and API Systems Integration.",
        },
        {
            question: "How much does Business Automation cost?",
            answer: "Automation projects start from PKR 60,000 for simple marketing/sales pipelines up to PKR 450,000+ for enterprise CRM/ERP system integrations. We provide detailed fixed-price quotes tailored to your business scope.",
        },
        {
            question: "How long does it take to implement automation?",
            answer: "Simple workflow pipelines or AI chatbots take 1 to 2 weeks. Comprehensive multi-app system integrations typically take 3 to 6 weeks. We provide clear milestone timelines with every proposal.",
        },
        {
            question: "Do you provide support and monitoring after deployment?",
            answer: "Yes, we offer ongoing 24/7 automated pipeline monitoring, model updates, prompt optimization, and technical maintenance packages.",
        },
        {
            question: "How do we get started with automating our operations?",
            answer: "Simply use our 'Get a Quote' form or contact us directly. We'll conduct an operational audit of your business processes and propose the best automation strategy.",
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
                            FAQ
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in animation-delay-100">
                            Frequently Asked <span className="text-gradient-orange">Questions</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-10 animate-fade-in animation-delay-200">
                            Find answers to common questions about our services and process.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FAQ;
