import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, PhoneCall, Loader2, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useNewsletter } from "@/hooks/useNewsletter";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { subscribe, isSubmitting } = useNewsletter();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await subscribe(email);
    if (success) {
      setEmail("");
    }
  };

  const links = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "CEO", href: "/ceo" },
      { name: "Our Work", href: "/work" },
      { name: "Careers", href: "/careers" },
    ],
    products: [
      { name: "All SaaS Products", href: "/products" },
      { name: "Ikosender Mailer", href: "/products/ikosender" },
      { name: "SmartFormsAI Builder", href: "/products/smartformsai" },
      { name: "Client Reviews", href: "/testimonials" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "Get a Quote", href: "/quote" },
      { name: "FAQ", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Subscribe to our Newsletter
              </h3>
              <p className="text-background/60">
                Get the latest insights, tips, and updates delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-4 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="px-6 py-4 rounded-full bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-primary min-w-[300px]"
              />
              <Button type="submit" variant="hero" className="whitespace-nowrap" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/images/logo-full.png" alt="Ikotek Solutions" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-background/60 mb-6 max-w-sm">
              Empowering businesses through innovative digital solutions.
              We help companies thrive and dominate in the digital age.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/60">
                <MapPin className="w-5 h-5" />
                <span>Gulshan-e-Jamal, Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-background/60">
                <Mail className="w-5 h-5" />
                <a href="mailto:ikoteksolutions@hotmail.com" className="hover:text-background transition-colors">
                  ikoteksolutions@hotmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-background/60">
                <Phone className="w-5 h-5" />
                <a href="tel:+923433452279" className="hover:text-background transition-colors">
                  +92 343 3452279
                </a>
              </div>
              <div className="flex items-center gap-3 text-background/60">
                <Clock className="w-5 h-5" />
                <span>Open 24/7</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => {
                // Update links dynamically if needed, or just hardcode new ones here if I was replacing the whole list array. 
                // Since I am replacing the block invoking the map, I should strictly replace the content passed in the prompt or the structure content.
                // Actually, the prompt asked to replace lines 83-167. I should rewrite the whole section including the map parts if I want to change the links themselves, OR I should have updated the `links` object.
                // The `links` object is defined above (lines 19-38), not in the selected range.
                // So I will just update the logo part and Keep the structure, but I cannot update `links` object here.
                // Wait, I can't update `links` object because it is outside the range.
                // I should have selected the `links` object definition to update the routes.
                // I will just update the Logo for now. And I will make a separate call to update the `links` object.
                // Wait, I can replace the whole Logo part.
                return (
                  <li key={link.name}>
                    <Link
                      to={link.name === "Careers" ? "/careers" : link.name === "Blog" ? "/blog" : link.href}
                      className="text-background/60 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">SaaS Products</h4>
            <ul className="space-y-3">
              {links.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.name === "FAQ" ? "/faq" : link.href}
                    className="text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-background/60 text-sm">
              © 2024 Ikotek Solutions. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-background/60 hover:text-background transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/60 hover:text-background transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/923433452279"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:+923433452279"
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <PhoneCall className="w-6 h-6" />
        </a>
      </div>
      {/* Hidden SEO Keywords */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <span>Ikotek Solutions</span>
        <span>ikoteksolutions</span>
        <span>Ikotek Solutions Karachi</span>
        <span>ikoteksolutions-max</span>
        <span>Ikotek Solutions Software Development</span>
      </div>
    </footer>
  );
};

export default Footer;
