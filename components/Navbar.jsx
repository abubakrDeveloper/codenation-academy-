'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BrandLogo } from './BrandLogo';
import { Sun, Moon, Globe, ArrowRight, Menu, X, Key, Check } from 'lucide-react';

export function Navbar({
  activeTab,
  setActiveTab,
  isDark,
  setIsDark,
  lang = 'en',
  setLang,
  t,
  onOpenAdmin,
  onOpenApply,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'home', label: t?.navHome || 'Home' },
    { id: 'partners', label: t?.navPartners || 'Partner Centers' },
    { id: 'model', label: t?.navModel || 'IT Education Model' },
    { id: 'contact', label: t?.navContact || 'Contact' },
  ];

  const languages = [
    { code: 'en', label: 'EN', full: 'English' },
    { code: 'uz', label: 'UZ', full: "O'zbekcha" },
    { code: 'ru', label: 'RU', full: 'Русский' },
  ];

  const currentLangLabel = languages.find((l) => l.code === lang)?.label || 'EN';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#070A11]/90 backdrop-blur-xl shadow-md border-b border-slate-200/80 dark:border-slate-800/80'
          : 'bg-white/90 dark:bg-[#070A11]/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo with Triple-Click Secret Backdoor */}
        <div className="flex items-center gap-8">
          <BrandLogo size={38} onTripleClick={onOpenAdmin} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  type="button"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-[#3B40F8] text-[#1917E2] dark:text-white shadow-sm font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* 3-Language Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              type="button"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 font-mono text-xs font-bold text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
              title="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#3B40F8]" />
              <span>{currentLangLabel}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-2xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95">
                <div className="px-3 py-1 font-mono text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                  Language / Til
                </div>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangDropdownOpen(false);
                    }}
                    type="button"
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-left transition-colors cursor-pointer ${
                      lang === l.code
                        ? 'bg-[#3B40F8]/10 text-[#3B40F8] dark:text-[#bfc1ff] font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <span>{l.full}</span>
                    {lang === l.code && <Check className="w-3.5 h-3.5 text-[#3B40F8]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Mode Switcher */}
          <button
            onClick={() => setIsDark(!isDark)}
            type="button"
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
            title={isDark ? (t?.lightMode || 'Light mode') : (t?.darkMode || 'Dark mode')}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#3B40F8]" />}
          </button>

          {/* Secret Admin Backdoor Trigger Button */}
          <button
            onClick={onOpenAdmin}
            type="button"
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-600 hover:text-[#3B40F8] dark:text-slate-400 dark:hover:text-white transition-all cursor-pointer"
            title={t?.adminTooltip || 'Admin Backdoor (Alt+A)'}
          >
            <Key className="w-4 h-4" />
          </button>

          {/* Primary CTA Button: Become a Partner */}
          <button
            onClick={onOpenApply}
            type="button"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3B40F8] hover:bg-[#1917E2] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#3B40F8]/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>{t?.btnBecomePartner || 'Become a Partner'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0B0F19] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 flex flex-col gap-3 shadow-xl">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  type="button"
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#3B40F8] text-white font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="font-mono text-xs text-slate-500 font-semibold">Language / Til</span>
            <div className="flex items-center gap-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    lang === l.code
                      ? 'bg-[#3B40F8] text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              onOpenApply();
              setMobileMenuOpen(false);
            }}
            type="button"
            className="w-full mt-2 py-3 rounded-xl bg-[#3B40F8] hover:bg-[#1917E2] text-white font-bold text-sm text-center shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{t?.btnBecomePartner || 'Become a Partner'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
