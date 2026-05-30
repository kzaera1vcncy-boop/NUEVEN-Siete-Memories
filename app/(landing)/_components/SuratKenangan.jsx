"use client";

import { useState } from "react";

const COLORS = {
  bg: "#c8b99a",           // warna utama seperti screenshot
  bgSection: "#c8b99a",    // background section sama persis
  bgCard: "#bfaf93",       // sedikit lebih gelap untuk kartu
  accent: "#6b3f1f",
  accentMid: "#7a4a22",
  accentLight: "#d4c4a8",
  text: "#2c1f0e",
  textMuted: "#5c4433",
  border: "rgba(107,63,31,0.18)",
  envelopeBody: "#d4b896",
  envelopeFlap: "#b8956a",
  envelopeShadow: "#a07850",
  paper: "#fdf8f0",
};

const letters = [
  {
    id: "gyc",
    to: "GYC Team",
    sub: "To my dear GYC Team",
    emoji: "🎨",
    content: `Teman-teman GYC,

Tidak terasa perjalanan kita di turnamen Free Fire ini sudah sampai di ujung cerita.

Dari awal kita membentuk tim, latihan bareng, sampai ikut turnamen sebagai satu squad, semuanya jadi pengalaman yang nggak akan aku lupa.

Di GYC, kita bukan cuma sekadar tim game. Kita belajar kerja sama, komunikasi, dan saling percaya satu sama lain di setiap match.

Ada momen menang yang bikin senang, ada juga momen kalah yang bikin kita belajar untuk bangkit lagi.
Semua itu jadi bagian dari perjalanan yang berharga.

Sekarang karena kita sudah mau lulus, mungkin jalan kita akan mulai berbeda. Tapi aku berharap GYC tetap jadi cerita yang bisa kita kenang—tentang perjuangan, kekompakan, dan semangat kita sebagai pelajar yang pernah satu tim.

Terima kasih untuk semua waktu, usaha, dan kebersamaan kalian.

Semoga di luar nanti kita tetap bisa sukses di jalan masing-masing, entah di game, sekolah, atau kehidupan nyata.
Sampai ketemu lagi di lain kesempatan. GYC akan selalu jadi bagian dari perjalanan kita.

Dengan penuh rasa sayang,
Kelas IX-7 💛`,
  },
  {
    id: "sajo",
    to: "Sajoboys",
    sub: "To my dear Sajoboys",
    emoji: "⚡",
    content: `Teman-teman SajoBoys,

Tidak terasa perjalanan kita sebagai satu kelompok sudah sampai di titik ini. Dari awal terbentuk setelah Sajojo tampil di panggung, sampai kita bisa jadi satu tim yang solid, semua itu bukan hal yang kecil buat kita.

Kalian bukan cuma teman satu panggung, tapi juga bagian dari cerita masa sekolah yang akan selalu aku ingat.

Banyak momen yang mungkin terlihat sederhana—latihan bareng, ketawa di sela capek, sampai deg-degan sebelum tampil—tapi justru itu yang bikin semuanya berharga. Kita pernah satu irama, satu tujuan, dan satu panggung yang sama.

Karena aku sudah mau lulus, mungkin kita bakal mulai jalan di arah masing-masing.

Tapi aku harap SajoBoys nggak berhenti cuma jadi nama. Semoga tetap jadi simbol kebersamaan, kekompakan, dan kerja keras yang pernah kita bangun bareng.

Kalau nanti kita ketemu lagi, entah kapan dan di mana, semoga kita masih bisa saling sapa dengan bangga karena pernah ada di satu perjalanan yang sama.

Terima kasih untuk semua cerita, tawa, dan usaha kalian. Kalian keren, dan aku bersyukur pernah jadi bagian dari SajoBoys.
Sampai ketemu di versi kita masing-masing di masa depan.

Sampai jumpa lagi di puncak kesuksesan!
Kelas IX-7 💛`,
  },
  {
    id: "everyone",
    to: "Everyone",
    sub: "To my dear Everyone",
    emoji: "🌟",
    content: `Untuk semua orang yang pernah menjadi bagian dari IX-7,

Tiga tahun bukanlah waktu yang sebentar, tapi rasanya seperti baru kemarin kita pertama kali duduk di bangku yang sama. Kita tertawa bersama, berjuang bersama, bahkan menangis bersama.

Setiap sudut kelas ini menyimpan kenangan yang tidak akan pernah bisa tergantikan. Setiap nama yang terukir di hati kami adalah bagian dari cerita yang akan terus kami kisahkan.

Perjalanan kita mungkin akan berbeda setelah ini, tapi satu hal yang pasti — kita pernah menjadi satu. Kelas IX-7. Keluarga kita.

Terima kasih sudah menjadi bagian dari hidup kami.
Dengan cinta yang tak terhingga,
Kelas IX-7 💛`,
  },
];

