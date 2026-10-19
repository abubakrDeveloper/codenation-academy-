'use client';

import React from 'react';
import { Terminal, Cpu, Network, Code } from 'lucide-react';

export function PartnerLogoBadge({
  name = '',
  logoType = 'terminal',
  accentColor = '#3B40F8',
  size = 'md',
}) {
  const sizeClasses = {
    sm: 'w-10 h-10 rounded-xl text-xs',
    md: 'w-14 h-14 rounded-2xl text-sm',
    lg: 'w-16 h-16 rounded-2xl text-base',
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-8 h-8',
  };

  return (
    <div
      className={`relative flex items-center justify-center shrink-0 font-mono font-bold shadow-sm transition-transform duration-300 group-hover:scale-105 ${sizeClasses[size] || sizeClasses.md}`}
      style={{
        backgroundColor: `${accentColor}18`,
        borderColor: `${accentColor}40`,
        borderWidth: '1.5px',
        color: accentColor,
      }}
      title={name}
    >
      {/* Dynamic tech logo representation based on type */}
      {logoType === 'hexagon' && (
        <svg
          viewBox="0 0 100 100"
          className={iconSizes[size] || iconSizes.md}
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M50 10L85 30V70L50 90L15 70V30L50 10Z"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="50" r="14" fill="currentColor" />
        </svg>
      )}

      {logoType === 'terminal' && (
        <Terminal className={iconSizes[size] || iconSizes.md} />
      )}

      {logoType === 'network' && (
        <Network className={iconSizes[size] || iconSizes.md} />
      )}

      {logoType === 'cpu' && (
        <Cpu className={iconSizes[size] || iconSizes.md} />
      )}

      {logoType === 'code' && (
        <Code className={iconSizes[size] || iconSizes.md} />
      )}

      {/* Tiny corner node badge */}
      <span
        className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full ring-2 ring-white dark:ring-[#0B0F19]"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
}
