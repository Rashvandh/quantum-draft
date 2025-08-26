import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-quantum-blue/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-quantum-cyan/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-quantum-purple/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-quantum-gray/50 border border-quantum-cyan/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-quantum-cyan" />
            <span className="text-sm font-medium text-foreground">Student-Led Digital Innovation</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Powering Ideas
            </span>
            <br />
            <span className="text-foreground">with AI & Innovation</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're QuantumDraft—a student-led digital agency transforming how creators, startups, 
            and businesses harness the power of AI and automation to scale their impact.
          </p>
          
          {/* Brand Story */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Born from dorm rooms and late-night coding sessions, we believe the future belongs to those 
              who dare to innovate. We don't just build solutions—we craft digital experiences that 
              amplify your vision and accelerate your success.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group relative overflow-hidden bg-gradient-accent hover:shadow-glow transition-all duration-300" onClick={() => navigate("/team")}>
              <span className="relative z-10">Start Your Transformation</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-quantum-cyan/30 hover:bg-quantum-cyan/10" onClick={() => navigate("/solutions")}>
              Explore Our Solutions
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 border-t border-quantum-gray/30">
            <div className="text-center">
              <div className="text-3xl font-bold text-quantum-cyan">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-quantum-blue">10x</div>
              <div className="text-sm text-muted-foreground">Faster Implementation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-quantum-purple">24/7</div>
              <div className="text-sm text-muted-foreground">AI-Powered Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;