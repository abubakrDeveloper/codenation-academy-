'use client';

import React, { useState } from 'react';
import {
  getAppData,
  updateStats,
  addPartner,
  updatePartner,
  deletePartner,
  updateApplication,
  deleteApplication,
  resetToDefaults,
} from '../lib/storage';
import {
  X,
  Lock,
  Key,
  BarChart3,
  Building,
  FileSpreadsheet,
  Settings,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  Save,
  RotateCcw,
  LogOut,
} from 'lucide-react';

export function AdminModal({ isOpen, onClose, t, lang = 'en' }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [activeTab, setActiveTab] = useState('stats');

  const [data, setData] = useState(() => getAppData());

  // Edit / Add Partner Form State
  const [isEditingPartner, setIsEditingPartner] = useState(false);
  const [editingPartnerId, setEditingPartnerId] = useState(null);
  const [partnerForm, setPartnerForm] = useState({
    name: '',
    region: 'toshkent',
    regionLabel: 'Toshkent',
    address: '',
    level: 'Level A+',
    rating: 4.9,
    studentsCount: 300,
    activeGroups: 3,
    specialties: ['Fullstack Pro', 'DevOps'],
    description: '',
    descriptionEn: '',
    descriptionUz: '',
    descriptionRu: '',
    isActive: true,
    joinedYear: '2025',
    logoType: 'terminal',
    accentColor: '#3B40F8',
  });
  const [specsInput, setSpecsInput] = useState('Fullstack Pro, DevOps');

  // Stats Form State
  const [statsForm, setStatsForm] = useState(() => data.stats);
  const [statsSavedMsg, setStatsSavedMsg] = useState(false);

  // Application filter
  const [appFilter, setAppFilter] = useState('all');

  if (!isOpen) return null;

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === '7777' || pin === 'admin' || pin === '1234') {
      setIsAuthenticated(true);
      setPinError(false);
      setPin('');
    } else {
      setPinError(true);
    }
  };

  const handleSaveStats = (e) => {
    e.preventDefault();
    updateStats(statsForm);
    const updated = getAppData();
    setData(updated);
    setStatsSavedMsg(true);
    setTimeout(() => setStatsSavedMsg(false), 3000);
  };

  const handleSavePartner = (e) => {
    e.preventDefault();
    const specialtiesArray = specsInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const partnerData = {
      ...partnerForm,
      specialties: specialtiesArray.length > 0 ? specialtiesArray : ['Fullstack'],
      description: partnerForm.description || partnerForm.descriptionEn || partnerForm.descriptionUz || 'IT Academy',
      descriptionEn: partnerForm.descriptionEn || partnerForm.description,
      descriptionUz: partnerForm.descriptionUz || partnerForm.description,
      descriptionRu: partnerForm.descriptionRu || partnerForm.description,
      regionLabel:
        partnerForm.region === 'toshkent'
          ? 'Toshkent'
          : partnerForm.region === 'samarqand'
          ? 'Samarqand'
          : partnerForm.region === 'fargona'
          ? "Farg'ona"
          : partnerForm.region === 'buxoro'
          ? 'Buxoro'
          : partnerForm.region === 'andijon'
          ? 'Andijon'
          : partnerForm.region === 'namangan'
          ? 'Namangan'
          : 'Boshqa',
    };

    if (isEditingPartner && editingPartnerId) {
      updatePartner(editingPartnerId, partnerData);
    } else {
      addPartner(partnerData);
    }

    setData(getAppData());
    setIsEditingPartner(false);
    setEditingPartnerId(null);
  };

  const startEditPartner = (p) => {
    setPartnerForm({
      name: p.name,
      region: p.region,
      regionLabel: p.regionLabel,
      address: p.address,
      level: p.level,
      rating: p.rating,
      studentsCount: p.studentsCount,
      activeGroups: p.activeGroups,
      specialties: p.specialties,
      description: p.description || '',
      descriptionEn: p.descriptionEn || p.description || '',
      descriptionUz: p.descriptionUz || p.description || '',
      descriptionRu: p.descriptionRu || p.description || '',
      isActive: p.isActive,
      joinedYear: p.joinedYear,
      logoType: p.logoType || 'terminal',
      accentColor: p.accentColor || '#3B40F8',
    });
    setSpecsInput((p.specialties || []).join(', '));
    setEditingPartnerId(p.id);
    setIsEditingPartner(true);
  };

  const handleDeletePartner = (id) => {
    if (confirm('Are you sure you want to delete this partner center?')) {
      deletePartner(id);
      setData(getAppData());
    }
  };

  const handleUpdateAppStatus = (id, status) => {
    updateApplication(id, { status });
    setData(getAppData());
  };

  const handleDeleteApp = (id) => {
    deleteApplication(id);
    setData(getAppData());
  };

  const handleResetSystem = () => {
    if (confirm('Restore all data and statistics to default factory state?')) {
      resetToDefaults();
      const def = getAppData();
      setData(def);
      setStatsForm(def.stats);
    }
  };

  const filteredApps = (data.applications || []).filter((app) =>
    appFilter === 'all' ? true : app.status === appFilter
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in">
      <div className="bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-[#070A11] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#3B40F8]/10 text-[#3B40F8] flex items-center justify-center">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {t?.adminModalTitle || 'Backdoor Admin Console'}
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold">
                  {t?.adminModalBadge || 'LIVE SYNC'}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                {t?.adminModalSub || 'Direct instant data updates'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={() => setIsAuthenticated(false)}
                type="button"
                className="p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title="Lock"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body: Authentication Screen or Dashboard */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center max-w-md mx-auto my-auto">
            <div className="w-16 h-16 rounded-3xl bg-[#3B40F8]/10 text-[#3B40F8] flex items-center justify-center mb-6">
              <Lock className="w-8 h-8" />
            </div>

            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {t?.adminAuthTitle || 'Admin Passcode Verification'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium">
              {t?.adminAuthSub || 'Enter your administrator PIN code to access the console.'}
            </p>

            <form onSubmit={handlePinSubmit} className="w-full space-y-4">
              <input
                type="password"
                maxLength={16}
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setPinError(false);
                }}
                placeholder={t?.adminPinPlaceholder || '••••'}
                className="w-full text-center tracking-[0.4em] font-mono text-xl py-3 px-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3B40F8] font-bold"
                autoFocus
              />

              {pinError && (
                <div className="text-xs text-rose-500 font-mono font-bold">
                  {t?.adminPinError || 'Incorrect passcode! Please try again.'}
                </div>
              )}

              <div className="flex flex-col gap-2 pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#3B40F8] hover:bg-[#1917E2] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  {t?.adminAuthBtn || 'Unlock Console'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Tabs Header */}
            <div className="px-6 bg-slate-100 dark:bg-[#070A11] border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto">
              <button
                onClick={() => setActiveTab('stats')}
                className={`py-3 px-4 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'stats'
                    ? 'border-[#3B40F8] text-[#3B40F8] dark:text-[#bfc1ff] font-bold'
                    : 'border-transparent text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>{t?.adminTabStats || 'Live Metrics'}</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('partners');
                  setIsEditingPartner(false);
                }}
                className={`py-3 px-4 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'partners'
                    ? 'border-[#3B40F8] text-[#3B40F8] dark:text-[#bfc1ff] font-bold'
                    : 'border-transparent text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Building className="w-4 h-4" />
                <span>{t?.adminTabCenters || 'Partner Centers'} ({data.partners.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('apps')}
                className={`py-3 px-4 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'apps'
                    ? 'border-[#3B40F8] text-[#3B40F8] dark:text-[#bfc1ff] font-bold'
                    : 'border-transparent text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>{t?.adminTabApps || 'Applications'} ({data.applications.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('tools')}
                className={`py-3 px-4 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'tools'
                    ? 'border-[#3B40F8] text-[#3B40F8] dark:text-[#bfc1ff] font-bold'
                    : 'border-transparent text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>{t?.adminTabTools || 'Reset & Backup'}</span>
              </button>
            </div>

            {/* Tab 1: Stats & Stream Manager */}
            {activeTab === 'stats' && (
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {t?.adminStatsHeading}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-normal">
                    {t?.adminStatsSub}
                  </p>
                </div>

                {statsSavedMsg && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>{t?.adminSavedNotice}</span>
                  </div>
                )}

                <form onSubmit={handleSaveStats} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1.5 uppercase">
                        {t?.adminFieldRegions}
                      </label>
                      <input
                        type="number"
                        value={statsForm.viloyatlarCount}
                        onChange={(e) =>
                          setStatsForm({
                            ...statsForm,
                            viloyatlarCount: Number(e.target.value),
                          })
                        }
                        className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3B40F8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1.5 uppercase">
                        {t?.adminFieldCenters}
                      </label>
                      <input
                        type="number"
                        value={statsForm.markazlarCount}
                        onChange={(e) =>
                          setStatsForm({
                            ...statsForm,
                            markazlarCount: Number(e.target.value),
                          })
                        }
                        className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3B40F8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1.5 uppercase">
                        {t?.adminFieldStudents}
                      </label>
                      <input
                        type="number"
                        value={statsForm.oqitilganYoshlar}
                        onChange={(e) =>
                          setStatsForm({
                            ...statsForm,
                            oqitilganYoshlar: Number(e.target.value),
                          })
                        }
                        className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3B40F8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1.5 uppercase">
                        {t?.adminFieldOutcome}
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={statsForm.natijadorlikFoizi}
                        onChange={(e) =>
                          setStatsForm({
                            ...statsForm,
                            natijadorlikFoizi: Number(e.target.value),
                          })
                        }
                        className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3B40F8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1.5 uppercase">
                        {t?.adminFieldSignal}
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={statsForm.signalFoizi}
                        onChange={(e) =>
                          setStatsForm({
                            ...statsForm,
                            signalFoizi: Number(e.target.value),
                          })
                        }
                        className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3B40F8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1.5 uppercase">
                        {t?.adminFieldMentors}
                      </label>
                      <input
                        type="number"
                        value={statsForm.activeMentors}
                        onChange={(e) =>
                          setStatsForm({
                            ...statsForm,
                            activeMentors: Number(e.target.value),
                          })
                        }
                        className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3B40F8]"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-[#3B40F8] hover:bg-[#1917E2] text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>{t?.adminSaveStatsBtn || 'Save Figures'}</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Tab 2: Partners Manager */}
            {activeTab === 'partners' && (
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {t?.adminCentersHeading}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-normal">
                      {t?.adminCentersSub}
                    </p>
                  </div>

                  {!isEditingPartner && (
                    <button
                      onClick={() => {
                        setIsEditingPartner(true);
                        setEditingPartnerId(null);
                        setPartnerForm({
                          name: '',
                          region: 'toshkent',
                          regionLabel: 'Toshkent',
                          address: '',
                          level: 'Level A+',
                          rating: 4.9,
                          studentsCount: 200,
                          activeGroups: 3,
                          specialties: ['Fullstack Pro'],
                          description: '',
                          descriptionEn: '',
                          descriptionUz: '',
                          descriptionRu: '',
                          isActive: true,
                          joinedYear: '2025',
                          logoType: 'terminal',
                          accentColor: '#3B40F8',
                        });
                        setSpecsInput('Fullstack Pro, DevOps');
                      }}
                      className="px-4 py-2 rounded-xl bg-[#3B40F8] hover:bg-[#1917E2] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>{t?.adminAddCenterBtn || 'Add Center'}</span>
                    </button>
                  )}
                </div>

                {isEditingPartner ? (
                  <form onSubmit={handleSavePartner} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
                    <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                      {editingPartnerId ? 'Edit Partner Center' : 'Add New Partner Center'}
                    </h5>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1 uppercase">
                          Center Name
                        </label>
                        <input
                          type="text"
                          required
                          value={partnerForm.name}
                          onChange={(e) =>
                            setPartnerForm({ ...partnerForm, name: e.target.value })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1 uppercase">
                          Region
                        </label>
                        <select
                          value={partnerForm.region}
                          onChange={(e) =>
                            setPartnerForm({
                              ...partnerForm,
                              region: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                        >
                          <option value="toshkent">Toshkent</option>
                          <option value="samarqand">Samarqand</option>
                          <option value="fargona">Farg'ona</option>
                          <option value="buxoro">Buxoro</option>
                          <option value="andijon">Andijon</option>
                          <option value="namangan">Namangan</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1 uppercase">
                        Address
                      </label>
                      <input
                        type="text"
                        required
                        value={partnerForm.address}
                        onChange={(e) =>
                          setPartnerForm({ ...partnerForm, address: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1 uppercase">
                          Accreditation Level
                        </label>
                        <select
                          value={partnerForm.level}
                          onChange={(e) =>
                            setPartnerForm({
                              ...partnerForm,
                              level: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                        >
                          <option value="Level A+">Level A+</option>
                          <option value="Level A">Level A</option>
                          <option value="Level B+">Level B+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1 uppercase">
                          Students Count
                        </label>
                        <input
                          type="number"
                          value={partnerForm.studentsCount}
                          onChange={(e) =>
                            setPartnerForm({
                              ...partnerForm,
                              studentsCount: Number(e.target.value),
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1 uppercase">
                          Logo Emblem Type
                        </label>
                        <select
                          value={partnerForm.logoType}
                          onChange={(e) =>
                            setPartnerForm({
                              ...partnerForm,
                              logoType: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                        >
                          <option value="terminal">Terminal</option>
                          <option value="hexagon">Hexagon</option>
                          <option value="network">Network</option>
                          <option value="cpu">CPU</option>
                          <option value="code">Code</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1 uppercase">
                        Specialties (comma-separated)
                      </label>
                      <input
                        type="text"
                        value={specsInput}
                        onChange={(e) => setSpecsInput(e.target.value)}
                        placeholder="Fullstack Pro, DevOps, Python AI"
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                      />
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1 uppercase">
                          Description (English)
                        </label>
                        <textarea
                          rows={2}
                          value={partnerForm.descriptionEn}
                          onChange={(e) =>
                            setPartnerForm({ ...partnerForm, descriptionEn: e.target.value })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1 uppercase">
                          Tavsif (O'zbekcha)
                        </label>
                        <textarea
                          rows={2}
                          value={partnerForm.descriptionUz}
                          onChange={(e) =>
                            setPartnerForm({ ...partnerForm, descriptionUz: e.target.value })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-800 dark:text-slate-300 mb-1 uppercase">
                          Описание (Русский)
                        </label>
                        <textarea
                          rows={2}
                          value={partnerForm.descriptionRu}
                          onChange={(e) =>
                            setPartnerForm({ ...partnerForm, descriptionRu: e.target.value })
                          }
                          className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="submit"
                        className="px-6 py-2 rounded-xl bg-[#3B40F8] hover:bg-[#1917E2] text-white font-bold text-xs cursor-pointer"
                      >
                        Save Center
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsEditingPartner(false)}
                        className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 text-xs font-semibold cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-3">
                    {data.partners.map((partner) => (
                      <div
                        key={partner.id}
                        className="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="w-3 h-3 rounded-full shrink-0"
                            style={{ backgroundColor: partner.accentColor || '#3B40F8' }}
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                                {partner.name}
                              </h5>
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                {partner.regionLabel}
                              </span>
                              <span className="text-[10px] text-[#3B40F8] font-bold">
                                {partner.level}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                              {partner.address} • {partner.studentsCount} students • Rating: {partner.rating}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => startEditPartner(partner)}
                            className="p-2 rounded-xl text-slate-600 hover:text-[#3B40F8] hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeletePartner(partner.id)}
                            className="p-2 rounded-xl text-slate-600 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tab 3: Applications Manager */}
            {activeTab === 'apps' && (
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {t?.adminAppsHeading}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-normal">
                      {t?.adminAppsSub}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-mono">
                    {['all', 'yangi', 'tasdiqlandi'].map((st) => (
                      <button
                        key={st}
                        onClick={() => setAppFilter(st)}
                        className={`px-3 py-1 rounded-lg capitalize cursor-pointer font-bold ${
                          appFilter === st
                            ? 'bg-white dark:bg-[#3B40F8] text-[#3B40F8] dark:text-white shadow-xs'
                            : 'text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {filteredApps.map((app) => (
                    <div
                      key={app.id}
                      className="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col gap-2 shadow-xs"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                              {app.centerName}
                            </h5>
                            <span className="text-xs text-slate-600 dark:text-slate-400">
                              (Leader: {app.leaderName})
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                            Tel: {app.phone} • Email: {app.email} • Region: {app.region}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <select
                            value={app.status}
                            onChange={(e) =>
                              handleUpdateAppStatus(app.id, e.target.value)
                            }
                            className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono border border-slate-300 dark:border-slate-700"
                          >
                            <option value="yangi">New</option>
                            <option value="korilmoqda">In Review</option>
                            <option value="tasdiqlandi">Approved</option>
                            <option value="rad_etildi">Rejected</option>
                          </select>
                          <button
                            onClick={() => handleDeleteApp(app.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-500 cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {app.message && (
                        <p className="text-xs text-slate-700 dark:text-slate-300 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 font-mono">
                          {app.message}
                        </p>
                      )}
                    </div>
                  ))}

                  {filteredApps.length === 0 && (
                    <p className="text-xs text-slate-500 text-center py-8">
                      No applications in this category.
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Tab 4: Reset & Backup */}
            {activeTab === 'tools' && (
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {t?.adminResetHeading}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-normal">
                    {t?.adminResetSub}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-4">
                  <div className="flex items-center gap-3 text-rose-600 dark:text-rose-400">
                    <RotateCcw className="w-5 h-5" />
                    <span className="font-bold text-sm">Factory Defaults Reset</span>
                  </div>
                  <p className="text-xs text-rose-900 dark:text-rose-300 leading-relaxed font-normal">
                    Resetting will clear custom changes in localStorage and restore default partner centers and statistics.
                  </p>
                  <button
                    onClick={handleResetSystem}
                    type="button"
                    className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs cursor-pointer shadow-sm"
                  >
                    {t?.adminResetBtn || 'Restore Defaults'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