function EnvelopeCard({ letter, onOpen }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer",
      }}
      onClick={onOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          position: "relative",
          width: "120px",
          height: "85px",
          transform: hover ? "translateY(-4px) scale(1.04)" : "translateY(0) scale(1)",
          transition: "transform 0.3s ease",
        }}
      >
        <div style={{
          position: "absolute", inset: 0,
          background: COLORS.envelopeBody,
          borderRadius: "6px",
          border: `1px solid ${COLORS.envelopeShadow}`,
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0,
          width: 0, height: 0, borderStyle: "solid",
          borderWidth: "40px 60px 0 0",
          borderColor: `${COLORS.envelopeShadow} transparent transparent transparent`,
          borderBottomLeftRadius: "6px",
        }} />
        <div style={{
          position: "absolute", bottom: 0, right: 0,
          width: 0, height: 0, borderStyle: "solid",
          borderWidth: "40px 0 0 60px",
          borderColor: `transparent transparent transparent ${COLORS.envelopeShadow}`,
          borderBottomRightRadius: "6px",
        }} />
        <div style={{
          position: "absolute", top: 0, left: 0,
          width: 0, height: 0, borderStyle: "solid",
          borderWidth: "42px 60px 0 60px",
          borderColor: `${COLORS.envelopeFlap} transparent transparent transparent`,
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "24px", height: "24px",
          background: COLORS.accent, borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "11px", color: COLORS.accentLight, fontWeight: 700,
          zIndex: 10, border: `2px solid ${COLORS.accentLight}`,
        }}>
          IX
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <p style={{
          color: COLORS.text, fontWeight: 700, fontSize: "14px",
          margin: "0 0 2px", fontFamily: "'Georgia', serif",
        }}>
          {letter.to}
        </p>
        <p style={{ color: COLORS.textMuted, fontSize: "11px", margin: 0, fontStyle: "italic" }}>
          {letter.sub}
        </p>
      </div>

      <span style={{
        fontSize: "11px", color: COLORS.accent,
        background: "rgba(107,63,31,0.12)",
        padding: "3px 10px", borderRadius: "20px",
        border: `1px solid ${COLORS.border}`,
      }}>
        Klik untuk membuka
      </span>
    </div>
  );
}

