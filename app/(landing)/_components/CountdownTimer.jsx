"use client";

import { useState, useEffect } from "react";

const START_DATE = new Date("2023-07-20T07:00:00");
const END_DATE = new Date("2026-06-02T17:35:00");

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer() {
  const [now, setNow] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const totalDays = Math.floor((END_DATE - START_DATE) / (1000 * 60 * 60 * 24));
  const daysPassed = Math.max(0, Math.floor((now - START_DATE) / (1000 * 60 * 60 * 24)));
  const diff = END_DATE - now;
  const isOver = diff <= 0;

  // Hitung mundur ke kelulusan
  let days = 0, hours = 0, minutes = 0, seconds = 0;
  if (!isOver) {
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((diff % (1000 * 60)) / 1000);
  }

  // Hitung setelah kelulusan
  const afterDiff = now - END_DATE;
  let afterDays = 0, afterHours = 0, afterMinutes = 0, afterSeconds = 0;
  if (isOver) {
    afterDays = Math.floor(afterDiff / (1000 * 60 * 60 * 24));
    afterHours = Math.floor((afterDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    afterMinutes = Math.floor((afterDiff % (1000 * 60 * 60)) / (1000 * 60));
    afterSeconds = Math.floor((afterDiff % (1000 * 60)) / 1000);
  }

  const progress = Math.min(100, (daysPassed / totalDays) * 100);

  const countdownBoxes = [
    { label: "Hari", value: pad(days) },
    { label: "Jam", value: pad(hours) },
    { label: "Menit", value: pad(minutes) },
    { label: "Detik", value: pad(seconds) },
  ];

  const afterBoxes = [
    { label: "Hari", value: pad(afterDays) },
    { label: "Jam", value: pad(afterHours) },
    { label: "Menit", value: pad(afterMinutes) },
    { label: "Detik", value: pad(afterSeconds) },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(to bottom, #f7f1d9, #bbaa87)",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p style={{
        color: "#7a6248", fontSize: "12px",
        letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px",
      }}>
        {isOver ? "Sudah Berlalu" : "Perjalanan Kita"}
      </p>
      <h2 style={{
        color: "#2c1f0e", fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
        fontWeight: 800, margin: "0 0 0.5rem", fontFamily: "'Georgia', serif",
      }}>
        {isOver ? "Selamat Jalan, IX-7 🎓" : "Menuju Kelulusan"}
      </h2>
      <p style={{ color: "#7a6248", fontSize: "14px", margin: "0 0 2.5rem" }}>
        {isOver
          ? "Sudah sekian lama kita berpisah..."
          : "20 Juli 2023 → 2 Juni 2026, 17:35 WIB"}
      </p>

      {/* Kotak hitung mundur / hitung setelah kelulusan */}
      {mounted && (
        <div style={{
          display: "flex", justifyContent: "center",
          gap: "12px", flexWrap: "wrap", marginBottom: "2.5rem",
        }}>
          {(isOver ? afterBoxes : countdownBoxes).map((box) => (
            <div key={box.label} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
            }}>
              <div style={{
                background: "#2c1f0e", color: "#f5efe6",
                fontWeight: 800,
                fontSize: "clamp(2rem, 8vw, 3.5rem)",
                width: "clamp(70px, 18vw, 100px)",
                height: "clamp(70px, 18vw, 100px)",
                borderRadius: "12px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "monospace",
                boxShadow: "0 4px 16px rgba(44,31,14,0.2)",
              }}>
                {box.value}
              </div>
              <span style={{
                color: "#7a6248", fontSize: "12px",
                letterSpacing: "0.08em", textTransform: "uppercase",
              }}>
                {box.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Label status */}
      {isOver && (
        <p style={{
          color: "#6b3f1f", fontSize: "14px", fontWeight: 600,
          margin: "0 0 2rem",
          fontFamily: "'Georgia', serif", fontStyle: "italic",
        }}>
          sejak kita resmi lulus bersama 💛
        </p>
      )}

      {/* Progress bar — hanya tampil sebelum kelulusan */}
      {!isOver && (
        <div style={{ maxWidth: "500px", margin: "0 auto 1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span style={{ color: "#7a6248", fontSize: "12px" }}>20 Jul 2023</span>
            <span style={{ color: "#6b3f1f", fontSize: "13px", fontWeight: 700 }}>
              {Math.round(progress)}% perjalanan
            </span>
            <span style={{ color: "#7a6248", fontSize: "12px" }}>2 Jun 2026</span>
          </div>
          <div style={{
            width: "100%", height: "10px",
            background: "rgba(107,63,31,0.2)", borderRadius: "99px", overflow: "hidden",
          }}>
            <div style={{
              width: `${progress}%`, height: "100%",
              background: "linear-gradient(to right, #d4c4a8, #6b3f1f)",
              borderRadius: "99px", transition: "width 0.5s ease",
            }} />
          </div>
          <p style={{ color: "#7a6248", fontSize: "13px", marginTop: "8px" }}>
            {daysPassed} hari telah kita lalui bersama dari {totalDays} hari
          </p>
        </div>
      )}
    </section>
  );
}