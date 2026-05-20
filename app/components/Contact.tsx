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
              14 Rue Édouard Isambard
              <br />
              27120 Pacy-sur-Eure
            </span>
          </p>
        </address>

        <a
          href="tel:0232342370"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-poppins)",
            fontWeight: 700,
            fontSize: "clamp(40px, 7.5vw, 104px)",
            color: "#E8671A",
            textDecoration: "none",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          02 32 34 23 70
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
          src="https://maps.google.com/maps?q=Pacy+Palace+14+Rue+Edouard+Isambard+27120+Pacy-sur-Eure&output=embed"
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
          title="Localisation Pacy Palace"
        />
      </div>

      {/* Maps link */}
      <div style={{ padding: "28px 10vw" }}>
        <a
          href="https://maps.google.com/?q=Pacy+Palace+14+Rue+Edouard+Isambard+27120+Pacy-sur-Eure"
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
            borderBottom: "1px solid #E8671A",
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
