export const INITIAL_STATS = {
  viloyatlarCount: 14,
  markazlarCount: 45,
  oqitilganYoshlar: 2400,
  natijadorlikFoizi: 94,
  signalFoizi: 99.8,
  lmsSyncRate: '99.98%',
  activeMentors: 120,
  liveLectureTitle: 'Senior Staff Engineer',
  currentCenterStream: 'Samarqand_IT',
  lastConnectedHub: "Farg'ona IT Hub",
};

export const INITIAL_PARTNERS = [
  {
    id: 'p-1',
    name: 'CodeCraft Academy',
    region: 'toshkent',
    regionLabel: 'Toshkent',
    address: 'Toshkent sh., Yunusobod t.',
    level: 'Level A+',
    rating: 4.9,
    studentsCount: 1420,
    activeGroups: 8,
    specialties: ['Fullstack Pro', 'DevOps', 'QA Automation'],
    description: "Algorithms, Full-stack web development and cloud infrastructure training academy.",
    descriptionEn: "Algorithms, Full-stack web development and cloud infrastructure training academy.",
    descriptionUz: "Algoritmlar, Full-stack web ishlab chiqish va bulutli infratuzilmaga ixtisoslashgan innovatsion IT ta'lim markazi.",
    descriptionRu: "Инновационный IT-центр, специализирующийся на алгоритмах, Full-stack веб-разработке и DevOps.",
    isActive: true,
    joinedYear: '2023',
    logoType: 'terminal',
    accentColor: '#3B40F8',
  },
  {
    id: 'p-2',
    name: 'Registon IT Lab',
    region: 'samarqand',
    regionLabel: 'Samarqand',
    address: 'Samarqand sh., Universitet xiyoboni',
    level: 'Level A',
    rating: 4.8,
    studentsCount: 890,
    activeGroups: 5,
    specialties: ['Python & AI', 'Frontend React', 'Data Science'],
    description: "Premier tech hub implementing intensive software engineering and Artificial Intelligence modules.",
    descriptionEn: "Premier tech hub implementing intensive software engineering and Artificial Intelligence modules.",
    descriptionUz: "Yoshlar uchun intensiv dasturlash va sun'iy intellekt (AI) modullarini amaliyotda joriy etgan Samarqanddagi yetakchi markaz.",
    descriptionRu: "Ведущий центр Самарканда, внедривший интенсивное обучение программированию и модули искусственного интеллекта.",
    isActive: true,
    joinedYear: '2023',
    logoType: 'hexagon',
    accentColor: '#10B981',
  },
  {
    id: 'p-3',
    name: 'Vodiy Tech Hub',
    region: 'fargona',
    regionLabel: "Farg'ona",
    address: "Farg'ona sh., Al-Farg'oniy shoh ko'chasi",
    level: 'Level A+',
    rating: 5.0,
    studentsCount: 1150,
    activeGroups: 6,
    specialties: ['Backend Go', 'Mobile Flutter', 'Database Arc'],
    description: "Leading tech incubator focused on cross-platform mobile development, cloud systems, and international freelancing.",
    descriptionEn: "Leading tech incubator focused on cross-platform mobile development, cloud systems, and international freelancing.",
    descriptionUz: "Mobil dasturlash (Flutter, iOS), xalqaro frilanserlik va backend muhandisligiga yo'naltirilgan Vodiyning ilg'or platformasi.",
    descriptionRu: "Ведущая технологическая платформа Ферганы по мобильной разработке (Flutter, iOS) и международному фрилансу.",
    isActive: true,
    joinedYear: '2024',
    logoType: 'network',
    accentColor: '#8B5CF6',
  },
  {
    id: 'p-4',
    name: 'Bukhara Code Camp',
    region: 'buxoro',
    regionLabel: 'Buxoro',
    address: "Buxoro sh., I.Mo'minov ko'chasi",
    level: 'Level A',
    rating: 4.9,
    studentsCount: 640,
    activeGroups: 4,
    specialties: ['Front-End React', 'QA Testing', 'Cloud AWS'],
    description: "Modern IT campus training high-caliber software developers with remote international internship opportunities.",
    descriptionEn: "Modern IT campus training high-caliber software developers with remote international internship opportunities.",
    descriptionUz: "Front-End arxitekturasi va QA injiniring bo'yicha yuqori malakali yosh mutaxassislar tayyorlovchi zamonaviy Buxoro IT kampusi.",
    descriptionRu: "Современный IT-кампус Бухары по подготовке фронтенд-архитекторов и инженеров контроля качества (QA).",
    isActive: true,
    joinedYear: '2024',
    logoType: 'cpu',
    accentColor: '#EC4899',
  },
  {
    id: 'p-5',
    name: 'TechSprint Hub',
    region: 'toshkent',
    regionLabel: 'Toshkent',
    address: 'Toshkent sh., Chilonzor tumani',
    level: 'Level A+',
    rating: 4.95,
    studentsCount: 420,
    activeGroups: 4,
    specialties: ['Fullstack Pro', 'DevOps', 'QA Automation'],
    description: "High-velocity programming laboratory delivering junior and middle engineering talent directly to startups.",
    descriptionEn: "High-velocity programming laboratory delivering junior and middle engineering talent directly to startups.",
    descriptionUz: "Yuqori sur'atdagi dasturlash inkubatori. Xalqaro startaplar uchun to'g'ridan-to'g'ri junior/middle mutaxassislar yetishtiradi.",
    descriptionRu: "Высокоскоростной инкубатор разработки, поставляющий junior/middle специалистов напрямую в технологические стартапы.",
    isActive: true,
    joinedYear: '2024',
    logoType: 'code',
    accentColor: '#F59E0B',
  },
  {
    id: 'p-6',
    name: 'Andijon Digital Valley',
    region: 'andijon',
    regionLabel: 'Andijon',
    address: 'Andijon sh., Bobur shoh ko‘chasi',
    level: 'Level A',
    rating: 4.85,
    studentsCount: 530,
    activeGroups: 4,
    specialties: ['Node.js API', 'Docker & K8s', 'React Native'],
    description: "Next-generation IT ecosystem training export-oriented software engineers in the Fergana valley.",
    descriptionEn: "Next-generation IT ecosystem training export-oriented software engineers in the Fergana valley.",
    descriptionUz: "Andijon viloyatida zamonaviy autsorsing va eksport dasturchilarini tayyorlovchi yangi avlod IT ekotizimi.",
    descriptionRu: "IT-экосистема нового поколения в Андижане по подготовке квалифицированных экспортно-ориентированных инженеров.",
    isActive: true,
    joinedYear: '2024',
    logoType: 'network',
    accentColor: '#06B6D4',
  },
];

