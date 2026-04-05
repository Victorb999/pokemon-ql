"use client"
import { useQuery } from "@tanstack/react-query"
import { requestPokemon } from "../../services/requestPokemon"
import Image from "next/image"
import Link from "next/link"
import { LabelTypes } from "../LabelType/LabelType"
import { useEffect, useState } from "react"
import { LoadingPokemon } from "../LoadingPokemon/LoadingPokemon"

export const FeaturedPokemon = () => {
    const [randomId, setRandomId] = useState<number>(1)

    useEffect(() => {
        // Randomize once on mount. Up to 1010 for full official artwork coverage
        setRandomId(Math.floor(Math.random() * 1010) + 1)
    }, [])

    const { data, isLoading, error } = useQuery({
        queryKey: ["featuredPokemon", randomId],
        queryFn: () => requestPokemon(randomId.toString()),
        enabled: !!randomId,
    })

    if (isLoading) return (
        <div className="h-[400px] flex items-center justify-center w-full max-w-5xl mx-auto my-8 theme-bg-elevated rounded-3xl animate-pulse">
            <LoadingPokemon load="pikachu" msg="Summoning a random Pokémon..." fullScreen={false} />
        </div>
    )
    if (error || !data) return null

    const pokemon = data
    const sprite = pokemon.pokemon_v2_pokemonsprites[0].sprites.other?.["official-artwork"]?.front_default ||
        pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default

    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-3xl theme-bg-elevated shadow-2xl overflow-hidden relative group max-w-5xl w-full mx-auto my-8 border border-white/5 transition-all duration-300 hover:border-blue-500/30">
            <div className="absolute -top-10 -right-10 w-64 h-64 opacity-5 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
                <Image src="/pokeball.svg" alt="Pokeball" width={300} height={300} />
            </div>

            <div className="flex-1 z-10 text-center md:text-left">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.2em] mb-2 block">Featured Pokémon</span>
                <h2 className="text-5xl md:text-7xl font-black capitalize mb-4 drop-shadow-sm theme-text tracking-tight">{pokemon.name}</h2>
                <div className="flex gap-2 mb-6 justify-center md:justify-start">
                    {pokemon.pokemon_v2_pokemontypes.map((type: any) => (
                        <LabelTypes key={type.pokemon_v2_type.id} name={type.pokemon_v2_type.name} id={type.pokemon_v2_type.id} />
                    ))}
                </div>
                <p className="text-lg theme-text-muted mb-8 max-w-md line-clamp-3 leading-relaxed">
                    {pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0]?.flavor_text.replace(/\f/g, ' ') || "A mysterious Pokémon waiting to be discovered by a great trainer."}
                </p>
                <Link
                    href={`/pokemon/${pokemon.id}`}
                    className="bg-stone-100 text-stone-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all inline-block shadow-lg active:scale-95"
                >
                    View Full Profile
                </Link>
            </div>

            <div className="flex-1 flex justify-center items-center z-10 mt-8 md:mt-0 relative">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[100px] opacity-50 group-hover:opacity-80 transition-opacity"></div>
                {sprite && (
                    <Image
                        src={sprite}
                        alt={pokemon.name}
                        width={400}
                        height={400}
                        className="drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-110 transition-transform duration-500 animate-float object-contain"
                        priority
                    />
                )}
            </div>
        </div>
    )
}
