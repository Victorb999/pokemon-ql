"use client"
import Image from "next/image"
import Link from "next/link"
import { useAtom } from "jotai"
import { themeAtom } from "@/src/store/store"
import { usePathname } from "next/navigation"

export const HeaderMenu = () => {
  const [theme, setTheme] = useAtom(themeAtom)
  const pathname = usePathname()

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Generations", href: "/generation" },
    { name: "Types", href: "/type" },
  ]

  return (
    <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-300 backdrop-blur-xl saturate-[1.8]
      ${theme === "dark"
        ? "bg-black/40 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        : "bg-white/40 border-black/5 shadow-[0_4px_30px_rgba(255,255,255,0.1)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-full shadow-lg group-hover:rotate-[360deg] transition-transform duration-700 select-none">
              <Image src="/pokeball.svg" width={32} height={32} alt="logo" />
            </div>
            <span className="text-2xl font-black theme-text tracking-tighter">Poke<span className="text-blue-500">Agenda</span></span>
          </Link>

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
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-90 transition-transform origin-center rounded-full opacity-50" />
                </Link>
              )
            })}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-12 h-12 flex items-center justify-center rounded-2xl theme-bg-elevated border theme-border hover:scale-105 active:scale-95 transition-all shadow-sm group"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="text-xl group-hover:rotate-12 transition-transform">
              {theme === "dark" ? "☀️" : "🌙"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}
