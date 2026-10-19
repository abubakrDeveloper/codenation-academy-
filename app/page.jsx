'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { StatsStrip } from '../components/StatsStrip';
import { EcosystemSteps } from '../components/EcosystemSteps';
import { PartnersShowcase } from '../components/PartnersShowcase';
import { PartnersDirectory } from '../components/PartnersDirectory';
import { CurriculumModel } from '../components/CurriculumModel';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { AdminModal } from '../components/AdminModal';
import { getAppData, onDataChange } from '../lib/storage';
import { translations } from '../lib/translations';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDark, setIsDark] = useState(false);

  // Default language is English ('en') as required: "defult tilda ingliz tili bo'lsin"
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('codenation_lang');
      if (saved === 'uz' || saved === 'ru' || saved === 'en') return saved;
    }
    return 'en';
  });

  const [isAdminOpen, setIsAdminOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('admin') === 'true' || params.get('admin') === '1';
    }
    return false;
  });

  const [dataStore, setDataStore] = useState(() => getAppData());

  const handleSetLang = (newLang) => {
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('codenation_lang', newLang);
    }
  };

  const t = translations[lang] || translations.en;

  // Keyboard shortcut listener: Alt + A or Ctrl + Shift + A to open Secret Admin Backdoor
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.altKey && (e.key === 'a' || e.key === 'A')) ||
          (e.ctrlKey && e.shiftKey && (e.key === 'a' || e.key === 'A'))) {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Listen to storage changes to keep UI reactive in real-time
  useEffect(() => {
    const unsubscribe = onDataChange(() => {
      setDataStore(getAppData());
    });
    return () => unsubscribe();
  }, []);

  // Sync dark mode class on document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleOpenApply = () => {
    setActiveTab('partners');
    setTimeout(() => {
      const formEl = document.getElementById('ariza-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 800, behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${isDark ? 'dark bg-[#070A11] text-white' : 'bg-[#F8FAFC] text-slate-900'}`}>
      {/* Top Fixed Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isDark={isDark}
        setIsDark={setIsDark}
        lang={lang}
        setLang={handleSetLang}
        t={t}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenApply={handleOpenApply}
      />

      {/* Main Screen Content View */}
      <main className="flex-1 w-full pt-20">
        {activeTab === 'home' && (
          <div className="flex flex-col w-full">
            <HeroSection
              stats={dataStore.stats}
              t={t}
              lang={lang}
              onOpenApply={handleOpenApply}
              onViewPartners={() => {
                setActiveTab('partners');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onViewModel={() => {
                setActiveTab('model');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <StatsStrip stats={dataStore.stats} t={t} />
            <EcosystemSteps t={t} />
            <PartnersShowcase
              partners={dataStore.partners}
              t={t}
              lang={lang}
              onViewAllPartners={() => {
                setActiveTab('partners');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenApply={handleOpenApply}
            />
          </div>
        )}

        {activeTab === 'partners' && (
          <PartnersDirectory
            partners={dataStore.partners}
            stats={dataStore.stats}
            t={t}
            lang={lang}
          />
        )}

        {activeTab === 'model' && (
          <CurriculumModel
            t={t}
            lang={lang}
            onOpenApply={handleOpenApply}
          />
        )}

        {activeTab === 'contact' && (
          <ContactSection
            t={t}
            lang={lang}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        t={t}
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Secret Admin Backdoor Modal */}
      <AdminModal
        key={isAdminOpen ? 'open' : 'closed'}
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        t={t}
        lang={lang}
      />
    </div>
  );
}
