import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number; // in milliseconds
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  delay?: number;
  retriggerOnHover?: boolean;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  start = 0,
  duration = 1800,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  delay = 0,
  retriggerOnHover = true,
}) => {
  const [value, setValue] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const startAnimation = () => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const startTime = performance.now();
    const startVal = start;
    const endVal = end;
    const totalDuration = duration;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);

      // Ease-out cubic formula for snappy natural deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = startVal + (endVal - startVal) * easeProgress;

      setValue(current);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(tick);
      } else {
        setValue(endVal);
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            setTimeout(() => {
              startAnimation();
            }, delay);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(el);

    // Immediate viewport check in case observer doesn't fire immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0 && !hasStarted) {
      setHasStarted(true);
      setTimeout(() => {
        startAnimation();
      }, delay);
    }

    return () => {
      observer.unobserve(el);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hasStarted, delay]);

  // When end value changes (e.g. dynamic quiz score update), trigger animation
  useEffect(() => {
    if (hasStarted) {
      startAnimation();
    }
  }, [end]);

  const handleMouseEnter = () => {
    if (retriggerOnHover) {
      startAnimation();
    }
  };

  const formattedValue = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <span
      ref={elementRef}
      onMouseEnter={handleMouseEnter}
      onClick={() => startAnimation()}
      className={`inline-flex items-center select-none cursor-pointer transition-transform hover:scale-105 active:scale-95 ${className}`}
      title="Click or hover to re-animate"
    >
      {prefix}
      <span>{formattedValue}</span>
      {suffix}
    </span>
  );
};

interface DualCountUpProps {
  start1?: number;
  end1: number;
  start2?: number;
  end2: number;
  separator?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

export const DualCountUp: React.FC<DualCountUpProps> = ({
  start1 = 0,
  end1,
  start2 = 0,
  end2,
  separator = '–',
  suffix = '%',
  className = '',
  duration = 1800,
}) => {
  const [val1, setVal1] = useState(start1);
  const [val2, setVal2] = useState(start2);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  const startAnimation = () => {
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setVal1(Math.round(start1 + (end1 - start1) * easeProgress));
      setVal2(Math.round(start2 + (end2 - start2) * easeProgress));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setVal1(end1);
        setVal2(end2);
      }
    };

    requestAnimationFrame(tick);
  };

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            startAnimation();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(el);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0 && !hasStarted) {
      setHasStarted(true);
      startAnimation();
    }

    return () => {
      observer.unobserve(el);
    };
  }, [hasStarted]);

  return (
    <span
      ref={elementRef}
      onMouseEnter={startAnimation}
      onClick={startAnimation}
      className={`inline-flex items-center select-none cursor-pointer transition-transform hover:scale-105 active:scale-95 ${className}`}
      title="Click or hover to re-animate"
    >
      {val1}
      {separator}
      {val2}
      {suffix}
    </span>
  );
};
