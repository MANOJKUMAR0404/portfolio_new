
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-theme-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Email</h4>
                    <a 
                      href="mailto:manojkumaroprofessional.com" 
                      className="text-theme-blue hover:underline"
                    >
                      manojkumaroprofessional.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-theme-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Phone</h4>
                    <a 
                      href="tel:6383185800" 
                      className="text-theme-blue hover:underline"
                    >
                      6383185800
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-theme-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Location</h4>
                    <p className="text-gray-600">Namakkal, Tamilnadu</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-semibold text-gray-700 mb-3">Connect with me on social media</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/manojkumar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-200 rounded-full text-gray-700 hover:bg-theme-blue hover:text-white transition-colors"
                  >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/manojkumar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-200 rounded-full text-gray-700 hover:bg-theme-blue hover:text-white transition-colors"
                  >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-theme-blue hover:bg-theme-indigo">
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
