import { Mail, Linkedin, Github, Send, Sparkles, Phone } from 'lucide-react';
import { Button } from './ui/button';

const socialLinks = [
  {
    icon: Phone,
    label: 'Phone',
    href: 'tel:+918919117855',
    username: '+91 8919117855',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:kvsvarsha2@gmail.com',
    username: 'kvsvarsha2@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/varsha-kvs-791439301',
    username: '/in/varsha-kvs',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Varsha-KVS',
    username: '@Varsha-KVS',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="floating-orb w-72 h-72 bg-primary bottom-0 -left-36 animate-pulse-glow" />
      <div className="floating-orb w-64 h-64 bg-accent top-0 -right-32 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I'm always excited to discuss new opportunities, collaborate on projects, or just have a chat about AI & tech!
            </p>
          </div>

          {/* CTA Card */}
          <div className="glass-card p-10 text-center mb-12 glow-box">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Open for Opportunities</span>
            </div>
            
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Let's build something <span className="gradient-text">amazing</span> together!
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you have a project in mind, an internship opportunity, or just want to say hi – I'd love to hear from you!
            </p>

            <Button variant="hero" size="xl" asChild>
              <a href="mailto:kvsvarsha2@gmail.com">
                <Send className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="grid md:grid-cols-3 gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 hover-lift hover-glow group flex items-center gap-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </p>
                  <p className="text-sm text-muted-foreground">{link.username}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
