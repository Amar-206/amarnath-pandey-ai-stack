import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Github, ExternalLink, Download, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "apandey.tech@gmail.com",
    href: "mailto:apandey.tech@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Amar-206",
    href: "https://github.com/Amar-206",
    description: "Check out my projects and contributions",
  },
  {
    icon: ExternalLink,
    label: "Hugging Face",
    value: "huggingface.co/Amar206",
    href: "https://huggingface.co/Amar206",
    description: "View my AI models and demos",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "linkedin.com/in/amarnath-pandey2006",
    href: "https://www.linkedin.com/in/amarnath-pandey2006",
    description: "Connect with me professionally",
  },
  {
    icon: ExternalLink,
    label: "Instagram",
    value: "instagram.com/amar_pandey206",
    href: "https://www.instagram.com/amar_pandey206",
    description: "Follow my personal updates",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-32 relative" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// let's connect</span>
          <h2 className="section-heading">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subheading mx-auto">
            Open to internship and full-time opportunities in AI/ML and Full-Stack Development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-8 border-glow"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Resume Download */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground mb-1">Download Resume</p>
                    <p className="text-sm text-muted-foreground">PDF • ATS-Friendly Format</p>
                  </div>
                  <a
                    href="#"
                    className="btn-neon py-2 px-4 flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Resume download will be available once PDF is uploaded.");
                    }}
                  >
                    <Download size={18} />
                    Download
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social Links Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-8 border-glow"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Find Me Online</h3>
              
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl border border-border bg-muted/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <link.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {link.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                      <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </a>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 text-center"
              >
                <p className="text-muted-foreground mb-4">
                  Interested in working together? Let's talk!
                </p>
                <a
                  href="mailto:apandey.tech@gmail.com"
                  className="btn-neon inline-flex items-center gap-2"
                >
                  <Send size={18} />
                  Send a Message
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
