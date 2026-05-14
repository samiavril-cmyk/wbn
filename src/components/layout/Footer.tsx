export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#home" className="text-xl font-display font-semibold tracking-tight text-white inline-block mb-4">
              WBN<span className="text-brand-500">.</span>Chirurgie
            </a>
            <p className="max-w-xs text-sm leading-relaxed">
              Einzigartiges Weiterbildungsnetzwerk Chirurgie in der Schweiz. Die Chance für deine Karriereplanung.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-medium mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-brand-400 transition-colors">Über uns</a></li>
              <li><a href="#courses" className="hover:text-brand-400 transition-colors">Symposien & Kurse</a></li>
              <li><a href="#assessment" className="hover:text-brand-400 transition-colors">Assessment</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-medium mb-4">Rechtliches</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.wbchirurgie.ch/impressum" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">Impressum</a></li>
              <li><a href="https://www.wbchirurgie.ch/datenschutz" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">Datenschutz</a></li>
              <li><a href="https://www.wbchirurgie.ch/agb" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col justify-center items-center text-xs">
          <p>© {new Date().getFullYear()} amlimit.ch / Weiterbildungsnetzwerk Chirurgie</p>
        </div>
      </div>
    </footer>
  );
}
