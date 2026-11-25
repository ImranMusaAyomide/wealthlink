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
  Menu,
  X,
  ChevronRight,
  Receipt,
  CheckCircle2,
  Filter,
} from "lucide-react";

// ─── Wealthlink Sidebar Navigation ─────────────────────────────────────────
const navItems = [
  { id: "home", label: "Home", icon: Home, href: "/" },
  { id: "explore", label: "Explore", icon: Users, href: "/explore" },
  { id: "rankings", label: "Rankings", icon: Trophy, href: "/rankings" },
  { id: "connections", label: "Connections", icon: Link2, href: "#" },
  { id: "debt-relief", label: "Debt Relief", icon: HeartHandshake, href: "#" },
  { id: "messages", label: "Messages", icon: MessageSquare, href: "#" },
  { id: "notifications", label: "Notifications", icon: Bell, href: "#" },
  { id: "profile", label: "My Profile", icon: User, href: "#" },
  { id: "donations", label: "Donation History", icon: CreditCard, active: true, href: "/donationhistory" },
  { id: "settings", label: "Settings", icon: Settings, href: "#" },
];

// ─── Personal Workspace Tabs ───────────────────────────────────────────────
const workspaceTabs = [
  { label: "Overview", active: false },
  { label: "Explore projects", href: "/explore", active: false },
  { label: "Donation history", href: "/donationhistory", active: true },
  { label: "Impact tracker", active: false },
];

// ─── Donation records data ─────────────────────────────────────────────────
const donations = [
  {
    id: "DON-1085",
    project: "Akinyele clean water",
    reference: "DON-1085",
    date: "17 Nov 2026",
    amount: "₦50,000",
    status: "Confirmed",
  },
  {
    id: "DON-1071",
    project: "Zaria classrooms",
    reference: "DON-1071",
    date: "03 Nov 2026",
    amount: "₦25,000",
    status: "Confirmed",
  },
  {
    id: "DON-0992",
    project: "Akinyele clean water",
    reference: "DON-0992",
    date: "22 Oct 2026",
    amount: "₦100,000",
    status: "Confirmed",
  },
  {
    id: "DON-0950",
    project: "Enugu community clinic",
    reference: "DON-0950",
    date: "09 Oct 2026",
    amount: "₦75,000",
    status: "Confirmed",
  },
  {
    id: "DON-0891",
    project: "Ibadan food support",
    reference: "DON-0891",
    date: "18 Sep 2026",
    amount: "₦50,000",
    status: "Confirmed",
  },
  {
    id: "DON-0812",
    project: "Zaria classrooms",
    reference: "DON-0812",
    date: "05 Aug 2026",
    amount: "₦75,000",
    status: "Confirmed",
  },
  {
    id: "DON-0764",
    project: "Ibadan food support",
    reference: "DON-0764",
    date: "12 Jul 2026",
    amount: "₦50,000",
    status: "Confirmed",
  },
];

interface DonationHistoryViewProps {
  onExploreProjects?: () => void;
}

