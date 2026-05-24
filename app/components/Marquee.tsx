export default function Marquee() {
  const items = Array.from({ length: 16 });

  return (
    <div
      style={{
        borderTop: "1px solid #2C1A0E",
        borderBottom: "1px solid #2C1A0E",
        padding: "20px 0",
        background: "#2C1A0E",
        overflow: "hidden",
      }}
    >
      <div className="marquee-inner">
        {items.map((_, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 28,
              paddingRight: 28,
              fontFamily: "var(--font-poppins)",
              fontWeight: 700,
              fontSize: 22,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#dfc194" }}>DELICIOUS</span>
            <span style={{ color: "#f7ebd1" }}>MENU</span>
            <span style={{ color: "#dfc194", fontSize: "0.35em" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
