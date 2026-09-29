export interface PersonalIdentity {
  name: string;
  moniker: string;
  role: string;
  education: string;
  location: string;
  subLocation: string;
  intro: string;
  currentYear: string;
  placeholders: {
    photo: string;
    email: string;
    major: string;
    schoolYears: string;
  };
}

export interface StackGroup {
  id: string;
  title: string;
  items: { name: string; note: string }[];
}

export type ProjectPreviewKind = "auth" | "rental";

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  year: string;
  tech: string[];
  overview: string;
  features: string[];
  role: string;
  status: string;
  preview: ProjectPreviewKind;
  sourceLinkText: string;
  sourceUrl?: string;
}

export interface JourneyMilestone {
  step: string;
  title: string;
  subtext: string;
  status: "Completed" | "Current" | "Upcoming";
  detail: string;
}

export interface SocialChannel {
  id: string;
  label: string;
  displayValue: string;
  tagline: string;
  url: string;
  isPlaceholder: boolean;
}

export const PERSONAL_DATA: PersonalIdentity = {
  name: "Dendra Adira Pratama",
  moniker: "D/A",
  role: "Backend Developer",
  education: "SMK Jakarta Pusat 1",
  location: "Jakarta, Indonesia",
  subLocation: "Jakarta Barat",
  intro:
    "I build backend systems while continuously learning how software works beneath the interface.",
  currentYear: "2026",
  placeholders: {
    photo: "[YOUR_PHOTO]",
    email: "[YOUR_EMAIL]",
    major: "[YOUR_MAJOR]",
    schoolYears: "[YOUR_SCHOOL_YEARS]",
  },
};

/* ============================================================
   OFFICIAL SOCIAL ACCOUNTS
   Ganti nilai di sini untuk memperbarui semua link sekaligus.
   ============================================================ */
export const GITHUB_URL = "https://github.com/adiradendra26-hash";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/dendra-adira-84b33b42b/";

// Nomor diformat internasional tanpa "+"/"0" awalan: 085892696792 -> 6285892696792
const WHATSAPP_NUMBER = "6285892696792";
const WHATSAPP_MESSAGE =
  "Halo Dendra, saya melihat portfolio kamu dan ingin terhubung.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const NAVIGATION_LINKS = [
  { number: "01", label: "ABOUT", href: "#about" },
  { number: "02", label: "WORK", href: "#work" },
  { number: "03", label: "STACK", href: "#stack" },
  { number: "04", label: "JOURNEY", href: "#journey" },
  { number: "05", label: "CONTACT", href: "#contact" },
];

export const HERO_META = [
  { label: "BASED IN", value: "JAKARTA, INDONESIA" },
  { label: "FOCUS", value: "BACKEND DEVELOPMENT" },
  { label: "STATUS", value: "CURRENTLY LEARNING" },
];

export const ABOUT_SECTION = {
  number: "01",
  title: "About",
  body: [
    "Saya adalah pelajar SMK Jakarta Pusat 1 yang sedang mengembangkan kemampuan di bidang software development, dengan fokus pada backend development.",
    "Saya tertarik pada API, authentication, database, dan system architecture — terutama pada bagaimana setiap bagian aplikasi bekerja bersama di balik layar.",
  ],
  metadata: [
    { label: "LOCATION", value: "Jakarta Barat" },
    { label: "EDUCATION", value: "SMK Jakarta Pusat 1" },
    { label: "FOCUS", value: "Backend Development" },
    { label: "STATUS", value: "Currently Learning" },
  ],
};

