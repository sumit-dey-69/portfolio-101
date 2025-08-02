"use client";

import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

const NUM_TRAILS = 50;
const STROKE_COLOR = "red";
const STROKE_WIDTH = 60;

type Point = { x: number; y: number };

export default function TrailEffect() {
  const mouse = useRef<Point>({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 40, stiffness: 300 });
  const springY = useSpring(y, { damping: 40, stiffness: 300 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      mouse.current = { x: centerX, y: centerY };
      x.set(centerX);
      y.set(centerY);
      setReady(true);
    }

    const handleMove = (e: PointerEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [x, y]);

  const [trails, setTrails] = useState<Point[]>([]);

  useEffect(() => {
    if (!ready) return;

    let frameId: number;

    const update = () => {
      setTrails((prev) => {
        const next = [{ x: springX.get(), y: springY.get() }, ...prev];
        return next.slice(0, NUM_TRAILS);
      });

      frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [springX, springY, ready]);

  return (
    <svg
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {trails.map((point, i) => (
        <line
          key={i}
          x1={point.x}
          y1={point.y}
          x2={i > 0 ? trails[i - 1]?.x : point.x}
          y2={i > 0 ? trails[i - 1]?.y : point.y}
          stroke={STROKE_COLOR}
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
          opacity={(NUM_TRAILS - i) / NUM_TRAILS}
        />
      ))}
    </svg>
  );
}
