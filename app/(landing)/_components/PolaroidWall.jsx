"use client";

import { useState, useMemo } from "react";

const COLORS = {
  light: {
    bg: "#c8b99a",
    text: "#2c1f0e",
    textMuted: "#7a6248",
    accent: "#6b3f1f",
    polaroid: "#fdf8f0",
    shadow: "rgba(44,31,14,0.2)",
  },
  dark: {
    bg: "#1a1208",
    text: "#f5efe6",
    textMuted: "#a08060",
    accent: "#d4c4a8",
    polaroid: "#2c1f0e",
    shadow: "rgba(0,0,0,0.4)",
  },
};



// Rotasi dan posisi acak tapi konsisten per foto
function usePolaroids() {
  return useMemo(() => {
    return Array.from({ length: 34 }, (_, i) => ({
      id: i + 1,
      src: `/images/gallery/${i + 1}.jpg`,
      rotation: ((i * 137.5) % 16) - 8,
    }));
  }, []);
}

export default function PolaroidWall({ isDark = false }) {
  const C = isDark ? COLORS.dark : COLORS.light;
  const polaroids = usePolaroids();
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section
        style={{
          background: C.bg,
          padding: "4rem 1rem",
          textAlign: "center",
          transition: "background 0.4s ease",
        }}
      >
        <p style={{
          color: C.textMuted, fontSize: "12px",
          letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px",
        }}>
          Dinding Kenangan
        </p>
        <h2 style={{
          color: C.text, fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
          fontWeight: 800, margin: "0 0 0.5rem", fontFamily: "'Georgia', serif",
        }}>
          Polaroid Wall
        </h2>
        <p style={{ color: C.textMuted, fontSize: "14px", margin: "0 0 2.5rem" }}>
          Klik foto untuk melihat lebih jelas
        </p>

        {/* Grid polaroid */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          maxWidth: "900px",
          margin: "0 auto",
        }}>
          {polaroids.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelected(p)}
              style={{
                background: C.polaroid,
                padding: "10px 10px 14px",
                borderRadius: "2px",
                boxShadow: `0 4px 16px ${C.shadow}, 0 1px 4px ${C.shadow}`,
                transform: `rotate(${p.rotation}deg)`,
                cursor: "pointer",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                width: "110px",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `rotate(${p.rotation}deg) scale(1.1) translateY(-4px)`;
                e.currentTarget.style.boxShadow = `0 12px 32px ${C.shadow}`;
                e.currentTarget.style.zIndex = "10";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${p.rotation}deg)`;
                e.currentTarget.style.boxShadow = `0 4px 16px ${C.shadow}, 0 1px 4px ${C.shadow}`;
                e.currentTarget.style.zIndex = "1";
              }}
            >
              <div style={{
                width: "90px", height: "90px",
                overflow: "hidden", background: "#ddd",
              }}>
                <img
                  src={p.src}
                  alt={`Foto ${p.id}`}
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover", display: "block",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: "rgba(0,0,0,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "1rem", backdropFilter: "blur(6px)",
          }}
        >
          <div
            style={{
              background: "#fdf8f0",
              padding: "16px 16px 52px",
              borderRadius: "2px",
              maxWidth: "340px", width: "100%",
              boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
              animation: "popIn 0.3s ease",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={`Foto ${selected.id}`}
              style={{
                width: "100%", aspectRatio: "1",
                objectFit: "cover", display: "block",
              }}
            />
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute", top: "8px", right: "8px",
                background: "#2c1f0e", color: "#f5efe6",
                border: "none", borderRadius: "50%",
                width: "28px", height: "28px",
                cursor: "pointer", fontSize: "14px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes popIn {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}