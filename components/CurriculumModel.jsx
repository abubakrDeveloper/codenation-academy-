'use client';

import React, { useState } from 'react';
import {
  Code2,
  Cloud,
  Cpu,
  Shield,
  CheckCircle2,
  Terminal,
  Play,
} from 'lucide-react';

export function CurriculumModel({ t, lang = 'en', onOpenApply }) {
  const [activeCourse, setActiveCourse] = useState('fullstack');
  const [testOutput, setTestOutput] = useState(null);
  const [isRunningTest, setIsRunningTest] = useState(false);

  const courses = [
    {
      id: 'fullstack',
      title: 'Fullstack Software Engineering',
      level: lang === 'uz' ? 'Boshlang‘ichdan Middle darajagacha' : lang === 'ru' ? 'С нуля до Middle уровня' : 'Beginner to Middle Engineer',
      duration: lang === 'uz' ? '8 oy (32 hafta)' : lang === 'ru' ? '8 месяцев (32 недели)' : '8 months (32 weeks)',
      icon: Code2,
      tags: ['TypeScript', 'Next.js 15', 'Node.js', 'PostgreSQL', 'Docker'],
      description:
        lang === 'uz'
          ? "Talabalar zamonaviy web ilovalar, REST/GraphQL API, mikroxizmatlar va to'liq relatsion ma'lumotlar bazalarini arxitektura qilishni o'rganadilar."
          : lang === 'ru'
          ? 'Студенты осваивают архитектуру современных веб-приложений, API микросервисов и реляционные базы данных.'
          : 'Students master full-stack web applications, scalable REST/GraphQL APIs, microservices, and relational database architecture.',
      syllabus: [
        lang === 'uz' ? '1-oy: Algoritmlar, Ma’lumotlar tuzilmasi va Git oqimi' : lang === 'ru' ? 'Месяц 1: Алгоритмы, структуры данных и Git' : 'Month 1: Algorithms, Data Structures & Git Workflow',
        lang === 'uz' ? '2-oy: Zamonaviy JavaScript (ESNext) va TypeScript chuqurlashtirilgan' : lang === 'ru' ? 'Месяц 2: Современный JavaScript и углубленный TypeScript' : 'Month 2: Modern ESNext JavaScript & Deep-Dive TypeScript',
        lang === 'uz' ? '3-oy: React 19, Server Components va Next.js App Router' : lang === 'ru' ? 'Месяц 3: React 19, Server Components и Next.js App Router' : 'Month 3: React 19, Server Components & Next.js App Router',
        lang === 'uz' ? '4-oy: Backend arxitekturasi: Node.js, Express, Nest.js asoslari' : lang === 'ru' ? 'Месяц 4: Бэкенд-архитектура: Node.js, Express, Nest.js' : 'Month 4: Backend Architecture: Node.js, Express, Nest.js core',
        lang === 'uz' ? '5-oy: PostgreSQL, Drizzle ORM, Tranzaksiyalar va Keshlashtirish' : lang === 'ru' ? 'Месяц 5: PostgreSQL, Drizzle ORM, транзакции и кэширование' : 'Month 5: PostgreSQL, Drizzle ORM, Transactions & Caching',
        lang === 'uz' ? '6-oy: CI/CD, Docker containerlar va Cloud deploy' : lang === 'ru' ? 'Месяц 6: CI/CD, контейнеры Docker и развертывание в облаке' : 'Month 6: CI/CD, Docker Containers & Cloud Deployment',
        lang === 'uz' ? '7-oy: Jamoaviy Real-world Capstone loyiha (Startup MVP)' : lang === 'ru' ? 'Месяц 7: Командный Capstone-проект (Startup MVP)' : 'Month 7: Team Capstone Real-world Startup MVP',
        lang === 'uz' ? '8-oy: Mock intervyular, Portfolio va Ishga joylashish' : lang === 'ru' ? 'Месяц 8: Мок-интервью, портфолио и трудоустройство' : 'Month 8: Technical Mock Interviews, Portfolio & Placement',
      ],
    },
    {
      id: 'devops',
      title: 'Cloud Architecture & DevOps',
      level: lang === 'uz' ? 'O‘rta va Professional' : lang === 'ru' ? 'Продвинутый уровень' : 'Intermediate & Advanced',
      duration: lang === 'uz' ? '6 oy (24 hafta)' : lang === 'ru' ? '6 месяцев (24 недели)' : '6 months (24 weeks)',
      icon: Cloud,
      tags: ['Linux', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines'],
      description:
        lang === 'uz'
          ? "Avtomatlashtirilgan infratuzilma, bulutli tizimlar (Cloud Native), yuklamaga chidamli klasterlar va monitoring ekotizimini qurish."
          : lang === 'ru'
          ? 'Автоматизация инфраструктуры, облачные решения Cloud Native, отказоустойчивые кластеры и мониторинг.'
          : 'Infrastructure automation, Cloud Native systems, high-availability clusters, and automated monitoring ecosystem.',
      syllabus: [
        lang === 'uz' ? '1-oy: Linux Systems Engineering va Bash scripting' : lang === 'ru' ? 'Месяц 1: Linux Systems Engineering и Bash' : 'Month 1: Linux Systems Engineering & Bash Scripting',
        lang === 'uz' ? '2-oy: Docker, multi-stage builds va xavfsizlik' : lang === 'ru' ? 'Месяц 2: Docker, многоэтапные сборки и безопасность' : 'Month 2: Docker, Multi-stage Builds & Container Security',
        lang === 'uz' ? '3-oy: Kubernetes (K8s) klaster boshqaruvi' : lang === 'ru' ? 'Месяц 3: Управление кластерами Kubernetes (K8s)' : 'Month 3: Kubernetes (K8s) Cluster Orchestration',
        lang === 'uz' ? '4-oy: CI/CD: GitHub Actions va ArgoCD GitOps' : lang === 'ru' ? 'Месяц 4: CI/CD: GitHub Actions и ArgoCD' : 'Month 4: CI/CD: GitHub Actions & ArgoCD GitOps',
        lang === 'uz' ? '5-oy: Infrastructure as Code (IaC) Terraform' : lang === 'ru' ? 'Месяц 5: Инфраструктура как код (IaC) Terraform' : 'Month 5: Infrastructure as Code (IaC) with Terraform',
        lang === 'uz' ? '6-oy: Prometheus, Grafana monitoring' : lang === 'ru' ? 'Месяц 6: Мониторинг Prometheus, Grafana' : 'Month 6: Prometheus, Grafana Observability & Logging',
      ],
    },
    {
      id: 'ai',
      title: 'AI & Data Engineering Core',
      level: lang === 'uz' ? 'O‘rta va Ilg‘or' : lang === 'ru' ? 'Средний и профи' : 'Intermediate & Advanced',
      duration: lang === 'uz' ? '7 oy (28 hafta)' : lang === 'ru' ? '7 месяцев (28 недель)' : '7 months (28 weeks)',
      icon: Cpu,
      tags: ['Python', 'PyTorch', 'Vector DB', 'LLM Agentlar', 'RAG'],
      description:
        lang === 'uz'
          ? "Sun'iy intellekt modellarini o'rgatish, LLM API integratsiyalari, Retrieval-Augmented Generation (RAG) va zamonaviy ma'lumotlar konveyerlari."
          : lang === 'ru'
          ? 'Обучение моделей ИИ, интеграции с LLM API, векторные базы данных и масштабируемые пайплайны данных.'
          : 'AI models fine-tuning, LLM APIs, Vector Databases (RAG), and high-throughput data processing pipelines.',
      syllabus: [
        lang === 'uz' ? '1-oy: Python for High-Performance Computing' : lang === 'ru' ? 'Месяц 1: Высокопроизводительный Python' : 'Month 1: High-Performance Python & Vector Math',
        lang === 'uz' ? '2-oy: Matematik statistika va Machine Learning' : lang === 'ru' ? 'Месяц 2: Математическая статистика и ML' : 'Month 2: Statistical Modeling & Machine Learning Core',
        lang === 'uz' ? '3-oy: Deep Learning & PyTorch arxitekturasi' : lang === 'ru' ? 'Месяц 3: Глубокое обучение и архитектура PyTorch' : 'Month 3: Deep Learning & PyTorch Architecture',
        lang === 'uz' ? '4-oy: Generativ AI va Prompt Engineering' : lang === 'ru' ? 'Месяц 4: Генеративный ИИ и Prompt Engineering' : 'Month 4: Generative AI & Advanced Prompt Engineering',
        lang === 'uz' ? '5-oy: LLM API, Function Calling va Agentlar' : lang === 'ru' ? 'Месяц 5: LLM API, вызов функций и AI-агенты' : 'Month 5: LLM APIs, Tool Use & Autonomous Agents',
        lang === 'uz' ? '6-oy: Vector DB (Pinecone, Chroma) va RAG' : lang === 'ru' ? 'Месяц 6: Векторные БД и архитектура RAG' : 'Month 6: Vector Databases & Enterprise RAG Systems',
        lang === 'uz' ? '7-oy: Production AI servislarini deploy qilish' : lang === 'ru' ? 'Месяц 7: Деплой AI-сервисов в продакшн' : 'Month 7: Production AI Deployment & Monitoring',
      ],
    },
    {
      id: 'cyber',
      title: 'Cybersecurity & DefOps',
      level: lang === 'uz' ? 'Professional' : lang === 'ru' ? 'Профессиональный' : 'Professional',
      duration: lang === 'uz' ? '6 oy (24 hafta)' : lang === 'ru' ? '6 месяцев (24 недели)' : '6 months (24 weeks)',
      icon: Shield,
      tags: ['Ethical Hacking', 'Network Security', 'OWASP', 'PenTesting'],
      description:
        lang === 'uz'
          ? "Tizimlar va veb-ilovalarni zaifliklardan himoya qilish, tarmoq xavfsizligi auditi, kriptografiya va xalqaro xavfsizlik standartlari."
          : lang === 'ru'
          ? 'Защита веб-систем от уязвимостей, аудит безопасности сетей, криптография и международные стандарты защиты.'
          : 'Protecting web applications, network security audits, vulnerability discovery, cryptography, and defense operations.',
      syllabus: [
        lang === 'uz' ? '1-oy: Axborot xavfsizligi asoslari va tarmoqlar' : lang === 'ru' ? 'Месяц 1: Основы кибербезопасности и сети' : 'Month 1: Information Security & Network Topologies',
        lang === 'uz' ? '2-oy: Veb-ilovalar xavfsizligi (OWASP Top 10)' : lang === 'ru' ? 'Месяц 2: Безопасность веб-приложений (OWASP)' : 'Month 2: Web App Security (OWASP Top 10 Deep Dive)',
        lang === 'uz' ? '3-oy: Penetratsion testlash (PenTesting)' : lang === 'ru' ? 'Месяц 3: Тестирование на проникновение (PenTesting)' : 'Month 3: Penetration Testing Methodologies',
        lang === 'uz' ? '4-oy: Kriptografiya va PKI tizimlari' : lang === 'ru' ? 'Месяц 4: Криптография и PKI' : 'Month 4: Applied Cryptography & PKI Infrastructure',
        lang === 'uz' ? '5-oy: SIEM tizimlari va SOC monitoring' : lang === 'ru' ? 'Месяц 5: SIEM-системы и мониторинг SOC' : 'Month 5: SIEM Systems & Security Operations Center (SOC)',
        lang === 'uz' ? '6-oy: Red/Blue team simulyatsiyasi' : lang === 'ru' ? 'Месяц 6: Симуляция Red/Blue team' : 'Month 6: Red/Blue Team Defense Capstone',
      ],
    },
  ];

  const currentCourse = courses.find((c) => c.id === activeCourse) || courses[0];

  const handleRunSimulation = () => {
    setIsRunningTest(true);
    setTestOutput(null);
    setTimeout(() => {
      setIsRunningTest(false);
      setTestOutput(
        lang === 'uz'
          ? `[CI/CD PIPELINE CHECK PASS]
✓ Unit Testlar: 48/48 muvaffaqiyatli o'tdi
✓ Linter: 0 ta xatolik, 0 ta ogohlantirish
✓ TypeScript tekshiruvi: 100% OK
✓ LMS Balli: 100/100 ochko
✓ Status: Kod master branchga birlashtirildi.`
          : lang === 'ru'
          ? `[CI/CD ПРОВЕРКА ПРОЙДЕНА]
✓ Модульные тесты: 48/48 успешно
✓ Линтер: 0 ошибок, 0 предупреждений
✓ TypeScript проверка типов: 100% OK
✓ LMS Балл: 100/100 очков
✓ Статус: Код объединен с веткой master.`
          : `[CI/CD PIPELINE CHECK PASS]
✓ Unit Tests: 48/48 passed
✓ Linter: 0 warnings, 0 syntax errors
✓ TypeScript strict type check: 100% OK
✓ LMS Score: 100/100 points
✓ Status: Code merged into master branch successfully.`
      );
    }, 1100);
  };

  return (
    <div className="w-full py-16 bg-white dark:bg-[#070A11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Header */}
        <div className="max-w-3xl flex flex-col gap-3">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B40F8] dark:text-[#bfc1ff]">
            {t?.modelBadge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t?.modelTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            {t?.modelDesc}
          </p>
        </div>

        {/* 14-Day Rapid Launch Roadmap */}
        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800 mb-8">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B40F8] dark:text-[#bfc1ff]">
                {t?.roadmapBadge}
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {t?.roadmapTitle}
              </h2>
            </div>
            <button
              onClick={onOpenApply}
              type="button"
              className="px-5 py-2.5 rounded-xl bg-[#3B40F8] hover:bg-[#1917E2] text-white text-xs font-bold font-mono shadow-sm cursor-pointer"
            >
              {t?.roadmapBtn}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#070A11] border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="font-mono text-xs font-bold text-[#3B40F8] block mb-1">
                {t?.roadmapStep1Days}
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {t?.roadmapStep1Title}
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed font-normal">
                {t?.roadmapStep1Desc}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#070A11] border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="font-mono text-xs font-bold text-[#3B40F8] block mb-1">
                {t?.roadmapStep2Days}
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {t?.roadmapStep2Title}
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed font-normal">
                {t?.roadmapStep2Desc}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#070A11] border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="font-mono text-xs font-bold text-[#3B40F8] block mb-1">
                {t?.roadmapStep3Days}
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {t?.roadmapStep3Title}
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed font-normal">
                {t?.roadmapStep3Desc}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#070A11] border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                {t?.roadmapStep4Days}
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {t?.roadmapStep4Title}
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-400 leading-relaxed font-normal">
                {t?.roadmapStep4Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Course Programs Tabs & Syllabus Details */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t?.tracksTitle}
            </h2>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {courses.map((c) => {
                const Icon = c.icon;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCourse(c.id)}
                    type="button"
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                      activeCourse === c.id
                        ? 'bg-[#3B40F8] text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{c.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {currentCourse.title}
                  </h3>
                  <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 dark:bg-[#3B40F8]/10 dark:text-[#bfc1ff] font-mono text-xs font-bold">
                    {currentCourse.level}
                  </span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed font-normal">
                  {currentCourse.description}
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                  Duration / Muddat
                </span>
                <span className="text-base font-extrabold text-slate-900 dark:text-white font-mono">
                  {currentCourse.duration}
                </span>
              </div>
            </div>

            {/* Monthly Syllabus Grid */}
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4">
                {t?.monthlySyllabusTitle}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentCourse.syllabus.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white dark:bg-[#070A11] border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Tags */}
            <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400">
                Tech Stack:
              </span>
              {currentCourse.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-800 dark:text-slate-200 font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Live LMS Simulation Sandbox */}
        <div className="p-8 rounded-3xl bg-white dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#3B40F8]" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {t?.lmsDemoTitle}
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold">
                  {t?.lmsDemoBadge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 mt-1 font-normal">
                {t?.lmsDemoDesc}
              </p>
            </div>

            <button
              onClick={handleRunSimulation}
              disabled={isRunningTest}
              type="button"
              className="px-6 py-3 rounded-xl bg-[#3B40F8] hover:bg-[#1917E2] disabled:opacity-50 text-white font-mono text-xs font-bold shadow-md flex items-center gap-2 cursor-pointer transition-transform active:scale-95"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{isRunningTest ? (t?.lmsRunningBtn || 'Testing...') : (t?.lmsRunBtn || 'Run Test')}</span>
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-[#070A11] border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
            <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-800 text-[11px]">
              <span>student_solution.ts</span>
              <span className="text-emerald-400">Node v20.18.0 • TypeScript 5.6</span>
            </div>
            <div className="text-slate-400">{'// Task: Calculate Fibonacci sequence memoized'}</div>
            <div className="text-slate-200">
              <span className="text-purple-400">export function</span>{' '}
              <span className="text-blue-400">fibMemo</span>(n: <span className="text-amber-400">number</span>, memo = {`{}`}): <span className="text-amber-400">number</span> {`{`}
            </div>
            <div className="pl-4 text-slate-200">
              <span className="text-purple-400">if</span> (n in memo) <span className="text-purple-400">return</span> memo[n];
            </div>
            <div className="pl-4 text-slate-200">
              <span className="text-purple-400">if</span> (n &lt;= 1) <span className="text-purple-400">return</span> n;
            </div>
            <div className="pl-4 text-slate-200">
              <span className="text-purple-400">return</span> (memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo));
            </div>
            <div className="text-slate-200">{`}`}</div>

            {testOutput && (
              <div className="mt-4 pt-3 border-t border-slate-800 text-emerald-400 whitespace-pre-line animate-in fade-in">
                {testOutput}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
