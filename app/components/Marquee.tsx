const PHRASES = [
  "Veau braisé à la broche",
  "Burgers faits maison",
  "Tacos fromagés au four",
];

const itemStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 28,
  paddingRight: 28,
  fontFamily: "var(--font-poppins)",
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#F0EBE3",
  whiteSpace: "nowrap",
};

export default function Marquee() {
  return (
    <div
      style={{
        borderTop: "1px solid #1E1E1E",
        borderBottom: "1px solid #1E1E1E",
        padding: "20px 0",
        background: "#111111",
        overflow: "hidden",
      }}
    >
      <div
        className="marquee-inner"
        style={{ animation: "marquee-scroll 24s linear infinite" }}
      >
        {[0, 1].flatMap((copy) =>
          PHRASES.map((phrase) => (
            <span key={`${copy}-${phrase}`} style={itemStyle}>
              {phrase}
              <span style={{ color: "#E8671A", fontSize: "0.7em" }}>◆</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}
