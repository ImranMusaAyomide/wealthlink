"use client";

import { useState } from "react";
import Link from "next/link";
import { ExploreView } from "./explore";
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
  X,
  ImageIcon,
  Video,
  MapPin,
  Tag,
  CheckCircle2,
  Globe,
  UserCheck,
  UserCircle,
  Lock,
  Menu,
} from "lucide-react";

// ─── Sidebar nav items ────────────────────────────────────────────────────────
const navItems = [
  { id: "home", label: "Home", icon: Home, href: "/" },
  { id: "explore", label: "Explore", icon: Users, href: "/explore" },
  { id: "rankings", label: "Rankings", icon: Trophy, href: "/rankings" },
  { id: "connections", label: "Connections", icon: Link2, href: "#" },
  { id: "debt-relief", label: "Debt Relief", icon: HeartHandshake, href: "#" },
  { id: "messages", label: "Messages", icon: MessageSquare, href: "#" },
  { id: "notifications", label: "Notifications", icon: Bell, href: "#" },
  { id: "profile", label: "My Profile", icon: User, href: "#" },
  { id: "donations", label: "Donation History", icon: CreditCard, href: "/donationhistory" },
  { id: "settings", label: "Settings", icon: Settings, href: "#" },
];

// ─── People you may know ──────────────────────────────────────────────────────
const people = [
  { initials: "WK", name: "Wanjiru Kamau", location: "Kenya", bg: "bg-blue-700" },
  { initials: "MT", name: "Mei Lin Tran", location: "Canada", bg: "bg-teal-600" },
  { initials: "FZ", name: "Fatima Al Zaabi", location: "United Arab Emirates", bg: "bg-orange-400" },
];

// ─── Trending discussions ─────────────────────────────────────────────────────
const trending = [
  { tag: "#FinancialInclusion", posts: "2.4K posts" },
  { tag: "#FirstGenerationFounders", posts: "1.8K posts" },
  { tag: "#ScholarshipSeason", posts: "1.1K posts" },
];

// ─── Suggested communities ────────────────────────────────────────────────────
const communities = [
  { initials: "WE", name: "Women in Enterprise", members: "12.4K members", bg: "bg-purple-600" },
  { initials: "SM", name: "Student Mentors Circle", members: "6.9K members", bg: "bg-green-600" },
];

// ─── Audience radio options ───────────────────────────────────────────────────
const audienceOptions = [
  { label: "Public", desc: "Anyone on WEALTHLINK", icon: Globe, value: "public" },
  { label: "Connections only", desc: "People you connect with", icon: UserCheck, value: "connections" },
  { label: "Followers", desc: "People who follow you", icon: UserCircle, value: "followers" },
  { label: "Private", desc: "Only you", icon: Lock, value: "private" },
];

// ─── Attachment colours ───────────────────────────────────────────────────────
const attachmentColors = ["bg-blue-100", "bg-slate-200", "bg-amber-200"];

