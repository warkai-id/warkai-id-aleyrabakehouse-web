import Image from "next/image";
import { Reveal } from "@/components/features/motion/reveal";

export function PackagingHighlightSection() {
  return (
    <section className="bg-warm-white py-16 md:py-24 border-t border-light-taupe/30">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">
          
          {/* Copy Side */}
          <Reveal className="w-full md:w-5/12 text-center md:text-left order-2 md:order-1 flex flex-col items-center md:items-start">
            <span className="eyebrow text-cocoa-brown mb-3">Meaningful Gifting</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cocoa-brown mb-6 leading-tight">
              Thoughtfully <br className="hidden md:block" /> Packaged
            </h2>
            <p className="font-body text-cocoa-brown/80 mb-8 leading-relaxed max-w-md">
              Setiap pesanan dikemas dengan rapi dan elegan, memastikan kue Anda tiba dengan aman. Sentuhan akhir yang hangat menjadikan Aleyra pilihan sempurna sebagai bingkisan untuk orang tersayang.
            </p>
            <a 
              href="https://wa.me/6280000000000?text=Halo%20Aleyra,%20aku%20mau%20tanya%20tentang%20opsi%20gifting/packaging" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary border-light-taupe text-cocoa-brown hover:bg-butter-cream"
            >
              Explore Gifting
            </a>
          </Reveal>

          {/* Image Strip / Gallery */}
          <Reveal delay={0.1} className="w-full md:w-7/12 order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-light-taupe/40 shadow-sm mt-8">
                <Image
                  src="/images/packaging/packaging-1.webp" // Assumes file copied
                  alt="Aleyra elegant packaging"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-light-taupe/40 shadow-sm">
                <Image
                  src="/images/packaging/packaging-2.webp" // Assumes file copied
                  alt="Aleyra gifting box"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
}