// ─── Exportable Donation History Detail View ───────────────────────────────
export function DonationHistoryView({ onExploreProjects }: DonationHistoryViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("2026");
  const [selectedStatus, setSelectedStatus] = useState("All statuses");
  const [receiptItem, setReceiptItem] = useState<typeof donations[0] | null>(null);

  const filteredDonations = donations.filter((item) => {
    const matchesSearch =
      item.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.reference.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12 font-[family-name:var(--font-montserrat)] text-gray-900">
      {/* ── Top Header Row ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold tracking-wider text-[#00b074] uppercase">
            Your contributions
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mt-1">
            A history of showing up.
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Every contribution, receipt and settlement status in one place.
          </p>
        </div>

        {/* Explore projects CTA */}
        {onExploreProjects ? (
          <button
            onClick={onExploreProjects}
            className="self-start sm:self-auto bg-[#133d2e] hover:bg-[#0e2c21] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            Explore projects
          </button>
        ) : (
          <Link
            href="/explore"
            className="self-start sm:self-auto bg-[#133d2e] hover:bg-[#0e2c21] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            Explore projects
          </Link>
        )}
      </div>

      {/* ── Summary Stats Row (3 Cards) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Card 1: Lifetime contributions */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs">
          <p className="text-[11px] font-medium text-gray-400">
            Lifetime contributions
          </p>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
            ₦425,000
          </p>
          <p className="text-[11px] text-gray-400 mt-1">
            7 successful donations
          </p>
        </div>

        {/* Card 2: This month */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs">
          <p className="text-[11px] font-medium text-gray-400">This month</p>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
            ₦75,000
          </p>
          <p className="text-[11px] text-gray-400 mt-1">
            2 community contributions
          </p>
        </div>

        {/* Card 3: Projects supported */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs">
          <p className="text-[11px] font-medium text-gray-400">
            Projects supported
          </p>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-1">
            4
          </p>
          <p className="text-[11px] text-gray-400 mt-1">3 active · 1 completed</p>
        </div>
      </div>

      {/* ── Filter Bar & Table Card ── */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-6">
        {/* Filters and Search row */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search Input */}
          <div className="flex-1 flex items-center gap-2.5 bg-gray-50/60 border border-gray-200 rounded-lg px-3.5 py-2 shadow-2xs">
            <Search size={15} className="text-gray-400 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your contributions"
              className="w-full text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
            />
          </div>

          <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
            {/* Status dropdown */}
            <button
              onClick={() =>
                setSelectedStatus(
                  selectedStatus === "All statuses" ? "Confirmed" : "All statuses"
                )
              }
              className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs whitespace-nowrap"
            >
              <span>{selectedStatus}</span>
              <ChevronDown size={14} className="text-gray-400" />
            </button>

            {/* Year dropdown */}
            <button
              onClick={() =>
                setSelectedYear(selectedYear === "2026" ? "All years" : "2026")
              }
              className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs whitespace-nowrap"
            >
              <span>{selectedYear}</span>
              <ChevronDown size={14} className="text-gray-400" />
            </button>

            {/* View receipt action */}
            <button
              onClick={() => setReceiptItem(donations[0])}
              className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1 shadow-2xs whitespace-nowrap"
            >
              <span>View receipt</span>
              <ChevronRight size={13} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* ── Table Container ── */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-3 px-2 font-bold">Project / Reference</th>
                <th className="py-3 px-2 font-bold">Date</th>
                <th className="py-3 px-2 font-bold">Amount</th>
                <th className="py-3 px-2 font-bold">Settlement</th>
                <th className="py-3 px-2 font-bold text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              {filteredDonations.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/60 transition-colors group"
                >
                  {/* Project / Reference */}
                  <td className="py-3.5 px-2">
                    <span className="font-semibold text-gray-900 group-hover:text-[#133d2e]">
                      {item.project}
                    </span>
                    <span className="text-gray-400 ml-1.5 text-[11px]">
                      · {item.reference}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="py-3.5 px-2 text-gray-500 whitespace-nowrap">
                    {item.date}
                  </td>

                  {/* Amount */}
                  <td className="py-3.5 px-2 font-bold text-gray-900 whitespace-nowrap">
                    {item.amount}
                  </td>

                  {/* Settlement */}
                  <td className="py-3.5 px-2">
                    <span className="text-gray-600 font-medium">
                      {item.status}
                    </span>
                  </td>

                  {/* Receipt View Button */}
                  <td className="py-3.5 px-2 text-right">
                    <button
                      onClick={() => setReceiptItem(item)}
                      className="text-gray-500 hover:text-gray-900 font-medium inline-flex items-center gap-0.5"
                    >
                      <span>View</span>
                      <ChevronRight size={12} className="text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <p className="text-[11px] text-gray-400 pt-2">
          Showing all {filteredDonations.length} donations · Settlement
          confirmation does not verify how funds were spent.
        </p>
      </div>

      {/* ── Receipt Modal / Details Drawer ── */}
      {receiptItem && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          onClick={() => setReceiptItem(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 sm:p-7 max-w-md w-full space-y-4 shadow-xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <Receipt size={18} className="text-[#00b074]" />
                <h3 className="font-bold text-gray-900 text-sm">
                  Contribution Receipt
                </h3>
              </div>
              <button
                onClick={() => setReceiptItem(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="text-gray-500">Receipt Reference:</span>
                <span className="font-bold text-gray-900">{receiptItem.reference}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="text-gray-500">Project:</span>
                <span className="font-bold text-gray-900">{receiptItem.project}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="text-gray-500">Date:</span>
                <span className="text-gray-700">{receiptItem.date}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="text-gray-500">Status:</span>
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full text-[11px]">
                  {receiptItem.status}
                </span>
              </div>
              <div className="flex justify-between py-1.5 text-sm pt-2">
                <span className="font-bold text-gray-800">Amount Donated:</span>
                <span className="font-extrabold text-gray-900 text-base">
                  {receiptItem.amount}
                </span>
              </div>
            </div>

            <button
              onClick={() => setReceiptItem(null)}
              className="w-full bg-[#133d2e] hover:bg-[#0e2c21] text-white text-xs font-semibold py-2.5 rounded-xl transition-colors mt-2"
            >
              Close Receipt
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Standalone Full Page Route (/donationhistory) with Wealthlink Sidebar ──
export default function DonationHistoryPage() {
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
            {navItems.map(({ id, label, icon: Icon, active, href }) => (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors w-full text-left
                  ${
                    active
                      ? "bg-green-50 text-green-700 font-semibold"
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
          <DonationHistoryView />
        </div>
      </div>
    </div>
  );
}
