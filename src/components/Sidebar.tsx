"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleNavigation = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: "/dashboard", label: "Dashboard", onClick: handleNavigation },
    { href: "/analytics", label: "Analytics", onClick: handleNavigation },
    { href: "/campaigns", label: "Campaigns", onClick: handleNavigation },
    { href: "/leads", label: "Leads", onClick: handleNavigation },
    { href: "/settings", label: "Settings", onClick: handleNavigation },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-sidebar-bg text-white rounded-lg"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-sidebar-bg text-white p-6 transform transition-transform duration-200 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:sticky md:top-0 md:h-screen md:block
        `}
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold">GrowthMetrics</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden p-1 hover:bg-sidebar-hover rounded"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={item.onClick}
                className={`
                  px-4 py-3 rounded-lg transition-colors
                  ${isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-sidebar-hover hover:text-white"}
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}
