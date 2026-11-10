"use client";

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "6285181070025"; // Konfirmasi nomor ini sebelum website dipublikasikan.
const WHATSAPP_MESSAGE = "Halo Si Tukang Belilas, saya ingin konsultasi mengenai layanan.";
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const services = [
  {
    id: "elektronik",
    number: "01",
    eyebrow: "PERANGKAT RUMAH & KANTOR",
    title: "Service Elektronik",
    description: "Perbaikan perangkat elektronik dengan pemeriksaan yang teliti dan solusi yang jelas.",
    items: ["Kipas angin & peralatan rumah tangga", "Mesin cuci, blender, rice cooker", "Speaker dan perangkat audio", "Instalasi serta pengecekan perangkat"],
    image: "/images/service-elektronik.png",
    alt: "Flyer layanan service elektronik Si Tukang",
    tone: "blue",
  },
  {
    id: "it",
    number: "02",
    eyebrow: "WEBSITE, APLIKASI & INFRASTRUKTUR",
    title: "Jasa IT",
    description: "Bantu kebutuhan teknologi pribadi maupun bisnis, dari pembuatan sampai perawatan.",
    items: ["Pembuatan website & aplikasi", "Instalasi CCTV dan jaringan", "Instalasi software dan sistem", "Troubleshooting & maintenance komputer"],
    image: "/images/service-it.png",
    alt: "Flyer layanan IT Si Tukang",
    tone: "ink",
  },
  {
    id: "handphone",
    number: "03",
    eyebrow: "SMARTPHONE & DATA",
    title: "Service Handphone",
    description: "Pengecekan dan penanganan masalah handphone, termasuk bantuan data dan akun.",
    items: ["Diagnosa dan perbaikan kerusakan", "Backup & pemulihan data", "Bantuan pemulihan akses akun", "Konsultasi kendala perangkat"],
    image: "/images/service-handphone.png",
    alt: "Flyer layanan service handphone Si Tukang",
    tone: "slate",
  },
];

function ArrowUpRight() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>;
}
function SunIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>;
}
function MoonIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" /></svg>;
}
function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.1 11.7a8.1 8.1 0 0 1-12 7.1L4 20l1.2-4A8.1 8.1 0 1 1 20.1 11.7Z" /><path d="M9 8.5c.2-.5.5-.5.8-.5h.4c.2 0 .3.1.4.4l.6 1.4c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.3-.1.5.4.7 1 1.3 1.7 1.7.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.3.6c.3.1.4.2.4.4 0 .3-.2 1.1-.7 1.5-.5.4-1.1.6-1.7.5-1-.2-2.2-.8-3.2-1.8-1-.9-1.7-2.1-1.9-3.1-.1-.7.2-1.4.8-1.8Z" /></svg>;
}

