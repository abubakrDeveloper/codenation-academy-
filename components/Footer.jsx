'use client';

import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Key, Lock } from 'lucide-react';

export function Footer({ t, onNavigate, onOpenAdmin }) {
  return (
    <footer className="w-full bg-white dark:bg-[#070A11] border-t border-slate-200 dark:border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo & Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <BrandLogo size={36} onTripleClick={onOpenAdmin} />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 max-w-sm leading-relaxed font-normal">
              {t?.footerDesc}
            </p>
            <div
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-2 font-mono text-xs text-slate-700 dark:text-slate-400 hover:text-[#3B40F8] transition-colors cursor-pointer w-fit font-medium"
              title={t?.adminTooltip}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t?.footerStatus}</span>
              <Lock className="w-3 h-3 opacity-50 ml-1" />
            </div>
          </div>

          {/* Column 1: Portal */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-300">
              {t?.footerColPortal}
            </h4>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              <button
                onClick={() => onNavigate('home')}
                className="text-left hover:text-[#3B40F8] dark:hover:text-white transition-colors cursor-pointer"
              >
                {t?.navHome}
              </button>
              <button
                onClick={() => onNavigate('partners')}
                className="text-left hover:text-[#3B40F8] dark:hover:text-white transition-colors cursor-pointer"
              >
                {t?.navPartners}
              </button>
              <button
                onClick={() => onNavigate('model')}
                className="text-left hover:text-[#3B40F8] dark:hover:text-white transition-colors cursor-pointer"
              >
                {t?.navModel}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-left hover:text-[#3B40F8] dark:hover:text-white transition-colors cursor-pointer"
              >
                {t?.navContact}
              </button>
            </div>
          </div>

          {/* Column 2: Tracks */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-300">
              {t?.footerColTracks}
            </h4>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">Fullstack Web</span>
              <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">DevOps & Cloud</span>
              <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">AI Engineering</span>
              <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">Cybersecurity</span>
            </div>
          </div>

          {/* Column 3: Partnership & Legal */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-300">
              {t?.footerColPartnership}
            </h4>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              <button
                onClick={() => onNavigate('partners')}
                className="text-left hover:text-[#3B40F8] dark:hover:text-white transition-colors cursor-pointer"
              >
                {t?.btnBecomePartner}
              </button>
              <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">{t?.footerPrivacy}</span>
              <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">{t?.footerTerms}</span>
              <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">{t?.footerSecurity}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Admin shortcut reminder */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
          <p>{t?.footerCopyright}</p>
          <div className="flex items-center gap-4">
            <span
              onClick={onOpenAdmin}
              className="hover:text-[#3B40F8] dark:hover:text-white cursor-pointer flex items-center gap-1 font-semibold"
              title="Admin Backdoor (Alt+A)"
            >
              <Key className="w-3.5 h-3.5" />
              <span>Admin: Alt + A</span>
            </span>
            <span>•</span>
            <span>Uzbekistan IT Cluster</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
