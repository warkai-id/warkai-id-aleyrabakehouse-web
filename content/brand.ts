import { BrandSchema, type Brand } from "@/lib/schemas/brand";

const brandData: Brand = {
  name: "Aleyra Bakehouse",
  tagline: "Cheesecake & Dessert",
  motto: "made with love",
  description:
    "Aleyra Bakehouse — Soft burnt cheesecake yang dibuat fresh dengan cinta untuk momen kecil yang layak dirayakan.",
  values: [
    {
      title: "Premium Ingredients",
      description:
        "Bahan berkualitas tinggi yang dipilih dengan teliti untuk menghasilkan rasa terbaik.",
      icon: "Leaf",
    },
    {
      title: "Homemade with Love",
      description:
        "Setiap cheesecake dibuat dengan penuh cinta dan perhatian terhadap detail.",
      icon: "Heart",
    },
    {
      title: "Fresh by Order",
      description:
        "Dibuat fresh setiap hari, dipanggang dalam batch terbatas untuk kualitas optimal.",
      icon: "Flame",
    },
    {
      title: "Perfect for Every Moment",
      description:
        "Dari self-reward hingga hadiah spesial, Aleyra hadir untuk setiap momen berharga.",
      icon: "Gift",
    },
  ],
};

// Validate at build time
export const brand = BrandSchema.parse(brandData);
