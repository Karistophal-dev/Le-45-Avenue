export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "24px 10vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background:
          "linear-gradient(to bottom, rgba(17,17,17,0.98) 0%, rgba(17,17,17,0.6) 70%, transparent 100%)",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "var(--font-pacifico)",
          fontSize: 22,
          color: "#F0EBE3",
          textDecoration: "none",
        }}
      >
        Pacy Palace
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
          href="tel:0232342370"
          style={{
            fontFamily: "var(--font-poppins)",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.08em",
            color: "#111111",
            textDecoration: "none",
            background: "#E8671A",
            padding: "8px 16px",
            display: "inline-block",
            lineHeight: 1,
          }}
        >
          02 32 34 23 70
        </a>
      </div>
    </nav>
  );
}
