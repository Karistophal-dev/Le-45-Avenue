"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

const ALL_SLOTS = [
  [{ open: "11:00", close: "14:50" }, { open: "18:00", close: "22:30" }],
  [{ open: "11:00", close: "14:30" }, { open: "18:00", close: "22:30" }],
  [{ open: "11:00", close: "14:30" }, { open: "18:00", close: "22:30" }],
  [{ open: "11:00", close: "14:30" }, { open: "18:00", close: "22:35" }],
  [{ open: "11:00", close: "14:30" }, { open: "18:00", close: "22:30" }],
  [{ open: "11:00", close: "14:30" }, { open: "18:00", close: "22:30" }],
  [{ open: "11:00", close: "14:30" }, { open: "18:00", close: "22:30" }],
];

function parseMin(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function getStatus() {
  const now = new Date();
  const jsDay = now.getDay();
  const dayIdx = jsDay === 0 ? 6 : jsDay - 1;
  const mins = now.getHours() * 60 + now.getMinutes();
  const slots = ALL_SLOTS[dayIdx];

  for (const slot of slots) {
    if (mins >= parseMin(slot.open) && mins < parseMin(slot.close)) {
      return { open: true, next: `Ferme à ${slot.close}` };
    }
  }

  const upcoming =
    slots.find((s) => parseMin(s.open) > mins) ??
    ALL_SLOTS[(dayIdx + 1) % 7][0];
  return { open: false, next: `Ouvre à ${upcoming.open}` };
}

export default function Hero() {
  const [status, setStatus] = useState<{ open: boolean; next: string } | null>(null);

  useEffect(() => {
    setStatus(getStatus());
    const id = setInterval(() => setStatus(getStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="hero-section"
      style={{ position: "relative", background: "#111111", overflow: "hidden", marginTop: 24 }}
    >
      {/* Texte */}
      <div className="hero-content">
        <h1
          className="hero-title"
          style={{
            fontFamily: "var(--font-bebas)",
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
            userSelect: "none",
          }}
        >
          <span style={{ color: "#F0EBE3", display: "block" }}>Le 45</span>
          <span style={{ color: "#C8873A", display: "block" }}>Avenue</span>
        </h1>

        <p
          className="hero-mt"
          style={{
            fontFamily: "var(--font-poppins)",
            fontWeight: 400,
            fontSize: 13,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#F5C842",
          }}
        >
          Kebabs · Burgers · Tacos · Vernon
        </p>

        {status && (
          <div
            className="hero-mt"
            style={{ display: "flex", width: "fit-content", alignItems: "center", gap: 12 }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: status.open ? "#C8873A" : "#777",
                flexShrink: 0,
              }}
              className={status.open ? "pulse-dot" : ""}
            />
            <span
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: status.open ? "#F0EBE3" : "#777",
              }}
            >
              {status.open ? "Ouvert" : "Fermé"}
            </span>
            <span
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 400,
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "#777",
              }}
            >
              · {status.next}
            </span>
          </div>
        )}

        <div className="hero-ctas">
          <a
            href="https://www.ubereats.com/fr/store/le-45-avenue/y2VF8y85QWeChcLC-lcE6w"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              fontFamily: "var(--font-poppins)",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#111111",
              textDecoration: "none",
              background: "#C8873A",
              padding: "16px 28px",
              lineHeight: 1,
            }}
          >
            Commander en ligne
            <ArrowRight size={13} strokeWidth={2.5} aria-hidden="true" />
          </a>

          <a
            href="tel:0743338128"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontFamily: "var(--font-poppins)",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#F0EBE3",
              textDecoration: "none",
              border: "1px solid #2A2A2A",
              padding: "16px 24px",
              lineHeight: 1,
            }}
          >
            <Phone size={12} strokeWidth={2.5} aria-hidden="true" />
            07 43 33 81 28
          </a>
        </div>

        <a
          href="#menu"
          className="hero-secondary"
          style={{
            fontFamily: "var(--font-poppins)",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#777",
            textDecoration: "none",
          }}
        >
          voir la carte
          <ArrowRight size={13} strokeWidth={2.5} aria-hidden="true" />
        </a>
      </div>

      {/* Image — sous le texte sur mobile, absolue à droite sur desktop */}
      <div className="hero-img-wrap">
        <Image
          src="/food/burger%20hero.png"
          alt="Burger maison Le 45 Avenue — sauce, fromage fondu"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className="hero-img-grad-lr" />
        <div className="hero-img-grad-tb" />
        <p
          style={{
            position: "absolute",
            bottom: 14,
            right: 16,
            zIndex: 3,
            fontFamily: "var(--font-poppins)",
            fontWeight: 400,
            fontSize: 9,
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.28)",
            pointerEvents: "none",
          }}
        >
          Images non contractuelles
        </p>
      </div>
    </section>
  );
}
