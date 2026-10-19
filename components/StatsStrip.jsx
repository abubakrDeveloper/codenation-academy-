'use client';

import React from 'react';
import { MapPin, Building2, GraduationCap, TrendingUp } from 'lucide-react';

export function StatsStrip({ stats, t }) {
  const statItems = [
    {
      label: t?.statsRegionsTitle || 'Regions Covered',
      value: `${stats?.viloyatlarCount || 14}+`,
      unit: t?.statsRegionsUnit || 'Regions',
      desc: t?.statsRegionsDesc || 'Across all provinces of Uzbekistan',
      icon: MapPin,
      isPrimary: true,
    },
    {
      label: t?.statsCentersTitle || 'Active Centers',
      value: `${stats?.markazlarCount || 45}+`,
      unit: t?.statsCentersUnit || 'Centers',
      desc: t?.statsCentersDesc || 'Standardized curriculum',
      icon: Building2,
      isPrimary: false,
    },
    {
      label: t?.statsStudentsTitle || 'Students Trained',
      value: `${(stats?.oqitilganYoshlar || 2400).toLocaleString()}+`,
      unit: t?.statsStudentsUnit || 'Students',
      desc: t?.statsStudentsDesc || 'Software engineers pipeline',
      icon: GraduationCap,
      isPrimary: true,
    },
    {
      label: t?.statsOutcomeTitle || 'Employment Rate',
      value: `${stats?.natijadorlikFoizi || 94}%`,
      unit: t?.statsOutcomeUnit || 'Careers',
      desc: t?.statsOutcomeDesc || 'Placed within 6 months',
      icon: TrendingUp,
      isPrimary: false,
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-[#0B0F19] py-12 border-y border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col gap-1.5 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase font-bold text-slate-600 dark:text-slate-400 tracking-wider">
                    {item.label}
                  </span>
                  <Icon className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                </div>

                <div className="flex items-baseline gap-2 mt-1">
                  <span
                    className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
                      item.isPrimary
                        ? 'text-[#3B40F8] dark:text-[#bfc1ff]'
                        : 'text-slate-900 dark:text-white'
                    }`}
                  >
                    {item.value}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
                    {item.unit}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 font-medium">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
