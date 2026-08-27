import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/constants/contact";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3A7AC2] text-warm-white py-12 mt-auto">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="font-heading text-2xl mb-4 text-warm-white">
              Aleyra Bakehouse
            </h3>
            <p className="font-body text-sm text-warm-white/90 max-w-xs leading-relaxed">
              Soft burnt cheesecake yang dibuat fresh dengan cinta untuk momen kecil yang layak dirayakan.
            </p>
          </div>

          {/* Contact & Info */}
          <div>
            <h4 className="font-body font-semibold text-lg mb-4 text-warm-white">
              Visit & Contact
            </h4>
            <ul className="space-y-3 font-body text-sm text-warm-white/90">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-warm-white" />
                <span>{CONTACT.area}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="shrink-0 mt-0.5 text-warm-white" />
                <span>{CONTACT.operatingHours}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-warm-white" />
                <a href={`mailto:${CONTACT.email}`} className="text-warm-white/90 hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="shrink-0 text-warm-white" />
                <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-warm-white/90 hover:text-white transition-colors">
                  {CONTACT.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body font-semibold text-lg mb-4 text-warm-white">
              Links
            </h4>
            <ul className="space-y-3 font-body text-sm text-warm-white/90 flex flex-col">
              <li>
                <Link href="/#menu" className="hover:text-white transition-colors">Menu</Link>
              </li>
              <li>
                <Link href="/karir" className="hover:text-white transition-colors">Karir</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-heart opacity-30 mb-8 bg-warm-white/20 h-px w-full"></div>

        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 font-body text-xs text-warm-white/80">
          {/* Left: Brand Signature Logo & Copyright */}
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <Image
              src="/images/brand/logo-transparent.webp"
              alt="Aleyra Bakehouse"
              width={160}
              height={160}
              className="w-12 md:w-[160px] h-auto object-contain select-none"
            />
            <p>&copy; {currentYear} Aleyra Bakehouse. All rights reserved.</p>
          </div>

          {/* Right: Made with love text */}
          <div className="flex items-center gap-1">
            <span>Made with love in Bekasi</span>
            <span className="mx-2">•</span>
            <span>{CONTACT.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

