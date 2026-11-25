"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckoutView } from "./checkout";
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
  Check,
  Clock,
  ArrowRight,
  ExternalLink,
  ArrowLeft,
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

interface CleanWaterViewProps {
  onBack?: () => void;
}

// ─── Exportable CleanWater Detail View ──────────────────────────────────────
export function CleanWaterView({ onBack }: CleanWaterViewProps) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "financial" | "updates">("overview");

  if (showCheckout) {
    return <CheckoutView onBack={() => setShowCheckout(false)} />;
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12 font-[family-name:var(--font-montserrat)] text-gray-900">
      {/* ── Breadcrumb / Header Row ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-[#00b074] uppercase">
            {onBack ? (
              <button
                onClick={onBack}
                className="hover:underline flex items-center gap-1 text-gray-500 hover:text-[#00b074] normal-case font-medium mr-1"
              >
                <ArrowLeft size={13} />
                <span>Back</span>
              </button>
            ) : (
              <Link
                href="/explore"
                className="hover:underline flex items-center gap-1 text-gray-500 hover:text-[#00b074] normal-case font-medium mr-1"
              >
                <ArrowLeft size={13} />
                <span>Back</span>
              </Link>
            )}
            <span>PROJECT / GL-PROJ-024</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mt-1">
            Clean water for Akinyele
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Akinyele, Oyo State · Water & sanitation
          </p>
        </div>

        {/* Public ledger button */}
        <button className="self-start sm:self-auto bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs">
          <span>Open public ledger</span>
          <ChevronRight size={14} className="text-gray-400" />
        </button>
      </div>

      {/* ── Main Hero Row (Image & Overview + Donation Card) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Image + Story (8 cols) */}
        <div className="lg:col-span-8 space-y-5">
          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-xs bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?auto=format&fit=crop&w=1200&q=80"
              alt="Clean water community borehole in Akinyele"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Story details */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-7 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Safe water shouldn&apos;t be a long walk away.
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Help install a solar-powered borehole and water point for 800
              residents in Akinyele. The project includes water-quality testing
              and training a local maintenance committee.
            </p>

            {/* Verification tag & Org Details */}
            <div className="pt-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-[#e5f5eb] text-[#13392f] text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-[#00b074]" />
                  Organisation verified
                </span>
                <span className="text-xs font-bold text-gray-900">
                  HopeSpring Initiative
                </span>
              </div>
              <p className="text-[11px] text-gray-400 mt-1.5">
                Registered Nigerian nonprofit · RC 182640 · Active since 2018
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Donation Funding Card (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-gray-200 rounded-2xl p-6 shadow-xs space-y-4">
          <h3 className="font-bold text-gray-900 text-lg">
            Make safe water possible.
          </h3>

          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              ₦3,600,000
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              raised of ₦5,000,000 goal
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 pt-1">
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#00b074] h-full rounded-full w-[72%]" />
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 pt-0.5">
              <span className="font-bold text-[#00b074]">72% funded</span>
              <span>186 donors · 18 days left</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-2">
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full bg-[#133d2e] hover:bg-[#0e2c21] text-white text-sm font-semibold py-3 px-4 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5"
            >
              <span>Donate to this project</span>
              <ArrowRight size={15} />
            </button>
            <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-1.5">
              <span>Track the money</span>
              <ExternalLink size={13} className="text-gray-400" />
            </button>
          </div>

          {/* Beneficiary estimate */}
          <div className="border-t border-gray-100 pt-4">
            <p className="text-base font-bold text-gray-900">800 residents</p>
            <p className="text-[11px] text-gray-400">
              Expected beneficiaries · Organisation estimate
            </p>
            <p className="text-[10px] text-gray-400 italic mt-2">
              This demo does not process real payments.
            </p>
          </div>
        </div>
      </div>

      {/* ── Sub Navigation Tabs ── */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setActiveTab("overview")}
          className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-colors
            ${
              activeTab === "overview"
                ? "bg-white text-gray-900 border-gray-300 shadow-2xs"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
            }
          `}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("financial")}
          className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-colors
            ${
              activeTab === "financial"
                ? "bg-white text-gray-900 border-gray-300 shadow-2xs"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
            }
          `}
        >
          Financial transparency
        </button>
        <button
          onClick={() => setActiveTab("updates")}
          className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-colors
            ${
              activeTab === "updates"
                ? "bg-white text-gray-900 border-gray-300 shadow-2xs"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
            }
          `}
        >
          Updates & milestones
        </button>
      </div>

      {/* ── Details Grid (Plan For Every Naira + What Happens Next) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: A plan for every naira */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-base text-gray-900">
              A plan for every naira
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Requested budget · ₦5,000,000
            </p>

            <div className="mt-5 space-y-3.5">
              <div className="flex items-center justify-between text-xs py-1.5 border-b border-gray-100">
                <span className="font-medium text-gray-700">Borehole drilling</span>
                <span className="font-bold text-gray-900">₦2,600,000</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1.5 border-b border-gray-100">
                <span className="font-medium text-gray-700">
                  Pump & solar installation
                </span>
                <span className="font-bold text-gray-900">₦1,600,000</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1.5">
                <span className="font-medium text-gray-700">
                  Testing & community training
                </span>
                <span className="font-bold text-gray-900">₦800,000</span>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-2xs">
              Compare allocation & actuals
            </button>
          </div>
        </div>

        {/* Card 2: What happens next */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-base text-gray-900">What happens next</h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">
                    02 Oct · Site survey
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">
                    12 Nov · Borehole drilled
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={12} />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">
                    06 Dec · Pump installation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={12} />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">
                    18 Dec · Water tests & handover
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-gray-400 mt-6 leading-relaxed">
            Reported by HopeSpring Initiative. Completion is subject to evidence
            review.
          </p>
        </div>
      </div>

      {/* ── Bottom Section: Know where your contribution goes ── */}
      <div className="bg-[#eaf4ed] border border-[#d2ead8] rounded-2xl p-5 sm:p-7 space-y-4">
        <h2 className="text-base sm:text-lg font-bold text-[#13392f]">
          Know where your contribution goes.
        </h2>

        {/* 3 financial ledger stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-gray-200/80 p-4">
            <p className="text-[11px] font-medium text-gray-400">Received</p>
            <p className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1">
              ₦3,600,000
            </p>
            <p className="text-[10px] text-gray-500 mt-1">
              Bank-settled donations
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200/80 p-4">
            <p className="text-[11px] font-medium text-gray-400">Reported spent</p>
            <p className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1">
              ₦1,850,000
            </p>
            <p className="text-[10px] text-gray-500 mt-1">
              Includes ₦350k awaiting review
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200/80 p-4">
            <p className="text-[11px] font-medium text-gray-400">Balance</p>
            <p className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1">
              ₦1,750,000
            </p>
            <p className="text-[10px] text-gray-500 mt-1">
              Received minus reported spent
            </p>
          </div>
        </div>

        <p className="text-[11px] text-gray-600 leading-relaxed pt-1">
          ₦1,500,000 has reviewed supporting evidence. Uploaded receipts alone
          are not independent verification.
        </p>

        <div>
          <button className="bg-[#133d2e] hover:bg-[#0e2c21] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm inline-flex items-center gap-1.5">
            <span>Inspect expense ledger</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Standalone Full Page Route (/cleanwater) with Wealthlink Sidebar ──────
export default function CleanWaterPage() {
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
            <p className="text-[10px] text-gray-500 truncate">
              Impact score 1,240
            </p>
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
          <CleanWaterView />
        </div>
      </div>
    </div>
  );
}
