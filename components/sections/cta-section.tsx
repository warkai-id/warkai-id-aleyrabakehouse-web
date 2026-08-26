import Image from "next/image";
import { Reveal } from "@/components/features/motion/reveal";
import { generateWhatsAppUrl } from "@/lib/whatsapp/generate-url";

export function CtaSection() {
  const ctaMessage = `Halo Aleyra Bakehouse, saya ingin melakukan pemesanan.

Nama:
Kamu Mau Pesan Apa?
Jumlah:
Tanggal yang diinginkan:
Catatan:

Terima kasih.`;

  const orderUrl = generateWhatsAppUrl({ message: ctaMessage });

  return (
    <section className="bg-warm-white py-20 md:py-32 border-t border-light-taupe/30 overflow-hidden">
      <div className="section-container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* Content Side (Left on Desktop, Bottom on Mobile) */}
          <Reveal className="w-full md:w-5/12 flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1">
            <span className="eyebrow text-cocoa-brown mb-4 tracking-widest">
              Ready When You Are
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-cocoa-brown mb-6 leading-tight">
              Rayakan Momen Kecilmu dengan Aleyra
            </h2>
            <p className="font-body text-cocoa-brown/80 mb-10 leading-relaxed max-w-md">
              Nikmati burnt cheesecake yang dipanggang fresh from the oven, dikemas dengan penuh cinta & cheesecakery vibes, dibuat untuk momen yang layak dikenang. Tell us what you need, and we'll help you prepare it.
            </p>

            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pesan Aleyra Bakehouse melalui WhatsApp"
              className="btn-accent text-lg px-10 py-4 shadow-sm hover:shadow-md transition-all active:scale-[0.99] mb-4"
            >
              Pesan Sekarang
            </a>
            <p className="font-body text-sm text-cocoa-brown/60">
              Terhubung langsung dengan admin Aleyra melalui WhatsApp.
            </p>
          </Reveal>

          {/* Visual Side (Right on Desktop, Top on Mobile) */}
          <div className="w-full md:w-7/12 order-1 md:order-2 relative h-[500px] md:h-[600px] flex items-center justify-center">
            <Reveal delay={0.1} className="absolute inset-0 w-full h-full">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm border border-light-taupe/20 bg-light-taupe/10">
                <Image
                  src="/images/cta/popup-first-view.webp"
                  alt="Tampilan utama Aleyra Bakehouse untuk pengalaman pre-order"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
            </Reveal>

            {/* Supporting Packaging Detail Image */}
            <Reveal delay={0.2} className="absolute -bottom-6 -left-6 md:-left-12 w-48 md:w-64 aspect-[4/5] rounded-xl overflow-hidden shadow-md border-4 border-warm-white bg-light-taupe/10 z-10 hidden sm:block">
              <Image
                src="/images/cta/packaging-detail.webp"
                alt="Detail kemasan Aleyra Bakehouse yang dikemas rapi dan elegan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 30vw, 20vw"
              />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
