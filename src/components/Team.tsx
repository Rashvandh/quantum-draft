import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Paintbrush, Megaphone, Share2 } from "lucide-react";

const founders = [
  {
    name: "Rashvandh.A",
    role: "Full Stack Developer & AIML Automation Architect",
    icon: Code,
    delay: "0s"
  },
  {
    name: "Raagvi A.N",
    role: "CRM & Influencer marketing",
    icon: Lightbulb,
    delay: "0.1s"
  },
  {
    name: "Divya T.K",
    role: "UI Designer & Branding",
    icon: Paintbrush,
    delay: "0.2s"
  },
  {
    name: "Uthra K",
    role: "Marketing & Outreach",
    icon: Megaphone,
    delay: "0.3s"
  },
  {
    name: "Diya Mathan",
    role: "Social Media Strategist",
    icon: Share2,
    delay: "0.4s"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Meet the</span>
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">Founders</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {founders.map((founder, index) => {
            const Icon = founder.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-quantum-gray/30 bg-gradient-card hover:shadow-quantum transition-all duration-500 hover:scale-[1.02] animate-card-fade-in"
                style={{ animationDelay: founder.delay }}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    {/* Icon Box */}
                    <div className="mb-6">
                      <div className="w-20 h-20 mx-auto rounded-xl bg-quantum-gray flex items-center justify-center border border-quantum-cyan/20">
                        <Icon className="w-10 h-10 text-quantum-cyan" />
                      </div>
                    </div>
                    
                    {/* Name & Role */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground">{founder.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {founder.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Team Values */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">Our Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {[
              { value: "Creativity", description: "We think outside the box" },
              { value: "Innovation", description: "We push boundaries" },
              { value: "Speed", description: "We move fast" },
              { value: "Transformation", description: "We create change" },
              { value: "Authenticity", description: "We stay true" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-accent/20 border border-quantum-cyan/30 flex items-center justify-center">
                  <span className="text-2xl font-bold text-quantum-cyan">{item.value[0]}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.value}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;