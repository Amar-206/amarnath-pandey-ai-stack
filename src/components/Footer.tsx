import { motion } from "framer-motion";
import { Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-gradient">AP</span>
            <span className="text-muted-foreground text-sm">
              © {currentYear} Amarnath Pandey. All rights reserved.
            </span>
          </div>

          {/* Built With */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart size={14} className="text-destructive fill-destructive" />
            <span>using React & Tailwind</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Amar-206"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://huggingface.co/Amar206"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              aria-label="Hugging Face"
            >
              🤗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
