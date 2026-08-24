import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cocoa-brown text-warm-white py-12 mt-auto">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3
              className="font-heading text-2xl mb-4 text-cherry-red"
              style={{ color: "#B6282E" }}
            >
              Aleyra Bakehouse
            </h3>
            <p className="font-body text-sm text-[#DCC8B0] max-w-xs leading-relaxed">
              Soft burnt cheesecake yang dibuat fresh dengan cinta untuk momen kecil yang layak dirayakan.
            </p>
          </div>

          {/* Contact & Info */}
          <div>
            <h4
              className="font-body font-semibold text-lg mb-4 text-cherry-red"
              style={{ color: "#B6282E" }}
            >
              Visit & Contact
            </h4>
            <ul className="space-y-3 font-body text-sm text-[#DCC8B0]">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-[#F3E6CF]" />
                <span>Jatibening — Kota Bekasi</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="shrink-0 mt-0.5 text-[#F3E6CF]" />
                <span>09.00–20.00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#F3E6CF]" />
                <a href="mailto:aleyrabakehouse@gmail.com" className="text-[#DCC8B0] hover:text-[#FFF3D6] transition-colors">
                  aleyrabakehouse@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="shrink-0 text-[#F3E6CF]" />
                <a href="https://instagram.com/aleyra.bakehouse" target="_blank" rel="noopener noreferrer" className="text-[#DCC8B0] hover:text-[#FFF3D6] transition-colors">
                  @aleyra.bakehouse
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4
              className="font-body font-semibold text-lg mb-4 text-cherry-red"
              style={{ color: "#B6282E" }}
            >
              Links
            </h4>
            <ul className="space-y-3 font-body text-sm text-[#DCC8B0] flex flex-col">
              <li>
                <Link href="/#menu" className="hover:text-[#FFF3D6] transition-colors">Menu</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#FFF3D6] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#FFF3D6] transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-heart opacity-30 mb-8"></div>

        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 font-body text-xs text-[#DCC8B0]">
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
            <span>aleyrabake.my.id</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

