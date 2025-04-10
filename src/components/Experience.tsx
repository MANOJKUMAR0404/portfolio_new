
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
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
      period: "Aug 2023 - Jan 2024",
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
              className="timeline-item animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="glass-card p-6 ml-6">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
