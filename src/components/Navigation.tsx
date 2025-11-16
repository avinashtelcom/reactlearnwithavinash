"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationItems = [
  { label: "Home", href: "/" },
  { 
    label: "HTML Semantics", 
    href: "/html-semantics",
    submenu: [
      { label: "Document Structure", href: "/document-structure" },
      { label: "Content Sectioning", href: "/content-sectioning" },
      { label: "Text Content", href: "/text-content" },
      { label: "Forms", href: "/forms" },
      { label: "Interactive", href: "/interactive" },
    ]
  },
  { 
    label: "CSS Specifications", 
    href: "/css-specifications",
    submenu: [
      { label: "CSS Fundamentals", href: "/css-fundamentals" },
      { label: "Selectors & Media Queries", href: "/selectors-media" },
      { label: "Layout & Positioning", href: "/layout-positioning" },
      { label: "Visual & Animations", href: "/visual-animations" },
      { label: "Modern CSS Features", href: "/modern-css" },
    ]
  },
  { 
    label: "JavaScript Specifications", 
    href: "/javascript-specifications",
    submenu: [
      { label: "Functions & Scope", href: "/js-functions" },
      { label: "Objects & Arrays", href: "/js-objects-arrays" },
      { label: "Modern JS Features", href: "/js-modern-features" },
      { label: "Modules & Imports", href: "/js-modules" },
    ]
  },
  { 
    label: "Practice", 
    href: "/practice",
    submenu: [
      { label: "HTML Quiz", href: "/practice" },
      { label: "CSS Quiz", href: "/css-practice" },
      { label: "JavaScript Quiz", href: "/js-practice" },
    ]
  },
];

export const Navigation = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const isActiveItem = (item: { href: string; submenu?: Array<{ href: string }> }) => {
    if (item.submenu) {
      return item.submenu.some((subItem: { href: string }) => pathname === subItem.href);
    }
    return pathname === item.href;
  };

  const isActiveSubItem = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 dark:bg-slate-900/95 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Web Standards Hub
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.href} className="relative">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                          isActiveItem(item)
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`ml-1 h-4 w-4 transition-transform ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === item.label && (
                        <div className="absolute top-full mt-1 left-0 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg py-1 min-w-48 z-10">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                isActiveSubItem(subItem.href)
                                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-700"
                              }`}
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActiveItem(item)
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
