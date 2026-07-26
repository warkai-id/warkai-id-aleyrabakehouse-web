import Link from "next/link";
import { Instagram, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cocoa-brown text-warm-white py-12 mt-auto">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="font-heading text-2xl mb-4 text-butter-cream">Aleyra Bakehouse</h3>
            <p className="font-body text-sm text-warm-white/80 max-w-xs">
              Soft burnt cheesecake yang dibuat fresh dengan cinta untuk momen kecil yang layak dirayakan.
            </p>
          </div>

          {/* Contact & Info */}
          <div>
            <h4 className="font-body font-semibold text-lg mb-4 text-butter-cream">Visit & Contact</h4>
            <ul className="space-y-3 font-body text-sm text-warm-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-light-taupe" />
                <span>Jatibening — Kota Bekasi</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="shrink-0 mt-0.5 text-light-taupe" />
                <span>09.00–20.00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-light-taupe" />
                <a href="mailto:aleyrabakehouse@gmail.com" className="hover:text-butter-cream transition-colors">
                  aleyrabakehouse@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-light-taupe" />
                <a href="https://instagram.com/aleyra.bakehouse" target="_blank" rel="noopener noreferrer" className="hover:text-butter-cream transition-colors">
                  @aleyra.bakehouse
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body font-semibold text-lg mb-4 text-butter-cream">Links</h4>
            <ul className="space-y-3 font-body text-sm text-warm-white/80 flex flex-col">
              <li>
                <Link href="/#menu" className="hover:text-butter-cream transition-colors">Menu</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-butter-cream transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-butter-cream transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-heart opacity-30 mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-body text-xs text-warm-white/60">
          <p>&copy; {currentYear} Aleyra Bakehouse. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with love in Bekasi</span>
            <span className="mx-2">•</span>
            <span>aleyrabake.my.id</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
