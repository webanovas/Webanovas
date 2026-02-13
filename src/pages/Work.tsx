import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { StaggerChildren, StaggerItem } from "@/components/StaggerChildren";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "LUXURY REAL ESTATE",
    title: "Vanguard Estates",
    description: "A premium property showcase platform with immersive visuals, smooth animations, and an elegant browsing experience.",
    year: "2025",
    color: "from-amber-900/20 to-stone-900/40",
  },
  {
    category: "AI / SAAS",
    title: "Nexus AI",
    description: "An intelligent SaaS dashboard featuring real-time analytics, AI-powered insights, and a sleek modern interface.",
    year: "2025",
    color: "from-blue-900/20 to-slate-900/40",
  },
  {
    category: "CREATIVE",
    title: "The Artist Loft",
    description: "A bold creative portfolio with dynamic layouts, rich media galleries, and an expressive artistic design.",
    year: "2024",
    color: "from-rose-900/20 to-stone-900/40",
  },
];

export default function Work() {
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
            <span className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground">Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-6">
            Selected<br />
            <span className="text-gradient italic">work.</span>
          </h1>
        </motion.div>

        <StaggerChildren className="space-y-6">
          {projects.map((p, i) => (
            <StaggerItem key={p.title}>
              <div className="glass-card overflow-hidden group cursor-pointer">
                <div className={`h-56 md:h-72 bg-gradient-to-br ${p.color} flex items-end p-8 md:p-12 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.08),transparent_60%)]" />
                  <span className="text-[120px] md:text-[200px] font-display font-bold absolute -right-4 -bottom-12 text-foreground/[0.03] leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative z-10">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-body">{p.category}</span>
                  </div>
                  <div className="absolute top-8 right-8 md:top-12 md:right-12 w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">
                    <ArrowUpRight className="w-4 h-4 text-foreground/50 group-hover:text-primary transition-colors" />
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-display font-semibold">{p.title}</h3>
                    <span className="text-xs text-muted-foreground font-body">{p.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body max-w-lg">{p.description}</p>
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
