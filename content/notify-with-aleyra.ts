export type NotifyStatus = "upcoming" | "open" | "closed";

export interface PreOrderItem {
  id: string;
  type: "preorder";
  status: NotifyStatus;
  label: string;
  title: string;
  summary: string;
  flyerImage: string;
  flyerAlt: string;
  ctaLabel: string;
  ctaMessage: string;
}

export interface EventItem {
  id: string;
  type: "event";
  status: NotifyStatus;
  label: string;
  title: string;
  description: string;
  image: string;
  dateLabel: string;
  timeLabel: string;
  locationLabel: string;
  ctaLabel: string;
  ctaMessage: string;
}

export const notifyPreOrder: PreOrderItem = {
  id: "burnt-dessert-box-po",
  type: "preorder",
  status: "upcoming",
  label: "Open Pre-Order",
  title: "Burnt Dessert Box",
  summary: "Informasi pre-order terbaru Aleyra tersedia untuk kamu! Cek flyer untuk detail lengkapnya. Untuk pemesanan, feel free to chat admin melalui WhatsApp ya!",
  flyerImage: "/images/notify-with-aleyra/preorder-flyer.webp",
  flyerAlt: "Flyer informasi pre-order Aleyra Bakehouse",
  ctaLabel: "Notify Me",
  ctaMessage: "Halo Aleyra Bakehouse, saya ingin mendapatkan informasi saat pre-order Burnt Dessert Box dibuka.\n\nNama:\nNomor WhatsApp:\n\nTerima kasih.",
};

export const notifyEvent: EventItem = {
  id: "aleyra-popup-weekend",
  type: "event",
  status: "upcoming",
  label: "Aleyra Events & Pop-Up",
  title: "Aleyra Pop-Up Weekend",
  description: "Temui Aleyra secara langsung di booth pilihan kami. Nikmati cheesecake fresh, temukan cerita di balik setiap sajian, dan bawa pulang momen manis untuk orang tersayang.",
  image: "/images/packaging/packaging-3.webp",
  dateLabel: "Date to be announced",
  timeLabel: "10.00 – 20.00",
  locationLabel: "Location to be announced",
  ctaLabel: "Get Notified",
  ctaMessage: "Halo Aleyra Bakehouse, saya ingin mendapatkan informasi tentang event dan pop-up Aleyra berikutnya.\n\nNama:\nNomor WhatsApp:\n\nTerima kasih.",
};
