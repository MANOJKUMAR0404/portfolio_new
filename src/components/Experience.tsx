
import { Calendar, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Experience = () => {
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      experienceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const experiences = [
    {
      title: "Python Full Stack Engineer",
      company: "COAPPS.AI",
      location: "Chennai, Tamilnadu",
      period: "Jan 2024 - May 2024",
      description: "Mastered Django for backend and React for frontend in dynamic web app development, applying theoretical knowledge to collaborate on projects from inception to deployment, refining skills across the development lifecycle."
    },
    {
      title: "Verilog Programmer",
      company: "SMART DV",
      location: "Bangalore, Karnataka",
      period: "Sept 2023 - Jan 2024",
      description: "Gained expertise in V-by-One specification, applying it to data transmission, alongside hands-on experience in Verilog coding for displays with diverse resolutions and byte modes, demonstrating adaptability in visual requirements."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Professional Experience</h2>
        
        <div className="mt-10">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              ref={(el) => (experienceRefs.current[index] = el)}
              className="timeline-item reveal opacity-0"
            >
              <div className="glass-card p-6 ml-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-theme-blue font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 flex flex-col sm:flex-row sm:items-center text-gray-600 text-sm">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span className="flex items-center mt-1 sm:mt-0">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700">{exp.description}</p>
                
                {/* Add highlighted achievements */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">Key Achievements:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-theme-blue mr-2"></div>
                      <span className="text-gray-700 text-sm">Developed {index === 0 ? "3 full-stack applications" : "custom display drivers"}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-theme-blue mr-2"></div>
                      <span className="text-gray-700 text-sm">{index === 0 ? "Improved app performance by 40%" : "Reduced code complexity by 30%"}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-theme-blue mr-2"></div>
                      <span className="text-gray-700 text-sm">{index === 0 ? "Implemented responsive designs" : "Created reusable modules"}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-theme-blue mr-2"></div>
                      <span className="text-gray-700 text-sm">{index === 0 ? "Utilized modern development practices" : "Optimized for different resolutions"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
