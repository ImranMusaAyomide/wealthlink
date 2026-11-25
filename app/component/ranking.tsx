"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Users,
  Trophy,
  Link2,
  HeartHandshake,
  MessageSquare,
  Bell,
  User,
  CreditCard,
  Settings,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
  BadgeCheck,
} from "lucide-react";

/* ─── Sidebar nav ─────────────────────────────────────────────────────────── */
const navItems = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Explore", icon: Users, href: "/explore" },
  { label: "Rankings", icon: Trophy, active: true, href: "/rankings" },
  { label: "Connections", icon: Link2, href: "#" },
  { label: "Debt Relief", icon: HeartHandshake, href: "#" },
  { label: "Messages", icon: MessageSquare, href: "#" },
  { label: "Notifications", icon: Bell, href: "#" },
  { label: "My Profile", icon: User, href: "#" },
  { label: "Donation History", icon: CreditCard, href: "/donationhistory" },
  { label: "Settings", icon: Settings, href: "#" },
];

/* ─── Top 3 podium ────────────────────────────────────────────────────────── */
const podium = [
  {
    rank: 2,
    initials: "PR",
    name: "Priya Raman",
    handle: "@priyaraman",
    location: "United Kingdom",
    points: "11,920",
    bg: "bg-purple-500",
    ring: "ring-purple-200",
    size: "w-16 h-16 text-lg",
  },
  {
    rank: 1,
    initials: "WK",
    name: "Wanjiru Kamau",
    handle: "@wanjirukamau",
    location: "Kenya",
    points: "12,480",
    bg: "bg-green-700",
    ring: "ring-green-200",
    size: "w-20 h-20 text-xl",
  },
  {
    rank: 3,
    initials: "TN",
    name: "Thabo Nkosi",
    handle: "@thabo.nkosi",
    location: "South Africa",
    bg: "bg-yellow-700",
    ring: "ring-yellow-200",
    size: "w-16 h-16 text-lg",
  },
];

/* ─── Leaderboard rows 4-8 ────────────────────────────────────────────────── */
const leaderboard = [
  { rank: 4, initials: "DO", name: "Daniel Ortiz", handle: "@danielortiz", location: "United States", points: "9,740", bg: "bg-orange-500" },
  { rank: 5, initials: "FZ", name: "Fatima Al Zaabi", handle: "@fatimaz", location: "United Arab Emirates", points: "9,215", bg: "bg-orange-400" },
  { rank: 6, initials: "MT", name: "Mei Lin Tran", handle: "@meilintran", location: "Canada", points: "8,890", bg: "bg-teal-600" },
  { rank: 7, initials: "SA", name: "Sofia Alvarez", handle: "@sofia.alvarez", location: "Spain", points: "8,310", bg: "bg-green-600" },
  { rank: 8, initials: "YD", name: "Yusuf Demir", handle: "@yusufdemir", location: "Germany", points: "7,960", bg: "bg-yellow-500" },
];

/* ─── Right sidebar data ──────────────────────────────────────────────────── */
const people = [
  { initials: "WK", name: "Wanjiru Kamau", location: "Kenya", bg: "bg-blue-700" },
  { initials: "MT", name: "Mei Lin Tran", location: "Canada", bg: "bg-teal-600" },
  { initials: "FZ", name: "Fatima Al Zaabi", location: "United Arab Emirates", bg: "bg-orange-400" },
];

const trending = [
  { tag: "#FinancialInclusion", posts: "2.4K posts" },
  { tag: "#FirstGenerationFounders", posts: "1.8K posts" },
  { tag: "#ScholarshipSeason", posts: "1.1K posts" },
];

const communities = [
  { initials: "WE", name: "Women in Enterprise", members: "12.4K members", bg: "bg-purple-600" },
  { initials: "SM", name: "Student Mentors Circle", members: "8.9K members", bg: "bg-green-600" },
];

/* ─── Category tabs ───────────────────────────────────────────────────────── */
const categories = ["Impact Leaders", "Community Leaders", "Rising Supporters"];
const timeFilters = ["This week", "This month", "All time"];

