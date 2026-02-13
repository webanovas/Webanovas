import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen px-6 pb-28">
      <div className="max-w-2xl mx-auto pt-28 md:pt-40">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="section-line" />
            <span className="text-xs font-body uppercase tracking-[0.3em] text-muted-foreground">Let's Talk</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
            Start a<br />
            <span className="text-gradient italic">project.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Have an idea? Let's bring it to life. Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          className="glass-card p-8 md:p-10 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "mailto:hello@webanovas.com";
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs uppercase tracking-[0.15em] font-body">Name</Label>
              <Input id="name" placeholder="Your name" className="bg-secondary/50 border-border/50 font-body" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs uppercase tracking-[0.15em] font-body">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" className="bg-secondary/50 border-border/50 font-body" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs uppercase tracking-[0.15em] font-body">Tell us about your project</Label>
            <Textarea id="message" placeholder="Describe your project, goals, and timeline..." rows={5} className="bg-secondary/50 border-border/50 font-body" />
          </div>
          <Button type="submit" size="lg" className="w-full rounded-full font-body gap-2 group">
            Send Message
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.form>
      </div>
      <div className="max-w-6xl mx-auto mt-24">
        <Footer />
      </div>
    </main>
  );
}
