"use client"
import Image from "next/image"
import Link from "next/link"
import { useAtom } from "jotai"
import { themeAtom } from "@/src/store/store"
import Pokeball from "../../public/pokeball.svg"

export const HeaderMenu = () => {
  const [theme, setTheme] = useAtom(themeAtom)

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <div className="flex items-center p-4 gap-4
      sticky top-0 z-40 theme-header theme-text
      border-b theme-border shadow-md subpixel-antialiased transition-colors">
      <Link href={"/"}>
        <Image src={Pokeball} width={50} height={50} alt="pokemon" />
      </Link>
      <Link href={"/"}>
        <h1 className="text-md font-bold tracking-widest">Home</h1>
      </Link>
      <Link href={"/generation"}>
        <h1 className="text-md font-bold tracking-widest">Generation</h1>
      </Link>
      <Link href={"/type"}>
        <h1 className="text-md font-bold tracking-widest">Type</h1>
      </Link>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-full
          theme-bg-elevated theme-text theme-border border
          hover:opacity-80 transition-all text-sm font-bold tracking-widest"
      >
        {theme === "dark" ? (
          <>
            <span>☀️</span>
            <span className="hidden sm:inline">Light</span>
          </>
        ) : (
          <>
            <span>🌙</span>
            <span className="hidden sm:inline">Dark</span>
          </>
        )}
      </button>
    </div>
  )
}
