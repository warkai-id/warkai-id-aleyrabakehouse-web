import { HeroSection } from "@/components/sections/hero-section";
import { ProductSection } from "@/components/sections/product-section";
import { BrandStorySection } from "@/components/sections/brand-story-section";
import { BrandValuesSection } from "@/components/sections/brand-values-section";
import { TestimonialCarouselSection } from "@/components/sections/testimonial-carousel-section";
import { PreorderHighlightSection } from "@/components/sections/preorder-highlight-section";
import { UpcomingEventsSection } from "@/components/sections/upcoming-events-section";
import { PackagingHighlightSection } from "@/components/sections/packaging-highlight-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <BrandStorySection />
      <BrandValuesSection />
      <TestimonialCarouselSection />
      <PreorderHighlightSection />
      <UpcomingEventsSection />
      <PackagingHighlightSection />
    </>
  );
}
