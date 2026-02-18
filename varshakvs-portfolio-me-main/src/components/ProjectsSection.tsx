import { ExternalLink, Github, Brain, Mic, PenTool, Trophy } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    icon: Brain,
    title: 'AI Predictive Maintenance System',
    description: 'Developed a machine learning model to predict equipment failures before they occur, reducing downtime and maintenance costs.',
    techStack: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    icon: Mic,
    title: 'Emotion Recognition from Speech',
    description: 'Built a deep learning system that analyzes speech patterns to detect emotional states with high accuracy.',
    techStack: ['Python', 'Deep Learning', 'Librosa', 'CNN'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    icon: PenTool,
    title: 'Handwritten Character Recognition',
    description: 'Created a neural network model capable of recognizing handwritten characters with real-time prediction capabilities.',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'NumPy'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    icon: Trophy,
    title: 'Hackathon Innovation Project',
    description: 'Award-winning hackathon project that combines AI with practical problem-solving for social impact.',
    techStack: ['Python', 'React', 'Machine Learning', 'API Integration'],
    github: '#',
    demo: '#',
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work in AI, ML, and web development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`glass-card p-8 hover-lift hover-glow group relative overflow-hidden ${
                  project.featured ? 'border-primary/30' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                      Featured
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="group/btn" asChild>
                    <a href={project.github}>
                      <Github className="w-4 h-4 mr-2 group-hover/btn:text-primary transition-colors" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a href={project.demo}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
