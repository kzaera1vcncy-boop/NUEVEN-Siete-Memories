"use client";

import { useState, useEffect } from "react";

const COLORS = {
  bg: "#c8b99a",        // krem/beige utama
  bgDark: "#2c1f0e",    // coklat tua gelap
  bgCard: "rgba(44,31,14,0.85)",
  accent: "#6b3f1f",    // coklat medium
  accentLight: "#d4c4a8",
  text: "#2c1f0e",
  textLight: "#f5efe6",
  textMuted: "#7a6248",
  border: "rgba(107,63,31,0.25)",
};

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Siswa", href: "#siswa" },
  { label: "Kenangan", href: "#kenangan" },
  { label: "Maps", href: "#maps" },
];

const socials = [
  {
    label: "nueven_memories",
    url: "https://www.instagram.com/nueven_memories",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "bilan.tujuu",
    url: "https://www.instagram.com/bilan.tujuu",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "OSIS SMPN 4",
    url: "https://www.tiktok.com/@ossissmpn4cibitung",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.01a8.16 8.16 0 0 0 4.78 1.52V7.09a4.85 4.85 0 0 1-1.01-.4z"/>
      </svg>
    ),
  },
];

export default function HeroNetflix() {
  const [loaded, setLoaded] = useState(false);
  const [activeNav, setActiveNav] = useState("Beranda");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveNav(item.label);
    setMenuOpen(false);
    const target = document.querySelector(item.href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 1.25rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          background: scrolled
            ? "rgba(200,185,154,0.97)"
            : "linear-gradient(to bottom, rgba(200,185,154,0.95) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "background 0.4s ease",
          borderBottom: scrolled ? `1px solid ${COLORS.border}` : "none",
          boxShadow: scrolled ? "0 2px 16px rgba(44,31,14,0.10)" : "none",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
          <span style={{ color: COLORS.accent, fontWeight: 900, fontSize: "20px", fontFamily: "'Georgia', serif" }}>IX</span>
          <span style={{ color: COLORS.text, fontWeight: 900, fontSize: "20px", fontFamily: "'Georgia', serif" }}>-7</span>
          <span style={{ color: COLORS.textMuted, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", marginLeft: "4px", alignSelf: "flex-end", paddingBottom: "3px" }}>
            SMPN 4 Cibitung
          </span>
        </div>

        {/* Nav menu desktop */}
        <ul className="nav-desktop-list" style={{ display: "flex", gap: 0, listStyle: "none", margin: 0, padding: 0 }}>
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                style={{
                  display: "block",
                  color: activeNav === item.label ? COLORS.accent : COLORS.textMuted,
                  fontWeight: activeNav === item.label ? 700 : 400,
                  fontSize: "14px",
                  textDecoration: "none",
                  padding: "0 12px",
                  height: "64px",
                  lineHeight: "64px",
                  borderBottom: activeNav === item.label ? `2px solid ${COLORS.accent}` : "2px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => { if (activeNav !== item.label) e.currentTarget.style.color = COLORS.text; }}
                onMouseLeave={(e) => { if (activeNav !== item.label) e.currentTarget.style.color = COLORS.textMuted; }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Sosial ikon di navbar */}
        <div className="nav-socials" style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "34px",
                height: "34px",
                borderRadius: "8px",
                background: "rgba(107,63,31,0.12)",
                color: COLORS.accent,
                border: `1px solid ${COLORS.border}`,
                textDecoration: "none",
                transition: "background 0.2s, transform 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = COLORS.accent;
                e.currentTarget.style.color = COLORS.textLight;
                e.currentTarget.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(107,63,31,0.12)";
                e.currentTarget.style.color = COLORS.accent;
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="nav-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "4px", color: COLORS.accent }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen
              ? <path d="M18 6L6 18M6 6l12 12" stroke={COLORS.accent} strokeWidth="2" strokeLinecap="round"/>
              : <path d="M3 12h18M3 6h18M3 18h18" stroke={COLORS.accent} strokeWidth="2" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99,
          background: "rgba(200,185,154,0.98)", backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${COLORS.border}`, padding: "0.5rem 0",
        }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              style={{
                display: "block", color: activeNav === item.label ? COLORS.accent : COLORS.textMuted,
                fontWeight: activeNav === item.label ? 700 : 400, fontSize: "16px",
                textDecoration: "none", padding: "13px 1.5rem",
                borderLeft: activeNav === item.label ? `3px solid ${COLORS.accent}` : "3px solid transparent",
              }}
            >
              {item.label}
            </a>
          ))}
          {/* Sosial di mobile menu */}
          <div style={{ display: "flex", gap: "10px", padding: "12px 1.5rem", borderTop: `1px solid ${COLORS.border}`, marginTop: "4px" }}>
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "6px", color: COLORS.accent, textDecoration: "none", fontSize: "13px" }}>
                {s.icon} <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ── HERO SECTION ── */}
      <section
        id="beranda"
        style={{
          position: "relative", width: "100%", minHeight: "100vh",
          background: COLORS.bg, overflow: "hidden",
          display: "flex", alignItems: "flex-end",
        }}
      >
        {/* Background foto */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/images/gallery/11.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.55) sepia(0.2)",
          transform: loaded ? "scale(1)" : "scale(1.06)",
          transition: "transform 1.4s ease, opacity 1.2s ease",
          opacity: loaded ? 1 : 0,
        }}/>

        {/* Gradient overlay warna beige */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to top, ${COLORS.bgDark} 0%, rgba(44,31,14,0.6) 40%, rgba(200,185,154,0.1) 100%)`,
        }}/>

        {/* Badge */}
        <div style={{
          position: "absolute", top: "90px", left: "1.5rem",
          display: "flex", alignItems: "center", gap: "8px",
          opacity: loaded ? 1 : 0, transition: "opacity 1s ease 0.5s",
        }}>
          <span style={{
            background: COLORS.accent, color: COLORS.textLight,
            fontWeight: 700, fontSize: "11px", padding: "3px 10px",
            borderRadius: "3px", letterSpacing: "0.08em", textTransform: "uppercase",
          }}>NUEVEN-SIETE</span>
          <span style={{ color: COLORS.accentLight, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            ORIGINAL SERIES
          </span>
        </div>

        {/* Konten utama */}
        <div style={{
          position: "relative", padding: "0 1.5rem 4rem",
          width: "100%", maxWidth: "700px",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.9s ease 0.5s, transform 0.9s ease 0.5s",
        }}>
          <h1 style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(4rem, 16vw, 8rem)",
            fontWeight: 900, color: COLORS.textLight,
            lineHeight: 0.9, margin: "0 0 1.25rem",
            textShadow: "0 4px 30px rgba(0,0,0,0.7)",
            letterSpacing: "-0.03em",
          }}>
            KAMI<br />
            <span style={{ color: COLORS.accentLight }}>PAMIT</span>
          </h1>

          {/* Badge kelas */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "rgba(200,185,154,0.15)", border: `1px solid rgba(200,185,154,0.3)`,
            borderRadius: "6px", padding: "6px 14px", marginBottom: "1rem",
            backdropFilter: "blur(4px)",
          }}>
            <span style={{ color: COLORS.accentLight, fontWeight: 800, fontSize: "16px" }}>Kelas IX-7</span>
            <span style={{ color: COLORS.textMuted, fontSize: "12px" }}>•</span>
            <span style={{ color: "#ccc", fontSize: "13px" }}>SMPN 4 Cibitung</span>
            <span style={{ color: COLORS.textMuted, fontSize: "12px" }}>•</span>
            <span style={{ color: "#ccc", fontSize: "13px" }}>2025</span>
          </div>

          {/* Rating */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1rem" }}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: COLORS.accentLight, fontSize: "15px" }}>★</span>
            ))}
            <span style={{ color: "#bbb", fontSize: "13px", marginLeft: "4px" }}>
              98% Match · 2025 · 1 Season
            </span>
          </div>

          {/* Deskripsi */}
          <p style={{
            color: "#ddd", fontSize: "14px", lineHeight: 1.7,
            margin: "0 0 2rem", maxWidth: "400px",
          }}>
            Kisah sebuah kelas yang penuh tawa, duka, dan kenangan yang tidak akan pernah terlupakan.
            Setiap hari adalah petualangan yang akan selalu diingat.
          </p>

          {/* Tombol */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="#kenangan"
              onClick={(e) => handleNavClick(e, { label: "Kenangan", href: "#kenangan" })}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: COLORS.accentLight, color: COLORS.text,
                fontWeight: 700, fontSize: "15px", padding: "11px 28px",
                borderRadius: "5px", textDecoration: "none", transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              ▶ Lihat Kenangan
            </a>
            <a
              href="#siswa"
              onClick={(e) => handleNavClick(e, { label: "Siswa", href: "#siswa" })}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(200,185,154,0.2)", color: COLORS.textLight,
                fontWeight: 700, fontSize: "15px", padding: "11px 28px",
                borderRadius: "5px", textDecoration: "none",
                border: `1px solid rgba(200,185,154,0.4)`,
                backdropFilter: "blur(4px)", transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(200,185,154,0.35)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(200,185,154,0.2)"}
            >
              👥 Lihat Siswa
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "1.5rem", right: "1.5rem",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
          opacity: loaded ? 0.6 : 0, transition: "opacity 1s ease 1.2s",
          animation: "bounce 2s infinite",
        }}>
          <span style={{ color: COLORS.accentLight, fontSize: "10px", letterSpacing: "0.12em" }}>SCROLL</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill={COLORS.accentLight}>
            <path d="M12 16l-6-6h12l-6 6z"/>
          </svg>
        </div>
      </section>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @media (max-width: 768px) {
          .nav-desktop-list { display: none !important; }
          .nav-socials { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}