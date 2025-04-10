
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in [animation-delay:0.2s] opacity-0">
            <div className="flex items-center mb-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="/lovable-uploads/30764350-52b7-4dba-bc8e-13e3f5f93409.png" 
                  alt="Manojkumar Rajendran" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Manojkumar
                  <span className="block text-theme-blue">Rajendran</span>
                </h1>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Passionate about building impactful web applications with Django and React. 
              From concept to deployment, I bring ideas to life with clean code and user-focused design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-theme-blue hover:bg-theme-indigo transition-colors">
                <a href="/Manojkumar_Rajendran_Resume.pdf" download className="flex items-center">
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#contact" className="flex items-center">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in [animation-delay:0.5s] opacity-0">
            <div className="glass-card p-8 relative">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Information</h3>
                <p className="text-gray-600">Namakkal, Tamilnadu</p>
                <p className="text-gray-600">6383185800</p>
                <p className="text-gray-600">manojkumaroprofessional.com</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://portfolio.io/manojkumar" target="_blank" rel="noopener noreferrer" className="link-button flex items-center">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/manojkumar" target="_blank" rel="noopener noreferrer" className="link-button flex items-center">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/manojkumar" target="_blank" rel="noopener noreferrer" className="link-button flex items-center">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-theme-blue transition-colors">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