export default function HomePage({ initialTab = "home" }: { initialTab?: "home" | "explore" | "rankings" | "donations" } = {}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [postText, setPostText] = useState(
    "Starting an apprenticeship programme in our neighbourhood has taught me that opportunity travels through people. If you run a small business, consider opening one seat for someone learning."
  );
  const [showEconomic, setShowEconomic] = useState(true);
  const [audience, setAudience] = useState("public");
  const [published, setPublished] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const MAX = 500;

  return (
    <div className="flex h-screen bg-gray-50 font-[family-name:var(--font-montserrat)] overflow-hidden">
      {/* ───────────── MOBILE SIDEBAR OVERLAY ───────────── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ───────────── LEFT SIDEBAR ───────────── */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-56 bg-white border-r border-gray-100 flex flex-col justify-between py-5 px-3
          transform transition-transform duration-200 ease-in-out
          lg:static lg:translate-x-0 lg:flex-shrink-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo + Close on mobile */}
        <div>
          <div className="flex items-center justify-between px-2 mb-7">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="white" opacity="0.8" />
                  <path d="M13 7h-2v2h2V7zm0 8h-2v2h2v-2z" fill="white" />
                </svg>
              </div>
              <span className="font-bold text-gray-900 text-sm tracking-wide">WEALTHLINK</span>
            </div>
            <button className="lg:hidden text-gray-400 hover:text-gray-600" onClick={() => setSidebarOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-0.5">
            {navItems.map(({ id, label, icon: Icon, href }) => {
              const active = activeTab === id;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors w-full text-left
                    ${active
                      ? "bg-green-50 text-green-700 font-semibold"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  onClick={(e) => {
                    setSidebarOpen(false);
                    if (id === "home" || id === "explore" || id === "donations") {
                      e.preventDefault();
                      setActiveTab(id as "home" | "explore" | "donations");
                    }
                  }}
                >
                  <Icon
                    size={17}
                    className={active ? "text-green-600" : "text-gray-400"}
                    strokeWidth={active ? 2.2 : 1.8}
                  />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom user card */}
        <div className="flex items-center gap-2.5 px-2 pt-4 border-t border-gray-100">
          <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            AO
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-gray-900 truncate">Amara Okafor</p>
            <p className="text-[10px] text-gray-500 truncate">Impact score 1,240</p>
          </div>
        </div>
      </aside>

      {/* ───────────── MAIN WRAPPER ───────────── */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top Nav */}
        <header className="bg-white border-b border-gray-100 h-14 flex items-center px-3 sm:px-6 gap-3 sm:gap-4 flex-shrink-0">
          {/* Hamburger — mobile only */}
          <button className="lg:hidden text-gray-500 hover:text-gray-700" onClick={() => setSidebarOpen(true)}>
            <Menu size={22} />
          </button>

          {/* Logo — mobile only (since sidebar is hidden) */}
          <span className="lg:hidden font-bold text-gray-900 text-xs tracking-wide">WEALTHLINK</span>

          {/* Search */}
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

          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Mobile search icon */}
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
              <span className="text-sm font-medium text-gray-700 hidden sm:block">Amara</span>
              <ChevronDown size={14} className="text-gray-400 hidden sm:block" />
            </div>
          </div>
        </header>

        {/* Body content based on activeTab */}
        {activeTab === "explore" ? (
          <div className="flex-1 overflow-y-auto p-3 sm:p-6 lg:p-8">
            <ExploreView />
          </div>
        ) : activeTab === "donations" ? (
          <div className="flex-1 overflow-y-auto p-3 sm:p-6 lg:p-8">
            <DonationHistoryView onExploreProjects={() => setActiveTab("explore")} />
          </div>
        ) : (
          /* Content row */
          <div className="flex flex-1 overflow-y-auto gap-5 p-3 sm:p-5">
            {/* ───────── MAIN CONTENT ───────── */}
            <main className="flex-1 min-w-0">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1 gap-1">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Create post</h1>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Share an update with your network.</p>
                </div>
                <div className="flex items-center gap-1.5 text-green-600 text-xs font-medium mt-1">
                  <CheckCircle2 size={13} />
                  Draft saved 2 min ago
                </div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-5 mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                {/* Author row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center text-white text-xs font-bold">
                      AO
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Amara Okafor</p>
                      <p className="text-xs text-gray-400">@amaraokafor</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600 cursor-pointer hover:bg-gray-50 self-start sm:self-auto">
                    <span className="text-[10px] text-gray-400 mr-1">Audience</span>
                    <span className="font-medium">Public</span>
                    <ChevronDown size={12} className="text-gray-400" />
                  </div>
                </div>

                {/* Economic toggle */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-xs text-gray-600">Show my economic category on this post</span>
                  <button
                    onClick={() => setShowEconomic(!showEconomic)}
                    className={`relative w-9 h-5 rounded-full transition-colors flex-shrink-0 ${showEconomic ? "bg-green-500" : "bg-gray-200"}`}
                  >
                    <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${showEconomic ? "translate-x-4" : "translate-x-0.5"}`} />
                  </button>
                  {showEconomic && (
                    <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">Middle Class</span>
                  )}
                </div>

                {/* Text area */}
                <div className="border border-gray-200 rounded-lg p-3">
                  <textarea
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    maxLength={MAX}
                    rows={4}
                    className="w-full text-sm text-gray-700 resize-none outline-none placeholder-gray-400"
                  />
                  <div className="text-right text-xs text-gray-400 mt-1">
                    {postText.length} / {MAX}
                  </div>
                </div>

                {/* Attachments */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Attachments</span>
                    <span className="text-xs text-gray-400">3 of 10</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {/* Upload area */}
                    <div className="w-full sm:w-40 h-24 border-2 border-dashed border-green-300 rounded-lg flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:bg-green-50 transition-colors">
                      <div className="flex items-center gap-1.5 text-green-500">
                        <ImageIcon size={16} />
                        <Video size={16} />
                      </div>
                      <p className="text-[10px] font-medium text-green-600 text-center">Drag and drop or browse</p>
                      <p className="text-[9px] text-gray-400 text-center">JPG, PNG, MP4 up to 100 MB</p>
                    </div>

                    {/* Uploaded previews */}
                    {attachmentColors.map((color, i) => (
                      <div key={i} className={`relative w-[calc(33%-0.75rem)] sm:w-28 h-24 ${color} rounded-lg flex items-center justify-center`}>
                        <ImageIcon size={20} className="text-gray-400" />
                        <button className="absolute top-1.5 right-1.5 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <X size={9} className="text-gray-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location & Topic */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 border border-gray-200 rounded-lg px-3 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-50">
                    <div>
                      <p className="text-[9px] text-gray-400">Location tag (optional)</p>
                      <p className="text-xs font-medium text-gray-700 flex items-center gap-1">
                        <MapPin size={10} className="text-gray-400" />
                        Lagos, Nigeria
                      </p>
                    </div>
                    <ChevronDown size={13} className="text-gray-400" />
                  </div>
                  <div className="flex-1 border border-gray-200 rounded-lg px-3 py-2 flex items-center justify-between cursor-pointer hover:bg-gray-50">
                    <div>
                      <p className="text-[9px] text-gray-400">Topic</p>
                      <p className="text-xs font-medium text-gray-700 flex items-center gap-1">
                        <Tag size={10} className="text-gray-400" />
                        Entrepreneurship
                      </p>
                    </div>
                    <ChevronDown size={13} className="text-gray-400" />
                  </div>
                </div>

                {/* Audience radio */}
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                  {audienceOptions.map(({ label, desc, value }) => (
                    <label key={value} className="cursor-pointer">
                      <div
                        className={`flex items-center gap-1.5 border rounded-lg px-2.5 sm:px-3 py-2 text-xs transition-colors
                        ${audience === value
                            ? "border-green-500 bg-green-50 text-green-700"
                            : "border-gray-200 text-gray-600 hover:bg-gray-50"
                          }`}
                        onClick={() => setAudience(value)}
                      >
                        <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${audience === value ? "border-green-500" : "border-gray-300"}`}>
                          {audience === value && <div className="w-1.5 h-1.5 rounded-full bg-green-500" />}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold leading-tight truncate">{label}</p>
                          <p className="text-[9px] text-gray-400 leading-tight truncate">{desc}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-between gap-2 pt-1">
                  <div className="flex gap-2">
                    <button className="flex-1 sm:flex-none border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                      Save draft
                    </button>
                    <button className="flex-1 sm:flex-none border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                      Preview
                    </button>
                  </div>
                  <button className="bg-green-700 hover:bg-green-800 text-white rounded-lg px-6 py-2 text-sm font-semibold transition-colors">
                    Publish
                  </button>
                </div>
              </div>

              {/* Published banner */}
              {published && (
                <div className="mt-3 sm:mt-4 bg-white border border-gray-200 rounded-xl px-3 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={12} className="text-white" strokeWidth={2.5} />
                    </div>
                    Post published. Your update is now visible to everyone.
                  </div>
                  <button className="text-green-600 text-sm font-medium hover:underline self-end sm:self-auto">View post</button>
                </div>
              )}

              {/* ───────── RIGHT SIDEBAR CONTENT (mobile/tablet) ───────── */}
              <div className="xl:hidden mt-5 space-y-4">
                {/* People you may know */}
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">People you may know</h3>
                  <div className="space-y-3">
                    {people.map(({ initials, name, location, bg }) => (
                      <div key={name} className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                          {initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-gray-900 truncate">{name}</p>
                          <p className="text-[10px] text-gray-400 truncate">{location}</p>
                        </div>
                        <button className="text-xs border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 hover:bg-gray-50 font-medium flex-shrink-0">
                          Follow
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trending + Communities side by side on tablet */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                          <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                            {initials}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-gray-900 truncate">{name}</p>
                            <p className="text-[10px] text-gray-400 truncate">{members}</p>
                          </div>
                          <button className="text-xs border border-green-500 text-green-600 rounded-full px-2.5 py-1 hover:bg-green-50 font-medium flex-shrink-0">
                            Join
                          </button>
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

            {/* ───────── RIGHT SIDEBAR (desktop only) ───────── */}
            <aside className="w-60 flex-shrink-0 space-y-4 hidden xl:block">
              {/* People you may know */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">People you may know</h3>
                <div className="space-y-3">
                  {people.map(({ initials, name, location, bg }) => (
                    <div key={name} className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                        {initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-gray-900 truncate">{name}</p>
                        <p className="text-[10px] text-gray-400 truncate">{location}</p>
                      </div>
                      <button className="text-xs border border-gray-200 rounded-lg px-2.5 py-1 text-gray-600 hover:bg-gray-50 font-medium flex-shrink-0">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trending discussions */}
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

              {/* Suggested communities */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Suggested communities</h3>
                <div className="space-y-3">
                  {communities.map(({ initials, name, members, bg }) => (
                    <div key={name} className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                        {initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-gray-900 truncate">{name}</p>
                        <p className="text-[10px] text-gray-400 truncate">{members}</p>
                      </div>
                      <button className="text-xs border border-green-500 text-green-600 rounded-full px-2.5 py-1 hover:bg-green-50 font-medium flex-shrink-0">
                        Join
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platform highlights */}
              <div className="bg-gray-900 rounded-xl p-4">
                <p className="text-xs text-amber-400 font-semibold mb-1">Platform highlights</p>
                <p className="text-3xl font-bold text-white leading-tight">3,214</p>
                <p className="text-xs text-gray-400 mt-1">people supported this month</p>
                <p className="text-[10px] text-gray-500 mt-1">Verified by the community</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
