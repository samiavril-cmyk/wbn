import { motion } from "motion/react";
import { Calendar, MapPin, Clock, ArrowUpRight } from "lucide-react";

const events = [
  {
    title: "Weiterbildungssymposium",
    topic: "Endokrine Chirurgie",
    date: "16. Mai 2026",
    time: "11:00 - 14:00 Uhr",
    location: "Spital Uster",
    type: "Symposium",
  },
  {
    title: "Resident Lecture, USZ",
    topic: "Vorstellung randomisierte Studie",
    date: "19. Mai 2026",
    time: "07:15 - 07:45 Uhr",
    location: "Virtuell",
    type: "Lecture",
  },
  {
    title: "Nahtkurs",
    topic: "Basics für den chirurgischen Alltag",
    date: "28. Mai 2026 / 3. Sept 2026",
    time: "16:00 - 18:00 Uhr",
    location: "KSW & SSH",
    type: "Workshop",
  },
  {
    title: "Weiterbildungssymposium",
    topic: "Hepatopankreatikobiliäre Chirurgie",
    date: "08. August 2026",
    time: "09:30 - 15:30 Uhr",
    location: "Kantonsspital Winterthur (KSW)",
    type: "Symposium",
  },
  {
    title: "Robotic Surgery Course 2026",
    topic: "Inguinal Hernia Repair & Cholecystectomy",
    date: "21./22. Aug & 27. Nov 2026",
    time: "Ein Tag",
    location: "Kantonsspital Winterthur",
    type: "Workshop",
  },
  {
    title: "Weiterbildungssymposium",
    topic: "Untere Extremität",
    date: "24. Oktober 2026",
    time: "09:30 - 15:30 Uhr",
    location: "Hirslanden Zürich",
    type: "Symposium",
  },
  {
    title: "Mündliche Prüfung",
    topic: "Weiterbildungsnetzwerk",
    date: "27. Januar 2027",
    time: "18:00 - 21:00 Uhr",
    location: "Nur für WBN-TeilnehmerInnen",
    type: "Assessment",
  }
];

const getTypeColor = (type: string) => {
  switch(type) {
    case 'Symposium': return 'bg-blue-50 text-blue-700 border-blue-100';
    case 'Lecture': return 'bg-purple-50 text-purple-700 border-purple-100';
    case 'Workshop': return 'bg-brand-50 text-brand-700 border-brand-100';
    case 'Assessment': return 'bg-amber-50 text-amber-700 border-amber-100';
    default: return 'bg-slate-100 text-slate-700 border-slate-200';
  }
};

export function Courses() {
  return (
    <section id="courses" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center max-w-3xl md:mx-auto"
        >
          <h2 className="text-sm font-medium text-brand-600 tracking-widest uppercase mb-3">Agenda</h2>
          <h3 className="text-3xl md:text-4xl font-display font-medium text-slate-900 mb-6">
            Symposien & Kurse
          </h3>
          <p className="text-lg text-slate-600">
            Unser Weiterbildungsprogramm für das Jahr 2026. Sichern Sie sich rechtzeitig einen Platz für unsere hochkarätigen Veranstaltungen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-colors transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getTypeColor(event.type)}`}>
                  {event.type}
                </span>
                <a href="mailto:amlimit@bluewin.ch" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-brand-600 group-hover:border-brand-200 group-hover:bg-brand-50 transition-colors">
                  <ArrowUpRight size={18} />
                </a>
              </div>
              
              <div className="flex-grow">
                <h4 className="text-xl font-display font-medium text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                  {event.title}
                </h4>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {event.topic}
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-200/60 mt-auto">
                <div className="flex items-center text-sm text-slate-600">
                  <Calendar size={16} className="mr-3 text-slate-400" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Clock size={16} className="mr-3 text-slate-400" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <MapPin size={16} className="mr-3 text-slate-400" />
                  {event.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
