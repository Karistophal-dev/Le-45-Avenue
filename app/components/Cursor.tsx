"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element;
      if (t.closest("a, button")) {
        el.style.transform = "translate(-50%, -50%) scale(3)";
        el.style.opacity = "0.5";
      } else {
        el.style.transform = "translate(-50%, -50%) scale(1)";
        el.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      ref={ref}
      style={{
        position: "fixed",
        width: 10,
        height: 10,
        background: "#C8873A",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        left: -20,
        top: -20,
        transform: "translate(-50%, -50%) scale(1)",
        transition: "transform 0.1s ease, opacity 0.1s ease",
      }}
    />
  );
}
