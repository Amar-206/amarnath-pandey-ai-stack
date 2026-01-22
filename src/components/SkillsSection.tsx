import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, Brain, Layout, Server, Database, BarChart3, Settings, Cpu
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "Python", level: "Strong" },
      { name: "Java", level: "Strong" },
      { name: "JavaScript", level: "Proficient" },
      { name: "TypeScript", level: "Learning" },
    ],
  },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    color: "secondary",
    skills: [
      { name: "Machine Learning", level: "Core" },
      { name: "AI Chatbots", level: "Strong" },
      { name: "Hugging Face", level: "Proficient" },
      { name: "Agentic Workflows", level: "Proficient" },
      { name: "NLP", level: "Learning" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    color: "accent",
    skills: [
      { name: "React", level: "Strong" },
      { name: "HTML5", level: "Strong" },
      { name: "CSS3", level: "Strong" },
      { name: "Tailwind CSS", level: "Proficient" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "primary",
    skills: [
      { name: "Node.js", level: "Proficient" },
      { name: "REST APIs", level: "Strong" },
      { name: "Express.js", level: "Proficient" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "secondary",
    skills: [
      { name: "MySQL", level: "Strong" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MongoDB", level: "Strong" },
      { name: "XAMPP", level: "Proficient" },
    ],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    color: "accent",
    skills: [
      { name: "Power BI", level: "Strong" },
      { name: "Data Visualization", level: "Proficient" },
      { name: "Dashboard Design", level: "Strong" },
    ],
  },
  {
    title: "Core CS Fundamentals",
    icon: Cpu,
    color: "primary",
    skills: [
      { name: "DBMS", level: "Strong" },
      { name: "OOPs", level: "Strong" },
      { name: "DSA", level: "Working" },
      { name: "System Design", level: "Learning" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Settings,
    color: "secondary",
    skills: [
      { name: "Git", level: "Strong" },
      { name: "GitHub", level: "Strong" },
      { name: "VS Code", level: "Strong" },
      { name: "Linux", level: "Proficient" },
    ],
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
    hover: "hover:border-primary/50 hover:shadow-[0_0_20px_hsl(180_100%_50%/0.2)]",
    tagBg: "bg-primary/15",
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/30",
    text: "text-secondary",
    hover: "hover:border-secondary/50 hover:shadow-[0_0_20px_hsl(270_100%_65%/0.2)]",
    tagBg: "bg-secondary/15",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/30",
    text: "text-accent",
    hover: "hover:border-accent/50 hover:shadow-[0_0_20px_hsl(150_100%_50%/0.2)]",
    tagBg: "bg-accent/15",
  },
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// my toolkit</span>
          <h2 className="section-heading">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subheading mx-auto">
            A comprehensive skill set spanning AI, full-stack development, and modern tools
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className={`p-6 rounded-xl glass-card border ${colors.border} ${colors.hover} transition-all duration-300`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                    <category.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                        skill.level === "Strong" || skill.level === "Core"
                          ? `${colors.tagBg} ${colors.text} border border-current/30`
                          : "bg-muted text-muted-foreground border border-border"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-6 mt-12 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary/30 border border-primary/50" />
            <span>Strong/Core</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-muted border border-border" />
            <span>Proficient/Learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
