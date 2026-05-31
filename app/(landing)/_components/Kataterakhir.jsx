"use client";

import { useState } from "react";

// Ganti dengan nama dan kata terakhir siswa asli IX-7
const kataAkhir = [
  { nama: "Azizi", kata: "Terima kasih IX-7, kalian adalah rumah terbaik yang pernah aku punya. Sampai jumpa di puncak!" },
  { nama: "Ibrahim", kata: "Gak nyangka 3 tahun berlalu secepat ini. Semua kenangan bareng kalian akan selalu aku simpan. Miss you all." },
  { nama: "Aqlan", kata: "IX-7 mengajarkanku arti kebersamaan. Apapun yang terjadi, kalian selalu ada di hatiku. See you on top!" },
  { nama: "Yanto", kata: "Perpisahan ini bukan akhir, tapi awal dari petualangan baru. Jangan pernah lupakan kenangan kita ya." },
  { nama: "Rido j", kata: "Dari yang tidak kenal sampai jadi keluarga. IX-7 is the best chapter of my life. Love you all." },
  { nama: "Bagas", kata: "Ribuan tawa, beberapa air mata, satu keluarga. IX-7 forever in my heart" },
  { nama: "Devino", kata: "Kelas paling berisik, paling kompak, paling keren. Bangga jadi bagian dari IX-7!" },
  { nama: "Reyhan", kata: "Semua momen di kelas ini tidak akan pernah aku lupakan." },
  { nama: "Fathan", kata: "Best class, best memories, best friends. IX-7 will always be special." }
];

export default function KataTermkhir() {
  const [active, setActive] = useState(0);

  return (
    <section
      style={{
        // Sama persis dengan background PolaroidWall
        background: "#c8b99a",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p style={{
        color: "#5c4433", fontSize: "12px",
        letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px",
      }}>
        Ucapan Perpisahan
      </p>
      <h2 style={{
        color: "#2c1f0e", fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
        fontWeight: 800, margin: "0 0 0.5rem", fontFamily: "'Georgia', serif",
      }}>
        Kata Terakhir
      </h2>
      <p style={{ color: "#5c4433", fontSize: "14px", margin: "0 0 2.5rem" }}>
        Kata-kata terakhir dari anggota IX-7
      </p>

      {/* Kartu utama */}
      <div style={{
        maxWidth: "500px", margin: "0 auto 2rem",
        background: "#fdf8f0",
        border: "1px solid rgba(107,63,31,0.2)",
        borderRadius: "16px", padding: "2rem",
        boxShadow: "0 8px 32px rgba(44,31,14,0.12)",
        minHeight: "180px",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: "1rem",
      }}>
        <div style={{
          width: "56px", height: "56px",
          background: "linear-gradient(135deg, #d4c4a8, #6b3f1f)",
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "22px", fontWeight: 800, color: "#fdf8f0",
          fontFamily: "'Georgia', serif",
        }}>
          {kataAkhir[active].nama[0]}
        </div>

        <p style={{
          color: "#2c1f0e", fontSize: "15px", lineHeight: 1.8,
          fontFamily: "'Georgia', serif", fontStyle: "italic", margin: 0,
        }}>
          &ldquo;{kataAkhir[active].kata}&rdquo;
        </p>

        <p style={{ color: "#6b3f1f", fontWeight: 700, fontSize: "14px", margin: 0 }}>
          — {kataAkhir[active].nama}
        </p>
      </div>

      {/* Navigasi panah */}
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "center", gap: "16px", marginBottom: "1.5rem",
      }}>
        <button
          onClick={() => setActive((prev) => (prev - 1 + kataAkhir.length) % kataAkhir.length)}
          style={{
            width: "40px", height: "40px", borderRadius: "50%",
            background: "#fdf8f0", border: "1px solid rgba(107,63,31,0.2)",
            color: "#6b3f1f", fontSize: "18px", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          ←
        </button>
        <span style={{ color: "#5c4433", fontSize: "13px" }}>
          {active + 1} / {kataAkhir.length}
        </span>
        <button
          onClick={() => setActive((prev) => (prev + 1) % kataAkhir.length)}
          style={{
            width: "40px", height: "40px", borderRadius: "50%",
            background: "#fdf8f0", border: "1px solid rgba(107,63,31,0.2)",
            color: "#6b3f1f", fontSize: "18px", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div style={{
        display: "flex", justifyContent: "center",
        gap: "6px", flexWrap: "wrap",
        maxWidth: "300px", margin: "0 auto 1.5rem",
      }}>
        {kataAkhir.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? "20px" : "8px",
              height: "8px", borderRadius: "99px",
              background: i === active ? "#6b3f1f" : "#d4c4a8",
              border: "none", cursor: "pointer", padding: 0,
              transition: "all 0.25s",
            }}
          />
        ))}
      </div>

      {/* Grid nama */}
      <div style={{
        maxWidth: "600px", margin: "0 auto",
        display: "flex", flexWrap: "wrap",
        gap: "8px", justifyContent: "center",
      }}>
        {kataAkhir.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: "5px 14px", borderRadius: "20px",
              border: "1px solid rgba(107,63,31,0.2)",
              background: i === active ? "#6b3f1f" : "#fdf8f0",
              color: i === active ? "#fdf8f0" : "#7a6248",
              fontSize: "12px", cursor: "pointer",
              transition: "all 0.2s",
              fontWeight: i === active ? 700 : 400,
            }}
          >
            {s.nama}
          </button>
        ))}
      </div>
    </section>
  );
}