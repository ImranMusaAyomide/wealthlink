"use client";

import { useState } from "react";
import Link from "next/link";
import { CleanWaterView } from "./cleanwater";
import { DonationHistoryView } from "./donationhistory";
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
  ChevronRight,
  Menu,
  X,
  MapPin,
  ArrowUpDown,
  CheckCircle2,
} from "lucide-react";

// ─── Wealthlink Sidebar Navigation ─────────────────────────────────────────
const navItems = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Explore", icon: Users, active: true, href: "/explore" },
  { label: "Rankings", icon: Trophy, href: "/rankings" },
  { label: "Connections", icon: Link2, href: "#" },
  { label: "Debt Relief", icon: HeartHandshake, href: "#" },
  { label: "Messages", icon: MessageSquare, href: "#" },
  { label: "Notifications", icon: Bell, href: "#" },
  { label: "My Profile", icon: User, href: "#" },
  { label: "Donation History", icon: CreditCard, href: "/donationhistory" },
  { label: "Settings", icon: Settings, href: "#" },
];

// ─── Personal Workspace Tabs ───────────────────────────────────────────────
const workspaceTabs = [
  { label: "Overview", active: false },
  { label: "Explore projects", active: true },
  { label: "Donation history", active: false },
  { label: "Impact tracker", active: false },
];

// ─── Category pills ────────────────────────────────────────────────────────
const categories = [
  "All projects",
  "Education",
  "Healthcare",
  "Food & Water",
  "More categories",
];

// ─── Community projects list ───────────────────────────────────────────────
const projects = [
  {
    id: 1,
    tag: "WATER / OYO STATE",
    title: "Clean water for Akinyele",
    organization: "HopeSpring Initiative",
    verified: true,
    fundedAmount: "₦3,600,000",
    targetAmount: "₦5,000,000",
    percentage: 72,
    daysLeft: 18,
    image:
      "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    tag: "EDUCATION / KADUNA",
    title: "A brighter classroom in Zaria",
    organization: "Learning Roots NG",
    verified: true,
    fundedAmount: "₦2,160,000",
    targetAmount: "₦3,000,000",
    percentage: 72,
    daysLeft: 26,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    tag: "HEALTHCARE / ENUGU",
    title: "Care closer to the community",
    organization: "NeighbourCare",
    verified: true,
    fundedAmount: "₦1,800,000",
    targetAmount: "₦2,500,000",
    percentage: 72,
    daysLeft: 32,
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
  },
];

