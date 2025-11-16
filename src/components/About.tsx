import { motion } from "motion/react";
import { Code2, Palette, Zap } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and industry standards.",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating beautiful, intuitive interfaces with attention to detail and user experience.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast, optimized applications that deliver exceptional user experiences.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate full-stack developer with 6+ years of experience crafting scalable web applications. 
            My journey started with a curiosity for how things work on the web, and evolved into a career dedicated 
            to building products that solve real problems. I thrive in collaborative environments where I can merge 
            technical expertise with creative problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-background rounded-lg border hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}