import { Brain, Code, Rocket, Target } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI & ML Focus',
    description: 'Deep interest in machine learning, neural networks, and AI applications',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Creating interactive and responsive web experiences',
  },
  {
    icon: Rocket,
    title: 'Hackathon Enthusiast',
    description: 'Love building innovative solutions under pressure',
  },
  {
    icon: Target,
    title: 'Internship Ready',
    description: 'Actively seeking opportunities to grow and contribute',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting to know the person behind the code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Hey there! 👋 I'm a passionate <span className="text-primary font-semibold">B.Tech student</span> with 
                a burning curiosity for <span className="text-primary font-semibold">Artificial Intelligence and Machine Learning</span>. 
                There's something magical about teaching machines to learn and make decisions!
              </p>
              
              <p className="text-lg text-foreground/90 leading-relaxed">
                When I'm not training neural networks or debugging algorithms, you'll find me building 
                <span className="text-accent font-semibold"> interactive web applications</span> that blend 
                creativity with functionality. I believe great software should be both powerful and delightful to use.
              </p>
              
              <p className="text-lg text-foreground/90 leading-relaxed">
                I thrive in <span className="text-primary font-semibold">hackathons</span> where innovation meets 
                time pressure, and I'm always excited to take on new challenges. Currently on the lookout for 
                <span className="text-accent font-semibold"> internship opportunities</span> where I can learn, 
                contribute, and grow alongside amazing teams!
              </p>

              <div className="pt-4">
                <p className="text-muted-foreground italic">
                  "The best way to predict the future is to create it." 🚀
                </p>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card p-6 hover-lift hover-glow group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
