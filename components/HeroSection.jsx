'use client';

import React from 'react';
import {
  ArrowRight,
  Zap,
  Play,
  Radio,
  Activity,
  Users,
} from 'lucide-react';

export function HeroSection({
  stats,
  t,
  lang,
  onOpenApply,
  onViewPartners,
  onViewModel,
}) {
  return (
    <section className="relative w-full pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#3B40F8]/10 dark:bg-[#3B40F8]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-48 -right-36 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-[#3B40F8]/20 border border-blue-200 dark:border-[#3B40F8]/20 text-[#1917E2] dark:text-[#bfc1ff] w-fit shadow-xs">
              <Zap className="w-3.5 h-3.5 text-[#3B40F8] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wide uppercase">
                {t?.heroBadge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] lg:leading-[1.14] font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t?.heroHeadline1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1917E2] via-[#3B40F8] to-[#6064FF] dark:from-[#bfc1ff] dark:via-[#6064FF] dark:to-[#8E93FF]">
                {t?.heroHeadlineHighlight}
              </span>{' '}
              {t?.heroHeadline2}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
              {t?.heroSub}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onOpenApply}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#3B40F8] hover:bg-[#1917E2] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#3B40F8]/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{t?.heroBtnApply}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewModel}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/90 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-200 font-bold text-sm sm:text-base border border-slate-300/80 dark:border-slate-800 transition-all shadow-sm cursor-pointer"
              >
                <Play className="w-4 h-4 text-[#3B40F8]" />
                <span>{t?.heroBtnModel}</span>
              </button>

              <button
                onClick={onViewPartners}
                type="button"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-slate-800 dark:text-slate-300 hover:text-[#3B40F8] dark:hover:text-white text-sm font-bold transition-colors cursor-pointer"
              >
                <span>{t?.heroBtnList}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Trust Indicator Stack */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-[#3B40F8] text-white flex items-center justify-center text-xs font-mono font-bold ring-2 ring-white dark:ring-[#070A11] shadow-sm">
                  UZ
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-700 text-white flex items-center justify-center text-xs font-mono font-bold ring-2 ring-white dark:ring-[#070A11] shadow-sm">
                  QA
                </div>
                <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-mono font-bold ring-2 ring-white dark:ring-[#070A11] shadow-sm">
                  SAM
                </div>
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-mono font-bold ring-2 ring-white dark:ring-[#070A11] shadow-sm">
                  +{Math.max(1, (stats?.markazlarCount || 45) - 3)}
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  <span className="font-extrabold text-[#3B40F8] dark:text-[#bfc1ff]">
                    {t?.heroTrustOver} {stats?.markazlarCount || 45}+
                  </span>{' '}
                  {t?.heroTrustCenters}
                </p>
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {t?.heroTrustSub}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Node & Live Stream Widget */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-3xl bg-white dark:bg-[#0B0F19] p-5 sm:p-6 shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-4">
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                    {t?.heroTerminalTitle}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-mono text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                    {t?.heroTerminalOnline}
                  </span>
                </div>
              </div>

              {/* Live Lecture Video Sync Bar */}
              <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-3.5 flex flex-col gap-2 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Radio className="w-3.5 h-3.5 text-[#3B40F8] animate-pulse" />
                    <span className="font-mono text-[11px] uppercase font-bold text-slate-900 dark:text-slate-200">
                      {t?.heroLiveSync}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#3B40F8] dark:text-[#bfc1ff]">
                    {t?.heroQuality}
                  </span>
                </div>

                <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#3B40F8] to-indigo-500 rounded-full transition-all duration-700"
                    style={{ width: `${stats?.signalFoizi || 99.8}%` }}
                  />
                </div>

                <div className="flex justify-between font-mono text-[11px] text-slate-700 dark:text-slate-400 pt-0.5 font-medium">
                  <span>{t?.heroStudioName}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                    {t?.heroSignalLabel}: {stats?.signalFoizi || 99.8}%
                  </span>
                </div>
              </div>

              {/* Integrated Code Block (Dark Terminal is optimal for code) */}
              <div className="bg-[#070A11] rounded-2xl p-4 font-mono text-xs text-slate-200 space-y-1 overflow-x-auto shadow-inner border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1.5 border-b border-slate-800">
                  <span>curriculum_sync.ts</span>
                  <span className="text-[#3B40F8] font-bold">{t?.heroActiveModule}</span>
                </div>
                <div className="pt-2 text-slate-400">
                  <span className="text-purple-400">const</span> hub = <span className="text-purple-400">await</span> Codenation.<span className="text-blue-400">connect</span>({`{`}
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-indigo-300">region</span>: <span className="text-emerald-300">"{stats?.currentCenterStream || 'Samarqand_IT'}"</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-indigo-300">curriculum</span>: [<span className="text-emerald-300">"Fullstack"</span>, <span className="text-emerald-300">"DevOps"</span>],
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-indigo-300">mentor</span>: <span className="text-emerald-300">"{stats?.liveLectureTitle || 'Senior Staff Engineer'}"</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-indigo-300">lmsIntegration</span>: <span className="text-amber-300">true</span>
                </div>
                <div className="text-slate-400">{`});`}</div>
                <div className="text-emerald-400 pt-1 text-[11px] font-semibold">
                  &gt; Network verified: {stats?.viloyatlarCount || 14} hubs linked. [READY]
                </div>
              </div>

              {/* Mini Features Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-2xl flex items-center gap-3 border border-slate-200 dark:border-slate-800">
                  <div className="w-8 h-8 rounded-xl bg-[#3B40F8]/10 text-[#3B40F8] flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-xs font-bold text-slate-900 dark:text-white truncate">
                      {t?.heroLmsTitle}
                    </span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400 truncate font-medium">
                      {t?.heroLmsSub}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-2xl flex items-center gap-3 border border-slate-200 dark:border-slate-800">
                  <div className="w-8 h-8 rounded-xl bg-[#3B40F8]/10 text-[#3B40F8] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-xs font-bold text-slate-900 dark:text-white truncate">
                      {t?.heroMentorsTitle}
                    </span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400 truncate font-medium">
                      {t?.heroMentorsSub}
                    </span>
                  </div>
                </div>
              </div>

              {/* Activity Bar Ticker */}
              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-[11px] font-mono text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-medium">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                  <span className="truncate">{t?.heroTickerPrefix}: {stats?.lastConnectedHub || "Farg'ona IT Hub"}</span>
                </div>
                <span className="text-[#3B40F8] font-bold whitespace-nowrap ml-2">
                  {t?.heroTickerTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