export const STACK_GROUPS: StackGroup[] = [
  {
    id: "backend",
    title: "Backend",
    items: [
      { name: "Node.js", note: "JavaScript runtime" },
      { name: "Express.js", note: "Minimal API framework" },
      { name: "REST API", note: "HTTP interface design" },
      { name: "JWT", note: "Stateless authentication" },
    ],
  },
  {
    id: "database",
    title: "Database",
    items: [
      { name: "MySQL", note: "Relational database" },
      { name: "Prisma", note: "Type-safe ORM" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    items: [
      { name: "Git", note: "Version control" },
      { name: "GitHub", note: "Code hosting" },
      { name: "Postman", note: "API testing" },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "auth-system",
    number: "01",
    title: "Backend Authentication System",
    tagline:
      "Authentication backend for register, login, and protected API endpoints.",
    year: "2025 — 2026",
    tech: ["Node.js", "Express.js", "Prisma", "MySQL", "JWT"],
    overview:
      "Sistem otentikasi backend yang mengelola pendaftaran user, hashing password, validasi input, dan proteksi route menggunakan JSON Web Token berbasis stateless authorization.",
    features: [
      "Register & login dengan validasi input",
      "Password hashing menggunakan bcrypt",
      "JWT authentication untuk sesi stateless",
      "Protected endpoint via authorization middleware",
      "Integrasi database dengan Prisma & MySQL",
    ],
    role: "Backend Developer",
    status: "Completed",
    preview: "auth",
    sourceLinkText: "SOURCE COMING SOON",
  },
  {
    id: "starlink-rental",
    number: "02",
    title: "Starlink Rental Management",
    tagline:
      "Rental management API for device inventory, orders, and availability tracking.",
    year: "2025 — 2026",
    tech: ["Node.js", "Express.js", "Prisma", "MySQL", "REST API"],
    overview:
      "Sistem backend manajemen sewa perangkat Starlink: memonitor ketersediaan unit, pencatatan transaksi sewa, jadwal peminjaman, dan status inventaris secara terstruktur.",
    features: [
      "CRUD API untuk inventaris terminal & kit",
      "Availability tracking berdasarkan tanggal reservasi",
      "Relasi database User, Device, dan RentalOrder",
      "Response handler dengan error handling konsisten",
      "Query optimization via Prisma relation queries",
    ],
    role: "Backend Developer",
    status: "Completed",
    preview: "rental",
    sourceLinkText: "SOURCE COMING SOON",
  },
];

export const PROJECTS_NOTE = "Next case study is in progress.";

export const JOURNEY: JourneyMilestone[] = [
  {
    step: "01",
    title: "SMK Jakarta Pusat 1",
    subtext: "Student",
    status: "Completed",
    detail:
      "Membangun fondasi logika pemrograman dan disiplin berpikir terstruktur.",
  },
  {
    step: "02",
    title: "Learning Backend",
    subtext: "Node.js / Express",
    status: "Completed",
    detail:
      "Mempelajari runtime asynchronous, HTTP, middleware, dan arsitektur RESTful.",
  },
  {
    step: "03",
    title: "Database",
    subtext: "MySQL / Prisma",
    status: "Completed",
    detail:
      "Memahami normalisasi data, relasi antar tabel, migrasi, dan query via Prisma ORM.",
  },
  {
    step: "04",
    title: "Building Real Projects",
    subtext: "Authentication / Rental System",
    status: "Current",
    detail:
      "Menerapkan otentikasi berbasis JWT dan sistem manajemen rental untuk kebutuhan nyata.",
  },
  {
    step: "05",
    title: "Next Chapter",
    subtext: "More to build.",
    status: "Upcoming",
    detail:
      "Eksplorasi caching, containerization, deployment, dan keandalan sistem.",
  },
];

export const CURRENTLY_LEARNING = {
  title: "Currently Learning",
  topics: [
    "Backend Architecture",
    "REST API Design",
    "Database Management",
    "Authentication",
    "Clean Code",
  ],
};

export const CONTACT_SECTION = {
  number: "05",
  title: "Contact",
  headline: "Let's connect.",
  subtext: "Have a project, an opportunity, or simply want to connect?",
  location: "Jakarta Barat, Indonesia",
  note: "Pesan biasanya dibalas dalam 1×24 jam.",
  channels: [
    {
      id: "github",
      label: "GitHub",
      displayValue: "@adiradendra26-hash",
      tagline: "Code, experiments & contributions",
      url: GITHUB_URL,
      isPlaceholder: false,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      displayValue: "dendra-adira-84b33b42b",
      tagline: "Connect professionally",
      url: LINKEDIN_URL,
      isPlaceholder: false,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      displayValue: "Let's talk",
      tagline: "Opens a ready-made chat",
      url: WHATSAPP_URL,
      isPlaceholder: false,
    },
  ] as SocialChannel[],
};

export const FOOTER_DATA = {
  name: "Dendra Adira Pratama",
  role: "Backend Developer — Student",
  location: "Jakarta Barat, Indonesia",
  year: "2026",
  backToTop: "Back to top",
};
