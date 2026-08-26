import { WHATSAPP_NUMBER_API } from "@/lib/constants/contact";

interface WhatsAppUrlOptions {
  phone?: string;
  message: string;
}

/**
 * Generates a WhatsApp click-to-chat URL with a pre-filled message.
 * Uses the wa.me short URL format.
 */
export function generateWhatsAppUrl(options: WhatsAppUrlOptions): string {
  const phone = options.phone ?? WHATSAPP_NUMBER_API;
  const encodedMessage = encodeURIComponent(options.message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

/**
 * Generates a WhatsApp order URL for a specific product.
 */
export function generateOrderUrl(productName: string, size?: string): string {
  const sizeText = size ? ` (${size})` : "";
  const fullProductName = `${productName}${sizeText}`;
  const message = `Halo Aleyra Bakehouse, saya ingin melakukan pemesanan.

Produk: ${fullProductName}
Jumlah:
Tanggal yang diinginkan:
Catatan:

Terima kasih.`;
  return generateWhatsAppUrl({ message });
}

/**
 * Generates a generic inquiry WhatsApp URL.
 */
export function generateInquiryUrl(): string {
  const message = `Halo Aleyra Bakehouse, saya ingin bertanya atau melakukan pemesanan.

Nama:
Produk yang diminati:
Jumlah:
Tanggal yang diinginkan:
Catatan:

Terima kasih.`;
  return generateWhatsAppUrl({ message });
}

