# Si Tukang Belilas — Landing Page

Landing page responsive berbasis **Next.js App Router + TypeScript + CSS biasa**. Tidak menggunakan UI framework tambahan.

## Fitur
- Tampilan modern, responsif untuk desktop dan mobile.
- Switchable light mode / dark mode (preferensi disimpan di localStorage).
- Hero, pengenalan usaha, tiga kategori layanan, alur layanan, dan CTA WhatsApp.
- Menggunakan logo dan flyer asli yang diberikan.

## Menjalankan project

Pastikan Node.js 20.9+ sudah terpasang.

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

Untuk build production:

```bash
npm run build
npm start
```

## Kustomisasi penting

1. **Nomor WhatsApp**: ubah `WHATSAPP_NUMBER` di `app/page.tsx`. Format internasional tanpa `+`, spasi, atau strip. Contoh Indonesia: `62812xxxxxxx`.
2. **Konten layanan**: edit array `services` di `app/page.tsx`.
3. **Gambar**: ganti file di `public/images/` dengan nama file yang sama, atau sesuaikan path pada array `services`.
4. **Warna dan tema**: edit variabel CSS di bagian paling atas `app/globals.css`.
5. **Logo**: aset logo hitam dan putih sudah disertakan di `public/images/` untuk kebutuhan pengembangan lanjutan. Brand header saat ini dibuat sebagai teks agar tetap tajam di semua ukuran.

## Catatan sebelum publikasi

Nomor WhatsApp di dua flyer terbaca `085181070025`, sedangkan flyer service elektronik tampak menampilkan `08518107005`. Kode memakai nomor yang muncul di dua flyer (`6285181070025`) sebagai nilai awal. Mohon pastikan nomor final sebelum deploy.

Area layanan saat ini ditulis **Belilas, Indragiri Hulu**. Sesuaikan bila cakupan layanan berbeda.
