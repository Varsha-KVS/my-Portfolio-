import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const HeroSection = () => {
  const typingTexts = [
    "Strongly passionate about AI & ML",
    "Building interactive web experiences",
    "Exploring deep learning & neural networks",
    "Creating innovative solutions",
  ];
  
  const displayText = useTypingEffect(typingTexts, 80, 40, 2500);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Orbs */}
      <div className="floating-orb w-96 h-96 bg-primary top-20 -left-48" style={{ animationDelay: '0s' }} />
      <div className="floating-orb w-80 h-80 bg-accent bottom-20 -right-40" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-64 h-64 bg-primary/50 top-1/2 left-1/3" style={{ animationDelay: '4s' }} />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Open to Internship Opportunities</span>
          </div>

          {/* Name */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up animation-delay-200">
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text glow-text">Varsha</span>
          </h1>

          {/* Full Name */}
          <p className="text-lg text-muted-foreground mb-4 animate-slide-up animation-delay-200">
            KOTA VENKATA LAKSHMI SAI VARSHA
          </p>

          {/* Role */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-6 animate-slide-up animation-delay-400">
            <span className="text-primary">AI & ML Enthusiast</span>
            <span className="mx-3 text-muted-foreground">|</span>
            <span>Web Developer</span>
            <span className="mx-3 text-muted-foreground">|</span>
            <span className="text-primary">Robotics</span>
          </p>

          {/* Typing Animation */}
          <div className="h-12 md:h-14 flex items-center justify-center mb-10 animate-slide-up animation-delay-600">
            <p className="text-lg md:text-xl text-muted-foreground">
              <span>{displayText}</span>
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-600">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
