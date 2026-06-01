"use client";

import { useState, useEffect } from "react";

const TOTAL = 34;
const PHOTOS = Array.from({ length: TOTAL }, (_, i) => `/images/gallery/${i + 1}.jpg`);

// Shuffle array
function shuffled(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function LoadingScreen() {
  const [phase, setPhase] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photos] = useState(() => shuffled(PHOTOS));
  const [imgVisible, setImgVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Phase timeline
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),   // garis expand
      setTimeout(() => setPhase(2), 800),   // teks muncul
      setTimeout(() => setPhase(3), 1500),  // subtitle muncul
      setTimeout(() => setPhase(4), 3400),  // fade out
      setTimeout(() => setPhase(5), 4200),  // hilang
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Ganti foto setiap 600ms
  useEffect(() => {
    if (phase >= 4) return;
    const interval = setInterval(() => {
      setImgVisible(false);
      setTimeout(() => {
        setPhotoIndex((prev) => (prev + 1) % photos.length);
        setImgVisible(true);
      }, 150);
    }, 600);
    return () => clearInterval(interval);
  }, [phase, photos]);

  if (phase === 5) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        opacity: phase === 4 ? 0 : 1,
        transition: phase === 4 ? "opacity 0.8s cubic-bezier(0.4,0,0.2,1)" : "opacity 0.3s ease",
        background: "#f7f1d9",
      }}
    >
      {/* ── Foto background berganti-ganti ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
        }}
      >
        <img
          key={photoIndex}
          src={photos[photoIndex]}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: mounted && imgVisible ? 0.55 : 0,
            transform: mounted && imgVisible ? "scale(1.03)" : "scale(1.08)",
            transition: "opacity 0.3s ease, transform 0.6s ease",
            filter: "sepia(0.3)",
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(247,241,217,0.55) 0%, rgba(187,170,135,0.35) 50%, rgba(187,170,135,0.7) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(187,170,135,0.5) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Konten tengah ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* Garis atas */}
        <div
          style={{
            width: phase >= 1 ? "140px" : "0px",
            height: "1px",
            background: "linear-gradient(to right, transparent, #6b3f1f, transparent)",
            transition: "width 0.8s cubic-bezier(0.4,0,0.2,1)",
            marginBottom: "28px",
          }}
        />

        {/* Teks IX —7 */}
        <div style={{ overflow: "hidden", marginBottom: "10px" }}>
          <div
            style={{
              transform: phase >= 2 ? "translateY(0)" : "translateY(110%)",
              transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)",
              display: "flex",
              alignItems: "baseline",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: "clamp(4rem, 14vw, 8rem)",
                fontWeight: 400,
                color: "#2c1f0e",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                textShadow: "0 2px 20px rgba(44,31,14,0.1)",
              }}
            >
              IX
            </span>
            <span
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: "clamp(4rem, 14vw, 8rem)",
                fontWeight: 400,
                color: "#6b3f1f",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                textShadow: "0 2px 20px rgba(107,63,31,0.15)",
              }}
            >
              — 7
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <div style={{ overflow: "hidden", marginBottom: "28px" }}>
          <div
            style={{
              transform: phase >= 3 ? "translateY(0)" : "translateY(110%)",
              transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s",
            }}
          >
            <p
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(10px, 2vw, 12px)",
                color: "#7a6248",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                margin: 0,
                textAlign: "center",
              }}
            >
              SMPN 4 Cibitung &nbsp;·&nbsp; 2023 — 2026
            </p>
          </div>
        </div>

        {/* Garis bawah */}
        <div
          style={{
            width: phase >= 1 ? "140px" : "0px",
            height: "1px",
            background: "linear-gradient(to right, transparent, #6b3f1f, transparent)",
            transition: "width 0.8s cubic-bezier(0.4,0,0.2,1) 0.1s",
          }}
        />

        {/* Loading dots */}
        {phase >= 3 && (
          <div
            style={{
              display: "flex",
              gap: "6px",
              marginTop: "36px",
              opacity: 1,
              animation: "fadeInUp 0.5s ease 0.2s both",
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#7a6248",
                  animation: `dotPulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Tagline bawah */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: phase >= 3 ? 0.5 : 0,
          transition: "opacity 0.6s ease 0.5s",
          whiteSpace: "nowrap",
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "11px",
            color: "#6b3f1f",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Kenangan · Persahabatan · Keluarga
        </p>
      </div>

      {/* Counter foto pojok kanan bawah */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          opacity: phase >= 2 ? 0.35 : 0,
          transition: "opacity 0.5s ease",
          zIndex: 2,
        }}
      >
        <p style={{
          fontFamily: "monospace",
          fontSize: "11px",
          color: "#c8b99a",
          margin: 0,
          letterSpacing: "0.05em",
        }}>
          {String(photoIndex + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
        </p>
      </div>

      <style>{`
        @keyframes dotPulse {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}