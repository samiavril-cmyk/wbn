import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "motion/react";

const imageContext = import.meta.glob('./ezgif-3adb9ee31e671bb6-jpg/*.jpg', { eager: true, query: '?url', import: 'default' });
const frameUrls = Object.entries(imageContext)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([_, url]) => url as string);

function OverlayText({ progress }: { progress: any }) {
  const op1 = useTransform(progress, [0, 0.05, 0.15, 0.25], [1, 1, 0, 0]);
  const op2 = useTransform(progress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
  const op3 = useTransform(progress, [0.65, 0.75, 0.85, 0.95], [0, 1, 1, 0]);

  const y1 = useTransform(progress, [0, 0.25], [0, -50]);
  const y2 = useTransform(progress, [0.3, 0.6], [50, -50]);
  const y3 = useTransform(progress, [0.65, 0.95], [50, -50]);
  
  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center px-6 text-center text-white">
      {/* Beat 1 */}
      <motion.div style={{ opacity: op1, y: y1 }} className="absolute flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          Einzigartiges Weiterbildungsnetzwerk der Schweiz
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] mb-6 drop-shadow-sm max-w-4xl text-white">
          Weiterbildungsnetzwerk <br className="hidden md:block" />
          <span className="italic opacity-90 font-light">Chirurgie</span>
        </h1>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl leading-relaxed">
          Plane deine Zukunft mit uns. Wir bieten strukturierte Karriereplanung, hochklassige
          Symposien und professionelle Assessments für den chirurgischen Nachwuchs.
        </p>
      </motion.div>

      {/* Beat 2 */}
      <motion.div style={{ opacity: op2, y: y2 }} className="absolute flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium mb-6 text-white max-w-4xl tracking-tight">
          Praxisnah & Exzellent
        </h2>
        <p className="text-lg md:text-2xl opacity-80 max-w-2xl font-light">
          Robotik- und Nahtkurse direkt am Spital.<br />Strukturierte Weiterbildung nach modernsten Standards.
        </p>
      </motion.div>

      {/* Beat 3 */}
      <motion.div style={{ opacity: op3, y: y3 }} className="absolute flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium mb-10 text-white tracking-tight">
          Bereit für den nächsten Schritt?
        </h2>
        <div className="pointer-events-auto flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#courses" 
            className="inline-flex items-center justify-center bg-white text-[#050505] px-10 py-5 rounded-full font-medium hover:bg-gray-200 focus:ring-4 focus:ring-white/50 transition-all text-lg w-full sm:w-auto"
          >
            Kurse entdecken
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-transparent text-white border border-white/30 px-10 py-5 rounded-full font-medium hover:bg-white/10 transition-all text-lg w-full sm:w-auto backdrop-blur-sm"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, Math.max(0, frameUrls.length - 1)]);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    let loaded = 0;
    const imgArray: HTMLImageElement[] = [];

    if (frameUrls.length === 0) {
      setLoadedCount(1); // Bypass load if no images
      return;
    }

    frameUrls.forEach((url, i) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
      };
      imgArray[i] = img;
    });

    setImages(imgArray);
  }, []);

  const drawFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0 || !images[index] || !images[index].complete) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = images[index];
    
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.width;
    const ih = img.height;

    // Use cover drawing logic
    const scale = Math.max(cw / iw, ch / ih);
    const w = iw * scale;
    const h = ih * scale;
    const x = (cw - w) / 2;
    const y = (ch - h) / 2;

    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(img, x, y, w, h);
  };

  useEffect(() => {
    if (images.length > 0 && images[0]?.complete) {
      drawFrame(0);
    }
  }, [images]);

  useMotionValueEvent(frameIndex, 'change', (latest) => {
    drawFrame(Math.floor(latest));
  });

  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      drawFrame(Math.floor(frameIndex.get()));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  const isLoaded = loadedCount >= frameUrls.length || frameUrls.length === 0;

  return (
    <>
      {!isLoaded && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white">
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${(loadedCount / Math.max(1, frameUrls.length)) * 100}%` }}
            />
          </div>
          <p className="mt-6 font-mono text-xs opacity-50 tracking-widest uppercase">Lade Sequenz... {Math.round((loadedCount / Math.max(1, frameUrls.length)) * 100)}%</p>
        </div>
      )}
      
      <section id="home" ref={containerRef} className="relative h-[400vh] bg-[#050505]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center selection:bg-white/30">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505] pointer-events-none" />

          {/* Overlays */}
          <OverlayText progress={scrollYProgress} />
        </div>
      </section>
    </>
  );
}
