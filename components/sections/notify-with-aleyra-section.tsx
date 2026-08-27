import Image from "next/image";
import { MapPin, Clock, Calendar } from "lucide-react";
import { Reveal } from "@/components/features/motion/reveal";
import { notifyPreOrder, notifyEvent } from "@/content/notify-with-aleyra";
import { CONTACT } from "@/lib/constants/contact";

export function NotifyWithAleyraSection() {
  return (
    <section id="notify-with-aleyra" className="bg-warm-white py-16 md:py-24 border-t border-light-taupe/30">
      <div className="section-container">
        {/* Shared Header */}
        <Reveal className="text-center mb-12 md:mb-16">
          <span className="eyebrow text-cocoa-brown mb-3">Stay Close to Aleyra</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cocoa-brown mb-6">
            Notify With Aleyra
          </h2>
          <p className="font-body text-cocoa-brown/80 max-w-2xl mx-auto leading-relaxed">
            Dapatkan kabar terbaru tentang jadwal pre-order dan kehadiran Aleyra di berbagai momen spesial. Dari cheesecake yang dipanggang fresh hingga booth yang bisa kamu kunjungi langsung, semua informasinya kami rangkum di sini.
          </p>
          <div className="w-12 h-px bg-light-taupe mx-auto mt-8"></div>
        </Reveal>

        <div className="flex flex-col gap-12 md:gap-20 max-w-5xl mx-auto">
          {/* Pre-Order Block */}
          <Reveal className="bg-butter-cream border border-light-taupe/40 rounded-2xl overflow-hidden shadow-sm">
            <div className="flex flex-col md:flex-row">
              {/* Image Side (Official Admin Flyer) */}
              <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px] bg-warm-white flex items-center justify-center p-4">
                <Image
                  src={notifyPreOrder.flyerImage}
                  alt={notifyPreOrder.flyerAlt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-butter-cream">
                <div className="mb-4 inline-flex items-center">
                  <span className="bg-warm-white text-cherry-red text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm border border-cherry-red/10">
                    {notifyPreOrder.label}
                  </span>
                </div>
                
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-cocoa-brown mb-4">
                  {notifyPreOrder.title}
                </h3>
                <p className="font-body text-cocoa-brown/80 mb-8 leading-relaxed">
                  {notifyPreOrder.summary}
                </p>
                
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent text-center w-full sm:w-auto mt-auto md:mt-0"
                >
                  {notifyPreOrder.ctaLabel}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Event Block - Alternating Layout (Image Right on Desktop) */}
          <Reveal className="bg-butter-cream border border-light-taupe/40 rounded-2xl overflow-hidden shadow-sm">
            <div className="flex flex-col md:flex-row">
              
              {/* Image Side (Mobile First) - Order 1 on mobile, 2 on desktop */}
              <div className="w-full md:w-1/2 relative aspect-[4/3] md:aspect-auto md:min-h-[400px] bg-light-taupe/20 order-1 md:order-2">
                <Image
                  src={notifyEvent.image}
                  alt={notifyEvent.title}
                  fill
                  className="object-cover opacity-80 mix-blend-multiply"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 md:right-4 md:left-auto bg-warm-white text-cocoa-brown text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  {notifyEvent.label}
                </div>
              </div>

              {/* Content Side - Order 2 on mobile, 1 on desktop */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-cocoa-brown mb-4">
                  {notifyEvent.title}
                </h3>
                <p className="font-body text-cocoa-brown/80 mb-8 leading-relaxed">
                  {notifyEvent.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 text-cocoa-brown/80">
                    <Calendar size={18} className="shrink-0 mt-0.5 text-light-taupe" />
                    <p className="font-body text-sm font-medium">{notifyEvent.dateLabel}</p>
                  </div>
                  <div className="flex items-start gap-3 text-cocoa-brown/80">
                    <Clock size={18} className="shrink-0 mt-0.5 text-light-taupe" />
                    <p className="font-body text-sm font-medium">{notifyEvent.timeLabel}</p>
                  </div>
                  <div className="flex items-start gap-3 text-cocoa-brown/80">
                    <MapPin size={18} className="shrink-0 mt-0.5 text-light-taupe" />
                    <p className="font-body text-sm font-medium">{notifyEvent.locationLabel}</p>
                  </div>
                </div>
                
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full sm:w-auto text-center border-light-taupe text-cocoa-brown hover:bg-light-taupe/10 mt-auto md:mt-0"
                >
                  {notifyEvent.ctaLabel}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
