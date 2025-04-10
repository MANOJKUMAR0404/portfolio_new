
import { Code, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 mt-10">
          <div className="md:w-2/3">
            <p className="text-lg text-gray-700 mb-6">
              I'm a <span className="font-semibold text-theme-blue">Full Stack Web Developer</span> with a strong foundation in 
              Python, Django, and React. My journey in software development began during my engineering studies at Kongunadu College of 
              Engineering and Technology, where I cultivated a passion for building web applications.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Recently, I completed an internship at <span className="font-semibold">COAPPS.AI</span> as a Python Full Stack Engineer, 
              where I mastered Django for backend and React for frontend in dynamic web app development. I collaborated on projects 
              from inception to deployment, refining my skills across the development lifecycle.
            </p>
            <p className="text-lg text-gray-700">
              I also have experience in Verilog Programming from my time at SMART DV in Bangalore, where I gained expertise in V-by-One 
              specification and Verilog coding for displays with diverse resolutions and byte modes.
            </p>
          </div>
          
          <div className="md:w-1/3">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Professional Snapshot</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 rounded-full mr-4">
                    <Code className="h-5 w-5 text-theme-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Full Stack Developer</h4>
                    <p className="text-gray-600">Python, Django, React, JavaScript</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 rounded-full mr-4">
                    <GraduationCap className="h-5 w-5 text-theme-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">B.E in ECE</h4>
                    <p className="text-gray-600">CGPA 8.1, Graduated May 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 rounded-full mr-4">
                    <Briefcase className="h-5 w-5 text-theme-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recent Experience</h4>
                    <p className="text-gray-600">COAPPS.AI - Python Full Stack Engineer</p>
                    <p className="text-gray-600">SMART DV - Verilog Programmer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
