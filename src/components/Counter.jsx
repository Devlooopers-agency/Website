import React, { useEffect, useRef, useState } from 'react';

export default function Counter({ to, prefix = '', suffix = '', duration = 1800, decimals = 0 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          // Easing: ease-out cubic
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Number((eased * to).toFixed(decimals)));
          if (p < 1) {
            requestAnimationFrame(tick);
          } else {
            setVal(to);
          }
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.25 });

    io.observe(el);
    return () => io.disconnect();
  }, [to, duration, decimals]);

  return (
    <span ref={ref} className="live-counter-num font-mono tabular-nums">
      {prefix}{decimals > 0 ? val.toFixed(decimals) : val.toLocaleString()}{suffix}
    </span>
  );
}