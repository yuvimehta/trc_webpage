"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  decimals?: number;
}

export default function StatCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
  decimals = 0,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.round(count);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-mono text-foreground mb-2 tracking-tighter">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="text-[11px] text-muted-dark font-mono uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}
