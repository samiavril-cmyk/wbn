import { motion } from "motion/react";
import { Building2, User, Phone, Globe, ExternalLink } from "lucide-react";

const hospitals = [
  {
    name: "Spital Bülach",
    address: "Spitalstrasse 24, CH-8180 Bülach",
    phone: "044 863 22 11",
    url: "http://www.spitalbuelach.ch/",
    chef: "Dr. med. Giacinto Basilicata"
  },
  {
    name: "Spitäler Schaffhausen",
    address: "Geissbergstrasse 81, CH-8208 Schaffhausen",
    phone: "052 634 34 34",
    url: "http://www.spitaeler-sh.ch/",
    chef: "Dr. med. Peter Šandera"
  },
  {
    name: "Spital Uster",
    address: "Brunnenstrasse 42, 8610 Uster",
    phone: "044 911 11 11",
    url: "https://www.spitaluster.ch/",
    chef: "Dr. med. Vital Schreiber"
  },
  {
    name: "GZO Spital Wetzikon",
    address: "Spitalstrasse 66, 8620 Wetzikon",
    phone: "044 934 11 11",
    url: "http://www.gzo.ch/",
    chef: "Dr. med. Magdalena Biraima"
  },
  {
    name: "Kantonsspital Winterthur",
    address: "Brauerstrasse 15, 8401 Winterthur",
    phone: "052 266 21 21",
    url: "http://www.ksw.ch/",
    chef: "Prof. Dr. med. Stefan Breitenstein"
  },
  {
    name: "Klinik Hirslanden Zürich",
    address: "Witellikerstrasse 40, 8032 Zürich",
    phone: "044 387 21 11",
    url: "https://www.hirslanden.ch/",
    chef: "Prof. Dr. med. Othmar Schöb"
  },
  {
    name: "Universitätsspital Zürich",
    address: "Rämistrasse 100, 8091 Zürich",
    phone: "044 255 11 11",
    url: "https://www.usz.ch",
    chef: "Prof. Dr. med. José Oberholzer"
  },
  {
    name: "Stadtspital Zürich",
    address: "Birmensdorferstrasse 497, 8063 Zürich",
    phone: "041 44 416 11 11",
    url: "https://www.stadt-zuerich.ch/triemli/de/index.html",
    chef: "Dr. med. Dirk Wagnetz"
  },
  {
    name: "See-Spital Horgen",
    address: "Asylstrasse 19, 8810 Horgen",
    phone: "041 44 728 11 11",
    url: "https://see-spital.ch",
    chef: "Dr. med. Simon Gregor Wrann"
  }
];

export function Hospitals() {
  return (
    <section id="hospitals" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center max-w-3xl md:mx-auto"
        >
          <h2 className="text-sm font-medium text-brand-600 tracking-widest uppercase mb-3">Partner</h2>
          <h3 className="text-3xl md:text-4xl font-display font-medium text-slate-900 mb-6">
            Netzwerkspitäler
          </h3>
          <p className="text-lg text-slate-600">
            Unser Weiterbildungsnetzwerk umfasst renommierte Kliniken und Spitäler, 
            um eine breitgefächerte und hochwertige chirurgische Ausbildung zu garantieren.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map((hospital, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
                <Building2 size={24} />
              </div>
              
              <h4 className="text-xl font-display font-medium text-slate-900 mb-4 h-14">
                {hospital.name}
              </h4>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3 text-slate-600">
                  <User size={18} className="text-brand-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-wider text-slate-400 mb-0.5">Leitung</span>
                    <span className="font-medium text-slate-800">{hospital.chef}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-slate-600 text-sm">
                  <Phone size={16} className="text-slate-400" />
                  {hospital.phone}
                </div>
                
                <div className="flex items-start gap-3 text-slate-600 text-sm">
                  <Globe size={16} className="text-slate-400 mt-0.5" />
                  <span className="leading-tight">{hospital.address}</span>
                </div>
              </div>
              
              <a 
                href={hospital.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-slate-50 text-slate-700 font-medium hover:bg-brand-50 hover:text-brand-700 transition-colors"
              >
                Website besuchen
                <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
