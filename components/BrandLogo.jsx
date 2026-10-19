'use client';

import React from 'react';

export function BrandLogo({
  className = '',
  size = 36,
  showText = true,
  onTripleClick,
}) {
  const [clickCount, setClickCount] = React.useState(0);
  const clickTimeoutRef = React.useRef(null);

  const handleClick = () => {
    setClickCount((prev) => {
      const next = prev + 1;
      if (next >= 3) {
        if (onTripleClick) onTripleClick();
        return 0;
      }
      return next;
    });

    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      setClickCount(0);
    }, 600);
  };

  return (
    <div
      onClick={handleClick}
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
      title="Codenation Academy (Admin: 3x click)"
    >
      <div
        className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-[#3B40F8] drop-shadow-[0_0_12px_rgba(59,64,248,0.35)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexagonal outer nodes matching user icon geometry */}
          <path
            d="M50 8L86.37 29V71L50 92L13.63 71V29L50 8Z"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinejoin="round"
            className="opacity-90"
          />
          {/* Inner futuristic interconnected circuitry */}
          <path
            d="M50 24L74 38V62L50 76L26 62V38L50 24Z"
            stroke="currentColor"
            strokeWidth="5"
            strokeDasharray="4 2"
            className="opacity-50"
          />
          {/* Core tech prism */}
          <polygon
            points="50,38 64,46 64,54 50,62 36,54 36,46"
            fill="currentColor"
          />
          <circle cx="50" cy="50" r="3.5" fill="#FFFFFF" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-[20px] tracking-tight leading-tight text-slate-900 dark:text-white group-hover:text-[#3B40F8] transition-colors">
            Codenation
          </span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400 -mt-0.5 font-semibold">
            Academy
          </span>
        </div>
      )}
    </div>
  );
}
