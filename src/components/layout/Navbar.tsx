import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

const navItems = [
  { name: "Start", href: "#home" },
  { name: "Über uns", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Curriculum", href: "#curriculum" },
  { name: "Partner", href: "#hospitals" },
  { name: "Symposien", href: "#courses" },
  { name: "Kontakt", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-slate-200/50"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className={cn("text-xl font-display font-semibold tracking-tight", isScrolled ? "text-slate-900" : "text-white")}>
          WBN<span className="text-brand-500">.</span>Chirurgie
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn("text-sm font-medium transition-colors hover:text-brand-500", isScrolled ? "text-slate-600" : "text-white/80")}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className={cn("text-sm font-medium px-5 py-2.5 rounded-full transition-colors", isScrolled ? "bg-slate-900 text-white hover:bg-brand-600" : "bg-white text-slate-900 hover:bg-gray-200")}
          >
            Jetzt anfragen
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("md:hidden p-2", isScrolled ? "text-slate-600" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-slate-100 py-4 px-6 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium text-slate-800"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
