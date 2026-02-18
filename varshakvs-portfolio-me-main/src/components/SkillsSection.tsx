import { Code2, Brain, Globe, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming Languages',
    color: 'primary',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    color: 'accent',
    skills: ['Machine Learning', 'Deep Learning', 'Speech Emotion Recognition', 'Computer Vision', 'Neural Networks', 'TensorFlow'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    color: 'primary',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    color: 'accent',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-card p-8 hover-glow group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-${category.color}/10 flex items-center justify-center group-hover:bg-${category.color}/20 transition-colors`}>
                    <category.icon className={`w-7 h-7 text-${category.color}`} />
                  </div>
                  <h3 className="font-display font-semibold text-xl">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
