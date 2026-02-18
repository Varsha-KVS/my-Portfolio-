import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Varsha. All rights reserved.
          </p>
          
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> and lots of ☕
          </p>
          
          <p className="text-muted-foreground text-sm">
            <span className="gradient-text font-medium">Varsha.dev</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
