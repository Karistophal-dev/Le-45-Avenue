"use client";

import { useEffect, useState } from "react";

const SCHEDULE = [
  { day: "Lundi", slots: null },
  {
    day: "Mardi",
    slots: [
      { open: "11:00", close: "15:00" },
      { open: "18:00", close: "23:00" },
    ],
  },
  {
    day: "Mercredi",
    slots: [
      { open: "11:00", close: "15:00" },
      { open: "18:00", close: "23:00" },
    ],
  },
  {
    day: "Jeudi",
    slots: [
      { open: "11:00", close: "15:00" },
      { open: "18:00", close: "23:00" },
    ],
  },
  {
    day: "Vendredi",
    slots: [
      { open: "11:00", close: "15:00" },
      { open: "18:00", close: "23:00" },
    ],
  },
  {
    day: "Samedi",
    slots: [
      { open: "11:00", close: "15:00" },
      { open: "18:00", close: "23:00" },
    ],
  },
  {
    day: "Dimanche",
    slots: [
      { open: "11:00", close: "15:00" },
      { open: "18:00", close: "23:00" },
    ],
  },
];

function parseTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function getStatus() {
  const now = new Date();
  const jsDay = now.getDay(); // 0 = Sunday
  const dayIndex = jsDay === 0 ? 6 : jsDay - 1; // Mon=0 … Sun=6

  const mins = now.getHours() * 60 + now.getMinutes();
  const day = SCHEDULE[dayIndex];
  const open = day.slots?.some(
    (s) => mins >= parseTime(s.open) && mins < parseTime(s.close)
  ) ?? false;

  return { dayIndex, open };
}

export default function Horaires() {
  const [status, setStatus] = useState<{ dayIndex: number; open: boolean } | null>(null);

  useEffect(() => {
    setStatus(getStatus());
    const id = setInterval(() => setStatus(getStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="horaires"
      style={{
        background: "#0D0D0D",
        padding: "120px 10vw",
        marginTop: -2,
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 72,
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(48px, 8vw, 112px)",
            color: "#F0EBE3",
            lineHeight: 1,
          }}
        >
          Horaires
        </h2>

        {status && (
          <div
            style={{
              fontFamily: "var(--font-poppins)",
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: status.open ? "#C8873A" : "#777",
              border: `1px solid ${status.open ? "#C8873A" : "#2A2A2A"}`,
              padding: "8px 20px",
            }}
          >
            {status.open ? "● Ouvert" : "○ Fermé"}
          </div>
        )}
      </div>

      {/* Setlist */}
      <div>
        {SCHEDULE.map((item, i) => {
          const isToday = status?.dayIndex === i;
          const s1 = item.slots?.[0];
          const s2 = item.slots?.[1];

          return (
            <div
              key={item.day}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "22px 0",
                borderBottom: i < SCHEDULE.length - 1 ? "1px solid #1A1A1A" : "none",
              }}
            >
              {/* Day name */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontWeight: isToday ? 700 : 400,
                    fontSize: "clamp(18px, 2.5vw, 30px)",
                    color: isToday ? "#F0EBE3" : "#777",
                    letterSpacing: isToday ? "0.01em" : "0",
                  }}
                >
                  {item.day}
                </span>
              </div>

              {/* Time slots */}
              <span
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 700,
                  fontSize: "clamp(13px, 1.8vw, 22px)",
                  color: isToday ? "#F5C842" : "#666",
                  letterSpacing: "0.04em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {item.slots == null ? (
                  "Fermé"
                ) : (
                  <>
                    {s1!.open}–{s1!.close}
                    <span style={{ color: "#777", margin: "0 12px" }}>/</span>
                    {s2!.open}–{s2!.close}
                  </>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
