import { Mail, Phone, Instagram } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimationWrapper from "@/components/AnimationWrapper";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "QuantumDraft@outlook.com",
      link: "mailto:QuantumDraft@outlook.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 8925647608",
      link: "tel:+918925647608",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/quantum.draft?igsh=aWtpYXplZDRzMHVh",
      color: "hover:text-pink-600",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <AnimationWrapper>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get in touch with us for questions, suggestions, or to learn more
              about QuantumDraft’s projects and opportunities.
            </p>
          </AnimationWrapper>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {contactInfo.map((info, index) => (
              <AnimationWrapper
                key={info.title}
                delay={index * 150}
                animation="bounce-in"
              >
                <Card className="text-center shadow-soft h-full hover:shadow-md transition">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={
                          info.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {info.content}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Social + Hours */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 grid lg:grid-cols-1 gap-12">
          <AnimationWrapper delay={300} animation="slide-right">
            <div className="space-y-6">
              {/* Social Links */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl">Follow Us</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Stay connected with QuantumDraft for the latest updates.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <AnimationWrapper
                        key={social.name}
                        delay={index * 100}
                        animation="zoom-in"
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-full border border-gray-200 hover:border-transparent transition-all duration-300 ${social.color} hover:scale-110`}
                        >
                          <social.icon className="h-6 w-6" />
                        </a>
                      </AnimationWrapper>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="bg-gradient-to-br from-primary to-primary-light text-white shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                  <div className="space-y-2 text-sm opacity-90">
                    <div className="flex justify-between">
                      <span>Mon - Fri:</span>
                      <span>10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Contact;
