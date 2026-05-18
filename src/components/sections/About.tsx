import { motion } from "motion/react";
import { Target, History, Heart, MapPin } from "lucide-react";

const features = [
  {
    icon: <Target className="text-brand-600" size={24} />,
    title: "Klare Vorgaben & Ziele",
    description: "Unterstützung im theoretischen und operativen Alltag. Verlässliche Vorgaben für eine zielorientierte Entwicklung und stetigen Austausch."
  },
  {
    icon: <Heart className="text-brand-600" size={24} />,
    title: "Beruf & Privatleben",
    description: "Wir fördern nicht nur medizinische und soziale Kompetenzen, sondern unterstützen aktiv die Vereinbarkeit von chirurgischer Karriere und Privatleben."
  },
  {
    icon: <MapPin className="text-brand-600" size={24} />,
    title: "Starke regionale Verankerung",
    description: "Alle unsere Partner-Spitäler liegen im Umkreis von einer Fahrstunde. Das ermöglicht einen stabilen sozialen und beruflichen Lebensmittelpunkt."
  },
  {
    icon: <History className="text-brand-600" size={24} />,
    title: "Strukturiert zum Facharzt",
    description: "Gegründet 2017 mit dem Ziel, den FMH Titel Chirurgie innerhalb von 4-6 Jahren in Weiterbildungsstätten der Kategorien A und B strukturiert zu erlangen."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center max-w-3xl md:mx-auto"
        >
          <h2 className="text-sm font-medium text-brand-600 tracking-widest uppercase mb-3">Über uns</h2>
          <h3 className="text-3xl md:text-5xl font-display font-medium text-slate-900 mb-6">
            Karriereplanung neu gedacht
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Mit einem Verbund aus neun führenden Spitälern bieten wir die einmalige Gelegenheit, 
            den Facharzttitel Chirurgie innerhalb von 6 Jahren strukturiert abzuschliessen. 
            Eine praxisorientierte, zielgerichtete Ausbildung mit starkem Fokus auf die Work-Life-Balance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4 hover:shadow-md hover:border-slate-200 transition-colors transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h4 className="text-xl font-display font-medium text-slate-900">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
