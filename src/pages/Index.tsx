import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechStack from "@/components/TechStack";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import CEOSection from "@/components/CEOSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ClientMarquee />
      <WhyChooseUs />
      <CEOSection />
      <Services />
      <TechStack />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
