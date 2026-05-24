import Image from "next/image";

export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "clamp(10px, 2vw, 16px) clamp(10px, 10vw, 10vw)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#2C1A0E",
        borderBottom: "1px solid rgba(223, 193, 148, 0.25)",
      }}
    >
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
        <Image src="/logo.jpg" alt="Le 45 Avenue" width={64} height={64} style={{ objectFit: "cover", borderRadius: "50%" }} />
        <span style={{ fontFamily: "var(--font-bebas)", fontSize: 26, color: "#F0EBE3", letterSpacing: "0.05em" }}>
          Le 45 Avenue
        </span>
      </a>

      <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 36 }}>
        {[
          { label: "Menu", href: "#menu" },
          { label: "Horaires", href: "#horaires" },
          { label: "Nous trouver", href: "#nous-trouver" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{
              fontFamily: "var(--font-poppins)",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#F0EBE3",
              textDecoration: "none",
              opacity: 0.75,
            }}
          >
            {label}
          </a>
        ))}

        <a
          href="tel:0743338128"
          style={{
            fontFamily: "var(--font-poppins)",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.08em",
            color: "#111111",
            textDecoration: "none",
            background: "#C8873A",
            padding: "8px 16px",
            display: "inline-block",
            lineHeight: 1,
          }}
        >
          07 43 33 81 28
        </a>
      </div>
    </nav>
  );
}
