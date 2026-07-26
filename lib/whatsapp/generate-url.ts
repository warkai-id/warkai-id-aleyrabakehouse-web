import { WHATSAPP_NUMBER } from "@/lib/constants/contact";

interface WhatsAppUrlOptions {
  phone?: string;
  message: string;
}

/**
 * Generates a WhatsApp click-to-chat URL with a pre-filled message.
 * Uses the wa.me short URL format.
 */
export function generateWhatsAppUrl(options: WhatsAppUrlOptions): string {
  const phone = options.phone ?? WHATSAPP_NUMBER;
  const encodedMessage = encodeURIComponent(options.message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

/**
 * Generates a WhatsApp order URL for a specific product.
 */
export function generateOrderUrl(productName: string, size?: string): string {
  const sizeText = size ? ` (${size})` : "";
  const message = `Halo Aleyra, aku mau pesan ${productName}${sizeText}. Bisa bantu cek jadwal available?`;
  return generateWhatsAppUrl({ message });
}

/**
 * Generates a generic inquiry WhatsApp URL.
 */
export function generateInquiryUrl(): string {
  const message = "Halo Aleyra! Aku mau tanya-tanya soal cheesecake. Boleh bantu?";
  return generateWhatsAppUrl({ message });
}
