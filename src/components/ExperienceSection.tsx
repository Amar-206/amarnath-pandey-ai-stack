import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, MessageSquare, Target, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Class Representative",
    organization: "BTech AI/ML Department",
    period: "2022 - Present",
    type: "Leadership Role",
    description: "Serving as the primary liaison between students and faculty, coordinating academic activities and representing peer interests.",
    responsibilities: [
      "Facilitated communication between 60+ students and department faculty",
      "Organized academic events, workshops, and study sessions",
      "Resolved conflicts and addressed student concerns professionally",
      "Coordinated with multiple stakeholders for seamless operations",
    ],
    skills: ["Leadership", "Communication", "Team Coordination", "Problem Solving"],
  },
];

const leadershipHighlights = [
  {
    icon: Users,
    title: "Team Leadership",
    description: "Leading and motivating peers towards common academic goals",
    metric: "60+",
    label: "Students Led",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "Bridging the gap between students and faculty effectively",
    metric: "100%",
    label: "Issue Resolution",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Driving initiatives that benefit the entire class",
    metric: "5+",
    label: "Events Organized",
  },
  {
    icon: Calendar,
    title: "Consistent",
    description: "Maintaining reliability and accountability over time",
    metric: "2+",
    label: "Years Active",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// experience & leadership</span>
          <h2 className="section-heading">
            Leadership & <span className="text-gradient">Responsibility</span>
          </h2>
          <p className="section-subheading mx-auto">
            Demonstrating leadership through action and consistent delivery
          </p>
        </motion.div>

        {/* Leadership Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {leadershipHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="p-6 glass-card rounded-xl border-glow-hover text-center group"
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-1">{item.metric}</div>
              <div className="text-sm text-foreground font-medium mb-1">{item.label}</div>
              <div className="text-xs text-muted-foreground">{item.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Card */}
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card rounded-2xl border-glow overflow-hidden">
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/15 text-primary border border-primary/30 mb-3">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.organization}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} className="text-primary" />
                    {exp.period}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Skills Developed */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium rounded-full bg-secondary/15 text-secondary border border-secondary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