/* ─── Pagination pages ────────────────────────────────────────────────────── */
const pages = [1, 2, 3, "...", 12];

export default function RankingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Impact Leaders");
  const [activeTime, setActiveTime] = useState("This month");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex h-screen bg-gray-50 font-[family-name:var(--font-montserrat)] overflow-hidden">
      {/* ───── MOBILE OVERLAY ───── */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ───── LEFT SIDEBAR ───── */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-56 bg-white border-r border-gray-100 flex flex-col justify-between py-5 px-3
          transform transition-transform duration-200 ease-in-out
          lg:static lg:translate-x-0 lg:flex-shrink-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div>
          <div className="flex items-center justify-between px-2 mb-7">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="white" opacity="0.8"/>
                  <path d="M13 7h-2v2h2V7zm0 8h-2v2h2v-2z" fill="white"/>
                </svg>
              </div>
              <span className="font-bold text-gray-900 text-sm tracking-wide">WEALTHLINK</span>
            </div>
            <button className="lg:hidden text-gray-400 hover:text-gray-600" onClick={() => setSidebarOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <nav className="flex flex-col gap-0.5">
            {navItems.map(({ label, icon: Icon, active, href }) => (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors w-full text-left
                  ${active ? "bg-green-50 text-green-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon size={17} className={active ? "text-green-600" : "text-gray-400"} strokeWidth={active ? 2.2 : 1.8} />
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2.5 px-2 pt-4 border-t border-gray-100">
          <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">AO</div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-gray-900 truncate">Amara Okafor</p>
            <p className="text-[10px] text-gray-500 truncate">Impact score 1,240</p>
          </div>
        </div>
      </aside>

      {/* ───── MAIN WRAPPER ───── */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top Nav */}
        <header className="bg-white border-b border-gray-100 h-14 flex items-center px-3 sm:px-6 gap-3 sm:gap-4 flex-shrink-0">
          <button className="lg:hidden text-gray-500 hover:text-gray-700" onClick={() => setSidebarOpen(true)}>
            <Menu size={22} />
          </button>
          <span className="lg:hidden font-bold text-gray-900 text-xs tracking-wide">WEALTHLINK</span>

          <div className="flex-1 max-w-sm hidden sm:block">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-2">
              <Search size={14} className="text-gray-400" />
              <input type="text" placeholder="Search people, posts, communities" className="bg-transparent text-xs text-gray-600 placeholder-gray-400 outline-none flex-1" />
            </div>
          </div>

          <div className="flex-1" />

          <div className="flex items-center gap-3 sm:gap-4">
            <button className="sm:hidden text-gray-500 hover:text-gray-700"><Search size={19} strokeWidth={1.8} /></button>
            <button className="relative text-gray-500 hover:text-gray-700">
              <Bell size={19} strokeWidth={1.8} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full" />
            </button>
            <button className="text-gray-500 hover:text-gray-700 hidden sm:block"><MessageSquare size={19} strokeWidth={1.8} /></button>
            <div className="flex items-center gap-1.5 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white text-xs font-bold">AO</div>
              <span className="text-sm font-medium text-gray-700 hidden sm:block">Amara</span>
              <ChevronDown size={14} className="text-gray-400 hidden sm:block" />
            </div>
          </div>
        </header>

        {/* ───── CONTENT ROW ───── */}
        <div className="flex flex-1 overflow-y-auto gap-5 p-3 sm:p-5">
          {/* ═══════ MAIN CONTENT ═══════ */}
          <main className="flex-1 min-w-0">
            {/* ── Page heading ── */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Global Impact Rankings</h1>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Recognising people who make a meaningful difference.</p>
              </div>
              {/* Time filter */}
              <div className="flex items-center gap-1 text-xs font-medium">
                {timeFilters.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTime(t)}
                    className={`px-2.5 py-1 rounded-md transition-colors ${activeTime === t ? "text-green-700 bg-green-50 font-semibold" : "text-gray-500 hover:text-gray-700"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Category pills ── */}
            <div className="flex flex-wrap gap-2 mb-1">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors
                    ${activeCategory === c
                      ? "bg-green-700 text-white border-green-700"
                      : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                    }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <p className="text-[10px] sm:text-xs text-gray-400 mb-4">Based on verified debt settlements and assistance delivered.</p>

            {/* ══════════ PODIUM ══════════ */}
            <div className="bg-white rounded-xl border border-gray-200 border-dashed p-4 sm:p-6 mb-4">
              <div className="flex items-end justify-center gap-4 sm:gap-8">
                {/* Render in order: 2nd, 1st, 3rd */}
                {[podium[0], podium[1], podium[2]].map((p) => (
                  <div key={p.rank} className={`flex flex-col items-center ${p.rank === 1 ? "-mt-4" : "mt-2"}`}>
                    {/* Rank badge */}
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mb-1.5
                      ${p.rank === 1 ? "bg-amber-400 text-white" : "bg-gray-200 text-gray-600"}`}>
                      {p.rank}
                    </div>
                    {/* Avatar */}
                    <div className={`${p.size} rounded-full ${p.bg} ring-4 ${p.ring} flex items-center justify-center text-white font-bold`}>
                      {p.initials}
                    </div>
                    {/* Info */}
                    <div className="mt-2 text-center">
                      <p className="text-xs sm:text-sm font-semibold text-gray-900 flex items-center justify-center gap-0.5">
                        {p.name}
                        <BadgeCheck size={12} className="text-green-500" />
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-gray-400 hidden sm:block">{p.handle} · {p.location}</p>
                      <p className="text-[9px] text-gray-400 sm:hidden">{p.handle}</p>
                      <p className={`font-bold mt-1 ${p.rank === 1 ? "text-green-700 text-lg sm:text-xl" : "text-green-600 text-base sm:text-lg"}`}>
                        {p.points}
                      </p>
                      <p className="text-[9px] text-gray-400">impact points</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ══════════ LEADERBOARD LIST ══════════ */}
            <div className="space-y-2">
              {leaderboard.map((r) => (
                <div
                  key={r.rank}
                  className="bg-white rounded-xl border border-gray-200 px-3 sm:px-4 py-3 flex items-center gap-3"
                >
                  {/* Rank */}
                  <span className="text-sm font-bold text-gray-400 w-5 text-center flex-shrink-0">{r.rank}</span>
                  {/* Avatar */}
                  <div className={`w-9 h-9 rounded-full ${r.bg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {r.initials}
                  </div>
                  {/* Name & handle */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 flex items-center gap-1 truncate">
                      {r.name}
                      <BadgeCheck size={12} className="text-green-500 flex-shrink-0" />
                    </p>
                    <p className="text-[10px] text-gray-400 truncate">
                      {r.handle} · <span className="hidden sm:inline">{r.location}</span>
                      <span className="sm:hidden">{r.location.split(" ")[0]}</span>
                    </p>
                  </div>
                  {/* Points */}
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm sm:text-base font-bold text-green-700">{r.points}</p>
                    <p className="text-[9px] text-gray-400">impact points</p>
                  </div>
                  {/* View profile */}
                  <button className="hidden sm:flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 font-medium flex-shrink-0">
                    View profile <ChevronDown size={12} />
                  </button>
                </div>
              ))}
            </div>

            {/* ══════════ YOUR RANK BANNER ══════════ */}
            <div className="mt-4 bg-green-50 border border-green-200 rounded-xl px-3 sm:px-4 py-3 flex items-center gap-3">
              <span className="text-xs sm:text-sm font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full flex-shrink-0">#142</span>
              <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">AO</div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">You · Amara Okafor</p>
                <p className="text-[10px] text-gray-400 truncate">38 impact points to reach #141</p>
              </div>
              <p className="text-base sm:text-lg font-bold text-green-700 flex-shrink-0">1,240</p>
            </div>

            {/* ══════════ PAGINATION ══════════ */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">
                  <ChevronLeft size={14} />
                </button>
                {pages.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => typeof p === "number" && setCurrentPage(p)}
                    className={`w-8 h-8 rounded-lg text-xs font-medium flex items-center justify-center transition-colors
                      ${currentPage === p
                        ? "bg-green-700 text-white"
                        : typeof p === "number"
                          ? "border border-gray-200 text-gray-600 hover:bg-gray-50"
                          : "text-gray-400 cursor-default"
                      }`}
                  >
                    {p}
                  </button>
                ))}
                <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">
                  <ChevronRight size={14} />
                </button>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-400 italic">Rankings reward verified impact, never wealth or net worth.</p>
            </div>

            {/* ═══ RIGHT SIDEBAR CONTENT — mobile / tablet ═══ */}
            <div className="xl:hidden mt-6 space-y-4">
              {/* People you may know */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">People you may know</h3>
                <div className="space-y-3">
                  {people.map(({ initials, name, location, bg }) => (
                    <div key={name} className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>{initials}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-gray-900 truncate">{name}</p>
                        <p className="text-[10px] text-gray-400 truncate">{location}</p>
                      </div>
                      <button className="text-xs border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 hover:bg-gray-50 font-medium flex-shrink-0">Follow</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Trending */}
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Trending discussions</h3>
                  <div className="space-y-2.5">
                    {trending.map(({ tag, posts }) => (
                      <div key={tag} className="cursor-pointer hover:opacity-80">
                        <p className="text-xs font-semibold text-gray-800">{tag}</p>
                        <p className="text-[10px] text-gray-400">{posts}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Communities */}
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Suggested communities</h3>
                  <div className="space-y-3">
                    {communities.map(({ initials, name, members, bg }) => (
                      <div key={name} className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>{initials}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-gray-900 truncate">{name}</p>
                          <p className="text-[10px] text-gray-400 truncate">{members}</p>
                        </div>
                        <button className="text-xs border border-green-500 text-green-600 rounded-full px-2.5 py-1 hover:bg-green-50 font-medium flex-shrink-0">Join</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Platform highlights */}
              <div className="bg-gray-900 rounded-xl p-4">
                <p className="text-xs text-amber-400 font-semibold mb-1">Platform highlights</p>
                <p className="text-3xl font-bold text-white leading-tight">3,214</p>
                <p className="text-xs text-gray-400 mt-1">people supported this month</p>
                <p className="text-[10px] text-gray-500 mt-1">Verified by the community</p>
              </div>
            </div>
          </main>

          {/* ═══════ RIGHT SIDEBAR — desktop ═══════ */}
          <aside className="w-60 flex-shrink-0 space-y-4 hidden xl:block">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">People you may know</h3>
              <div className="space-y-3">
                {people.map(({ initials, name, location, bg }) => (
                  <div key={name} className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>{initials}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-900 truncate">{name}</p>
                      <p className="text-[10px] text-gray-400 truncate">{location}</p>
                    </div>
                    <button className="text-xs border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 hover:bg-gray-50 font-medium flex-shrink-0">Follow</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Trending discussions</h3>
              <div className="space-y-2.5">
                {trending.map(({ tag, posts }) => (
                  <div key={tag} className="cursor-pointer hover:opacity-80">
                    <p className="text-xs font-semibold text-gray-800">{tag}</p>
                    <p className="text-[10px] text-gray-400">{posts}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Suggested communities</h3>
              <div className="space-y-3">
                {communities.map(({ initials, name, members, bg }) => (
                  <div key={name} className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>{initials}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-900 truncate">{name}</p>
                      <p className="text-[10px] text-gray-400 truncate">{members}</p>
                    </div>
                    <button className="text-xs border border-green-500 text-green-600 rounded-full px-2.5 py-1 hover:bg-green-50 font-medium flex-shrink-0">Join</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-4">
              <p className="text-xs text-amber-400 font-semibold mb-1">Platform highlights</p>
              <p className="text-3xl font-bold text-white leading-tight">3,214</p>
              <p className="text-xs text-gray-400 mt-1">people supported this month</p>
              <p className="text-[10px] text-gray-500 mt-1">Verified by the community</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
