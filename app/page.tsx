import { HeroSection } from "@/components/sections/hero-section";
import { ProductSection } from "@/components/sections/product-section";
import { BrandStorySection } from "@/components/sections/brand-story-section";
import { BrandValuesSection } from "@/components/sections/brand-values-section";
import { TestimonialCarouselSection } from "@/components/sections/testimonial-carousel-section";
import { NotifyWithAleyraSection } from "@/components/sections/notify-with-aleyra-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <BrandStorySection />
      <BrandValuesSection />
      <TestimonialCarouselSection />
      <NotifyWithAleyraSection />
      <CtaSection />
    </>
  );
}