function LetterModal({ letter, onClose }) {
  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(44,31,14,0.7)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem", backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: COLORS.paper,
          borderRadius: "12px",
          maxWidth: "480px", width: "100%",
          maxHeight: "80vh", overflow: "auto",
          padding: "2rem", position: "relative",
          border: `1px solid ${COLORS.border}`,
          boxShadow: "0 20px 60px rgba(44,31,14,0.4)",
          animation: "popIn 0.3s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{
          textAlign: "center", marginBottom: "1.5rem",
          paddingBottom: "1rem", borderBottom: `1px dashed ${COLORS.border}`,
        }}>
          <div style={{
            width: "48px", height: "48px", background: COLORS.accent,
            borderRadius: "50%", display: "flex", alignItems: "center",
            justifyContent: "center", margin: "0 auto 10px", fontSize: "20px",
          }}>
            {letter.emoji}
          </div>
          <p style={{ color: COLORS.textMuted, fontSize: "12px", margin: "0 0 4px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Surat dari
          </p>
          <h3 style={{
            color: COLORS.text, fontSize: "20px", fontWeight: 700,
            margin: 0, fontFamily: "'Georgia', serif",
          }}>
            Kelas IX-7
          </h3>
          <p style={{ color: COLORS.accentMid, fontSize: "13px", margin: "4px 0 0", fontStyle: "italic" }}>
            {letter.sub}
          </p>
        </div>

        <div style={{
          color: COLORS.text, fontSize: "14px", lineHeight: 1.9,
          whiteSpace: "pre-line", fontFamily: "'Georgia', serif",
        }}>
          {letter.content}
        </div>

        <button
          onClick={onClose}
          style={{
            marginTop: "1.5rem", width: "100%", padding: "10px",
            background: COLORS.accent, color: COLORS.accentLight,
            border: "none", borderRadius: "8px", fontSize: "14px",
            fontWeight: 600, cursor: "pointer", transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
        >
          Tutup Surat
        </button>
      </div>
    </div>
  );
}

export default function SuratKenangan() {
  const [openLetter, setOpenLetter] = useState(null);

  return (
    <>
      <section
        id="surat"
        style={{ background: COLORS.bgSection, padding: "4rem 1.5rem", textAlign: "center" }}
      >
        <p style={{
          color: COLORS.textMuted, fontSize: "12px",
          letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px",
        }}>
          Pesan & Kenangan
        </p>
        <h2 style={{
          color: COLORS.text, fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
          fontWeight: 800, margin: "0 0 0.5rem", fontFamily: "'Georgia', serif",
        }}>
          Surat dari IX-7
        </h2>
        <p style={{ color: COLORS.textMuted, fontSize: "14px", margin: "0 0 3rem" }}>
          Klik amplop untuk membaca surat kami
        </p>

        <div style={{
          display: "flex", justifyContent: "center",
          gap: "2rem", flexWrap: "wrap", marginBottom: "4rem",
        }}>
          {letters.map((letter) => (
            <EnvelopeCard key={letter.id} letter={letter} onOpen={() => setOpenLetter(letter)} />
          ))}
        </div>

        <div style={{
          width: "60px", height: "2px",
          background: COLORS.accent, margin: "0 auto 3rem", borderRadius: "2px",
        }} />

        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{
            color: COLORS.textMuted, fontSize: "12px",
            letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px",
          }}>
            Pesan Kami
          </p>
          <h3 style={{
            color: COLORS.text, fontSize: "22px", fontWeight: 800,
            margin: "0 0 1.5rem", fontFamily: "'Georgia', serif",
          }}>
            Pesan IX-7
          </h3>

          <div style={{
            background: COLORS.paper,
            border: `1px solid ${COLORS.border}`,
            borderRadius: "12px", padding: "2rem",
            textAlign: "left", position: "relative",
            boxShadow: "0 4px 20px rgba(44,31,14,0.1)",
          }}>
            <span style={{
              position: "absolute", top: "-16px", left: "20px",
              fontSize: "60px", color: COLORS.accent,
              fontFamily: "'Georgia', serif", lineHeight: 1,
            }}>
              "
            </span>

            <p style={{
              color: COLORS.text, fontSize: "15px", lineHeight: 1.9,
              margin: "0 0 1rem", fontFamily: "'Georgia', serif", fontStyle: "italic",
            }}>
              IX-7 bukan sekadar nama kelas. Ini adalah rumah kedua kami, tempat di mana tawa dan air mata bercampur menjadi kenangan yang paling indah. Tiga tahun yang singkat, tapi cukup untuk meninggalkan jejak yang akan kami bawa seumur hidup.
            </p>

            <p style={{
              color: COLORS.text, fontSize: "15px", lineHeight: 1.9,
              margin: "0 0 1rem", fontFamily: "'Georgia', serif", fontStyle: "italic",
            }}>
              Kepada siapapun yang membaca ini — terima kasih sudah menjadi bagian dari cerita kami. Kalian bukan sekadar teman sekelas, kalian adalah keluarga yang kami pilih.
            </p>

            <p style={{
              color: COLORS.text, fontSize: "15px", lineHeight: 1.9,
              margin: 0, fontFamily: "'Georgia', serif", fontStyle: "italic",
            }}>
              Sampai kita bertemu lagi — di puncak impian masing-masing.
            </p>

            <div style={{
              marginTop: "1.5rem", paddingTop: "1rem",
              borderTop: `1px dashed ${COLORS.border}`, textAlign: "right",
            }}>
              <p style={{
                color: COLORS.accentMid, fontSize: "14px", margin: 0,
                fontStyle: "italic", fontFamily: "'Georgia', serif",
              }}>
                — Kelas IX-7, SMPN 4 Cibitung, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {openLetter && (
        <LetterModal letter={openLetter} onClose={() => setOpenLetter(null)} />
      )}

      <style>{`
        @keyframes popIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}