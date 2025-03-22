
import { useState } from 'react';
import TransitionEffect from "@/components/TransitionEffect";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Send, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out! I'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <TransitionEffect>
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <Link 
                  to="/" 
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" /> Back to Home
                </Link>
                
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-primary">GET IN TOUCH</span>
                  <h1 className="text-4xl font-bold">Contact Me</h1>
                  <p className="text-muted-foreground max-w-2xl mt-2">
                    Feel free to reach out if you have any questions, project ideas, or just want to say hello!
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Your Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="How can I help you?"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-1">Email</h3>
                          <a 
                            href="mailto:vnshkumar21@gmail.com" 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            vnshkumar21@gmail.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-1">Phone</h3>
                          <a 
                            href="tel:+917972908179" 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            +91 7972908179
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-1">Location</h3>
                          <p className="text-muted-foreground">Gurgaon, Haryana, India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-secondary rounded-lg p-6">
                    <h3 className="font-medium mb-2">Available for Freelance</h3>
                    <p className="text-sm text-muted-foreground">
                      I'm currently available for freelance projects or full-time opportunities. Let's discuss how I can contribute to your team or project!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <footer className="py-8 bg-card border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-right">
                © {new Date().getFullYear()} Vnsh Kumar. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </TransitionEffect>
  );
};

export default Contact;
