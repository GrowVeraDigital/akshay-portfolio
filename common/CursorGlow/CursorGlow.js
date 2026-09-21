"use client";

import { useEffect, useRef } from "react";
import "./CursorGlow.scss";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const glow = ref.current;
    const handlePointer = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    window.addEventListener("pointermove", handlePointer);
    return () => window.removeEventListener("pointermove", handlePointer);
  }, []);

  return <div ref={ref} className="cursor-glow"></div>;
}
