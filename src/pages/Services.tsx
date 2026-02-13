import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { StaggerChildren, StaggerItem } from "@/components/StaggerChildren";

const services = [
  {
    number: "01",
    category: "FRONT-END",
    title: "Landing Pages",
    description: "High-converting, beautifully crafted landing pages designed to make an unforgettable first impression. Responsive, fast, and optimized for results.",
    details: ["Responsive Design", "Performance Optimization", "A/B Testing Ready"],
  },
  {
    number: "02",
    category: "FULL-STACK",
    title: "Web Systems",
    description: "Complete web applications built from the ground up. From user dashboards to complex platforms — scalable architecture that grows with your business.",
    details: ["Custom Architecture", "API Development", "Database Design"],
  },
  {
    number: "03",
    category: "OPTIMIZATION",
    title: "Performance",
    description: "Speed audits, Core Web Vitals optimization, and infrastructure tuning. We make your existing products faster and more reliable.",
    details: ["Core Web Vitals", "Lighthouse Audits", "CDN & Caching"],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen px-6 pb-28">
      <div className="max-w-6xl mx-auto pt-28 md:pt-40">
        <motion.div
          className="mb-24 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="section-line" />
            <span className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground">Services</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-6">
            Expertise<span className="text-gradient">.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg font-body leading-relaxed">
            Focused services designed to deliver exceptional digital products with clarity and precision.
          </p>
        </motion.div>

        <StaggerChildren className="space-y-px border border-border/40 rounded-xl overflow-hidden">
          {services.map((s) => (
            <StaggerItem key={s.number}>
              <div className="bg-card/60 p-10 md:p-14 group hover:bg-card transition-colors duration-500">
                <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
                  <div className="flex items-center gap-6 md:w-48 shrink-0">
                    <span className="text-4xl md:text-5xl font-display font-bold text-gradient">{s.number}</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-body">{s.category}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body mb-6">{s.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {s.details.map((d) => (
                        <span key={d} className="text-[10px] uppercase tracking-[0.2em] text-primary/70 border border-primary/20 rounded-full px-3 py-1 font-body">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
      <div className="max-w-6xl mx-auto mt-24">
        <Footer />
      </div>
    </main>
  );
}
