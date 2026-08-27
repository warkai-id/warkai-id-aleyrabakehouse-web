import { CONTACT } from "@/lib/constants/contact";

export const metadata = {
  title: "Terms of Service - Aleyra Bakehouse",
  description: "Syarat dan ketentuan layanan Aleyra Bakehouse.",
};

export default function TermsPage() {
  return (
    <main className="flex-1 bg-warm-white">
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 section-container">
        <div className="max-w-3xl mx-auto font-body text-cocoa-brown">
          <h1 className="font-heading text-4xl font-bold mb-10 text-center">
            Terms of Service
          </h1>
          
          <div className="space-y-8 text-cocoa-brown/80 leading-relaxed text-lg">
            <p className="italic text-cocoa-brown/60 text-sm">
              Syarat dan ketentuan ini dapat berubah atau diperbarui dari waktu ke waktu tanpa pemberitahuan sebelumnya.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-cocoa-brown mt-8">1. Penerimaan Syarat dan Ketentuan</h2>
              <p>
                Dengan mengakses dan menggunakan situs web Aleyra Bakehouse, Anda menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda tidak diperkenankan menggunakan layanan kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-cocoa-brown mt-8">2. Penggunaan Situs Web</h2>
              <p>
                Anda setuju untuk menggunakan situs ini hanya untuk tujuan yang sah dan dengan cara yang tidak melanggar hak orang lain, atau membatasi atau menghalangi penggunaan dan penikmatan situs ini oleh orang lain.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-cocoa-brown mt-8">3. Informasi Produk, Harga, dan Ketersediaan</h2>
              <p>
                Kami berusaha memastikan semua detail, deskripsi, dan harga produk yang muncul di situs ini adalah akurat. Namun, kesalahan mungkin terjadi. Jika kami menemukan kesalahan harga pada produk yang Anda pesan, kami akan memberitahukan Anda secepatnya. Semua produk bergantung pada ketersediaan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-cocoa-brown mt-8">4. Pesanan dan Konfirmasi</h2>
              <p>
                Setelah Anda menempatkan pesanan, Anda akan menerima konfirmasi. Pesanan baru dianggap diterima dan diproses setelah pembayaran berhasil dikonfirmasi oleh tim kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-cocoa-brown mt-8">5. Pembayaran, Pembatalan, Pengembalian, dan Komplain</h2>
              <p>
                Semua pembayaran harus diselesaikan sebelum pesanan diproses. Pembatalan hanya dapat dilakukan sebelum proses produksi dimulai. Jika terdapat ketidaksesuaian atau keluhan terhadap pesanan Anda, harap segera hubungi kami setelah pesanan diterima agar kami dapat memberikan solusi terbaik.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-cocoa-brown mt-8">6. Hak Kekayaan Intelektual</h2>
              <p>
                Semua konten yang ada di situs ini, termasuk namun tidak terbatas pada teks, grafis, logo, dan gambar adalah milik Aleyra Bakehouse dan dilindungi oleh undang-undang hak cipta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-cocoa-brown mt-8">7. Tautan Pihak Ketiga</h2>
              <p>
                Situs ini mungkin berisi tautan ke situs pihak ketiga yang tidak dioperasikan oleh kami. Kami tidak memiliki kontrol atas dan tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik situs web pihak ketiga mana pun.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-cocoa-brown mt-8">8. Batasan Tanggung Jawab</h2>
              <p>
                Aleyra Bakehouse tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan menggunakan produk atau layanan kami dalam batas yang wajar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-cocoa-brown mt-8">9. Perubahan pada Syarat dan Ketentuan</h2>
              <p>
                Kami berhak untuk mengubah syarat dan ketentuan ini kapan saja. Setiap perubahan akan diunggah di halaman ini dan berlaku segera setelah dipublikasikan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-cocoa-brown mt-8">10. Informasi Kontak</h2>
              <p>
                Jika Anda memiliki pertanyaan mengenai Syarat dan Ketentuan ini, silakan hubungi kami melalui email di <a href={`mailto:${CONTACT.email}`} className="font-semibold underline hover:text-cherry-red transition-colors">{CONTACT.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
