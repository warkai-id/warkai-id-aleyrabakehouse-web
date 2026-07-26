import { MapPin, Clock, Calendar } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/features/motion/reveal";

export function UpcomingEventsSection() {
  return (
    <section id="events" className="bg-warm-white py-16 md:py-24">
      <div className="section-container">
        <Reveal className="text-center mb-12">
          <span className="eyebrow text-cocoa-brown">Where to Find Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cocoa-brown mt-2 mb-4">
            Upcoming Events
          </h2>
          <div className="w-12 h-px bg-light-taupe mx-auto"></div>
        </Reveal>

        <Reveal delay={0.1} className="max-w-2xl mx-auto bg-butter-cream border border-light-taupe/40 rounded-xl overflow-hidden shadow-sm flex flex-col sm:flex-row">
          
          {/* Elegant Placeholder Visual */}
          <div className="w-full sm:w-2/5 relative h-48 sm:h-auto bg-light-taupe/20">
            {/* TODO: Replace with real booth/event asset before production */}
            <Image
              src="/images/packaging/packaging-3.webp" // Placeholder fallback using actual asset
              alt="Aleyra Pop-Up Event"
              fill
              className="object-cover opacity-80 mix-blend-multiply"
              sizes="(max-width: 640px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-cocoa-brown/5 flex flex-col items-center justify-center p-4 text-center">
              <span className="font-heading text-xl font-bold text-cocoa-brown bg-warm-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                Coming Soon
              </span>
            </div>
          </div>
          
          {/* Event Details */}
          <div className="w-full sm:w-3/5 p-6 md:p-8 flex flex-col justify-center">
            {/* DUMMY CONTENT: Generic Event Data */}
            <h3 className="font-heading text-xl md:text-2xl font-bold text-cocoa-brown mb-4">
              Aleyra Pop-Up Weekend
            </h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-cocoa-brown/80">
                <Calendar size={18} className="shrink-0 mt-0.5 text-light-taupe" />
                <p className="font-body text-sm">Date to be announced</p>
              </div>
              <div className="flex items-start gap-3 text-cocoa-brown/80">
                <Clock size={18} className="shrink-0 mt-0.5 text-light-taupe" />
                <p className="font-body text-sm">10.00 – 20.00</p>
              </div>
              <div className="flex items-start gap-3 text-cocoa-brown/80">
                <MapPin size={18} className="shrink-0 mt-0.5 text-light-taupe" />
                <p className="font-body text-sm">Location to be announced</p>
              </div>
            </div>
            
            <button 
              className="btn-secondary w-full sm:w-auto opacity-50 cursor-not-allowed border-light-taupe text-cocoa-brown"
              disabled
            >
              Event Details (Coming Soon)
            </button>
          </div>
          
        </Reveal>
      </div>
    </section>
  );
}
