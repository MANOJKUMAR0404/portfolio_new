
import { Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.E in ECE",
      institution: "Kongunadu College of Engineering and Technology",
      location: "Trichy",
      period: "Graduated May 2024",
      grade: "CGPA 8.1"
    },
    {
      degree: "12th Grade",
      institution: "Kongunadu Matric Higher Secondary School",
      location: "Namakkal",
      period: "Graduated April 2020",
      grade: "74.16%"
    },
    {
      degree: "10th Grade",
      institution: "Kongunadu Matric Higher Secondary School",
      location: "Namakkal",
      period: "Graduated May 2018",
      grade: "89.4%"
    }
  ];

  const courses = [
    "Internet of Things - Nov 2023",
    "Indian Institute of Technology | Kharagpur",
    "Verilog Programming - Jan 2023",
    "Tessolve Semiconductors | Bangalore",
    "Python Programming - Aug 2022",
    "Kongunadu College of Engineering and Technology | Trichy"
  ];

  const activities = [
    "Guided team as mentor in ECE-HACKATHON | TECHSNAG",
    "Active member of International Society for Technology in Education (ISTE)",
    "Participated in College Culturals",
    "Organised Symposium in College"
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education & Activities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <BookOpen className="mr-2 h-6 w-6 text-theme-blue" /> 
              Academic Background
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 animate-fade-in opacity-0"
                  style={{ animationDelay: `${0.2 + index * 0.2}s` }}
                >
                  <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                  <p className="text-theme-blue font-medium">{edu.institution}</p>
                  <div className="mt-2 flex flex-col sm:flex-row sm:items-center text-gray-600 text-sm">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span className="flex items-center mt-1 sm:mt-0">
                      <Award className="h-4 w-4 mr-1" />
                      {edu.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <BookOpen className="mr-2 h-6 w-6 text-theme-blue" /> 
                Value Added Courses
              </h3>
              
              <div className="glass-card p-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
                <ul className="space-y-4">
                  {courses.map((course, index) => (
                    <li 
                      key={index} 
                      className={index % 2 === 0 ? "font-medium text-gray-800" : "text-gray-600 pl-4 border-l-2 border-gray-200 ml-2 -mt-2"}
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <BookOpen className="mr-2 h-6 w-6 text-theme-blue" /> 
                Extra Curricular Activities
              </h3>
              
              <div className="glass-card p-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
                <ul className="space-y-3">
                  {activities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block h-2 w-2 rounded-full bg-theme-blue mt-2 mr-3"></span>
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
