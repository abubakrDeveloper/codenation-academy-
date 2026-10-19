'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  HelpCircle,
  CheckCircle,
} from 'lucide-react';

export function ContactSection({ t, lang = 'en' }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [msg, setMsg] = useState('');
  const [isSent, setIsSent] = useState(false);

  const faqs = [
    {
      q:
        lang === 'uz'
          ? "Hamkor bo'lish uchun markazimizda litsenziya bo'lishi shartmi?"
          : lang === 'ru'
          ? 'Обязательно ли иметь лицензию для партнерства?'
          : 'Is an educational license strictly required to become a partner?',
      a:
        lang === 'uz'
          ? "O'quv markazingiz rasmiy ro'yxatdan o'tgan bo'lishi maqsadga muvofiq. Agar litsenziyalash jarayonida bo'lsangiz, yuridik va metodik ko'mak beramiz."
          : lang === 'ru'
          ? 'Желательно, чтобы центр был официально зарегистрирован. Если вы на этапе лицензирования, мы оказываем юридическую и методическую поддержку.'
          : 'Having official registration is recommended. If you are in the licensing process, our legal and academic teams provide advisory support.',
    },
    {
      q:
        lang === 'uz'
          ? "Jonli darslar qaysi tilda olib boriladi?"
          : lang === 'ru'
          ? 'На каком языке ведутся живые лекции?'
          : 'In which language are the live central studio lectures delivered?',
      a:
        lang === 'uz'
          ? "Darslar talabalar uchun tushunarli o'zbek tilida (zarurat bo'lganda rus yoki ingliz terminologiyalari bilan) professional IT injiniring darajasida o'tiladi."
          : lang === 'ru'
          ? 'Лекции проводятся на узбекском и русском языках с углубленной международной IT-терминологией.'
          : 'Lectures are broadcast in Uzbek and Russian with comprehensive international English tech terminology.',
    },
    {
      q:
        lang === 'uz'
          ? "LMS avto-baholash tizimi qanday integratsiya qilinadi?"
          : lang === 'ru'
          ? 'Как интегрируется система автоматической проверки LMS?'
          : 'How is the automated LMS grading system integrated?',
      a:
        lang === 'uz'
          ? "Har bir talaba va markaz uchun shaxsiy GitHub Classroom va CI/CD konteynerlari ochiladi. 24 soat ichida to'liq ishga tushiriladi."
          : lang === 'ru'
          ? 'Каждому студенту и центру предоставляется GitHub Classroom и изолированные контейнеры CI/CD, готовые за 24 часа.'
          : 'Each student and center receives dedicated GitHub Classroom workspaces and CI/CD pipelines provisioned within 24 hours.',
    },
  ];

  const handleSend = (e) => {
    e.preventDefault();
    setIsSent(true);
    setName('');
    setContact('');
    setMsg('');
    setTimeout(() => setIsSent(false), 4000);
  };

  return (
    <div className="w-full py-16 bg-white dark:bg-[#070A11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Header */}
        <div className="max-w-3xl flex flex-col gap-3">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B40F8] dark:text-[#bfc1ff]">
            {t?.contactBadge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t?.contactTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            {t?.contactSub}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#3B40F8]/10 text-[#3B40F8] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {t?.contactCampusTitle}
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-400 mt-1 leading-relaxed font-medium">
                {t?.contactCampusAddress}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#3B40F8]/10 text-[#3B40F8] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {t?.contactCallCenterTitle}
              </h3>
              <p className="text-xs font-mono font-bold text-[#3B40F8] dark:text-[#bfc1ff] mt-1">
                +998 (71) 200-44-88
              </p>
              <p className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
                +998 (71) 200-00-50
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#3B40F8]/10 text-[#3B40F8] flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {t?.contactEmailTitle}
              </h3>
              <p className="text-xs font-mono text-slate-800 dark:text-slate-300 mt-1 font-semibold">
                partnerships@codenation.uz
              </p>
              <p className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-0.5">
                info@codenation.uz
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#3B40F8]/10 text-[#3B40F8] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {t?.contactHoursTitle}
              </h3>
              <p className="text-xs text-slate-800 dark:text-slate-300 mt-1 font-semibold">
                {t?.contactHoursVal}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                {t?.contactHoursClosed}
              </p>
            </div>
          </div>
        </div>

        {/* Message Form & FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-md">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              {t?.contactQuickMsgTitle}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 font-normal">
              {t?.contactQuickMsgSub}
            </p>

            {isSent && (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 text-emerald-500" />
                <span>{t?.contactSuccessAlert}</span>
              </div>
            )}

            <form onSubmit={handleSend} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1.5 uppercase">
                  {t?.contactNameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t?.contactNamePlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B40F8]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1.5 uppercase">
                  {t?.contactInfoLabel}
                </label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder={t?.contactInfoPlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B40F8]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1.5 uppercase">
                  {t?.contactMsgLabel}
                </label>
                <textarea
                  rows={4}
                  required
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder={t?.contactMsgPlaceholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B40F8]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#3B40F8] hover:bg-[#1917E2] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01]"
              >
                <span>{t?.contactSendBtn}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-[#3B40F8]" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t?.faqBadge}
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#070A11] border border-slate-200 dark:border-slate-800 shadow-xs"
                >
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {faq.q}
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
