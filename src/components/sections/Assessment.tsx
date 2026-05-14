import { motion } from "motion/react";
import { ClipboardList, ArrowRight } from "lucide-react";

export function Assessment() {
  return (
    <section id="assessment" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-brand-500/20 text-brand-400 rounded-2xl flex items-center justify-center mb-6">
                <ClipboardList size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">
                Offizielles Assessment
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Bewerten Sie Ihre Fähigkeiten und planen Sie Ihre nächsten Karriereschritte. 
                Ihre Anmeldung kann sofort erfolgen. Es finden auch ausserhalb der offiziellen Termine Assessments statt.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:amlimit@bluewin.ch" 
                  className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full font-medium hover:bg-brand-500 transition-all shadow-lg shadow-brand-900/20"
                >
                  Jetzt Anmelden
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-3xl p-8 border border-white/5">
              <h3 className="text-xl font-display font-medium mb-6 text-white pb-6 border-b border-white/10">
                Nächster offizieller Termin
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Datum</p>
                  <p className="text-2xl font-medium text-white">08. April 2026</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Ort</p>
                  <p className="text-2xl font-medium text-white">Raum Zürich</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Auskunft & Anmeldung</p>
                  <a href="mailto:amlimit@bluewin.ch" className="text-lg font-medium text-brand-400 hover:text-brand-300 transition-colors">
                    amlimit@bluewin.ch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
