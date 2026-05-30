"use client";

const COLORS = {
  bg: "#2c1f0e",
  bgSection: "#1a1208",
  accent: "#6b3f1f",
  accentLight: "#d4c4a8",
  text: "#2c1f0e",
  textLight: "#f5efe6",
  textMuted: "#a08060",
  border: "rgba(212,196,168,0.15)",
  card: "rgba(212,196,168,0.08)",
};

export default function SchoolMap() {
  const searchMapUrl =
    "https://maps.google.com/maps?q=SMPN+4+Cibitung+Wanajaya+Bekasi&output=embed&z=16";

  return (
    <section
      id="maps"
      style={{
        background: COLORS.bg,
        padding: "4rem 0 0",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", padding: "0 1.5rem 2.5rem" }}>
        <p style={{
          color: COLORS.textMuted, fontSize: "12px",
          letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px",
        }}>
          Temukan Kami
        </p>
        <h2 style={{
          color: COLORS.textLight,
          fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
          fontWeight: 800, margin: "0 0 0.75rem",
          fontFamily: "'Georgia', serif",
        }}>
          Lokasi Sekolah
        </h2>
        <p style={{ color: COLORS.textMuted, fontSize: "14px", margin: 0 }}>
          SMPN 4 Cibitung · Wanajaya, Bekasi, Jawa Barat
        </p>
      </div>

      {/* Info card */}
      <div style={{ padding: "0 1.5rem 1.25rem" }}>
        <div style={{
          background: COLORS.card,
          border: `1px solid ${COLORS.border}`,
          borderRadius: "12px", padding: "1rem 1.25rem",
          display: "flex", alignItems: "center", gap: "14px",
          maxWidth: "600px", margin: "0 auto",
        }}>
          <div style={{
            width: "44px", height: "44px", borderRadius: "10px",
            background: COLORS.accent,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill={COLORS.accentLight}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>

          <div style={{ flex: 1 }}>
            <p style={{ color: COLORS.textLight, fontWeight: 700, fontSize: "15px", margin: "0 0 2px" }}>
              SMPN 4 Cibitung
            </p>
            <p style={{ color: COLORS.textMuted, fontSize: "12px", margin: 0, lineHeight: 1.4 }}>
              Jl. Wanajaya, Kecamatan Cibitung, Bekasi, Jawa Barat
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=SMPN+4+Cibitung+Wanajaya+Bekasi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: COLORS.accent, color: COLORS.accentLight,
              fontSize: "12px", fontWeight: 600,
              padding: "7px 14px", borderRadius: "6px",
              textDecoration: "none", flexShrink: 0, whiteSpace: "nowrap",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
          >
            Petunjuk Arah
          </a>
        </div>
      </div>

      {/* Peta */}
      <div style={{ width: "100%", height: "350px", overflow: "hidden" }}>
        <iframe
          src={searchMapUrl}
          width="100%"
          height="350"
          style={{ border: 0, display: "block", filter: "sepia(0.3) contrast(0.9)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi SMPN 4 Cibitung"
        />
      </div>

      {/* Footer */}
      <div style={{
        textAlign: "center", padding: "1.5rem",
        borderTop: `1px solid ${COLORS.border}`,
      }}>
        <p style={{ color: COLORS.textMuted, fontSize: "12px", margin: 0 }}>
          © 2025 Nueven-Siete · SMPN 4 Cibitung · All rights reserved
        </p>
      </div>
    </section>
  );
}