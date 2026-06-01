import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "CEO, TechVentures Karachi",
      content: "Ikotek Solutions transformed our online presence completely. Their attention to detail and innovative approach helped us achieve a 200% increase in conversions.",
      rating: 5,
    },
    {
      name: "Fatima Ali",
      role: "Marketing Director, DataSync Pakistan",
      content: "Working with Ikotek was a game-changer. Their SEO expertise and creative strategies put us on the first page of Google within months.",
      rating: 5,
    },
    {
      name: "Bilal Khan",
      role: "Founder, CloudBase Solutions",
      content: "The team at Ikotek doesn't just deliver projects—they deliver results. Our new platform exceeded all expectations and our users love it.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Innovators
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it—hear from the businesses we've helped transform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 bg-card border border-border rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
