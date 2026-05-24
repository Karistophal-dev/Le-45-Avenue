import { MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="nous-trouver" style={{ background: "#111111" }}>
      {/* Address & phone */}
      <div style={{ padding: "120px 10vw 80px" }}>
        <address
          style={{
            fontStyle: "normal",
            marginBottom: 56,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-poppins)",
              fontWeight: 700,
              fontSize: "clamp(22px, 3.5vw, 48px)",
              color: "#F0EBE3",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              display: "flex",
              alignItems: "center",
              gap: "0.4em",
            }}
          >
            <MapPin size="1.1em" aria-hidden="true" style={{ flexShrink: 0 }} />
            <span>
              45 avenue de Rouen
              <br />
              27200 Vernon
            </span>
          </p>
        </address>

        <a
          href="tel:0743338128"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-poppins)",
            fontWeight: 700,
            fontSize: "clamp(40px, 7.5vw, 104px)",
            color: "#C8873A",
            textDecoration: "none",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          07 43 33 81 28
        </a>

        <a
          href="https://instagram.com/le45avenue"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: 20,
            fontFamily: "var(--font-poppins)",
            fontWeight: 700,
            fontSize: "clamp(14px, 1.8vw, 22px)",
            color: "#777",
            textDecoration: "none",
            letterSpacing: "0.08em",
          }}
        >
          @le45avenue
        </a>
      </div>

      {/* Map — full width, zero border-radius, zero padding */}
      <div
        style={{
          width: "100%",
          height: "clamp(340px, 55vh, 580px)",
          position: "relative",
        }}
      >
        <iframe
          src="https://maps.google.com/maps?q=45+avenue+de+Rouen+27200+Vernon&output=embed"
          width="100%"
          height="100%"
          style={{
            border: 0,
            display: "block",
            filter: "grayscale(0.2) brightness(0.85)",
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation Le 45 Avenue"
          suppressHydrationWarning  
        />
      </div>

      {/* Maps link */}
      <div style={{ padding: "28px 10vw" }}>
        <a
          href="https://maps.google.com/?q=45+avenue+de+Rouen+27200+Vernon"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            fontFamily: "var(--font-poppins)",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#F0EBE3",
            textDecoration: "none",
            borderBottom: "1px solid #C8873A",
            paddingBottom: 5,
          }}
        >
          Ouvrir dans Maps
          <ArrowUpRight size={13} strokeWidth={2.5} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
