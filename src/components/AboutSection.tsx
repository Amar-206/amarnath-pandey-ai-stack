import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Brain, Code2, Zap } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "BTech in AI/ML",
    description: "Pursuing B.Tech in Artificial Intelligence & Machine Learning",
  },
  {
    icon: Brain,
    title: "AI Systems",
    description: "Focused on building intelligent, production-ready AI solutions",
  },
  {
    icon: Code2,
    title: "Full-Stack",
    description: "Proficient in Python and Java with modern web technologies",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Creating agentic workflows and automation systems",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// about me</span>
          <h2 className="section-heading">
            Know Who <span className="text-gradient">I Am</span>
          </h2>
          <p className="section-subheading mx-auto">
            A passionate technologist bridging AI innovation with real-world applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a <span className="text-foreground font-medium">BTech student specializing in 
              Artificial Intelligence & Machine Learning</span>, with a strong foundation in 
              Python and Java. My focus goes beyond theoretical knowledge—I build systems that 
              solve real problems.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              My work spans <span className="text-primary">AI-powered applications</span>, 
              <span className="text-secondary"> full-stack development</span>, and 
              <span className="text-accent"> automation systems</span>. I'm particularly 
              interested in agentic AI workflows—systems that can reason, plan, and execute 
              complex tasks autonomously.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              As a <span className="text-foreground font-medium">Class Representative</span>, 
              I've developed strong leadership and communication skills, coordinating with 
              faculty and peers to achieve collective goals. I approach every challenge with 
              a systems-thinking mindset, always looking for scalable, efficient solutions.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 glass-card rounded-lg border-glow-hover">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center p-4 glass-card rounded-lg border-glow-hover">
                <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">3+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Tech Stacks</div>
              </div>
              <div className="text-center p-4 glass-card rounded-lg border-glow-hover">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">1</div>
                <div className="text-xs md:text-sm text-muted-foreground">Leadership Role</div>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="p-6 glass-card rounded-xl border-glow-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
