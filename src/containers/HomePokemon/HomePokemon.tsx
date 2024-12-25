"use client"
import { useRouter } from "next/navigation"
import { useRef } from "react"
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
    const random = Math.floor(Math.random() * 898) + 1
    router.push(`/pokemon/${random}`)
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4">
      <h1 className="text-3xl font-bold">Pokemon App</h1>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search Pokemon number"
          className="h-12 rounded p-4 text-black"
          ref={searchPokemonValue}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={searchPokemon}
        >
          Search
        </button>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded"
          onClick={randomPokemon}
        >
          Random
        </button>
      </div>
    </div>
  )
}
