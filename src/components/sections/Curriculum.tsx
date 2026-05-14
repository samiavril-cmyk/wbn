import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Target, Gift } from "lucide-react";

export function Curriculum() {
  return (
    <section id="curriculum" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center max-w-3xl md:mx-auto"
        >
          <h2 className="text-sm font-medium text-brand-600 tracking-widest uppercase mb-3">Ausbildung</h2>
          <h3 className="text-3xl md:text-5xl font-display font-medium text-slate-900 mb-6">
            Curriculum Weiterbildungsnetzwerk
          </h3>
          <p className="text-lg text-slate-600">
            Ein strukturierter Weg zur Erlangung des Facharzttitels Chirurgie. 
            Transparente Erwartungen und starke Garantien für Ihre Karriere.
          </p>
        </motion.div>

        {/* Interactive PDF Graphic Replica */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-8 bg-slate-50 p-6 md:p-10 rounded-3xl border border-slate-100 shadow-sm overflow-x-auto">
            
            {/* Step 1 */}
            <div className="flex-1 min-w-[200px] bg-sky-50 text-sky-800 p-6 rounded-2xl border border-sky-100 flex flex-col justify-center text-center font-medium shadow-sm relative h-32">
              2 Jahre Weiterbildung an Netzwerk- oder anderer Klinik
            </div>

            <ArrowRight className="hidden lg:block text-slate-300 w-8 h-8 flex-shrink-0" />
            <ArrowRight className="block lg:hidden text-slate-300 w-6 h-6 rotate-90 my-2" />

            {/* Step 2 */}
            <div className="min-w-[180px] bg-brand-50 text-brand-800 p-6 rounded-2xl border border-brand-100 flex flex-col justify-center text-center font-medium shadow-sm relative h-32">
              Assessment<br/>Ende 2. WB Jahr
            </div>

            <ArrowRight className="hidden lg:block text-slate-300 w-8 h-8 flex-shrink-0" />
            <ArrowRight className="block lg:hidden text-slate-300 w-6 h-6 rotate-90 my-2" />

            {/* Step 3 */}
            <div className="flex-1 min-w-[280px] bg-blue-50 text-blue-900 p-6 rounded-2xl border border-blue-200 border-l-4 border-l-blue-500 flex flex-col justify-center text-center shadow-md relative h-32">
              <span className="font-semibold text-lg mb-4">3. - 6. Jahr Weiterbildung im Netzwerk</span>
              <div className="flex justify-center gap-2 mt-auto">
                {['A', 'B', 'C', 'D'].map(letter => (
                  <span key={letter} className="w-8 h-8 bg-white border border-blue-200 rounded-md flex items-center justify-center font-bold text-blue-700 text-sm shadow-sm">
                    {letter}
                  </span>
                ))}
              </div>
            </div>

            <ArrowRight className="hidden lg:block text-slate-300 w-8 h-8 flex-shrink-0" />
            <ArrowRight className="block lg:hidden text-slate-300 w-6 h-6 rotate-90 my-2" />

            {/* Result */}
            <div className="min-w-[180px] bg-slate-900 text-white p-6 rounded-2xl flex flex-col justify-center text-center font-medium shadow-xl relative h-32 text-lg">
              Facharzt<br/>Chirurgie
            </div>
            
          </div>
        </motion.div>

        {/* The 3 Columns Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Column 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100"
          >
            <div className="flex flex-col items-center mb-8 text-center">
              <div className="w-14 h-14 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mb-4">
                <CheckCircle2 size={28} />
              </div>
              <h4 className="text-xl font-display font-medium text-slate-900">Das WBN garantiert</h4>
              <p className="text-sm text-slate-500 mt-2">Dass die KandidatInnen die Anforderungen des Weiterbildungsprogrammes erreichen durch:</p>
            </div>
            <ul className="space-y-4">
              {[
                "Organisation der Rotationen (A-/B-Spital, IPS, Notfallstation)",
                "Erreichen der notwendigen Operationszahlen",
                "Ermöglichen des Besuchs der notwendigen Kurse, Fortbildungen und Kongresse",
                "Unterstützung bei der Organisation einer Dissertation / Publikation"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-700 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl"
          >
            <div className="flex flex-col items-center mb-8 text-center">
              <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-4">
                <Target size={28} />
              </div>
              <h4 className="text-xl font-display font-medium">Das WBN erwartet</h4>
              <p className="text-sm text-slate-400 mt-2">Dass die KandidatInnen die folgenden zusätzlichen Leistungen erbringen:</p>
            </div>
            <ul className="space-y-4">
              {[
                "Organisation eines WBN-Symposiums",
                "Halten eines Vortrags an einem WBN-Symposium",
                "Poster oder Vortrag an einem SCS-Jahreskongress",
                "Veröffentlichen einer chirurgischen Publikation",
                "Besuch eines zusätzlichen Kurses zu den Themen Kommunikation, Ethik, Teaching oder Wissenschaft",
                "Kontinuierliche Weiterentwicklung der persönlichen, sozialen und methodischen Kompetenz (Soft Skills)"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-blue-50 rounded-3xl p-8 border border-blue-100"
          >
            <div className="flex flex-col items-center mb-8 text-center">
              <div className="w-14 h-14 bg-blue-200 text-blue-700 rounded-2xl flex items-center justify-center mb-4">
                <Gift size={28} />
              </div>
              <h4 className="text-xl font-display font-medium text-slate-900">Das WBN bietet</h4>
              <p className="text-sm text-slate-500 mt-2">Den KandidatInnen Support, Teaching und Vernetzung durch:</p>
            </div>
            <ul className="space-y-4">
              {[
                "3-mal jährliche Standortbestimmungen",
                "3- bis 4-mal jährliche Symposien zum Prüfungsstoff der Facharztprüfung",
                "4-mal jährlich virtuelles Teaching «Meet the Expert»",
                "Mehrmals jährlich Kunstknochenkurs",
                "1-mal jährlich Laparoskopiekurs",
                "3-mal pro Curriculum individuelle Videoanalyse Kommunikation",
                "1-mal jährlich mündliches Prüfungs-Training",
                "Voroperieren im Jahr C oder D",
                "Schockraumtraining im Jahr C oder D",
                "Besuch eines 5-tägigen Kurses am IRCAD im Jahr C oder D"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-700 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