export const INITIAL_APPLICATIONS = [
  {
    id: 'app-101',
    centerName: 'Samarqand IT Space',
    leaderName: 'Sherzod Mamadaliyev',
    phone: '+998 (93) 123-45-67',
    email: 'info@samitspace.uz',
    region: 'Samarqand viloyati',
    studentsCountRange: '50-150',
    message: "Currently 80 active students. We want to launch the Codenation Hybrid Fullstack track.",
    status: 'tasdiqlandi',
    submittedAt: '2025-05-10 14:30',
    adminNotes: "Contacted. Agreement phase in progress.",
  },
  {
    id: 'app-102',
    centerName: 'Namangan Future Code',
    leaderName: 'Dilshod Rahmatov',
    phone: '+998 (97) 555-88-99',
    email: 'futurecode.nam@mail.ru',
    region: 'Namangan viloyati',
    studentsCountRange: '150-500',
    message: "We have 3 fully equipped computer labs. Looking forward to certifying our mentors with Codenation.",
    status: 'korilmoqda',
    submittedAt: '2025-05-14 09:15',
    adminNotes: "Facility audit ongoing.",
  },
  {
    id: 'app-103',
    centerName: 'Qarshi Innovation Lab',
    leaderName: 'Behzod Jo‘rayev',
    phone: '+998 (99) 777-11-22',
    email: 'lab@qarshi-it.uz',
    region: 'Qashqadaryo viloyati',
    studentsCountRange: '1-50',
    message: "New tech academy opening soon. Applying for Codenation accreditation for 14-day launch.",
    status: 'yangi',
    submittedAt: '2025-05-16 11:45',
  },
];

const STORAGE_KEY = 'codenation_store_v3';

const DATA_CHANGE_EVENT = 'codenation_data_changed';

export function getAppData() {
  if (typeof window === 'undefined') {
    return {
      stats: INITIAL_STATS,
      partners: INITIAL_PARTNERS,
      applications: INITIAL_APPLICATIONS,
    };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = {
        stats: INITIAL_STATS,
        partners: INITIAL_PARTNERS,
        applications: INITIAL_APPLICATIONS,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    const parsed = JSON.parse(raw);
    return {
      stats: parsed.stats || INITIAL_STATS,
      partners: Array.isArray(parsed.partners) ? parsed.partners : INITIAL_PARTNERS,
      applications: Array.isArray(parsed.applications) ? parsed.applications : INITIAL_APPLICATIONS,
    };
  } catch (e) {
    console.error('Failed to parse app data', e);
    return {
      stats: INITIAL_STATS,
      partners: INITIAL_PARTNERS,
      applications: INITIAL_APPLICATIONS,
    };
  }
}

export function saveAppData(data) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event(DATA_CHANGE_EVENT));
  } catch (e) {
    console.error('Failed to save app data', e);
  }
}

export function onDataChange(callback) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(DATA_CHANGE_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(DATA_CHANGE_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

export function submitApplication(data) {
  const current = getAppData();
  const dateStr = new Date().toISOString().replace('T', ' ').substring(0, 16);
  const newApp = {
    ...data,
    id: 'app-' + Date.now(),
    status: 'yangi',
    submittedAt: dateStr,
  };
  current.applications.unshift(newApp);
  saveAppData(current);
  return newApp;
}

export function updateApplication(id, updates) {
  const current = getAppData();
  current.applications = current.applications.map(app => (app.id === id ? { ...app, ...updates } : app));
  saveAppData(current);
}

export function deleteApplication(id) {
  const current = getAppData();
  current.applications = current.applications.filter(app => app.id !== id);
  saveAppData(current);
}

export function addPartner(partner) {
  const current = getAppData();
  const newPartner = {
    ...partner,
    id: 'p-' + Date.now(),
  };
  current.partners.push(newPartner);
  current.stats.markazlarCount = current.partners.length;
  saveAppData(current);
  return newPartner;
}

export function updatePartner(id, updates) {
  const current = getAppData();
  current.partners = current.partners.map(p => (p.id === id ? { ...p, ...updates } : p));
  saveAppData(current);
}

export function deletePartner(id) {
  const current = getAppData();
  current.partners = current.partners.filter(p => p.id !== id);
  current.stats.markazlarCount = current.partners.length;
  saveAppData(current);
}

export function updateStats(newStats) {
  const current = getAppData();
  current.stats = { ...current.stats, ...newStats };
  saveAppData(current);
}

export function resetToDefaults() {
  const initial = {
    stats: INITIAL_STATS,
    partners: INITIAL_PARTNERS,
    applications: INITIAL_APPLICATIONS,
  };
  saveAppData(initial);
}
