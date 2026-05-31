"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://osrauamxjazbmwlrzlny.supabase.co",
  "sb_publishable_XOrCIj54qr5YFipcgH46dQ_wR0wKJmk"
);

const COLORS = {
  bg: "#c8b99a",
  card: "#fdf8f0",
  text: "#2c1f0e",
  textMuted: "#7a6248",
  accent: "#6b3f1f",
  accentLight: "#d4c4a8",
  border: "rgba(107,63,31,0.2)",
  input: "#fff8f0",
};

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff / 60000);
  const h = Math.floor(m / 60);
  const d = Math.floor(h / 24);
  if (d > 0) return `${d} hari lalu`;
  if (h > 0) return `${h} jam lalu`;
  if (m > 0) return `${m} menit lalu`;
  return "Baru saja";
}

export default function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Ambil semua pesan dari Supabase
  const fetchEntries = async () => {
    setFetching(true);
    const { data, error } = await supabase
      .from("guestbook")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setEntries(data);
    setFetching(false);
  };

  useEffect(() => {
    fetchEntries();

    // Realtime — pesan baru langsung muncul tanpa refresh
    const channel = supabase
      .channel("guestbook-changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "guestbook" },
        (payload) => {
          setEntries((prev) => [payload.new, ...prev]);
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  const handleSubmit = async () => {
    if (!nama.trim() || !pesan.trim()) {
      setError("Nama dan pesan tidak boleh kosong!");
      return;
    }
    if (pesan.trim().length < 5) {
      setError("Pesan terlalu pendek!");
      return;
    }

    setError("");
    setLoading(true);

    const { error } = await supabase
      .from("guestbook")
      .insert([{ nama: nama.trim(), pesan: pesan.trim() }]);

    setLoading(false);

    if (error) {
      setError("Gagal mengirim pesan. Coba lagi ya!");
    } else {
      setNama("");
      setPesan("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section
      id="guestbook"
      style={{
        background: COLORS.bg,
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      {/* Header */}
      <p style={{
        color: COLORS.textMuted, fontSize: "12px",
        letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px",
      }}>
        Tinggalkan Jejak
      </p>
      <h2 style={{
        color: COLORS.text, fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
        fontWeight: 800, margin: "0 0 0.5rem", fontFamily: "'Georgia', serif",
      }}>
        Buku Tamu IX-7
      </h2>
      <p style={{ color: COLORS.textMuted, fontSize: "14px", margin: "0 0 2.5rem" }}>
        Tinggalkan pesan dan kenangan untuk IX-7 🌟
      </p>

      <div style={{ maxWidth: "560px", margin: "0 auto" }}>

        {/* Form input */}
        <div style={{
          background: COLORS.card,
          border: `1px solid ${COLORS.border}`,
          borderRadius: "16px",
          padding: "1.5rem",
          marginBottom: "1.5rem",
          boxShadow: "0 4px 20px rgba(44,31,14,0.08)",
          textAlign: "left",
        }}>
          <p style={{ color: COLORS.text, fontWeight: 700, fontSize: "15px", margin: "0 0 1rem" }}>
            ✏️ Tulis Pesanmu
          </p>

          <div style={{ marginBottom: "12px" }}>
            <label style={{ color: COLORS.textMuted, fontSize: "12px", letterSpacing: "0.05em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
              Nama
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama kamu..."
              maxLength={50}
              style={{
                width: "100%", padding: "10px 14px",
                background: COLORS.input,
                border: `1px solid ${COLORS.border}`,
                borderRadius: "8px", fontSize: "14px",
                color: COLORS.text, outline: "none",
                boxSizing: "border-box",
                fontFamily: "inherit",
              }}
              onFocus={(e) => e.target.style.borderColor = COLORS.accent}
              onBlur={(e) => e.target.style.borderColor = COLORS.border}
            />
          </div>

          <div style={{ marginBottom: "12px" }}>
            <label style={{ color: COLORS.textMuted, fontSize: "12px", letterSpacing: "0.05em", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
              Pesan
            </label>
            <textarea
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              placeholder="Tulis pesanmu untuk IX-7..."
              maxLength={300}
              rows={4}
              style={{
                width: "100%", padding: "10px 14px",
                background: COLORS.input,
                border: `1px solid ${COLORS.border}`,
                borderRadius: "8px", fontSize: "14px",
                color: COLORS.text, outline: "none",
                boxSizing: "border-box", resize: "vertical",
                fontFamily: "inherit",
              }}
              onFocus={(e) => e.target.style.borderColor = COLORS.accent}
              onBlur={(e) => e.target.style.borderColor = COLORS.border}
            />
            <p style={{ color: COLORS.textMuted, fontSize: "11px", textAlign: "right", margin: "4px 0 0" }}>
              {pesan.length}/300
            </p>
          </div>

          {error && (
            <p style={{ color: "#c0392b", fontSize: "13px", margin: "0 0 12px" }}>
              ⚠️ {error}
            </p>
          )}

          {submitted && (
            <p style={{ color: "#27ae60", fontSize: "13px", margin: "0 0 12px", fontWeight: 600 }}>
              ✅ Pesan berhasil dikirim! Terima kasih 💛
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: "100%", padding: "12px",
              background: loading ? COLORS.accentLight : COLORS.accent,
              color: "#fdf8f0", fontWeight: 700, fontSize: "15px",
              border: "none", borderRadius: "8px", cursor: loading ? "not-allowed" : "pointer",
              transition: "opacity 0.2s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => { if (!loading) e.currentTarget.style.opacity = "0.85"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            {loading ? "Mengirim..." : "Kirim Pesan 💌"}
          </button>
        </div>

        {/* Daftar pesan */}
        <div style={{ textAlign: "left" }}>
          <p style={{
            color: COLORS.textMuted, fontSize: "13px",
            margin: "0 0 1rem", fontWeight: 600,
          }}>
            {fetching ? "Memuat pesan..." : `${entries.length} pesan`}
          </p>

          {!fetching && entries.length === 0 && (
            <div style={{
              background: COLORS.card, border: `1px solid ${COLORS.border}`,
              borderRadius: "12px", padding: "2rem", textAlign: "center",
            }}>
              <p style={{ color: COLORS.textMuted, fontSize: "14px", margin: 0 }}>
                Belum ada pesan. Jadilah yang pertama! 🌟
              </p>
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {entries.map((entry) => (
              <div
                key={entry.id}
                style={{
                  background: COLORS.card,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: "12px",
                  padding: "1rem 1.25rem",
                  boxShadow: "0 2px 8px rgba(44,31,14,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <div style={{
                    width: "36px", height: "36px",
                    background: `linear-gradient(135deg, ${COLORS.accentLight}, ${COLORS.accent})`,
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "15px", fontWeight: 800, color: "#fdf8f0",
                    fontFamily: "'Georgia', serif", flexShrink: 0,
                  }}>
                    {entry.nama[0].toUpperCase()}
                  </div>
                  <div>
                    <p style={{ color: COLORS.text, fontWeight: 700, fontSize: "14px", margin: 0 }}>
                      {entry.nama}
                    </p>
                    <p style={{ color: COLORS.textMuted, fontSize: "11px", margin: 0 }}>
                      {timeAgo(entry.created_at)}
                    </p>
                  </div>
                </div>
                <p style={{
                  color: COLORS.text, fontSize: "14px",
                  lineHeight: 1.7, margin: 0,
                  fontFamily: "'Georgia', serif", fontStyle: "italic",
                }}>
                  &ldquo;{entry.pesan}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}