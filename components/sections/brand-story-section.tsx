import Image from "next/image";
import { Reveal } from "@/components/features/motion/reveal";
import { MeetAleyraButton } from "@/components/features/meet-aleyra-button";

export function BrandStorySection() {
  return (
    <section id="our-story" className="bg-butter-cream py-16 md:py-24 border-t border-light-taupe/30">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl mx-auto">
          {/* Image */}
          <Reveal className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-xl overflow-hidden shadow-sm border border-light-taupe/50">
              <Image
                src="/images/products/whole-cheesecake-14cm.webp"
                alt="Aleyra Bakehouse signature moments"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          
          {/* Copy */}
          <Reveal delay={0.1} className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cocoa-brown mb-6 leading-tight">
              Bukan sekadar cheesecake — ini self-reward kamu.
            </h2>
            <p className="font-body text-cocoa-brown/90 text-lg mb-6 leading-relaxed">
              Aleyra hadir buat kamu yang percaya bahwa hal kecil pun layak dirayakan. Nggak perlu nunggu momen besar — satu slice burnt cheesecake yang lembut dan rich bisa jadi cara paling simpel buat bikin hari kamu lebih baik. Setiap batch kami buat fresh dan terbatas, karena yang spesial memang nggak perlu banyak.
            </p>
            <p className="accent-script text-2xl text-cherry-red mb-8">
              Your little happy ritual ♡
            </p>
            <MeetAleyraButton />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
