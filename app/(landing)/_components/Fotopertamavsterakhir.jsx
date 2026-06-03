"use client";

import { useState, useRef, useEffect } from "react";

export default function FotoPertamaVsTerakhir() {
  const [sliderX, setSliderX] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getX = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = ((clientX - rect.left) / rect.width) * 100;
    return Math.min(Math.max(x, 2), 98);
  };

  const handleMouseDown = (e) => { setDragging(true); setSliderX(getX(e)); };
  const handleMouseMove = (e) => { if (dragging) setSliderX(getX(e)); };
  const handleMouseUp = () => setDragging(false);
  const handleTouchStart = (e) => { setDragging(true); setSliderX(getX(e)); };
  const handleTouchMove = (e) => { if (dragging) { e.preventDefault(); setSliderX(getX(e)); } };
  const handleTouchEnd = () => setDragging(false);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#c8b99a",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      {/* Header */}
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        marginBottom: "2.5rem",
      }}>
        <p style={{
          color: "#5c3d1e", fontSize: "12px",
          letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px",
        }}>
          Betapa Jauhnya Kita Melangkah
        </p>
        <h2 style={{
          color: "#2c1f0e", fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
          fontWeight: 800, margin: "0 0 0.5rem", fontFamily: "'Georgia', serif",
        }}>
          Pertama vs Terakhir
        </h2>
        <p style={{ color: "#5c3d1e", fontSize: "14px", margin: 0, fontFamily: "'Georgia', serif", fontStyle: "italic" }}>
          Geser untuk melihat betapa banyak yang telah berubah
        </p>
      </div>

      {/* Slider container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "700px",
          margin: "0 auto 2rem",
          aspectRatio: "16/10",
          borderRadius: "16px",
          overflow: "hidden",
          cursor: dragging ? "grabbing" : "grab",
          userSelect: "none",
          boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
        }}
      >
        {/* Foto terakhir (background penuh) */}
        <img
          src="/images/gallery/37.jpg"
          alt="Foto Terakhir"
          draggable={false}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            pointerEvents: "none",
          }}
        />

        {/* Foto pertama (clip kiri) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            clipPath: `inset(0 ${100 - sliderX}% 0 0)`,
            transition: dragging ? "none" : "clip-path 0.05s",
          }}
        >
          <img
            src="/images/gallery/35.jpg"
            alt="Foto Pertama"
            draggable={false}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              pointerEvents: "none",
            }}
          />
          {/* Overlay sepia foto pertama */}
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(180,140,80,0.12)",
            pointerEvents: "none",
          }} />
        </div>

        {/* Garis slider */}
        <div
          style={{
            position: "absolute",
            top: 0, bottom: 0,
            left: `${sliderX}%`,
            transform: "translateX(-50%)",
            width: "2px",
            background: "rgba(255,255,255,0.9)",
            boxShadow: "0 0 12px rgba(255,255,255,0.5)",
            pointerEvents: "none",
          }}
        />

        {/* Tombol geser */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: `${sliderX}%`,
            transform: "translate(-50%, -50%)",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.95)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            gap: "2px",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" stroke="#2c1f0e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Label kiri — Pertama */}
        <div style={{
          position: "absolute",
          top: "16px", left: "16px",
          background: "rgba(44,31,14,0.8)",
          backdropFilter: "blur(8px)",
          borderRadius: "8px",
          padding: "6px 14px",
          pointerEvents: "none",
          opacity: sliderX > 15 ? 1 : 0,
          transition: "opacity 0.3s",
        }}>
          <p style={{
            color: "#d4c4a8", fontSize: "12px", fontWeight: 700,
            margin: 0, letterSpacing: "0.1em", textTransform: "uppercase",
          }}>
            📅 2023
          </p>
          <p style={{ color: "#a08060", fontSize: "11px", margin: 0 }}>
            Hari Pertama
          </p>
        </div>

        {/* Label kanan — Terakhir */}
        <div style={{
          position: "absolute",
          top: "16px", right: "16px",
          background: "rgba(44,31,14,0.8)",
          backdropFilter: "blur(8px)",
          borderRadius: "8px",
          padding: "6px 14px",
          pointerEvents: "none",
          opacity: sliderX < 85 ? 1 : 0,
          transition: "opacity 0.3s",
        }}>
          <p style={{
            color: "#d4c4a8", fontSize: "12px", fontWeight: 700,
            margin: 0, letterSpacing: "0.1em", textTransform: "uppercase",
          }}>
            📅 2026
          </p>
          <p style={{ color: "#a08060", fontSize: "11px", margin: 0 }}>
            Hari Terakhir
          </p>
        </div>

        {/* Hint geser — hilang setelah digeser */}
        {sliderX === 50 && (
          <div style={{
            position: "absolute",
            bottom: "16px", left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.5)",
            borderRadius: "20px",
            padding: "6px 16px",
            pointerEvents: "none",
            animation: "fadeInUp 0.5s ease 1s both",
          }}>
            <p style={{ color: "#fff", fontSize: "12px", margin: 0 }}>
              ← Geser →
            </p>
          </div>
        )}
      </div>

      {/* Keterangan bawah */}
      <div style={{
        maxWidth: "500px", margin: "0 auto",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.8s ease 0.5s",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginBottom: "1.5rem",
        }}>
          {[
            { tahun: "2023", label: "Hari Pertama Masuk", emoji: "🌱" },
            { tahun: "2026", label: "Hari Terakhir Bersama", emoji: "🎓" },
          ].map((item) => (
            <div key={item.tahun} style={{ textAlign: "center" }}>
              <span style={{ fontSize: "24px" }}>{item.emoji}</span>
              <p style={{ color: "#2c1f0e", fontWeight: 700, fontSize: "16px", margin: "4px 0 2px" }}>
                {item.tahun}
              </p>
              <p style={{ color: "#7a6248", fontSize: "12px", margin: 0 }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <p style={{
          color: "#2c1f0e",
          fontSize: "14px",
          lineHeight: 1.8,
          fontFamily: "'Georgia', serif",
          fontStyle: "italic",
          margin: 0,
        }}>
          &ldquo;Lihatlah betapa banyak yang telah berubah —
          namun satu hal yang tidak pernah berubah adalah
          ikatan yang kita miliki bersama.&rdquo;
        </p>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </section>
  );
}