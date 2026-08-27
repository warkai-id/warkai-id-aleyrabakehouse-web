import Link from "next/link";
import { CONTACT } from "@/lib/constants/contact";
import { Reveal } from "@/components/features/motion/reveal";

export const metadata = {
  title: "Karir - Aleyra Bakehouse",
  description: "Informasi lowongan pekerjaan di Aleyra Bakehouse.",
};

export default function CareerPage() {
  return (
    <main className="flex-1 bg-warm-white">
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 section-container flex flex-col items-center text-center min-h-[70vh] justify-center">
        <Reveal>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-cocoa-brown mb-8">
            Bertumbuh Bersama Aleyra
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="max-w-2xl mx-auto font-body text-cocoa-brown/80 space-y-6 text-lg leading-relaxed">
            <p>
              Kami percaya setiap momen manis lahir dari orang-orang yang bekerja dengan hati. Saat ini belum ada posisi yang kami buka, tetapi kami akan dengan senang hati mengabari Anda ketika ada kesempatan untuk bergabung dengan Aleyra Bakehouse.
            </p>
            <p className="text-cocoa-brown/60 italic text-base">
              Nanti aku info kalau ada lowongan ya &mdash; sampai jumpa di kesempatan berikutnya.
            </p>
          </div>
        </Reveal>
        
        <Reveal delay={0.2} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className="btn-accent px-8 py-3 text-lg rounded-full shadow-sm hover:shadow-md transition-all"
          >
            Hubungi Kami
          </a>
          <Link
            href="/#menu"
            className="text-cocoa-brown font-semibold hover:text-cherry-red transition-colors px-6 py-3"
          >
            Lihat Menu Kami
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
