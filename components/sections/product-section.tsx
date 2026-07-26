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

  const getWhatsAppMessage = (productName: string) => {
    return encodeURIComponent(`Halo Aleyra, aku mau pesan ${productName}. kapan ada jadwal pengiriman?`);
  };

  return (
    <section id="menu" className="bg-warm-white py-16 md:py-24">
      <div className="section-container">
        <Reveal className="text-center mb-12">
          <span className="eyebrow text-cocoa-brown">Our Menu</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cocoa-brown mt-2 mb-4">
            Best Seller
          </h2>
          <div className="w-12 h-px bg-light-taupe mx-auto"></div>
        </Reveal>

        <StaggerContainer
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar product-carousel overscroll-x-contain touch-pan-x scroll-smooth cursor-grab active:cursor-grabbing"
          role="region"
          aria-label="Daftar produk Aleyra Bakehouse"
          tabIndex={0}
        >
          {products.map((product) => (
            <StaggerItem
              key={product.id}
              className="snap-start shrink-0 w-[82vw] max-w-[320px] sm:w-[320px] md:w-auto flex flex-col bg-warm-white border border-light-taupe/40 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-full aspect-[4/3] bg-butter-cream">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover select-none pointer-events-none"
                  draggable={false}
                  sizes="(max-width: 768px) 85vw, 33vw"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-warm-white text-cocoa-brown text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-sm">
                    {product.isPlaceholder ? "Coming Soon" : product.badge}
                  </div>
                )}
                {product.isPlaceholder && (
                  <div className="absolute inset-0 bg-warm-white/40 backdrop-blur-[2px] flex items-center justify-center">
                    <span className="bg-cocoa-brown/80 text-warm-white px-4 py-2 rounded-full font-semibold text-sm">
                      Coming Soon
                    </span>
                  </div>
                )}
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

                <p className="text-cocoa-brown/80 font-body text-sm mb-6 flex-grow leading-relaxed">
                  {product.description}
                </p>

                {product.isAvailable ? (
                  <a
                    href={`https://wa.me/6280000000000?text=${getWhatsAppMessage(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent btn-sm w-full text-center"
                    aria-label={`Order ${product.name} via WhatsApp`}
                  >
                    Order via WhatsApp
                  </a>
                ) : (
                  <button disabled className="btn-accent btn-sm w-full text-center opacity-50 cursor-not-allowed border-none">
                    Coming Soon
                  </button>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
