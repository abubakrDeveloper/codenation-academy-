'use client';

import React from 'react';
import { Tv, Users2, Award, CheckCircle, Sparkles } from 'lucide-react';

export function EcosystemSteps({ t }) {
  const steps = [
    {
      step: '01 / STAGE',
      title: t?.ecoStep1Title || 'Live Lectures',
      subtext: t?.ecoStep1Sub || 'Hybrid Lectures',
      description: t?.ecoStep1Desc || 'Direct interactive online lectures from Senior Engineers.',
      feature: t?.ecoStep1Feature || '3 live broadcasts per week',
      icon: Tv,
      badge: t?.ecoStep1Badge || 'Full HD Studio • Interactive Tasks',
    },
    {
      step: '02 / STAGE',
      title: t?.ecoStep2Title || 'Local Mentorship',
      subtext: t?.ecoStep2Sub || 'Practical Lab Mentoring',
      description: t?.ecoStep2Desc || 'Certified mentors write and review real code with students 1-on-1.',
      feature: t?.ecoStep2Feature || 'Hands-on computer laboratory sessions',
      icon: Users2,
      badge: t?.ecoStep2Badge || 'Live Code Review • 1-on-1 Sessions',
    },
    {
      step: '03 / STAGE',
      title: t?.ecoStep3Title || 'International Certification',
      subtext: t?.ecoStep3Sub || 'LMS & Automated Grading',
      description: t?.ecoStep3Desc || 'Automated test suite and co-branded diplomas for career placement.',
      feature: t?.ecoStep3Feature || 'Access to hiring partners database',
      icon: Award,
      badge: t?.ecoStep3Badge || 'Automated Testing • Career Guarantee',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50/70 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-3xl">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase font-extrabold tracking-wider text-[#3B40F8] dark:text-[#bfc1ff]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t?.ecoBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t?.ecoTitle}
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {t?.ecoSub}
            </p>
          </div>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-white dark:bg-[#0B0F19] p-7 sm:p-8 shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#3B40F8]/10 text-[#3B40F8] flex items-center justify-center group-hover:bg-[#3B40F8] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                      {item.step}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#3B40F8] dark:group-hover:text-[#bfc1ff] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#3B40F8] dark:text-[#bfc1ff] font-mono">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item.feature}</span>
                  </div>
                  <span className="text-[11px] text-slate-600 dark:text-slate-400 font-mono font-medium">
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
