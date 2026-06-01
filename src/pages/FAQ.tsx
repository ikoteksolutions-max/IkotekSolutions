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
            question: "What services do you offer?",
            answer: "We offer a comprehensive range of digital services including Web Development, Mobile App Development, UI/UX Design, SEO Optimization, Digital Marketing, and Custom Software Solutions.",
        },
        {
            question: "How much do your services cost?",
            answer: "Our pricing varies depending on the scope and complexity of the project. We offer customized quotes to ensure you only pay for what you need. Contact us for a free estimate.",
        },
        {
            question: "How long does a project take?",
            answer: "Timeline depends on the project size. A simple website might take 2-4 weeks, while complex applications can take 3-6 months. We provide a detailed timeline with every proposal.",
        },
        {
            question: "Do you provide support after launch?",
            answer: "Yes, we offer ongoing support and maintenance packages to ensure your digital product remains up-to-date and secure.",
        },
        {
            question: "How do we get started?",
            answer: "Simply use our 'Get a Quote' form or contact us directly. We'll schedule a consultation to discuss your requirements and propose the best solution.",
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
