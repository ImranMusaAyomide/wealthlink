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
  ArrowRight,
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
  { label: "Transactions", icon: CreditCard, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
];

const presetAmounts = [
  { label: "₦5,000", value: 5000 },
  { label: "₦10,000", value: 10000 },
  { label: "₦25,000", value: 25000 },
  { label: "₦50,000", value: 50000 },
];

interface CheckoutViewProps {
  onBack?: () => void;
}

// ─── Exportable Checkout Detail View ───────────────────────────────────────
export function CheckoutView({ onBack }: CheckoutViewProps) {
  const [selectedAmount, setSelectedAmount] = useState<number>(25000);
  const [customInput, setCustomInput] = useState<string>("₦25,000 · Demo preset");
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "card">("bank");
  const [visibility, setVisibility] = useState<"anonymous" | "name">("anonymous");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSelectPreset = (amount: number, label: string) => {
    setSelectedAmount(amount);
    setCustomInput(`${label} · Demo preset`);
  };

  const handleConfirm = () => {
    setIsSuccess(true);
  };

  const formattedAmount = `₦${selectedAmount.toLocaleString()}`;

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12 font-[family-name:var(--font-montserrat)] text-gray-900">
      {/* ── Breadcrumb & Title Section ── */}
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
              href="/cleanwater"
              className="hover:underline flex items-center gap-1 text-gray-500 hover:text-[#00b074] normal-case font-medium mr-1"
            >
              <ArrowLeft size={13} />
              <span>Back</span>
            </Link>
          )}
          <span>DONATION / SECURE CHECKOUT</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mt-1.5">
          A little generosity. A lasting difference.
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Supporting Clean water for Akinyele · HopeSpring Initiative
        </p>
      </div>

      {isSuccess ? (
        /* ── Donation Confirmation Screen ── */
        <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-12 text-center max-w-xl mx-auto space-y-4 shadow-sm">
          <div className="w-16 h-16 bg-[#eaf4ed] text-[#00b074] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Thank you for your demonstration gift!
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Your simulated donation of <span className="font-bold text-gray-900">{formattedAmount}</span> has been logged to the demo ledger for{" "}
            <span className="font-semibold text-gray-900">Clean water for Akinyele</span>.
          </p>
          <div className="bg-gray-50 rounded-xl p-4 text-xs text-gray-500 text-left space-y-1">
            <p><span className="font-semibold text-gray-700">Project:</span> Clean water for Akinyele</p>
            <p><span className="font-semibold text-gray-700">Nonprofit:</span> HopeSpring Initiative</p>
            <p><span className="font-semibold text-gray-700">Amount:</span> {formattedAmount}</p>
            <p><span className="font-semibold text-gray-700">Visibility:</span> {visibility === "anonymous" ? "Anonymous" : "Public"}</p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            {onBack ? (
              <button
                onClick={onBack}
                className="bg-[#133d2e] hover:bg-[#0e2c21] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors"
              >
                Back to project
              </button>
            ) : (
              <Link
                href="/cleanwater"
                className="bg-[#133d2e] hover:bg-[#0e2c21] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors"
              >
                Back to project
              </Link>
            )}
            <button
              onClick={() => setIsSuccess(false)}
              className="bg-white border border-gray-200 text-gray-700 text-xs sm:text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-gray-50"
            >
              Make another donation
            </button>
          </div>
        </div>
      ) : (
        /* ── 2-Column Checkout Layout ── */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* ──── Left Form Column (8 cols) ──── */}
          <div className="lg:col-span-8 bg-white border border-gray-200 rounded-2xl p-5 sm:p-7 space-y-6 shadow-xs">
            {/* Section 1: Contribution amount */}
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Choose your contribution
              </h2>

              {/* Preset buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-3">
                {presetAmounts.map((p) => {
                  const active = selectedAmount === p.value;
                  return (
                    <button
                      key={p.value}
                      onClick={() => handleSelectPreset(p.value, p.label)}
                      className={`text-xs sm:text-sm font-bold py-2.5 px-3 rounded-lg border transition-all text-center
                        ${
                          active
                            ? "bg-[#e5f5eb] text-[#13392f] border-[#00b074] ring-1 ring-[#00b074]"
                            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                        }
                      `}
                    >
                      {p.label}
                    </button>
                  );
                })}
              </div>

              {/* Selected amount readout */}
              <div className="mt-5">
                <p className="text-[11px] font-medium text-gray-400">
                  Your selected amount
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-0.5">
                  {formattedAmount}
                </p>
              </div>

              {/* Custom amount input */}
              <div className="mt-3">
                <label className="text-xs text-gray-600 block mb-1">
                  Custom amount · NGN
                </label>
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="₦25,000 · Demo preset"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#00b074] transition-colors"
                />
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Section 2: Payment method */}
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Payment method
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {/* Bank transfer button */}
                <button
                  onClick={() => setPaymentMethod("bank")}
                  className={`py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all
                    ${
                      paymentMethod === "bank"
                        ? "bg-[#133d2e] text-white border-[#133d2e]"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                    }
                  `}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full border flex items-center justify-center ${
                      paymentMethod === "bank"
                        ? "border-white bg-white"
                        : "border-gray-400"
                    }`}
                  />
                  <span>Bank transfer</span>
                </button>

                {/* Debit card button */}
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all
                    ${
                      paymentMethod === "card"
                        ? "bg-[#133d2e] text-white border-[#133d2e]"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                    }
                  `}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full border flex items-center justify-center ${
                      paymentMethod === "card"
                        ? "border-white bg-white"
                        : "border-gray-400"
                    }`}
                  />
                  <span>Debit card</span>
                </button>
              </div>

              <p className="text-[11px] text-gray-400 mt-2">
                Demo payment · No card or bank details required.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 3: Donor visibility */}
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Donor visibility
              </h2>

              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => setVisibility("anonymous")}
                  className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-colors
                    ${
                      visibility === "anonymous"
                        ? "bg-white text-gray-900 border-gray-300 shadow-2xs font-bold"
                        : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                    }
                  `}
                >
                  Give anonymously
                </button>

                <button
                  onClick={() => setVisibility("name")}
                  className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-colors
                    ${
                      visibility === "name"
                        ? "bg-white text-gray-900 border-gray-300 shadow-2xs font-bold"
                        : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                    }
                  `}
                >
                  Show my name
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-3 font-medium">
                Public donor name
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5">
                Your contact details remain private either way.
              </p>
            </div>
          </div>

          {/* ──── Right Summary Column (4 cols) ──── */}
          <div className="lg:col-span-4 bg-white border border-gray-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">
              Your contribution
            </h3>

            {/* Project info */}
            <div>
              <p className="font-bold text-sm text-gray-900">
                Clean water for Akinyele
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Oyo State · Water & sanitation
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Financial breakdown */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500">Donation amount</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                {formattedAmount}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-600 pt-1">
                <span>Platform fee</span>
                <span className="font-bold text-gray-900">₦0</span>
              </div>
              <p className="text-[11px] text-gray-400">
                Total equals your selected amount.
              </p>
            </div>

            {/* CTA action buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleConfirm}
                className="w-full bg-[#133d2e] hover:bg-[#0e2c21] text-white text-sm font-semibold py-3 px-4 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Confirm demo donation</span>
                <ArrowRight size={15} />
              </button>

              <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                Secure demonstration checkout. No actual payment is processed.
              </p>

              {onBack ? (
                <button
                  onClick={onBack}
                  className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-2xs text-center mt-2 block"
                >
                  Back to project
                </button>
              ) : (
                <Link
                  href="/cleanwater"
                  className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-2xs text-center mt-2 block"
                >
                  Back to project
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Standalone Full Page Route (/checkout) with Wealthlink Sidebar ────────
export default function CheckoutPage() {
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
          <CheckoutView />
        </div>
      </div>
    </div>
  );
}