// ─── Exportable Explore Content (Can be embedded anywhere) ─────────────────
export function ExploreView({ onSelectProject }: { onSelectProject?: (id: number) => void } = {}) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All projects");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Nigeria");
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState("Explore projects");

  if (selectedProject === 1) {
    return <CleanWaterView onBack={() => setSelectedProject(null)} />;
  }

  if (activeWorkspaceTab === "Donation history") {
    return <DonationHistoryView onExploreProjects={() => setActiveWorkspaceTab("Explore projects")} />;
  }

  return (
    <div className="space-y-6">
      {/* ── Top Workspace Bar (from goodledger design) ── */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center text-[#13392f]">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-[#13392f] stroke-2">
                <rect x="4" y="4" width="16" height="16" rx="1" transform="rotate(45 12 12)" />
                <circle cx="12" cy="12" r="2.5" className="fill-[#13392f]" />
              </svg>
            </div>
            <span className="font-bold text-sm tracking-tight text-[#13392f]">goodledger</span>
            <span className="text-gray-300">|</span>
            <span className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
              Personal Workspace
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Your giving, in focus.</p>
        </div>

        {/* Workspace tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {workspaceTabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveWorkspaceTab(tab.label)}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors
                ${
                  activeWorkspaceTab === tab.label
                    ? "bg-[#e5f3eb] text-[#13392f] font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Hero / Discovery Header ── */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-7 space-y-6">
        <div>
          <span className="text-[11px] font-bold tracking-wider text-[#00b074] uppercase">
            Discover your next impact
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
            Small contributions. Lasting change.
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Find community-led projects with a clear plan for every naira.
          </p>
        </div>

        {/* ── Search & Filter Controls ── */}
        <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
          {/* Search bar */}
          <div className="flex-1 flex items-center gap-2.5 bg-gray-50/60 border border-gray-200 rounded-lg px-3.5 py-2.5 shadow-2xs">
            <Search size={16} className="text-gray-400 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects, organisations or locations"
              className="w-full text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
            />
          </div>

          {/* Search CTA */}
          <button className="bg-[#133d2e] hover:bg-[#0e2c21] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm whitespace-nowrap">
            Search education
          </button>

          {/* Location button */}
          <button
            onClick={() =>
              setSelectedLocation(
                selectedLocation === "All Nigeria" ? "Lagos State" : "All Nigeria"
              )
            }
            className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-lg transition-colors flex items-center justify-between gap-2 shadow-2xs whitespace-nowrap"
          >
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-gray-400" />
              <span>Location: {selectedLocation}</span>
            </div>
            <ChevronDown size={14} className="text-gray-400" />
          </button>
        </div>

        {/* ── Category pills ── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap border
                  ${
                    active
                      ? "bg-[#133d2e] text-white border-[#133d2e]"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── Results count & Sort ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-sm font-bold text-gray-900">
              {projects.length} community projects
            </span>
            <span className="text-xs text-gray-400 hidden sm:inline">
              Environment · Infrastructure · Community Development
            </span>
          </div>

          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors font-medium self-start sm:self-auto">
            <span>Sort: Recommended</span>
            <ArrowUpDown size={12} className="text-gray-400" />
          </button>
        </div>

        {/* ── 3 Project Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => {
                if (proj.id === 1) {
                  if (onSelectProject) {
                    onSelectProject(1);
                  } else {
                    setSelectedProject(1);
                  }
                }
              }}
              className={`bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col group ${
                proj.id === 1
                  ? "cursor-pointer hover:border-[#00b074] hover:shadow-sm"
                  : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Card Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-[#028476] uppercase mb-1">
                    {proj.tag}
                  </p>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug group-hover:text-[#133d2e] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <span>{proj.organization}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-0.5 text-gray-500">
                      Org. verified
                      <CheckCircle2 size={11} className="text-[#00b074]" />
                    </span>
                  </p>
                </div>

                {/* Progress stats */}
                <div className="mt-4 pt-2">
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#00b074] h-full rounded-full transition-all duration-500"
                      style={{ width: `${proj.percentage}%` }}
                    />
                  </div>
                  <div className="mt-2.5">
                    <p className="text-xs font-bold text-gray-900">
                      {proj.fundedAmount}{" "}
                      <span className="font-normal text-gray-500">
                        of {proj.targetAmount}
                      </span>
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      {proj.percentage}% funded · {proj.daysLeft} days left
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom Ledger Callout ── */}
        <div className="bg-[#eaf4ed] border border-[#d2ead8] rounded-2xl p-5 sm:p-7">
          <h2 className="text-base sm:text-lg font-bold text-[#143d30]">
            A good cause deserves a clear ledger.
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1.5 max-w-3xl leading-relaxed">
            Inspect budgets, expenses and supporting documents before you give.
            An organisation badge verifies registration, not every activity or
            expense.
          </p>
          <button className="mt-4 bg-white hover:bg-gray-50 text-gray-800 text-xs sm:text-sm font-semibold border border-gray-200 rounded-lg px-4 py-2.5 transition-colors inline-flex items-center gap-1.5 shadow-2xs">
            <span>Explore public transparency</span>
            <ChevronRight size={14} className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Standalone Full Page Route (/explore) with Wealthlink Sidebar ──────────
export default function ExplorePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 font-[family-name:var(--font-montserrat)] overflow-hidden">
      {/* ───── MOBILE OVERLAY ───── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ───── WEALTHLINK LEFT SIDEBAR ───── */}
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
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
                    fill="white"
                    opacity="0.8"
                  />
                  <path d="M13 7h-2v2h2V7zm0 8h-2v2h2v-2z" fill="white" />
                </svg>
              </div>
              <span className="font-bold text-gray-900 text-sm tracking-wide">
                WEALTHLINK
              </span>
            </div>
            <button
              className="lg:hidden text-gray-400 hover:text-gray-600"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex flex-col gap-0.5">
            {navItems.map(({ label, icon: Icon, active, href }) => (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors w-full text-left
                  ${
                    active
                      ? "bg-green-50 text-green-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon
                  size={17}
                  className={active ? "text-green-600" : "text-gray-400"}
                  strokeWidth={active ? 2.2 : 1.8}
                />
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2.5 px-2 pt-4 border-t border-gray-100">
          <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            AO
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-gray-900 truncate">
              Amara Okafor
            </p>
            <p className="text-[10px] text-gray-500 truncate">Impact score 1,240</p>
          </div>
        </div>
      </aside>

      {/* ───── MAIN WRAPPER ───── */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top Nav */}
        <header className="bg-white border-b border-gray-100 h-14 flex items-center px-3 sm:px-6 gap-3 sm:gap-4 flex-shrink-0">
          <button
            className="lg:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={22} />
          </button>
          <span className="lg:hidden font-bold text-gray-900 text-xs tracking-wide">
            WEALTHLINK
          </span>

          <div className="flex-1 max-w-sm hidden sm:block">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-2">
              <Search size={14} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search people, posts, communities"
                className="bg-transparent text-xs text-gray-600 placeholder-gray-400 outline-none flex-1"
              />
            </div>
          </div>

          <div className="flex-1" />

          <div className="flex items-center gap-3 sm:gap-4">
            <button className="sm:hidden text-gray-500 hover:text-gray-700">
              <Search size={19} strokeWidth={1.8} />
            </button>
            <button className="relative text-gray-500 hover:text-gray-700">
              <Bell size={19} strokeWidth={1.8} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full" />
            </button>
            <button className="text-gray-500 hover:text-gray-700 hidden sm:block">
              <MessageSquare size={19} strokeWidth={1.8} />
            </button>
            <div className="flex items-center gap-1.5 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white text-xs font-bold">
                AO
              </div>
              <span className="text-sm font-medium text-gray-700 hidden sm:block">
                Amara
              </span>
              <ChevronDown size={14} className="text-gray-400 hidden sm:block" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <ExploreView />
        </div>
      </div>
    </div>
  );
}
