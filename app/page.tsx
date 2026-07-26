import { HeroSection } from "@/components/sections/hero-section";
import { ProductSection } from "@/components/sections/product-section";
import { BrandStorySection } from "@/components/sections/brand-story-section";
import { BrandValuesSection } from "@/components/sections/brand-values-section";
import { PreorderHighlightSection } from "@/components/sections/preorder-highlight-section";
import { UpcomingEventsSection } from "@/components/sections/upcoming-events-section";
import { PackagingHighlightSection } from "@/components/sections/packaging-highlight-section";
import { HomeClientFeatures } from "@/components/features/home-client-features";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <BrandStorySection />
      <BrandValuesSection />
      <PreorderHighlightSection />
      <UpcomingEventsSection />
      <PackagingHighlightSection />
      <HomeClientFeatures />
    </>
  );
}
