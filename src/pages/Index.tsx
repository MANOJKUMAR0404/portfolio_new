
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Import Carousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  // Function to handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Testimonials data
  const testimonials = [
    {
      quote: "Manojkumar is an exceptional developer who delivered our project on time with excellent quality. Highly recommended!",
      author: "Arun Kumar",
      role: "CTO, TechStart Inc."
    },
    {
      quote: "Working with Manoj was a pleasure. His expertise in React and Django made our application robust and user-friendly.",
      author: "Priya Sharma",
      role: "Product Manager, InnovateTech"
    },
    {
      quote: "I was impressed by Manoj's attention to detail and problem-solving abilities. A true professional!",
      author: "Rajesh Singh",
      role: "Lead Developer, CodeCraft"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      
      {/* Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Testimonials</h2>
          
          <div className="mt-10 reveal">
            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="glass-card p-8 m-4 text-center">
                      <blockquote className="text-lg text-gray-700 italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="font-semibold text-theme-blue">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6">
                <CarouselPrevious className="relative static mx-2" />
                <CarouselNext className="relative static mx-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
