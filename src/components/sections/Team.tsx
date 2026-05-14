import { motion } from "motion/react";
import { UserCircle2 } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. med. Giacinto Basilicata",
    role: "Chefarzt / Mitglied der Spitalkonferenz",
    hospital: "Spital Bülach",
  },
  {
    name: "Dr. med. Magdalena Biraima",
    role: "Leiterin Departement Chirurgie, Chefärztin",
    hospital: "GZO Spital Wetzikon AG",
  },
  {
    name: "Prof. Dr. med. Stefan Breitenstein",
    role: "CMO Bereich B / Chefarzt Viszeral / Thorax",
    hospital: "Kantonsspital Winterthur",
  },
  {
    name: "Prof. Dr. med. José Oberholzer",
    role: "Vorsitzender des Departements, Viszeral- & Transplantationschirurgie",
    hospital: "Universitätsspital Zürich",
  },
  {
    name: "Prof. Dr. med. Othmar Schöb",
    role: "Facharzt FMH Chirurgie & Thoraxchirurgie, Spez. Viszeral",
    hospital: "Klinik Hirslanden Zürich",
  },
  {
    name: "Dr. med. Peter Šandera",
    role: "Departementsleiter Operative Disziplinen / Chefarzt",
    hospital: "Spitäler Schaffhausen",
  },
  {
    name: "Dr. med. Vital Schreiber",
    role: "Departementsvorsteher Operative Disziplinen / Chefarzt",
    hospital: "Spital Uster",
  },
  {
    name: "Dr. med. Dirk Wagnetz",
    role: "Leitender Arzt Viszeral-, Thorax- & Gefässchirurgie",
    hospital: "Stadtspital Zürich",
  },
  {
    name: "Dr. med. Simon Gregor Wrann",
    role: "Chefarzt Chirurgie, minimalinvasive und robotische Chirurgie",
    hospital: "See-Spital Horgen",
  },
  {
    name: "Torben Schmidt",
    role: "Koordinator Weiterbildungsnetzwerk",
    hospital: "Inhaber: amlimit.ch GmbH",
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center max-w-3xl md:mx-auto"
        >
          <h2 className="text-sm font-medium text-brand-600 tracking-widest uppercase mb-3">Leitung</h2>
          <h3 className="text-3xl md:text-4xl font-display font-medium text-slate-900 mb-6">
            Unser Team
          </h3>
          <p className="text-lg text-slate-600">
            Ein starker Verbund renommierter Chefärzte und Klinikleitungen, die sich gemeinsam 
            für die Zukunft der chirurgischen Weiterbildung einsetzen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex flex-col justify-start hover:shadow-md hover:border-slate-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 flex-shrink-0 shadow-sm border border-slate-100 mb-4">
                <UserCircle2 size={24} />
              </div>
              <h4 className="font-display font-medium text-slate-900 leading-tight">{member.name}</h4>
              <p className="text-xs font-medium text-brand-600 mt-2 mb-2 uppercase tracking-wide">{member.hospital}</p>
              <p className="text-sm text-slate-600 leading-snug">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
