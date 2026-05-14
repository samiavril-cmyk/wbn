import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-medium text-brand-600 tracking-widest uppercase mb-3">Kontakt</h2>
            <h3 className="text-3xl md:text-5xl font-display font-medium text-slate-900 mb-6">
              Lassen Sie uns ins Gespräch kommen
            </h3>
            <p className="text-lg text-slate-600 mb-10">
              Haben Sie Fragen zu unseren Symposien, Assessments oder dem Curriculum? 
              Kontaktieren Sie mich – ich freue mich darauf, Sie bei Ihrer Karriereplanung zu unterstützen.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm border border-slate-100 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Telefon</p>
                  <p className="text-slate-600 mt-1">+41 (0)79 231 09 59</p>
                  <p className="text-sm text-slate-500 mt-1">Torben Schmidt</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm border border-slate-100 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-medium text-slate-900">E-Mail</p>
                  <a href="mailto:amlimit@bluewin.ch" className="text-brand-600 hover:text-brand-800 transition-colors mt-1 block">
                    amlimit@bluewin.ch
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
          >
            <h4 className="text-2xl font-display font-medium text-slate-900 mb-6">Newsletter abonnieren</h4>
            <p className="text-slate-600 mb-8">
              Bleiben Sie auf dem Laufenden über neue Kurse und Symposien des Weiterbildungsnetzwerks.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-Mail Adresse *</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                  placeholder="ihre.email@example.com"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-600 transition-all mt-4"
              >
                Abonnieren
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
