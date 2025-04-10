
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Skills = () => {
  const skillCategories = [
    {
      id: "languages",
      name: "Languages",
      skills: ["Python", "JavaScript", "HTML", "CSS", "SQL", "Verilog"]
    },
    {
      id: "frameworks",
      name: "Frameworks & Libraries",
      skills: ["Django", "React", "Bootstrap", "Blender"]
    },
    {
      id: "tools",
      name: "Tools & Technologies",
      skills: ["Git", "REST API", "PostgreSQL", "VS Code", "Digital Electronics"]
    },
    {
      id: "others",
      name: "Other Skills",
      skills: ["3D Design", "VFX/CGI Animation", "UI/UX Design", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills & Expertise</h2>
        
        <Tabs defaultValue="languages" className="mt-10">
          <TabsList className="flex justify-center mb-8 bg-white p-1 rounded-lg shadow-sm">
            {skillCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="px-4 py-2 data-[state=active]:bg-theme-blue data-[state=active]:text-white data-[state=active]:shadow-md rounded-md"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillCategories.map((category) => (
            <TabsContent 
              key={category.id} 
              value={category.id}
              className="animate-fade-in"
            >
              <div className="glass-card p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {category.skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-fade-in opacity-0"
                      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                    >
                      <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                        <span className="text-theme-blue font-bold">{skill.charAt(0)}</span>
                      </div>
                      <span className="font-medium text-gray-800">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Areas of Interest</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {["Full Stack Web Development", "3D Design", "VFX/CGI Animation"].map((interest, index) => (
              <Badge 
                key={index} 
                className="px-6 py-3 text-base bg-white border border-theme-blue text-theme-blue hover:bg-theme-blue hover:text-white transition-colors"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
