import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Send, Rocket, Sparkles, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    solution: "",
    message: "",
    budget: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name, email, and project details.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          solution: formData.solution || null,
          budget: formData.budget || null,
          message: formData.message,
        });

      if (error) throw error;

      toast({
        title: "Message Sent Successfully! 🚀",
        description: "We'll get back to you within 24 hours to discuss your project.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        solution: "",
        message: "",
        budget: ""
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly at hello@quantumdraft.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-quantum-gray/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-quantum-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-quantum-blue/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-quantum-gray/50 border border-quantum-cyan/20 backdrop-blur-sm mb-6">
            <Rocket className="w-4 h-4 text-quantum-cyan" />
            <span className="text-sm font-medium text-foreground">Ready to Launch?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Let's Build</span>
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">Something Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your vision, and we'll craft a custom solution that transforms 
            your ideas into powerful digital experiences.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="quantum-contact-form border-2 border-quantum-cyan/30 bg-gradient-to-br from-quantum-dark via-quantum-gray to-quantum-dark shadow-glow backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-quantum-cyan font-bold uppercase text-sm tracking-wide">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="quantum-input bg-quantum-gray/50 border-quantum-cyan/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:border-quantum-cyan focus:shadow-glow transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-quantum-cyan font-bold uppercase text-sm tracking-wide">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="quantum-input bg-quantum-gray/50 border-quantum-cyan/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:border-quantum-cyan focus:shadow-glow transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-quantum-cyan font-bold uppercase text-sm tracking-wide">
                    Company / Project
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your company or project name"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="quantum-input bg-quantum-gray/50 border-quantum-cyan/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:border-quantum-cyan focus:shadow-glow transition-all"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-quantum-cyan font-bold uppercase text-sm tracking-wide">
                      Solution Needed
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("solution", value)}>
                      <SelectTrigger className="quantum-select bg-quantum-gray/50 border-quantum-cyan/30 rounded-xl text-foreground focus:border-quantum-cyan focus:shadow-glow transition-all">
                        <SelectValue placeholder="Select a solution" />
                      </SelectTrigger>
                      <SelectContent className="bg-quantum-dark border-quantum-cyan/30">
                        <SelectItem value="website">Custom Website Design</SelectItem>
                        <SelectItem value="chatbot">AI Chatbots</SelectItem>
                        <SelectItem value="automation">Automation Workflows</SelectItem>
                        <SelectItem value="social">Social Media Strategy</SelectItem>
                        <SelectItem value="multiple">Multiple Solutions</SelectItem>
                        <SelectItem value="consultation">Strategy Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-quantum-cyan font-bold uppercase text-sm tracking-wide">
                      Budget Range
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="quantum-select bg-quantum-gray/50 border-quantum-cyan/30 rounded-xl text-foreground focus:border-quantum-cyan focus:shadow-glow transition-all">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-quantum-dark border-quantum-cyan/30">
                        <SelectItem value="5k-10k">$5K - $10K</SelectItem>
                        <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                        <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                        <SelectItem value="50k+">$50K+</SelectItem>
                        <SelectItem value="discuss">Let's Discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-quantum-cyan font-bold uppercase text-sm tracking-wide">
                    Project Details
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your vision, goals, and any specific requirements..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="quantum-textarea bg-quantum-gray/50 border-quantum-cyan/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:border-quantum-cyan focus:shadow-glow transition-all resize-none"
                  />
                </div>
                
                <div className="flex justify-end pt-4">
                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="quantum-submit group relative overflow-hidden bg-gradient-accent hover:shadow-glow transition-all duration-300 hover:scale-105 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Launching...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                          Launch My Project
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Prefer to chat directly? We're always up for a conversation about innovation.
            </p>
            <div className="flex justify-center gap-6">
              <a href="mailto:hello@quantumdraft.com" className="text-quantum-cyan hover:text-quantum-blue transition-colors">
                hello@quantumdraft.com
              </a>
              <a href="tel:+1234567890" className="text-quantum-cyan hover:text-quantum-blue transition-colors">
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;