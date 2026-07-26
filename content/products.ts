import { ProductSchema, type Product } from "@/lib/schemas/product";
import { z } from "zod";

const productsData: Product[] = [
  {
    id: "burnt-cheesecake-slice",
    name: "Burnt Cheesecake Slice",
    slug: "burnt-cheesecake-slice",
    description:
      "Potongan burnt cheesecake dengan bagian tengah lembut, rasa keju seimbang, dan permukaan caramelized.",
    price: 25000,
    category: "slice",
    image: "/images/products/burnt-cheesecake-slice.webp",
    badge: "Best Seller",
    isPlaceholder: false,
    isAvailable: true,
  },
  {
    id: "whole-burnt-cheesecake-14cm",
    name: "Whole Burnt Cheesecake",
    slug: "whole-burnt-cheesecake-14cm",
    description:
      "Ukuran personal untuk hadiah kecil, family time, atau sweet moment yang ingin dirayakan.",
    price: 183000,
    size: "14 cm",
    category: "whole-cake",
    image: "/images/products/whole-cheesecake-14cm.webp",
    isPlaceholder: false,
    isAvailable: true,
  },
  {
    id: "whole-burnt-cheesecake-18cm",
    name: "Whole Burnt Cheesecake",
    slug: "whole-burnt-cheesecake-18cm",
    description:
      "Ukuran lebih besar untuk berbagi, perayaan, hampers, dan momen bersama.",
    price: 244000,
    size: "18 cm",
    category: "whole-cake",
    image: "/images/products/whole-cheesecake-18cm.webp",
    isPlaceholder: false,
    isAvailable: true,
  },
  {
    // Placeholder seasonal product — replace with real data when available
    id: "burnt-dessert-box",
    name: "Burnt Dessert Box",
    slug: "burnt-dessert-box",
    description:
      "Dessert box creamy dengan karakter burnt cheesecake Aleyra, praktis untuk dinikmati sendiri atau dibawa sebagai sweet treat.",
    price: 35000, // TODO: replace with official price before production
    category: "seasonal",
    image: "/images/products/dessert-box.webp",
    badge: "Seasonal",
    isPlaceholder: true,
    isAvailable: false,
  },
];

// Validate at build time
export const products = z.array(ProductSchema).parse(productsData);
