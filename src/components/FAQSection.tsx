
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
    const faqs = [
        {
            question: "How much does a typical project cost?",
            answer: "Every project is unique. We offer flexible pricing models including fixed-price for well-defined scopes and time-and-materials for evolving projects. Contact us for a free detailed quote tailored to your specific needs."
        },
        {
            question: "How long does it take to build a website/app?",
            answer: "Timeline depends on complexity. A standard corporate website might take 2-4 weeks, while a complex custom web application or mobile app could take 8-12 weeks. We provide a detailed timeline during the proposal phase."
        },
        {
            question: "Do you provide support after launch?",
            answer: "Absolutely! We offer various support and maintenance packages to ensure your digital product remains secure, up-to-date, and performing optimally long after the initial launch."
        },
        {
            question: "Will my website be mobile-friendly and SEO optimized?",
            answer: "Yes, standard. All our websites are built with a mobile-first approach and include core SEO best practices (speed optimization, meta tags, semantic HTML) to give you a head start in search rankings."
        },
        {
            question: "What technologies do you work with?",
            answer: "We specialize in modern stacks including React, Next.js, Node.js, Python, Flutter for mobile, and various cloud platforms like AWS and Firebase. We choose the best tech for your specific goals."
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
                        Got Questions?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know about working with Ikotek Solutions.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-border">
                            <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQSection;
