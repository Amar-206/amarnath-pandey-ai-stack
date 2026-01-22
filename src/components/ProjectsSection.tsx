import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Brain, Bot, Workflow, Globe, BarChart } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Chatbot",
    category: "Agentic AI",
    icon: Bot,
    description: "Intelligent conversational AI system built with modern NLP techniques. Deployed on Hugging Face Spaces for real-time inference.",
    problem: "Enable natural language interactions for automated customer support and information retrieval.",
    techStack: ["Python", "Hugging Face", "Transformers", "Gradio"],
    features: [
      "Context-aware responses",
      "Multi-turn conversation",
      "Real-time inference",
    ],
    githubUrl: "https://github.com/Amar-206/first-project",
    liveUrl: "https://huggingface.co/Amar206",
    color: "primary",
  },
  {
    title: "Automation Workflow System",
    category: "Automation",
    icon: Workflow,
    description: "End-to-end automation pipeline for data processing and task orchestration. Reduces manual effort by 80%.",
    problem: "Streamline repetitive data operations and integrate multiple systems seamlessly.",
    techStack: ["Python", "REST APIs", "Cron Jobs", "MongoDB"],
    features: [
      "Scheduled task execution",
      "Error handling & logging",
      "Multi-source data sync",
    ],
    githubUrl: "https://github.com/Amar-206/first-project",
    color: "secondary",
  },
  {
    title: "Full-Stack Web Application",
    category: "Web Development",
    icon: Globe,
    description: "Complete MERN stack application with authentication, CRUD operations, and responsive design.",
    problem: "Build a scalable web platform with modern UX and secure data management.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "JWT Authentication",
      "RESTful API design",
      "Responsive UI",
    ],
    githubUrl: "https://github.com/Amar-206/first-project",
    color: "accent",
  },
  {
    title: "ML Model Pipeline",
    category: "Machine Learning",
    icon: Brain,
    description: "End-to-end machine learning pipeline with data preprocessing, model training, and deployment.",
    problem: "Create reproducible ML workflows for predictive analytics use cases.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    features: [
      "Automated preprocessing",
      "Model versioning",
      "Performance metrics",
    ],
    githubUrl: "https://github.com/Amar-206/first-project",
    color: "primary",
  },
  {
    title: "Power BI Dashboard",
    category: "Data Analytics",
    icon: BarChart,
    description: "Interactive business intelligence dashboard for data-driven decision making.",
    problem: "Transform raw data into actionable insights for stakeholders.",
    techStack: ["Power BI", "DAX", "SQL", "Excel"],
    features: [
      "Real-time data refresh",
      "Interactive filters",
      "KPI tracking",
    ],
    githubUrl: "https://github.com/Amar-206/first-project",
    color: "secondary",
  },
];

const colorStyles = {
  primary: {
    badge: "bg-primary/15 text-primary border-primary/30",
    icon: "bg-primary/10 text-primary group-hover:bg-primary/20",
    border: "group-hover:border-primary/50",
    shadow: "group-hover:shadow-[0_0_30px_hsl(180_100%_50%/0.15)]",
  },
  secondary: {
    badge: "bg-secondary/15 text-secondary border-secondary/30",
    icon: "bg-secondary/10 text-secondary group-hover:bg-secondary/20",
    border: "group-hover:border-secondary/50",
    shadow: "group-hover:shadow-[0_0_30px_hsl(270_100%_65%/0.15)]",
  },
  accent: {
    badge: "bg-accent/15 text-accent border-accent/30",
    icon: "bg-accent/10 text-accent group-hover:bg-accent/20",
    border: "group-hover:border-accent/50",
    shadow: "group-hover:shadow-[0_0_30px_hsl(150_100%_50%/0.15)]",
  },
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// featured work</span>
          <h2 className="section-heading">
            Projects & <span className="text-gradient">Applications</span>
          </h2>
          <p className="section-subheading mx-auto">
            Real-world solutions showcasing AI, full-stack, and automation capabilities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const styles = colorStyles[project.color as keyof typeof colorStyles];
            
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group project-card flex flex-col ${styles.border} ${styles.shadow}`}
              >
                {/* Card Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${styles.icon} flex items-center justify-center transition-colors`}>
                      <project.icon className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${styles.badge}`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Problem Statement */}
                <div className="px-6 py-3 bg-muted/30 border-y border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-foreground font-medium">Problem:</span> {project.problem}
                  </p>
                </div>

                {/* Tech Stack & Features */}
                <div className="p-6 pt-4 flex-1 flex flex-col">
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <span className="text-xs text-muted-foreground font-medium mb-2 block">Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono bg-muted rounded border border-border text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6 flex-1">
                    <span className="text-xs text-muted-foreground font-medium mb-2 block">Key Features</span>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 text-sm font-medium text-center rounded-lg border border-border bg-muted/50 text-foreground hover:border-primary/50 hover:text-primary transition-all flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 text-sm font-medium text-center rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-all flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* View More on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Amar-206"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon-outline inline-flex items-center gap-2"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
