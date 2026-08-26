import { ProductSchema, type Product } from "@/lib/schemas/product";
import { z } from "zod";

const productsData: Product[] = [
  {
    id: "burnt-cheesecake-slice",
    name: "Burnt Cheesecake Slice",
    slug: "burnt-cheesecake-slice",
    description:
      "Satu potong signature burnt cheesecake Aleyra dengan bagian tengah yang lembut, creamy, dan permukaan karamel yang khas. Pas untuk jeda manis di tengah hari.",
    price: 25000,
    category: "slice",
    image: "/images/products/burnt-cheesecake-slice.webp",
    isPlaceholder: false,
    isAvailable: true,
  },
  {
    id: "burnt-dessert-box",
    name: "Burnt Dessert Box",
    slug: "burnt-dessert-box",
    description:
      "Pilihan cheesecake dalam dessert box yang dikemas rapi untuk dinikmati sendiri, dibagikan, atau dijadikan hadiah kecil yang berkesan.",
    price: 48000,
    category: "seasonal",
    image: "/images/products/dessert-box.webp",
    isPlaceholder: false,
    isAvailable: true,
  },
  {
    id: "whole-burnt-cheesecake-14cm",
    name: "Whole Burnt Cheesecake (Loyang 14cm)",
    slug: "whole-burnt-cheesecake-14cm",
    description:
      "Whole burnt cheesecake ukuran 14cm untuk momen yang lebih intim—hangat untuk dinikmati bersama orang terdekat atau sebagai bingkisan istimewa.",
    price: 183000,
    size: "14 cm",
    category: "whole-cake",
    image: "/images/products/whole-cheesecake-14cm.webp",
    isPlaceholder: false,
    isAvailable: true,
  },
  {
    id: "whole-burnt-cheesecake-18cm",
    name: "Whole Burnt Cheesecake (Loyang 18cm)",
    slug: "whole-burnt-cheesecake-18cm",
    description:
      "Whole burnt cheesecake ukuran 18cm yang dibuat untuk berkumpul, berbagi cerita, dan merayakan momen sederhana dengan rasa yang istimewa.",
    price: 244000,
    size: "18 cm",
    category: "whole-cake",
    image: "/images/products/whole-cheesecake-18cm.webp",
    isPlaceholder: false,
    isAvailable: true,
  },
];

// Validate at build time
export const products = z.array(ProductSchema).parse(productsData);

