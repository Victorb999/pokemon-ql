"use client"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import { FeaturedPokemon } from "../../components/FeaturedPokemon/FeaturedPokemon"
import { TypeGrid } from "../../components/TypeGrid/TypeGrid"
import { GenerationGrid } from "../../components/GenerationGrid/GenerationGrid"
import Image from "next/image"

export const HomePokemon = () => {
  const router = useRouter()
  const searchPokemonValue = useRef<HTMLInputElement>(null)

  const searchPokemon = () => {
    if (
      !searchPokemonValue.current ||
      searchPokemonValue.current.value.length <= 0 ||
      isNaN(Number(searchPokemonValue.current.value))
    )
      return
    router.push(`/pokemon/${searchPokemonValue.current.value}`)
  }

  const randomPokemon = () => {
    const random = Math.floor(Math.random() * 1010) + 1
    router.push(`/pokemon/${random}`)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {/* Hero Section with Search */}
      <section className="w-full flex flex-col items-center py-16 px-4 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-red-600 rounded-full shadow-lg group hover:rotate-12 transition-transform duration-500">
              <Image src="/pokeball.svg" alt="Pokeball" width={64} height={64} className="animate-pulse" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black theme-text tracking-tighter mb-4 drop-shadow-sm">
            Poke<span className="text-blue-500">Agenda</span>
          </h1>
          <p className="text-xl theme-text-muted max-w-lg mx-auto opacity-80 decoration-stone-100 italic">
            Your pocket companion for everything Pokémon. Explore all types, generations, and detailed statistics.
          </p>
        </div>

        {/* Enhanced Search Section */}
        <div className="flex flex-col sm:flex-row gap-0 sm:gap-4 w-full max-w-2xl bg-stone-100/10 p-2 sm:p-3 rounded-2xl sm:rounded-full border border-white/10 backdrop-blur-md shadow-2xl">
          <div className="relative flex-1 group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none group-focus-within:text-yellow-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            </div>
            <input
              type="text"
              placeholder="Enter Pokémon number (1-1010)"
              className="h-14 pl-14 pr-6 rounded-xl sm:rounded-full bg-white/20 theme-text w-full placeholder:theme-text/40 focus:outline-none focus:bg-white/30 transition-all font-bold text-lg"
              ref={searchPokemonValue}
              onKeyDown={(e) => e.key === 'Enter' && searchPokemon()}
            />
          </div>
          <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-0 p-1 sm:p-0">
            <button
              className="flex-1 sm:flex-none h-14 bg-blue-600 hover:bg-blue-500 text-white px-8 rounded-xl sm:rounded-full font-bold transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
              onClick={searchPokemon}
            >
              Search
            </button>
            <button
              className="flex-1 sm:flex-none h-14 bg-orange-600 hover:bg-orange-500 text-white px-8 rounded-xl sm:rounded-full font-bold transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
              onClick={randomPokemon}
            >
              Random
            </button>
          </div>
        </div>
      </section>

      {/* Randomized Showcase */}
      <FeaturedPokemon />

      {/* Grid Sections */}
      <TypeGrid />
      <GenerationGrid />

      {/* Footer Decoration */}
      <div className="w-full h-32 bg-gradient-to-t from-stone-900/50 to-transparent -mt-32 pointer-events-none -z-10" />
    </main>
  )
}
