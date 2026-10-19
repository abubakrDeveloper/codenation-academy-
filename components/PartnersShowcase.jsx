'use client';

import React from 'react';
import { PartnerLogoBadge } from './PartnerLogoBadge';
import { ArrowRight, Send, Star } from 'lucide-react';

export function PartnersShowcase({
  partners = [],
  t,
  lang = 'en',
  onViewAllPartners,
  onOpenApply,
}) {
  // Show top 3 partners
  const topPartners = (partners || []).slice(0, 3);

  const employerPartners = [
    { name: 'IT PARK', tag: 'Technopark' },
    { name: 'AGROBANK', tag: 'FinTech' },
    { name: 'UZUM TECH', tag: 'E-Commerce' },
    { name: 'CYBERNET', tag: 'Security' },
    { name: 'EPAM LABS', tag: 'Global Tech' },
    { name: 'VENTURE UZ', tag: 'Investment' },
  ];

  const getPartnerDesc = (p) => {
    if (lang === 'uz' && p.descriptionUz) return p.descriptionUz;
    if (lang === 'ru' && p.descriptionRu) return p.descriptionRu;
    if (lang === 'en' && p.descriptionEn) return p.descriptionEn;
    return p.description;
  };

  return (
    <section className="w-full py-16 bg-slate-50/70 dark:bg-[#070A11] border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B40F8] dark:text-[#bfc1ff]">
              {t?.showcaseBadge}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t?.showcaseTitle}
            </h2>
          </div>
          <button
            onClick={onViewAllPartners}
            type="button"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#3B40F8] hover:text-[#1917E2] dark:text-[#bfc1ff] dark:hover:text-white transition-colors group cursor-pointer"
          >
            <span>{t?.showcaseViewAll}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Partner Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white dark:bg-[#0B0F19] rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-6 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  {/* Distinct Partner Logo Emblem */}
                  <PartnerLogoBadge
                    name={partner.name}
                    logoType={partner.logoType}
                    accentColor={partner.accentColor}
                    size="md"
                  />
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {partner.regionLabel}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 dark:bg-[#3B40F8]/10 dark:text-[#bfc1ff] font-mono text-xs font-bold">
                      {partner.level}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#3B40F8] dark:group-hover:text-[#bfc1ff] transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    {partner.address}
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300 line-clamp-3 mt-1 leading-relaxed">
                    {getPartnerDesc(partner)}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {(partner.specialties || []).map((spec, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-300 font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Rating & Numbers */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-700 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="font-extrabold text-slate-900 dark:text-white">
                    {partner.rating}
                  </span>
                  <span>• {partner.studentsCount}+ {t?.showcaseGraduatesUnit || 'graduates'}</span>
                </div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                  {partner.activeGroups} {t?.showcaseGroupsUnit || 'groups'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Tech Employers Section */}
        <div className="flex flex-col gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-mono text-xs uppercase font-bold text-[#3B40F8] dark:text-[#bfc1ff]">
                {t?.employersBadge}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {t?.employersTitle}
              </h3>
            </div>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              {t?.employersSub}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {employerPartners.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center shadow-xs hover:border-[#3B40F8]/40 transition-colors"
              >
                <span className="font-mono font-extrabold text-sm tracking-wider text-slate-900 dark:text-white">
                  {item.name}
                </span>
                <span className="text-[10px] text-slate-600 dark:text-slate-400 font-mono mt-0.5 font-medium">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Rapid Conversion CTA Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#1917E2] to-[#3B40F8] p-8 sm:p-12 text-white overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-2xl">
              <span className="font-mono text-xs uppercase font-bold tracking-wider text-white/80">
                {t?.ctaBannerBadge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {t?.ctaBannerTitle}
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                {t?.ctaBannerDesc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={onOpenApply}
                type="button"
                className="px-8 py-4 rounded-2xl bg-white text-[#1917E2] hover:bg-slate-100 font-extrabold text-sm sm:text-base shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t?.ctaBannerBtn}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
