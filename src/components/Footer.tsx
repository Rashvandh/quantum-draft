import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Zap, Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  const handleSocialClick = (platform: string) => {
    toast({
      title: "Coming Soon",
      description: `Follow us on ${platform} - link will be available soon!`,
    });
  };

  return (
    <footer className="bg-quantum-dark border-t border-quantum-gray/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/39a62d60-9f7f-467c-bc1f-845824814fbc.png" 
                alt="QuantumDraft Logo" 
                className="w-10 h-10 rounded-full object-contain"
              />
              <span className="text-xl font-bold text-foreground">QuantumDraft</span>
            </div>
            <p className="text-muted-foreground">
              Student-led digital agency powering the future with AI and innovation.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => handleSocialClick("GitHub")}
                className="p-2 rounded-lg bg-quantum-gray/30 hover:bg-quantum-cyan/20 transition-colors"
              >
                <Github className="w-4 h-4 text-muted-foreground hover:text-quantum-cyan" />
              </button>
              <button 
                onClick={() => handleSocialClick("LinkedIn")}
                className="p-2 rounded-lg bg-quantum-gray/30 hover:bg-quantum-cyan/20 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-quantum-cyan" />
              </button>
              <button 
                onClick={() => handleSocialClick("Twitter")}
                className="p-2 rounded-lg bg-quantum-gray/30 hover:bg-quantum-cyan/20 transition-colors"
              >
                <Twitter className="w-4 h-4 text-muted-foreground hover:text-quantum-cyan" />
              </button>
              <button 
                onClick={() => handleSocialClick("Instagram")}
                className="p-2 rounded-lg bg-quantum-gray/30 hover:bg-quantum-cyan/20 transition-colors"
              >
                <Instagram className="w-4 h-4 text-muted-foreground hover:text-quantum-cyan" />
              </button>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan transition-colors">Website Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan transition-colors">AI Chatbots</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan transition-colors">Automation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan transition-colors">Social Strategy</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan transition-colors">Our Team</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Get the latest insights on AI, automation, and digital innovation.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="bg-quantum-gray/50 border-quantum-gray/50 text-foreground placeholder:text-muted-foreground"
              />
              <Button type="submit" size="sm" className="bg-gradient-accent hover:shadow-glow transition-all">
                <Mail className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-quantum-gray/30">
          <p className="text-muted-foreground text-sm">
            © 2024 QuantumDraft. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-quantum-cyan transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-quantum-cyan transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;