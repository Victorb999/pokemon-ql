"use client"
import Image from "next/image"
import Link from "next/link"
import { useAtom } from "jotai"
import { themeAtom } from "@/src/store/store"
import { usePathname } from "next/navigation"

import { useState } from "react"

export const HeaderMenu = () => {
  const [theme, setTheme] = useAtom(themeAtom)
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Generations", href: "/generation" },
    { name: "Types", href: "/type" },
  ]

  return (
    <>
      <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-300 backdrop-blur-xl saturate-[1.8]
        ${theme === "dark"
          ? "bg-black/40 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          : "bg-white/40 border-black/5 shadow-[0_4px_30px_rgba(255,255,255,0.1)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-full shadow-lg group-hover:rotate-[360deg] transition-transform duration-700 select-none">
              <Image src="/pokeball.svg" width={32} height={32} alt="logo" />
            </div>
            <span className="text-2xl font-black theme-text tracking-tighter">Poke<span className="text-blue-500">Agenda</span></span>
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-xl text-lg font-bold transition-all relative group
                      ${isActive ? 'theme-text bg-white/5' : 'theme-text-muted hover:theme-text hover:bg-white/5'}`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-2 right-2 h-1 bg-blue-500 rounded-full" />
                    )}
                  </Link>
                )
              })}
            </div>

            <button
              onClick={toggleTheme}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl theme-bg-elevated border theme-border hover:scale-105 active:scale-95 transition-all shadow-sm group"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span className="text-xl group-hover:rotate-12 transition-transform">
                {theme === "dark" ? "☀️" : "🌙"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50 animate-in fade-in slide-in-from-bottom-10 duration-700">
        <div className={`p-2 rounded-3xl border backdrop-blur-2xl shadow-2xl flex items-center justify-around
          ${theme === "dark" ? "bg-black/60 border-white/10" : "bg-white/60 border-black/10"}`}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 p-3 px-6 rounded-2xl transition-all relative group overflow-hidden
                  ${isActive ? 'theme-text' : 'theme-text-muted opacity-60'}`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-blue-500/20 rounded-2xl scale-110 animate-pulse" />
                )}

                {item.href === '/' && (
                  <svg className={`w-6 h-6 z-10 ${isActive ? 'text-blue-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                )}
                {item.href === '/generation' && (
                  <svg className={`w-6 h-6 z-10 ${isActive ? 'text-blue-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                )}
                {item.href === '/type' && (
                  <svg className={`w-6 h-6 z-10 ${isActive ? 'text-blue-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
                )}

                <span className="text-[10px] font-black uppercase tracking-widest z-10">
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
