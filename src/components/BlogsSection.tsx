import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, BookOpen, Cpu, Bot, Zap, Code } from "lucide-react";

const blogTopics = [
  {
    icon: Cpu,
    title: "AI & Machine Learning Insights",
    summary: "Deep dives into machine learning concepts, model training, and practical AI implementations using Python and Hugging Face.",
  },
  {
    icon: Bot,
    title: "Agentic AI Systems",
    summary: "Exploring autonomous AI agents, multi-agent architectures, and building intelligent workflow systems.",
  },
  {
    icon: Zap,
    title: "Automation & Workflows",
    summary: "Tutorials on automating repetitive tasks, building efficient pipelines, and integrating AI into business processes.",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    summary: "Best practices in React, Node.js, database design, and building scalable web applications.",
  },
];

const BlogsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blogs" className="py-20 md:py-32 relative" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// sharing knowledge</span>
          <h2 className="section-heading">
            Technical <span className="text-gradient">Blogs</span>
          </h2>
          <p className="section-subheading mx-auto">
            I write technical blogs on AI/ML, Agentic AI, Automation, and Full-Stack Development
          </p>
        </motion.div>

        {/* Blog Topics Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {blogTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card rounded-2xl p-6 border-glow group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <topic.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {topic.summary}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Medium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto border-glow">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Read My Articles on Medium</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Explore in-depth tutorials, case studies, and insights from my journey in AI and software development.
            </p>
            <a
              href="https://medium.com/@ImmortalBytes"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-flex items-center gap-2"
            >
              <BookOpen size={18} />
              Read on Medium
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsSection;
