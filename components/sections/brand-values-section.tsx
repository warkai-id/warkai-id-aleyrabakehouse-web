import { Heart, Sparkles, Clock, Utensils } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/features/motion/stagger-container";

export function BrandValuesSection() {
  const values = [
    {
      title: "Premium Ingredients",
      description: "Hanya menggunakan bahan berkualitas terbaik untuk tekstur creamy yang sempurna.",
      icon: <Sparkles size={24} strokeWidth={1.5} />,
    },
    {
      title: "Homemade with Love",
      description: "Dibuat dengan sepenuh hati di dapur kami untuk momen manis Anda.",
      icon: <Heart size={24} strokeWidth={1.5} />,
    },
    {
      title: "Fresh by Order",
      description: "Dipanggang setiap hari hanya berdasarkan pesanan untuk menjaga kesegaran.",
      icon: <Clock size={24} strokeWidth={1.5} />,
    },
    {
      title: "Perfect for Every Moment",
      description: "Cocok dinikmati sendiri, dibagi bersama, atau sebagai hadiah spesial.",
      icon: <Utensils size={24} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="bg-warm-white py-16">
      <div className="section-container">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 max-w-5xl mx-auto text-center">
          {values.map((value, idx) => (
            <StaggerItem key={idx} className="flex flex-col items-center">
              <div className="text-cocoa-brown mb-4 opacity-80">
                {value.icon}
              </div>
              <h3 className="font-heading font-bold text-cocoa-brown text-lg mb-2">
                {value.title}
              </h3>
              <p className="font-body text-cocoa-brown/70 text-sm leading-relaxed max-w-[200px]">
                {value.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
