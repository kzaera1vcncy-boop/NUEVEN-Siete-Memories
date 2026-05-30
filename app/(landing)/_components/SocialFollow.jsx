"use client";

const COLORS = {
  bg: "#c8b99a",
  bgSection: "#e8dfd0",
  accent: "#6b3f1f",
  accentLight: "#d4c4a8",
  text: "#2c1f0e",
  textMuted: "#7a6248",
  border: "rgba(107,63,31,0.2)",
  card: "#f5efe6",
};

const socials = [
  {
    platform: "Instagram",
    handle: "@nueven_memories",
    desc: "Kenangan kelas IX-7",
    url: "https://www.instagram.com/nueven_memories",
    gradient: "linear-gradient(135deg, #d4a96a 0%, #6b3f1f 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="white" stroke="none"/>
      </svg>
    ),
  },
  {
    platform: "Instagram",
    handle: "@bilan.tujuu",
    desc: "Akun resmi IX-7",
    url: "https://www.instagram.com/bilan.tujuu",
    gradient: "linear-gradient(135deg, #c8a882 0%, #7a4a2a 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="white" stroke="none"/>
      </svg>
    ),
  },
  {
    platform: "TikTok",
    handle: "OSIS SMPN 4 CIBITUNG",
    desc: "Konten OSIS & sekolah",
    url: "https://www.tiktok.com/@ossissmpn4cibitung",
    gradient: "linear-gradient(135deg, #4a3020 0%, #2c1f0e 100%)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.01a8.16 8.16 0 0 0 4.78 1.52V7.09a4.85 4.85 0 0 1-1.01-.4z"/>
      </svg>
    ),
  },
];

export default function SocialFollow() {
  return (
    <section
      id="social"
      style={{
        background: COLORS.bgSection,
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p style={{
        color: COLORS.textMuted, fontSize: "12px",
        letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px",
      }}>
        Ikuti Kami
      </p>
      <h2 style={{
        color: COLORS.text,
        fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
        fontWeight: 800, margin: "0 0 2.5rem",
        fontFamily: "'Georgia', serif",
      }}>
        Stay Connected
      </h2>

      <div style={{
        display: "flex", flexDirection: "column", gap: "1rem",
        maxWidth: "420px", margin: "0 auto",
      }}>
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: "1rem",
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: "12px", padding: "1rem 1.25rem",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 2px 8px rgba(44,31,14,0.07)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(107,63,31,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(44,31,14,0.07)";
            }}
          >
            <div style={{
              width: "50px", height: "50px", borderRadius: "12px",
              background: s.gradient,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              {s.icon}
            </div>

            <div style={{ textAlign: "left", flex: 1 }}>
              <p style={{ color: COLORS.textMuted, fontSize: "11px", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {s.platform}
              </p>
              <p style={{ color: COLORS.text, fontWeight: 700, fontSize: "15px", margin: "0 0 2px" }}>
                {s.handle}
              </p>
              <p style={{ color: COLORS.textMuted, fontSize: "12px", margin: 0 }}>
                {s.desc}
              </p>
            </div>

            <span style={{ color: COLORS.accentLight, fontSize: "20px", marginLeft: "auto" }}>→</span>
          </a>
        ))}
      </div>
    </section>
  );
}