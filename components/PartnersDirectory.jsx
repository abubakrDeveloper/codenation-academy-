'use client';

import React, { useState, useMemo } from 'react';
import { submitApplication } from '../lib/storage';
import { PartnerLogoBadge } from './PartnerLogoBadge';
import {
  Search,
  MapPin,
  Star,
  CheckCircle,
  FileText,
  Workflow,
  Award,
  Send,
  Building,
  Terminal,
  ChevronRight,
  Sparkles,
  X,
} from 'lucide-react';

export function PartnersDirectory({
  partners = [],
  stats,
  t,
  lang = 'en',
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedPartner, setSelectedPartner] = useState(null);

  // Form states
  const [formData, setFormData] = useState({
    centerName: '',
    leaderName: '',
    phone: '',
    email: '',
    region: 'toshkent',
    studentsCountRange: '100-300',
    message: '',
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Region filtering and search logic
  const filteredPartners = useMemo(() => {
    return (partners || []).filter((p) => {
      const matchesRegion =
        selectedRegion === 'all' ? true : p.region === selectedRegion;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q) ||
        p.regionLabel.toLowerCase().includes(q) ||
        (p.specialties || []).some((s) => s.toLowerCase().includes(q));
      return matchesRegion && matchesSearch;
    });
  }, [partners, selectedRegion, searchQuery]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) return;

    setIsSubmitting(true);
    setTimeout(() => {
      submitApplication({
        centerName: formData.centerName,
        leaderName: formData.leaderName,
        phone: formData.phone,
        email: formData.email,
        region: formData.region,
        studentsCountRange: formData.studentsCountRange,
        message: formData.message,
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        centerName: '',
        leaderName: '',
        phone: '',
        email: '',
        region: 'toshkent',
        studentsCountRange: '100-300',
        message: '',
      });
      setTermsAccepted(false);
    }, 700);
  };

  const getPartnerDesc = (p) => {
    if (!p) return '';
    if (lang === 'uz' && p.descriptionUz) return p.descriptionUz;
    if (lang === 'ru' && p.descriptionRu) return p.descriptionRu;
    if (lang === 'en' && p.descriptionEn) return p.descriptionEn;
    return p.description;
  };

  return (
    <div className="w-full flex flex-col">
      {/* Top Header Hero */}
      <section className="w-full pt-12 pb-16 bg-slate-50/70 dark:bg-transparent border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B40F8] dark:text-[#bfc1ff]">
              {t?.dirBadge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t?.dirTitle}
            </h1>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {t?.dirSub}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                {stats?.markazlarCount || 45}+
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5 font-semibold">
                {t?.dirStatCenters}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#3B40F8] dark:text-[#bfc1ff] font-mono">
                {stats?.natijadorlikFoizi || 94}%
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5 font-semibold">
                {t?.dirStatRate}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                {stats?.viloyatlarCount || 14}
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5 font-semibold">
                {t?.dirStatRegions}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                {t?.dirAccredStatus}
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5 font-semibold">
                {t?.dirAccredTitle}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Advantages Section */}
      <section className="w-full py-16 bg-white dark:bg-[#070A11] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B40F8] dark:text-[#bfc1ff]">
                {t?.privilegesBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                {t?.privilegesTitle}
              </h2>
            </div>
            <span className="font-mono text-xs text-slate-600 dark:text-slate-400 font-medium">
              {t?.privilegesSub}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-[#3B40F8]/50 transition-all group shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#3B40F8]/10 text-[#3B40F8] flex items-center justify-center mb-4 group-hover:bg-[#3B40F8] group-hover:text-white transition-colors">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {t?.privilege1Title}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed font-normal">
                  {t?.privilege1Desc}
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#3B40F8] dark:text-[#bfc1ff] font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>{t?.privilege1Sub}</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-[#3B40F8]/50 transition-all group shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#3B40F8]/10 text-[#3B40F8] flex items-center justify-center mb-4 group-hover:bg-[#3B40F8] group-hover:text-white transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {t?.privilege2Title}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed font-normal">
                  {t?.privilege2Desc}
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#3B40F8] dark:text-[#bfc1ff] font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>{t?.privilege2Sub}</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-[#3B40F8]/50 transition-all group shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#3B40F8]/10 text-[#3B40F8] flex items-center justify-center mb-4 group-hover:bg-[#3B40F8] group-hover:text-white transition-colors">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {t?.privilege3Title}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed font-normal">
                  {t?.privilege3Desc}
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#3B40F8] dark:text-[#bfc1ff] font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>{t?.privilege3Sub}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Section: Search, Filters & Cards Grid */}
      <section className="w-full py-16 bg-slate-50/70 dark:bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter Bar */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#070A11] border border-slate-200 dark:border-slate-800 shadow-sm mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t?.searchPlaceholder || 'Search partner centers...'}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B40F8]/40 font-medium"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              {[
                { id: 'all', label: t?.filterAll || 'All Regions' },
                { id: 'toshkent', label: t?.filterTashkent || 'Tashkent' },
                { id: 'samarqand', label: t?.filterSamarkand || 'Samarkand' },
                { id: 'fargona', label: t?.filterFergana || 'Fergana' },
                { id: 'buxoro', label: t?.filterBukhara || 'Bukhara' },
                { id: 'andijon', label: t?.filterAndijan || 'Andijan' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setSelectedRegion(btn.id)}
                  type="button"
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedRegion === btn.id
                      ? 'bg-[#3B40F8] text-white shadow-sm font-bold'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid: Center Name, Logo Emblem, and Full Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map((partner) => (
              <div
                key={partner.id}
                onClick={() => setSelectedPartner(partner)}
                className="p-6 rounded-3xl bg-white dark:bg-[#070A11] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-[#3B40F8]/50 transition-all flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    {/* Distinct Center Logo */}
                    <PartnerLogoBadge
                      name={partner.name}
                      logoType={partner.logoType}
                      accentColor={partner.accentColor}
                      size="md"
                    />
                    <div className="flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono text-xs font-semibold text-slate-800 dark:text-slate-300">
                        {partner.regionLabel}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 dark:bg-[#3B40F8]/10 dark:text-[#bfc1ff] font-mono text-xs font-bold">
                        {partner.level}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#3B40F8] dark:group-hover:text-[#bfc1ff] transition-colors mb-1">
                    {partner.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 mb-3 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#3B40F8]" />
                    <span>{partner.address}</span>
                  </div>

                  {/* Complete Center Description */}
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-4 line-clamp-3 leading-relaxed font-normal">
                    {getPartnerDesc(partner)}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {(partner.specialties || []).map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-700 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="font-extrabold text-slate-900 dark:text-white">
                      {partner.rating}
                    </span>
                    <span>• {partner.studentsCount}+ {t?.showcaseGraduatesUnit || 'graduates'}</span>
                  </div>
                  <span className="text-[#3B40F8] dark:text-[#bfc1ff] font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    {t?.detailsBtn || 'Details'} <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#070A11] border border-slate-200 dark:border-slate-800">
              <Building className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-base font-semibold text-slate-800 dark:text-slate-300">
                {t?.noCentersFound}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRegion('all');
                }}
                className="mt-3 text-sm text-[#3B40F8] underline font-bold cursor-pointer"
              >
                {t?.clearFiltersBtn}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Application Form & Accreditation Stages */}
      <section id="ariza-form" className="w-full py-20 bg-white dark:bg-[#070A11] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Accreditation Workflow */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B40F8] dark:text-[#bfc1ff]">
                  {t?.workflowBadge}
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1 mb-4">
                  {t?.workflowTitle}
                </h2>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-8 leading-relaxed font-normal">
                  {t?.workflowDesc}
                </p>

                <div className="flex flex-col gap-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#3B40F8]/10 text-[#3B40F8] flex items-center justify-center shrink-0 font-mono font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {t?.workflowStep1Title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {t?.workflowStep1Desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#3B40F8]/10 text-[#3B40F8] flex items-center justify-center shrink-0 font-mono font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {t?.workflowStep2Title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {t?.workflowStep2Desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#3B40F8]/10 text-[#3B40F8] flex items-center justify-center shrink-0 font-mono font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {t?.workflowStep3Title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {t?.workflowStep3Desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Support Hotline */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800">
                <span className="font-mono text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block mb-1">
                  {t?.hotlineTitle}
                </span>
                <p className="text-lg font-bold text-[#3B40F8] dark:text-[#bfc1ff] font-mono">
                  +998 (71) 200-44-88
                </p>
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  partnerships@codenation.uz
                </span>
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-md">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t?.formTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-normal">
                    {t?.formSub}
                  </p>
                </div>

                {isSuccess ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center flex flex-col items-center gap-3 animate-in zoom-in-95">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
                      {t?.formSuccessTitle}
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 max-w-md">
                      {t?.formSuccessSub}
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      type="button"
                      className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer"
                    >
                      OK
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1.5 uppercase">
                          {t?.formCenterNameLabel}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.centerName}
                          onChange={(e) =>
                            setFormData({ ...formData, centerName: e.target.value })
                          }
                          placeholder={t?.formCenterNamePlaceholder}
                          className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B40F8]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1.5 uppercase">
                          {t?.formLeaderLabel}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.leaderName}
                          onChange={(e) =>
                            setFormData({ ...formData, leaderName: e.target.value })
                          }
                          placeholder={t?.formLeaderPlaceholder}
                          className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B40F8]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1.5 uppercase">
                          {t?.formPhoneLabel}
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder={t?.formPhonePlaceholder}
                          className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B40F8]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1.5 uppercase">
                          {t?.formEmailLabel}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder={t?.formEmailPlaceholder}
                          className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B40F8]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1.5 uppercase">
                          {t?.formRegionLabel}
                        </label>
                        <select
                          value={formData.region}
                          onChange={(e) =>
                            setFormData({ ...formData, region: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3B40F8]"
                        >
                          <option value="toshkent">Toshkent</option>
                          <option value="samarqand">Samarqand</option>
                          <option value="fargona">Farg'ona</option>
                          <option value="buxoro">Buxoro</option>
                          <option value="andijon">Andijon</option>
                          <option value="namangan">Namangan</option>
                          <option value="qashqadaryo">Qashqadaryo</option>
                          <option value="surxondaryo">Surxondaryo</option>
                          <option value="xorazm">Xorazm</option>
                          <option value="navoiy">Navoiy</option>
                          <option value="jizzax">Jizzax</option>
                          <option value="sirdaryo">Sirdaryo</option>
                          <option value="qoraqalpogiston">Qoraqalpog'iston</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1.5 uppercase">
                          {t?.formStudentsLabel}
                        </label>
                        <select
                          value={formData.studentsCountRange}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              studentsCountRange: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3B40F8]"
                        >
                          <option value="50-100">50 - 100</option>
                          <option value="100-300">100 - 300</option>
                          <option value="300-600">300 - 600</option>
                          <option value="600+">600+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1.5 uppercase">
                        {t?.formMsgLabel}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder={t?.formMsgPlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B40F8]"
                      />
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="w-4 h-4 rounded text-[#3B40F8] focus:ring-[#3B40F8]"
                      />
                      <label
                        htmlFor="terms"
                        className="text-xs text-slate-700 dark:text-slate-300 cursor-pointer font-medium"
                      >
                        {t?.formTermsCheckbox}
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !termsAccepted}
                      className="w-full py-3.5 rounded-xl bg-[#3B40F8] hover:bg-[#1917E2] disabled:opacity-50 text-white font-extrabold text-sm sm:text-base shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-4"
                    >
                      {isSubmitting ? (
                        <span>{t?.formSubmitting}</span>
                      ) : (
                        <>
                          <span>{t?.formSubmitBtn}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Details Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-[#0B0F19] rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative flex flex-col gap-6">
            <button
              onClick={() => setSelectedPartner(null)}
              type="button"
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <PartnerLogoBadge
                name={selectedPartner.name}
                logoType={selectedPartner.logoType}
                accentColor={selectedPartner.accentColor}
                size="lg"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {selectedPartner.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 dark:bg-[#3B40F8]/10 dark:text-[#bfc1ff] font-mono text-xs font-bold">
                    {selectedPartner.level}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1 mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#3B40F8]" />
                  <span>{selectedPartner.address}</span>
                </p>
              </div>
            </div>

            <div>
              <span className="font-mono text-xs uppercase font-bold text-slate-500 tracking-wider block mb-1.5">
                Description / Tavsif
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {getPartnerDesc(selectedPartner)}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-[#070A11] border border-slate-200 dark:border-slate-800 text-center">
              <div>
                <span className="text-xl font-extrabold text-slate-900 dark:text-white font-mono block">
                  {selectedPartner.rating}
                </span>
                <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Rating</span>
              </div>
              <div>
                <span className="text-xl font-extrabold text-[#3B40F8] dark:text-[#bfc1ff] font-mono block">
                  {selectedPartner.studentsCount}+
                </span>
                <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Graduates</span>
              </div>
              <div>
                <span className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono block">
                  {selectedPartner.activeGroups}
                </span>
                <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Groups</span>
              </div>
            </div>

            <div>
              <span className="font-mono text-xs uppercase font-bold text-slate-500 tracking-wider block mb-2">
                Specialties & Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {(selectedPartner.specialties || []).map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedPartner(null)}
                type="button"
                className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold font-mono cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
