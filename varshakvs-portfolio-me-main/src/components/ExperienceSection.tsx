import { Award, Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    icon: Briefcase,
    type: 'Internship',
    title: 'Software Development Intern',
    organization: 'CodeAlpha',
    period: '2024',
    description: 'Worked on real-world projects involving web development and AI integration. Gained hands-on experience with industry-standard tools and practices.',
    highlights: ['Web Development', 'Team Collaboration', 'Agile Methodology'],
  },
];

const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera',
    year: '2024',
  },
  {
    title: 'Deep Learning with Python',
    issuer: 'Online Certification',
    year: '2024',
  },
  {
    title: 'Web Development Fundamentals',
    issuer: 'CodeAlpha',
    year: '2024',
  },
  {
    title: 'Python for Data Science',
    issuer: 'Online Certification',
    year: '2023',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Experience & <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey in learning and professional development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-2xl">Experience</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.title}
                    className="glass-card p-6 hover-glow group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                          {exp.type}
                        </span>
                        <h4 className="font-display font-semibold text-lg mt-3">{exp.title}</h4>
                        <p className="text-muted-foreground">{exp.organization}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-foreground/80 mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-2xl">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.title}
                    className="glass-card p-5 hover-glow group flex items-center gap-4"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <GraduationCap className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
