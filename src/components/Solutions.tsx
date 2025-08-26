import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Globe, MessageSquare, Zap, TrendingUp, ArrowUpRight, Check } from "lucide-react";

const solutions = [
  {
    icon: Globe,
    title: "Custom Website Design",
    description: "Stunning, conversion-focused websites that tell your story and drive results through cutting-edge design and seamless user experiences.",
    features: ["Responsive Design", "SEO Optimized", "Performance Focused", "Brand-Aligned"],
    color: "quantum-blue",
    details: {
      overview: "Transform your digital presence with custom websites that captivate audiences and drive conversions. Our student-led team combines cutting-edge design with strategic functionality.",
      includes: ["Custom UI/UX Design", "Mobile-First Development", "SEO Foundation", "Performance Optimization", "Content Management", "Analytics Integration"],
      process: "Discovery → Design → Development → Testing → Launch → Optimization",
      timeline: "2-4 weeks"
    }
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Intelligent conversational AI that engages customers 24/7, qualifying leads and providing instant support with human-like interactions.",
    features: ["Natural Language", "Lead Qualification", "Multi-Platform", "Smart Analytics"],
    color: "quantum-cyan",
    details: {
      overview: "Deploy intelligent AI assistants that handle customer inquiries, qualify leads, and provide instant support while you focus on growing your business.",
      includes: ["Custom AI Training", "Multi-Platform Integration", "Lead Qualification Logic", "Analytics Dashboard", "24/7 Support", "Regular Updates"],
      process: "Requirements → Training → Integration → Testing → Deployment → Monitoring",
      timeline: "1-3 weeks"
    }
  },
  {
    icon: Zap,
    title: "Automation Workflows",
    description: "Streamline operations with smart automation that eliminates repetitive tasks and scales your business without growing your workload.",
    features: ["Process Automation", "Integration Ready", "Custom Triggers", "Real-time Monitoring"],
    color: "quantum-purple",
    details: {
      overview: "Eliminate repetitive tasks with intelligent automation workflows that integrate seamlessly with your existing tools and scale with your business growth.",
      includes: ["Custom Workflow Design", "API Integrations", "Trigger Setup", "Error Handling", "Performance Monitoring", "Ongoing Support"],
      process: "Analysis → Design → Implementation → Testing → Deployment → Optimization",
      timeline: "1-2 weeks"
    }
  },
  {
    icon: TrendingUp,
    title: "Social Media Strategy",
    description: "Data-driven social strategies that build authentic connections, amplify your brand voice, and convert followers into customers.",
    features: ["Content Strategy", "Engagement Optimization", "Analytics & Insights", "Growth Hacking"],
    color: "quantum-blue",
    details: {
      overview: "Build a powerful social media presence with data-driven strategies that engage your audience and convert followers into loyal customers.",
      includes: ["Content Calendar", "Platform Optimization", "Audience Analysis", "Engagement Strategy", "Performance Tracking", "Monthly Reports"],
      process: "Audit → Strategy → Content Creation → Execution → Analysis → Optimization",
      timeline: "Ongoing (Monthly Plans)"
    }
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-background to-quantum-gray/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Solutions That</span>
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">Scale Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to execution, we deliver AI-powered solutions that transform 
            how you connect, engage, and grow in the digital landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-quantum-gray/30 bg-gradient-card hover:shadow-quantum transition-all duration-500 hover:scale-[1.02]"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-${solution.color}/10 border border-${solution.color}/20`}>
                      <Icon className={`w-6 h-6 text-${solution.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-quantum-cyan transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-quantum-cyan" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Social Proof */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-8">Trusted by innovative companies and creators</p>
          <div className="flex justify-center items-center gap-12 opacity-60">
            <div className="text-lg font-semibold">TechStart</div>
            <div className="text-lg font-semibold">CreatorCo</div>
            <div className="text-lg font-semibold">InnovateLab</div>
            <div className="text-lg font-semibold">DigitalFlow</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;