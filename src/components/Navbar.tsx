import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, Code, Palette, Globe, Smartphone, LineChart, Search, Cpu, Send, Layout, Sparkles, Layers, Users, Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const services = [
    {
      title: "Web Development",
      href: "/services#web-development",
      description: "Custom websites built with modern technologies.",
      icon: Globe,
    },
    {
      title: "Mobile Apps",
      href: "/services#mobile-development",
      description: "Native and cross-platform mobile applications.",
      icon: Smartphone,
    },
    {
      title: "UI/UX Design",
      href: "/services#ui/ux-design",
      description: "User-centered design that delights your customers.",
      icon: Palette,
    },
    {
      title: "Digital Marketing",
      href: "/services#digital-marketing",
      description: "Strategic campaigns to grow your audience.",
      icon: LineChart,
    },
    {
      title: "SEO Optimization",
      href: "/services#seo-optimization",
      description: "Rank higher and drive organic traffic.",
      icon: Search,
    },
    {
      title: "Custom Software",
      href: "/services#custom-software",
      description: "Tailored software solutions for your business.",
      icon: Code,
    },
    {
      title: "Business Automation",
      href: "/pricing/business-automation",
      description: "Automate your marketing and operations.",
      icon: Cpu,
    },
  ];

  const products = [
    {
      title: "Ikosender",
      href: "/products/ikosender",
      description: "Send 1000+ marketing or cold emails in 4 simple steps.",
      icon: Send,
    },
    {
      title: "SmartFormsAI",
      href: "/products/smartformsai",
      description: "Next-gen intelligent forms with drag & drop builder.",
      icon: Layout,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo-full.png" alt="Ikotek Solutions" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Products Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4 bg-popover/95 backdrop-blur-xl">
                      {products.map((product) => (
                        <li key={product.title}>
                          <NavigationMenuLink asChild>
                            <Link to={product.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group">
                              <div className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                <product.icon className="h-4 w-4" />
                                {product.title}
                              </div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                                {product.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li className="border-t border-border/40 pt-2">
                        <Link to="/products" className="block select-none rounded-md p-2 text-xs font-bold text-primary hover:bg-accent text-center transition-colors">
                          View All SaaS Products →
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover/95 backdrop-blur-xl">
                      {services.map((component) => (
                        <li key={component.title}>
                          <NavigationMenuLink asChild>
                            <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group">
                              <Link to={component.href} className="flex items-center gap-2 text-sm font-medium leading-none group-hover:text-primary transition-colors">
                                <component.icon className="h-4 w-4" />
                                {component.title}
                              </Link>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1.5 mb-2">
                                {component.description}
                              </p>
                              <div className="flex gap-4">
                                <Link to={component.href} className="text-xs font-medium text-primary hover:underline">Overview</Link>
                                <Link to={`/pricing/${component.title.toLowerCase().replace(/[\s/]+/g, '-')}`} className="text-xs font-medium text-primary hover:underline">View Pricing</Link>
                              </div>
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/calculator">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                      Cost Calculator
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/testimonials">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                      Reviews
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/work">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                      Our Work
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Company Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-3 bg-popover/95 backdrop-blur-xl">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/about" className="block rounded-md p-2 text-sm font-medium hover:bg-accent text-foreground hover:text-primary transition-colors">
                            About Us
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/ceo" className="block rounded-md p-2 text-sm font-medium hover:bg-accent text-foreground hover:text-primary transition-colors">
                            CEO
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/careers" className="block rounded-md p-2 text-sm font-medium hover:bg-accent text-foreground hover:text-primary transition-colors">
                            Careers
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden xl:flex items-center gap-4">
            <Link to="/quote">
              <Button variant="default" size="sm" className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
                <MessageCircle className="w-4 h-4" />
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="xl:hidden py-4 border-t border-border animate-fade-in bg-background max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-2">
              <Link to="/" className="px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsOpen(false)}>Home</Link>
              
              {/* Mobile Products */}
              <div className="px-4 py-2 font-bold text-primary flex items-center gap-1.5"><Sparkles className="w-4 h-4" /> SaaS Products</div>
              <div className="pl-6 flex flex-col gap-2 border-l-2 border-border ml-4">
                <Link to="/products" onClick={() => setIsOpen(false)} className="py-1 text-sm hover:text-primary font-medium">All SaaS Products</Link>
                {products.map(p => (
                  <Link key={p.title} to={p.href} onClick={() => setIsOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                    {p.title}
                  </Link>
                ))}
              </div>

              {/* Mobile Services */}
              <div className="px-4 py-2 font-bold text-muted-foreground">Services</div>
              <div className="pl-6 flex flex-col gap-2 border-l-2 border-border ml-4">
                {services.map(s => (
                  <div key={s.title} className="flex justify-between items-center pr-4">
                    <Link to={s.href} onClick={() => setIsOpen(false)} className="py-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                      {s.title}
                    </Link>
                    <Link to={`/pricing/${s.title.toLowerCase().replace(/[\s/]+/g, '-')}`} onClick={() => setIsOpen(false)} className="py-1 text-[10px] font-semibold text-primary hover:underline">
                      Pricing
                    </Link>
                  </div>
                ))}
              </div>


              <Link to="/calculator" className="px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsOpen(false)}>Cost Calculator</Link>
              <Link to="/testimonials" className="px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsOpen(false)}>Reviews</Link>
              <Link to="/work" className="px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsOpen(false)}>Our Work</Link>
              
              {/* Mobile Company */}
              <div className="px-4 py-2 font-bold text-muted-foreground">Company</div>
              <div className="pl-6 flex flex-col gap-2 border-l-2 border-border ml-4 text-xs text-muted-foreground">
                <Link to="/about" onClick={() => setIsOpen(false)} className="py-1 hover:text-primary">About Us</Link>
                <Link to="/ceo" onClick={() => setIsOpen(false)} className="py-1 hover:text-primary">CEO</Link>
                <Link to="/careers" onClick={() => setIsOpen(false)} className="py-1 hover:text-primary">Careers</Link>
              </div>

              <Link to="/contact" className="px-4 py-2 hover:bg-accent rounded-md" onClick={() => setIsOpen(false)}>Contact</Link>
              <div className="p-4">
                <Link to="/quote" onClick={() => setIsOpen(false)}>
                  <Button className="w-full gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