export default function Home() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("si-tukang-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(saved ? saved === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    window.localStorage.setItem("si-tukang-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Si Tukang Belilas, beranda">
          <span className="brand-mark">Si<span>Tukang</span></span>
          <span className="brand-place">BELILAS · SOLUSI &amp; SERVICE</span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Navigasi utama">
          <a href="#layanan" onClick={() => setMenuOpen(false)}>Layanan</a>
          <a href="#tentang" onClick={() => setMenuOpen(false)}>Tentang</a>
          <a href="#kontak" onClick={() => setMenuOpen(false)}>Kontak</a>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setDark(v => !v)} aria-label={dark ? "Aktifkan light mode" : "Aktifkan dark mode"} title={dark ? "Light mode" : "Dark mode"}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <a className="header-cta" href={waLink} target="_blank" rel="noreferrer">Hubungi kami <ArrowUpRight /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Buka navigasi"><span /><span /></button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> PARTNER TEKNOLOGI &amp; SERVICE ANDA</div>
          <h1>Yang rusak,<br /><em>kami bantu</em><br />bereskan.</h1>
          <p className="hero-description">Dari perangkat elektronik hingga solusi IT untuk bisnis. Layanan praktis, komunikasi jelas, dan pengerjaan dengan perhatian pada detail dan bergaransi.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#layanan">Jelajahi layanan <ArrowUpRight /></a>
            <a className="text-link" href={waLink} target="_blank" rel="noreferrer">Konsultasi via WhatsApp <span>↗</span></a>
          </div>
          <div className="hero-note"><span className="note-line" /> MELAYANI BELILAS DAN SEKITARNYA</div>
        </div>
        <div className="hero-art">
          <div className="hero-image-frame">
            <img src="/images/service-it.png" alt="Ragam layanan teknologi Si Tukang" />
          </div>
          <div className="floating-card">
            <span className="floating-icon">✳</span>
            <span><strong>3 layanan utama</strong><small>Satu tempat untuk berbagai kebutuhan</small></span>
          </div>
          <div className="hero-index">ST / 001—026</div>
        </div>
        <div className="hero-bottom"><span>01 / 03</span><span>TEKNOLOGI · PERBAIKAN · SOLUSI</span><span>SCROLL UNTUK MELIHAT</span></div>
      </section>

      <section className="intro section-wrap" id="tentang">
        <div className="section-kicker">01 — KENALAN DENGAN KAMI</div>
        <div className="intro-content">
          <h2>Masalah teknologi<br />nggak harus <span>rumit.</span></h2>
          <div className="intro-text">
            <p>Si Tukang Belilas hadir sebagai partner untuk kebutuhan service dan teknologi Anda. Kami membantu menangani perangkat yang bermasalah sekaligus mendukung kebutuhan digital rumah, kantor, dan usaha.</p>
            <a className="underlined-link" href="#kontak">Ceritakan kebutuhan Anda <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <section className="services section-wrap" id="layanan">
        <div className="section-heading">
          <div><div className="section-kicker">02 — APA YANG KAMI KERJAKAN</div><h2>Layanan <span>kami.</span></h2></div>
          <p>Pilih kebutuhan Anda. Kami siap bantu mulai dari konsultasi, pengecekan, hingga solusi.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className={`service-card service-${service.tone}`} key={service.id}>
              <div className="service-info">
                <div className="service-number">{service.number} <span> / SERVICE</span></div>
                <div className="service-eyebrow">{service.eyebrow}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>{service.items.map(item => <li key={item}><span>↗</span>{item}</li>)}</ul>
                <a className="service-link" href={`${waLink}&service=${service.id}`} target="_blank" rel="noreferrer">Tanya layanan ini <ArrowUpRight /></a>
              </div>
              <div className="service-visual">
                <img src={service.image} alt={service.alt} />
                <span className="visual-caption">SI TUKANG / {service.number}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process section-wrap">
        <div className="section-kicker">03 — MUDAH DAN TRANSPARAN</div>
        <div className="process-grid">
          <h2>Mulai dari<br /><span>cerita masalahnya.</span></h2>
          <div className="steps">
            <div className="step"><span>01</span><div><h3>Hubungi kami</h3><p>Ceritakan kendala atau kebutuhan Anda melalui WhatsApp.</p></div></div>
            <div className="step"><span>02</span><div><h3>Konsultasi &amp; pengecekan</h3><p>Kami bantu pahami masalah dan langkah penanganan yang sesuai.</p></div></div>
            <div className="step"><span>03</span><div><h3>Solusi dan pengerjaan</h3><p>Detail pengerjaan dan biaya dikomunikasikan sebelum dilanjutkan.</p></div></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="kontak">
        <div className="contact-inner">
          <div className="section-kicker">04 — ADA YANG BISA KAMI BANTU?</div>
          <h2>Mari bereskan<br /><span>bersama Si Tukang.</span></h2>
          <p>Konsultasikan kebutuhan service atau teknologi Anda. Klik tombol di bawah untuk memulai percakapan.</p>
          <a className="button button-light" href={waLink} target="_blank" rel="noreferrer"><WhatsAppIcon /> Hubungi via WhatsApp <ArrowUpRight /></a>
          <div className="contact-foot"><span>BELILAS, INDRAGIRI HULU</span><span>LAYANAN PANGGILAN / SESUAI KESEPAKATAN</span></div>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">Si<span>Tukang</span></span><span className="brand-place">BELILAS</span></a>
        <span>© {new Date().getFullYear()} Si Tukang Belilas. Dibuat untuk membantu.</span>
        <a href="#home">Kembali ke atas ↑</a>
      </footer>

      <a className="floating-wa" href={waLink} target="_blank" rel="noreferrer" aria-label="Chat WhatsApp"><WhatsAppIcon /></a>
    </main>
  );
}