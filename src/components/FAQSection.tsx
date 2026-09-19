
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
    const faqs = [
        {
            question: "How does Business Automation help my company?",
            answer: "Business Automation eliminates repetitive manual tasks, cuts operational costs by up to 60%, speeds up customer response times with AI agents, and prevents human errors across your CRM, ERP, and sales pipelines."
        },
        {
            question: "Can you integrate with our existing CRM and software tools?",
            answer: "Yes! We connect seamlessly with major platforms like HubSpot, Salesforce, Zoho, WhatsApp, Shopify, Slack, PostgreSQL, custom REST APIs, and legacy ERP databases using custom webhooks and AI middleware."
        },
        {
            question: "Are custom AI Agents and automation workflows secure?",
            answer: "Security is our top priority. All data pipelines and AI agent integrations adhere to strict end-to-end encryption standards, role-based access controls, and private RAG vector storage."
        },
        {
            question: "How long does a typical automation project take?",
            answer: "Initial AI agent chatbots or Zapier/Make workflow pipelines take 1 to 2 weeks. Full enterprise CRM/ERP automation systems typically require 3 to 6 weeks depending on custom API scope."
        },
        {
            question: "Do you provide maintenance and monitoring after deployment?",
            answer: "Absolutely! We provide continuous real-time error monitoring, prompt optimization, model updates, and maintenance support to ensure your automated pipelines run smoothly 24/7."
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
