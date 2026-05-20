export default function Footer() {
  return (
    <footer
      style={{
        background: "#0D0D0D",
        borderTop: "1px solid #1A1A1A",
        padding: "64px 0 48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-pacifico)",
          fontSize: 36,
          color: "#F0EBE3",
          letterSpacing: "0.01em",
        }}
      >
        Pacy Palace
      </span>

      <p
        style={{
          fontFamily: "var(--font-poppins)",
          fontWeight: 400,
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#777",
        }}
      >
        © {new Date().getFullYear()} Pacy Palace · Pacy-sur-Eure
      </p>
    </footer>
  );
}
