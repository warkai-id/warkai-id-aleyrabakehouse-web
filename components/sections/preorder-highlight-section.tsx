import Image from "next/image";
import { Reveal } from "@/components/features/motion/reveal";

export function PreorderHighlightSection() {
  return (
    <section className="bg-butter-cream py-16 md:py-24 border-t border-light-taupe/30">
      <div className="section-container">
        <Reveal className="bg-warm-white border border-light-taupe/40 rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-sm">
          <div className="flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:min-h-[400px] bg-light-taupe/20">
              {/* DUMMY CONTENT: Image source matches placeholder product */}
              <Image
                src="/images/products/dessert-box.webp"
                alt="Burnt Dessert Box Pre-Order"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 bg-warm-white text-cherry-red text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                Limited Edition
              </div>
            </div>
            
            {/* Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="eyebrow text-cherry-red mb-3">Open Pre-Order</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-cocoa-brown mb-4">
                Burnt Dessert Box
              </h2>
              <p className="font-body text-cocoa-brown/80 mb-8 leading-relaxed">
                Dessert box creamy dengan karakter burnt cheesecake Aleyra, praktis untuk dinikmati sendiri atau dibawa sebagai sweet treat.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-5 bg-cherry-red/20 rounded mt-0.5"></div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-cocoa-brown">Order Deadline</p>
                    {/* DUMMY CONTENT: Date */}
                    <p className="font-body text-sm text-cocoa-brown/70">Coming Soon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-5 bg-cherry-red/20 rounded mt-0.5"></div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-cocoa-brown">Shipping Schedule</p>
                    {/* DUMMY CONTENT: Date */}
                    <p className="font-body text-sm text-cocoa-brown/70">Coming Soon</p>
                  </div>
                </div>
              </div>
              
              <a
                href="https://wa.me/6280000000000?text=Halo%20Aleyra,%20aku%20mau%20tanya%20info%20PO%20Burnt%20Dessert%20Box"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-center w-full sm:w-auto"
              >
                Notify Me
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
