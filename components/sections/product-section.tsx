import Image from "next/image";
import { products } from "@/content/products";
import { StaggerContainer, StaggerItem } from "@/components/features/motion/stagger-container";
import { Reveal } from "@/components/features/motion/reveal";

export function ProductSection() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="menu" className="bg-warm-white py-16 md:py-24">
      <div className="section-container">
        <Reveal className="text-center mb-12">
          <span className="eyebrow text-cocoa-brown">Pilihan Aleyra</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cocoa-brown mt-2 mb-4">
            Manis yang Dibuat untuk Dinikmati Perlahan
          </h2>
          <p className="font-body text-sm md:text-base text-cocoa-brown/70 max-w-2xl mx-auto mb-4 leading-relaxed">
            Dibuat fresh dengan tekstur lembut, rasa creamy yang seimbang, dan sentuhan karamel di setiap potongannya. Pilih sajian kecil untuk menemani hari, atau whole cheesecake untuk momen yang ingin dibagikan.
          </p>
          <div className="w-12 h-px bg-light-taupe mx-auto"></div>
        </Reveal>

        <StaggerContainer
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar product-carousel overscroll-x-contain touch-pan-x scroll-smooth cursor-grab active:cursor-grabbing"
          role="region"
          aria-label="Daftar produk Aleyra Bakehouse"
          tabIndex={0}
        >
          {products.map((product) => (
            <StaggerItem
              key={product.id}
              className="snap-start shrink-0 w-[82vw] max-w-[320px] sm:w-[320px] md:w-auto flex flex-col"
            >
              <button
                type="button"
                className="group flex flex-col flex-grow w-full h-full text-left bg-warm-white border border-light-taupe/40 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 ease-out active:duration-150 active:scale-[0.98] active:shadow-sm motion-reduce:transition-none motion-reduce:active:scale-100 outline-none focus-visible:ring-2 focus-visible:ring-cocoa-brown focus-visible:ring-offset-2"
                aria-label={`Lihat detail produk ${product.name}`}
              >
                <div className="relative w-full aspect-[4/3] bg-butter-cream">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover select-none pointer-events-none"
                    draggable={false}
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-1 gap-2">
                    <h3 className="text-lg font-heading font-bold text-cocoa-brown leading-tight">
                      {product.name}
                    </h3>
                    <span className="font-body font-bold text-cherry-red whitespace-nowrap text-sm mt-1">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                  {product.size && (
                    <p className="text-xs font-semibold text-cocoa-brown/60 mb-3">
                      {product.size}
                    </p>
                  )}

                  <p className="text-cocoa-brown/80 font-body text-sm flex-grow leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

